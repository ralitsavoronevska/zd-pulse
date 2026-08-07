import { computed } from 'vue';
import { useTableStore } from '@/stores/tableStore';

/**
 * API-mode stats aggregation — maps server response from /api/ticket-stats/
 * into the same shape as useMockedStatsAggregation.
 *
 * Server returns:
 * { total_tickets, csat: {good, bad, unoffered}, sentiment: {positive, very_positive, neutral, negative, very_negative},
 *   brands_count, vip: {platinum, diamond, gold, silver, bronze}, compliance: {ok, issue, missing}, unrated_tickets }
 */
export function useStatsAggregation() {
    const tableStore = useTableStore();

    const aggregation = computed(() => {
        const s = tableStore.stats;
        if (!s) {
            return {
                totalTickets: 0,
                csatGood: 0,
                csatBad: 0,
                ratedTickets: 0,
                pctCsat: '0',
                negSentiment: 0,
                veryNegSentiment: 0,
                pctSentiment: '0',
                unratedTickets: 0,
                pctUnratedTickets: '0',
                brandCount: 0,
                vipPlatinum: 0,
                vipGold: 0,
                vipTotal: 0,
                complianceOk: 0,
                complianceIssue: 0,
                complianceMissing: 0,
                pctComplianceOk: '0'
            };
        }

        const totalTickets = s.total_tickets || 0;
        const csatGood = s.csat?.good ?? 0;
        const csatBad = s.csat?.bad ?? 0;
        const unratedTickets = s.unrated_tickets ?? s.csat?.unoffered ?? 0;
        const ratedTickets = csatGood + csatBad;

        const negSentiment = s.sentiment?.negative ?? 0;
        const veryNegSentiment = s.sentiment?.very_negative ?? 0;

        const vipPlatinum = (s.vip?.platinum ?? 0) + (s.vip?.diamond ?? 0);
        const vipGold = s.vip?.gold ?? 0;
        const vipOther = (s.vip?.silver ?? 0) + (s.vip?.bronze ?? 0);
        const vipTotal = vipPlatinum + vipGold + vipOther;

        const complianceOk = s.compliance?.ok ?? 0;
        const complianceIssue = s.compliance?.issue ?? 0;
        const complianceMissing = s.compliance?.missing ?? 0;

        const pctCsat = ratedTickets > 0 ? ((csatGood / ratedTickets) * 100).toFixed(1) : '0';
        const pctSentiment = totalTickets > 0 ? (((negSentiment + veryNegSentiment) / totalTickets) * 100).toFixed(1) : '0';
        const pctUnratedTickets = totalTickets > 0 ? ((unratedTickets / totalTickets) * 100).toFixed(1) : '0';
        const pctComplianceOk = totalTickets > 0 ? ((complianceOk / totalTickets) * 100).toFixed(1) : '0';

        return {
            totalTickets,
            csatGood,
            csatBad,
            ratedTickets,
            pctCsat,
            negSentiment,
            veryNegSentiment,
            pctSentiment,
            unratedTickets,
            pctUnratedTickets,
            brandCount: s.brands_count ?? 0,
            vipPlatinum,
            vipGold,
            vipTotal,
            complianceOk,
            complianceIssue,
            complianceMissing,
            pctComplianceOk
        };
    });

    return { aggregation };
}

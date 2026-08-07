// VIP tier values (excludes non-VIP segments 'none' and 'normal')
export const VIP_TIERS = Object.freeze(['bronze', 'silver', 'gold', 'platinum', 'diamond']);

// All VIP segment rows in display order (includes non-VIP segments)
export const VIP_SEGMENT_ORDER = Object.freeze(['none', 'normal', ...VIP_TIERS]);

// CSAT score values for filter dropdown
export const CSAT_OPTIONS = Object.freeze(['bad', 'good', 'unoffered', 'offered']);

// Sentiments treated as negative for chart and stats aggregation
export const NEGATIVE_SENTIMENTS = Object.freeze(['negative', 'very negative']);

// Sentiment values for filter dropdown
export const SENTIMENT_OPTIONS = Object.freeze(['neutral', 'positive', 'very positive', ...NEGATIVE_SENTIMENTS]);

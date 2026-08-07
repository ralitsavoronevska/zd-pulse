<script setup>
import { formatDate } from '@/utils/dateUtils';

const dialog = defineModel({ required: true });
</script>

<template>
    <Dialog
        v-model:visible="dialog.visible"
        :header="`${dialog.type} Transcript - ${formatDate(dialog.date)}`"
        :style="{ width: '75vw' }"
        maximizable
        modal
        :contentStyle="{ maxHeight: '400px', overflowY: 'auto' }"
        :aria-label="`${dialog.type} transcript viewer`"
    >
        <div class="space-y-3">
            <div class="text-xs text-gray-500 dark:text-gray-400 px-4 pt-2 font-semibold tracking-wide">Ticket Date: {{ formatDate(dialog.date) }}</div>
            <div v-if="dialog.isLoadingTranscript" class="flex items-center justify-center p-8">
                <i class="pi pi-spin pi-spinner text-2xl" />
                <span class="ml-2">Loading transcript...</span>
            </div>
            <div v-else class="whitespace-pre-wrap break-words text-sm p-4 bg-surface-50 dark:bg-surface-950 rounded font-mono">
                {{ dialog.transcript }}
            </div>
        </div>
        <template #footer>
            <Button label="Close" icon="pi pi-check" @click="dialog.visible = false" :aria-label="`Close ${dialog.type.toLowerCase()} transcript dialog`" />
        </template>
    </Dialog>
</template>

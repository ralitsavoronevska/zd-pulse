<script setup>
import logoDark from '@/assets/logo-dark.png';
import logoLight from '@/assets/logo-light.png';
import { useLayout } from '@/layout/composables/layout';
import { computed } from 'vue';

const { isDarkTheme } = useLayout();
const mode = computed(() => (isDarkTheme.value ? logoDark : logoLight));
</script>

<template>
    <img :src="mode" class="logo" width="200" height="100" alt="Logo" fetchpriority="high" />
</template>

<script lang="ts" setup>
const colorMode = useColorMode()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    },
})
</script>

<template>
    <div class="flex justify-between border-b border-gray-300 md:p-5">
        <div>#logo</div>
        <UIcon name="i-material-symbols-light:keyboard-double-arrow-left" dynamic class="w-6 h-6" />
        <UButton icon="i-heroicons-chevron-down-20-solid" variant="ghost" aria-label="Sidebar toggle" />
    </div>
    <ClientOnly>
        <UButton
            :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
            color="gray"
            variant="ghost"
            aria-label="Theme"
            @click="isDark = !isDark"
        />

        <template #fallback>
            <div class="w-8 h-8" />
        </template>
    </ClientOnly>
</template>

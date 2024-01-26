<script lang="ts" setup>
const isCollapsed = useSidebar()

const sidebarWidth = computed<string>(() => (isCollapsed.value ? 'w-40' : 'w-72'))
</script>

<template>
    <div class="min-h-screen bg-white dark:bg-slate-800 flex">
        <aside
            class="min-h-screen border-r border-gray-300 dark:border-gray-600 transition duration-150"
            :class="sidebarWidth"
        >
            <AppSidebar />
        </aside>

        <main class="flex-1">
            <AppHeader />
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup></script>

<template>
    <div class="min-h-screen bg-slate-100 dark:bg-slate-800 flex">
        <aside class="w-72 min-h-screen border-r border-gray-300 dark:border-gray-600">
            <AppSidebar />
        </aside>

        <main class="flex-1">
            <AppHeader />
            <slot />
        </main>
    </div>
</template>

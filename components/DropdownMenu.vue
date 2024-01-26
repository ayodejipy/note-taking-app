<script lang="ts" setup>
import type { Menu } from '~/types/menu'

interface IProps {
    isOpen: boolean
    menus: Menu[]
}

const props = defineProps<IProps>()
</script>

<template>
    <div class="wrapper w-full">
        <UButton color="black" block variant="ghost">
            <slot />
        </UButton>

        <div v-show="props.isOpen" class="pl-5 transition-all duration-150">
            <ul>
                <li v-for="menu in props.menus" :key="menu.url" class="relative afterline">
                    <ULink
                        :to="menu.url"
                        active-class="text-primary"
                        inactive-class="text-gray-400 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                        class="w-full text-sm flex items-center justify-between p-1 trackline ml-4"
                    >
                        {{ menu.name }}
                    </ULink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.trackline {
    @apply before:w-3 before:h-2.5 before:absolute before:top-1.5 before:left-0 before:border-gray-800 before:border-l before:border-b;
}
.trackline::before {
    border-radius: 0 0 0 50%;
}
.afterline {
    @apply before:absolute before:h-full before:w-px before:bg-gray-300 after:absolute after:h-[calc(100%-12px)] after:w-px after:bg-gray-300 before:last-of-type:hidden after:last-of-type:hidden;
}
</style>

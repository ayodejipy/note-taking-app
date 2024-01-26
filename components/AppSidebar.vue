<script lang="ts" setup>
const colorMode = useColorMode()
const isCollapsed = useSidebar()

const menus = [
    { name: 'Marketing', url: '/account' },
    { name: 'Photography', url: '/billing' },
    { name: 'Web Design', url: '/preferences' },
]

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
    <div class="flex justify-between border-b border-gray-300 md:p-4">
        <div>#logo</div>
        <ClientOnly>
            <UButton
                color="amber"
                variant="ghost"
                label="Button"
                aria-label="Sidebar toggle"
                @click="isCollapsed = !isCollapsed"
            >
                <UIcon name="i-material-symbols-light:keyboard-double-arrow-left" dynamic class="w-5 h-5" />
            </UButton>
        </ClientOnly>
    </div>
    <div class="w-full flex flex-col gap-8 px-4 py-5">
        <UInput
            icon="i-heroicons-magnifying-glass-20-solid"
            size="md"
            color="gray"
            :trailing="false"
            placeholder="Search..."
        >
            <template #trailing>
                <span class="text-gray-500 dark:text-gray-400 text-xs">CMD + S</span>
            </template>
        </UInput>

        <div class="space-y-6">
            <div class="space-y-4">
                <ULink
                    to="/notes"
                    active-class="text-primary"
                    inactive-class="semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200"
                    class="w-full flex items-center justify-between bg-blue-50 rounded-lg ring-1 ring-blue-100 p-2"
                >
                    <div class="flex items-center gap-2">
                        <UIcon name="i-solar-book-bold-duotone" dynamic class="w-5 h-5" />
                        Notes
                    </div>
                    <div class="">16</div>
                </ULink>

                <ULink
                    to="/shared"
                    active-class="text-primary"
                    inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    class="w-full flex items-center justify-between p-2"
                >
                    <div class="flex items-center gap-2">
                        <UIcon name="i-gridicons-multiple-users" dynamic class="w-5 h-5" />
                        Shared
                    </div>
                    <div
                        class="text-[0.55rem] uppercase text-yellow-900 bg-yellow-600/20 rounded-full ring-1 ring-yellow-900 px-2 py-1"
                    >
                        Upgrade pro
                    </div>
                </ULink>
            </div>

            <div>
                <DropdownMenu :is-open="true" :menus="menus">
                    <div class="w-full flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <UIcon name="i-gridicons-multiple-users" dynamic class="w-5 h-5" />
                            Resources
                        </div>
                        <div class="text-yellow-700">
                            <UIcon
                                :name="isOpen ? 'ic:outline-keyboard-arrow-up' : 'ic:outline-keyboard-arrow-down'"
                                dynamic
                                class="w-5 h-5"
                            />
                        </div>
                    </div>
                </DropdownMenu>
            </div>
        </div>

        <ClientOnly>
            <div class="w-full flex gap-2 mt-4 p-1 rounded-full bg-gray-100 dark:bg-slate-500">
                <UButton
                    icon="i-heroicons-sun-20-solid"
                    color="white"
                    variant="solid"
                    aria-label="Theme"
                    label="Light"
                    :ui="{ rounded: 'rounded-full' }"
                    @click="isDark = !isDark"
                />

                <UButton
                    icon="i-heroicons-moon"
                    color="white"
                    :variant="isDark ? 'solid' : 'ghost'"
                    aria-label="Theme"
                    label="Dark"
                    :ui="{ rounded: 'rounded-full' }"
                    @click="isDark = !isDark"
                />
            </div>

            <template #fallback>
                <div class="w-8 h-8" />
            </template>
        </ClientOnly>
    </div>
</template>

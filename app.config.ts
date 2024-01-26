export default defineAppConfig({
    ui: {
        input: {
            color: {
                gray: {
                    outline:
                        'shadow-sm py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
                },
            },
            icon: {
                color: 'text-{color}-700 dark:text-{color}-400',
            },
        },
    },
})

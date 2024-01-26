<script lang="ts" setup>
const date: Date = new Date()

const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

const currentDate = ref<string>(date.toLocaleString('en-US', options))
</script>

<template>
    <header class="w-full flex justify-between border-b border-gray-300 md:p-5">
        <div>{{ currentDate }}</div>
        <div>avatar and profile</div>
    </header>
</template>

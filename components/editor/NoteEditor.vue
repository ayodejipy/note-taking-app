<script lang="ts" setup>
import { defineCustomElement } from 'vue'
import type { Note } from '~/types/note'

const props = defineProps<{
    note: Note
}>()

const current = ref<Note>(props.note)
</script>

<template>
    <div class="bg-white w-full">
        <textarea
            v-model="current.body"
            cols="10"
            rows="20"
            class="w-full min-h-full border-stone-800 p-3.5"
            placeholder="Start your note here..."
        />
    </div>
</template>

<script lang="ts" setup>
import type { Note } from '~/types/note'

defineProps<{
    notes: Note[]
}>()

const emit = defineEmits<{
    (event: 'onCreate'): void
}>()

const onCreate = () => emit('onCreate')

// clean up emit to avoid memory usage when it's not longer needed
onUnmounted(() => window.removeEventListener('onCreate', onCreate))
</script>

<template>
    <aside class="w-80 h-full p-4">
        <div class="border-b-stone-200">
            <button class="bg-emerald-500 p-2" @click="onCreate">Add note</button>
        </div>
        <h4 class="font-semibold text-md text-emerald-700 mb-3">Latest Notes</h4>
        <ul>
            <li>
                <div role="button" aria-label="describes note" v-for="note in notes" :key="note.id">
                    <h5 class="text-lg font-semibold">{{ note.title || 'New Note' }}</h5>
                    <p class="mb-0 text-neutral-400 text-sm">
                        {{ note.body || 'This is your note body or sample...' }}
                    </p>
                </div>
            </li>
        </ul>
    </aside>
</template>

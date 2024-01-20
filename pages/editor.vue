<script lang="ts" setup>
import type { Note } from '~/types/note'

const notes = ref<Note[]>([])
const currentNote = ref<Note>()

const createNote = () => {
    const newNote: Note = {
        id: `identifier-${Math.random()}`,
        title: '',
        body: '',
        created_at: new Date(),
        updated_at: null,
    }

    notes.value.push(newNote)
    currentNote.value = newNote
}
</script>

<template>
    <section class="w-full min-h-screen border-gray-100 flex">
        <EditorListNotes @on-create="createNote" :notes="notes" />
        <EditorNoteEditor :note="currentNote!" />
    </section>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import NoteDetailComponent from '../../components/NoteDetailComponent.vue'
  import type { FullNote } from '../../types/types';

  export default defineComponent({

    setup () {
      const note = ref<FullNote>(
      {
          title : 'secret 1',
          text: 'secret 1 secret 1 secret 1 secret 1 secret 1',
          createdAt: 'July 17, 2024, 9:09 p.m.',
        }
      )

      return {
        note,
        NoteDetailComponent,
      }
    },
  })
</script>

<template>
  <div>
    <h1>Note Details</h1>
  </div>
  <div>
    <NoteDetailComponent :full-note="note"/>
  </div>
  <div>
    <RouterLink to="/secret/notes/delete/:id">Delete</RouterLink>
    <RouterLink to="/secret/notes/edit/:id">Edit</RouterLink>
    <RouterLink to="/secret/notes">Back</RouterLink>
  </div>
</template>
<template>
  <div>
    <p>{{ note.title }}</p>
  </div>
  <div>
    <p>{{ note.text }}</p>
  </div>
  <div>
    <RouterLink to="/secret/notes/:id">View</RouterLink>
  </div>
</template>

<script lang="ts">
  import { ref, type PropType } from 'vue'
  import type { PartialNote } from '../../types/types';
  import { RouterLink } from 'vue-router'

  export default {

    name: 'NoteListComponent',
    components: {
      RouterLink,
    },
    props: {
      partialNote: {
        required: true,
        type: Object as PropType<PartialNote>,
      },
    },
    setup (props) {
      const note = ref<PartialNote>(
        props.partialNote as PartialNote
      )

      return {
        note,
      }
    },
  }
</script>



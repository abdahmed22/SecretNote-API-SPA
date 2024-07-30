<script lang="ts">
  import { defineComponent, ref, type PropType } from 'vue'
  import type { PartialNote } from '../types/types';

  export default defineComponent({

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
  })
</script>

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



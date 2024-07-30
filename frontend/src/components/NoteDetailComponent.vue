<script lang="ts">
  import { defineComponent, ref, type PropType } from 'vue'
  import type { FullNote } from '../types/types';

  export default defineComponent({

    props: {
      fullNote: {
        required: true,
        type: Object as PropType<FullNote>,
      },
    },
    setup (props) {
      const note = ref<FullNote>(
        props.fullNote as FullNote
      )

      return {
        note,
      }
    },
  })

</script>

<template>
  <div>
    <h3>{{ note.title }}</h3>
    <p>{{ note.text }}</p>
    <p>Created at: {{ note.createdAt }}</p>
  </div>
</template>
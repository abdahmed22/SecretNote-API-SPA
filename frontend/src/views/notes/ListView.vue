<template>
  <main>
    <div>
      <h1>These are all the secret notes</h1>
    </div>
    <div>
      <ul  
      v-for="(note,index) in notes"
      :key="index"
      >
        <NoteListComponent :partial-note="note"/>
      </ul>
    </div>
    <div>
      <RouterLink to="/">Back</RouterLink>
    </div>
  </main>
</template>

<script lang="ts">
  
  import { ref } from 'vue'
  import NoteListComponent from '../../components/notes/NoteListComponent.vue'
  import type { PartialNote } from '../../types/types';
  import { RouterLink } from 'vue-router'


  export default {

    name: 'ListView',
    components : {
      NoteListComponent,
      RouterLink,      
    },

    setup () {
      const notes = ref<PartialNote[]>(
      [  
       {
          title : 'secret 1',
          text: 'secret 1 secret 1 secret 1 secret 1 secret 1',
          id: 1,
        },
        {
          title : 'secret 2',
          text: 'secret 1 secret 1 secret 1 secret 1 secret 1',
          id: 2,
        },
        {
          title : 'secret 3',
          text: 'secret 1 secret 1 secret 1 secret 1 secret 1',
          id: 3,
        },
        {
          title : 'secret 4',
          text: 'secret 1 secret 1 secret 1 secret 1 secret 1',
          id: 4,
        },
        {
          title : 'secret 5',
          text: 'secret 1 secret 1 secret 1 secret 1 secret 1',
          id: 5,
        },
        {
          title : 'secret 6',
          text: 'secret 1 secret 1 secret 1 secret 1 secret 1',
          id: 6,
        },
      ]
      )

      return {
        notes,
      }
    },
  }
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>

<template>
  <section class="shows">

    <genres @selectedGenres="selectedGenres = $event"/>

    <h2 class="shows__title title">All TV Shows</h2>
    
    <!-- <ul class="shows__list list"> -->
      <listTransition :tag="'ul'" :class="['shows__list', 'list']">
        <item
          v-for="item in filtered(this.$route.name, this.selectedGenres)"
          :key="item.id"
          :item="item"
        />
      </listTransition>
    <!-- </ul> -->

    <messageOfAbsence v-show="!filtered(this.$route.name, this.selectedGenres).length">
      It was nothing found ¯\_(ツ)_/¯
    </messageOfAbsence>
    
  </section>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
import genres from '@/components/app-content/genres'
import item from '@/components/app-content/item'
import messageOfAbsence from '@/components/UI/message-of-absence/message-of-absence'
import listTransition from '@/components/animations/list-transition'

export default {
  name: 'Channels',
  components: {
    item,
    genres,
    messageOfAbsence,
    listTransition
  },
  data: () => ({
    selectedGenres: [],
  }),
  computed: {
    ...mapGetters(['filtered']),
  },
  methods: {
    ...mapActions(['getShows']),
  },
  async created() {
    try {
      await this.getShows()
    } catch(e) { console.log(e) } 
  },
  beforeDestroy() {
    // Clear filtered state in order to display default content in onther pages
    this.$store.state.filtered = []
  }
}
</script>

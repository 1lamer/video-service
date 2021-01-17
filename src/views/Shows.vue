<template>
  <section class="shows">

    <genres @selectedGenres="selectedGenres = $event"/>

    <h2 class="shows__title title">All TV Shows</h2>
    
    <ul class="shows__list list">
      <item v-for="(item, index) in filtered(this.$route.name, this.selectedGenres)" :key="index" :item="item" />
    </ul>

    <!-- <ul class="shows__list">

      <li class="shows__item shows__item--cbs">

        <h3 class="shows__name">CBS</h3>

        <ul class="shows__programs">

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              48 Hours
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              FBI
            </a>
          </li>
        </ul>
      </li>

      <li class="shows__item shows__item--nickelodeon">

        <h3 class="shows__name">Nickelodeon</h3>

        <ul class="shows__programs">
          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>
        </ul>
        
      </li>
      

      <li class="shows__item shows__item--abc">

        <h3 class="shows__name">ABC</h3>

        <ul class="shows__programs">
          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>
        </ul>
        
      </li>
      

      <li class="shows__item shows__item--fox">

        <h3 class="shows__name">Fox</h3>

        <ul class="shows__programs">
          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>

          <li class="shows__show">
            <a href="" class="shows__show-link">
              <time class="time" datetime="PT2H30M">2:30 PM</time>
              Young Sheldon
            </a>
          </li>
        </ul>
        
      </li>
    </ul> -->


  </section>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
import genres from '@/components/app-content/genres'
import item from '@/components/app-content/item'

export default {
  name: 'Channels',
  components: {
    item,
    genres,
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
  created() {
    this.getShows()
  },
  beforeDestroy() {
    // Clear filtered state in order to display default content in onther pages
    this.$store.state.filtered = []
  }
}
</script>
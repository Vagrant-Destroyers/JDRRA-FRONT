<template>
  <div class="home">
    <div class="content">
        <b-container>
            <b-container id="left-text">
              <div class="text">
                <h3><b>Find your next remote job</b></h3>
                <h4>For developers by developers</h4>
              </div>
              <div class="search">
                <searchBox></searchBox>
              </div>
            </b-container>
        </b-container>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox.vue'

export default {
  name: 'Home',
  components: {
    searchBox
  }
}
</script>

<style>
.container#left-text {
  text-align: left;
  margin-top: 6rem;
  color: black;
}

#left-text h3 {
  font-weight: 900;
  font-size: 2.5rem;
}

.container#left-text div.text {
  margin-left: 2rem;
}

</style>

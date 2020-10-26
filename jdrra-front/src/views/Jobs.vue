<template>
  <b-container>
    <div class="search">
      <searchBox></searchBox>
    </div>
    <div class="cards">
      <jobCard v-for="job in pageOfItems" :job="job" :key="job.id" id="cards"></jobCard>
    </div>
    <JwPagination :items="$store.state.finalJobs" @changePage="onChangePage"></JwPagination>
  </b-container>
</template>

<script>
/* Script :D */
import JwPagination from 'jw-vue-pagination'
import jobCard from '@/components/jobCard.vue'
import searchBox from '@/components/searchBox.vue'
import axios from 'axios'

export default {
  name: 'Jobs',
  data: () => {
    return {
      currentPage: 1,
      perPage: 8,
      totalRows: 5,
      pageOfItems: []
    }
  },
  components: {
    jobCard,
    searchBox,
    JwPagination
  },
  mounted () {
    axios.get('https://api.vagrantdestroyers.fun/jobpost')
      .then(response => {
        this.$store.commit('changeData', response.data)
        this.posts = this.$store.state.finalJobs
        this.totalRows = this.$store.state.finalJobs.length
      }).catch(err => console.log(err))
  },
  computed: {
    datos () {
      return this.$store.state.finalJobs.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage)
    }
  },
  methods: {
    onChangePage (pageOfItems) {
      this.pageOfItems = pageOfItems
    }
  }
}
</script>

<style>
.v-card {
  cursor: pointer;
}

#card {
    margin: 10px;
    border-radius: 30px;
}
.page-item.active .page-link {
  background-color: #42b983 !important;
  border-color: #42b983 !important;
  color: white !important;
}

.page-link {
  color: black !important;
}

/* .page-link:hover {
  color: #42b983 !important;
} */

.pagination {
  justify-content: center;
  margin-bottom: 5rem !important;
  margin-top: 2rem !important;
  transform: scale(1.3);
}

.pagination .page-item.first {
  display: none !important;
}

.pagination .page-item.last {
  display: none !important;
}

</style>

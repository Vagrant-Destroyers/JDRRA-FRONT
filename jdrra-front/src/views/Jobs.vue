<template>
  <b-container>
    <div class="search">
      <searchBox></searchBox>
    </div>
    <div class="cards">
      <jobCard v-for="job in $store.state.finalJobs" :job="job" :key="job.id" id="cards"></jobCard>
    </div>
    <b-pagination
      v-model="currentPage"
      pills
      :total-rows="5"
      :per-page="perPage"
      size="lg"
      aria-controls="cards"
    ></b-pagination>
  </b-container>
</template>

<script>
/* Script :D */
import jobCard from '@/components/jobCard.vue'
import searchBox from '@/components/searchBox.vue'
import axios from 'axios'

export default {
  name: 'Jobs',
  data: () => {
    return {
      currentPage: 1,
      perPage: 8,
      totalRows: 5
    }
  },
  components: {
    jobCard,
    searchBox
  },
  mounted () {
    axios.get('http://api.vagrantdestroyers.fun/jobpost')
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
  margin-bottom: 5rem;
}

@media (max-width: 575px) {
  .pagination {
    transform: scale(0.8);
  }
}
</style>

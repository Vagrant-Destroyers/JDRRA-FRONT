<template>
  <b-container>
    <div class="search">
      <searchBox></searchBox>
    </div>
    <div class="cards">
      <jobCard v-for="job in datos" :job="job" :key="job.id" id="cards"></jobCard>
    </div>
    <b-pagination
      v-model="currentPage"
      pills
      :total-rows="totalRows"
      :per-page="perPage"
      size="lg"
      aria-controls="cards"
    ></b-pagination>
  </b-container>
</template>

<script>
import jobs from '@/data/jobs.json'

import jobCard from '@/components/jobCard.vue'
import searchBox from '@/components/searchBox.vue'

export default {
  name: 'Jobs',
  data: () => {
    return {
      jobs: jobs,
      currentPage: 1,
      perPage: 5,
      posts: jobs,
      totalRows: jobs.length
    }
  },
  components: {
    jobCard,
    searchBox
  },
  computed: {
    datos () {
      return this.jobs.slice(
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
  background-color: #42b983;
  border-color: #42b983;
}

.page-link:hover {
  color: #42b983;
}

.pagination {
  justify-content: center;
  margin-bottom: 5rem;
}
</style>

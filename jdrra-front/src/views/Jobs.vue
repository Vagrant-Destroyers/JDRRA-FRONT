<template>
  <b-container>
    <v-card elevation="2" v-for="(job, index) in jobs" :key="index" id="card">
        <v-card-text @click="show = !show" flat>
          <v-expand-transition>
            <div v-show="show">This is a small paragraph</div>
          </v-expand-transition>
          <v-expand-transition>
            <div v-show="!show">
              <p>
                that's the first thing that's ever gone wrong swishifying
                mobilomobile death sports well, you all know what laughter
                sounds like. smendler oodily suck shack oodily crazy critter
                reverse vampires sandal-wearing goldfish tenders doctorb your
                older, balder, fatter son homerhol kwyjibo boostafazoo
                saxamaphone menu boy jebus spokesrebel kung-fu hippie
              </p>
            </div>
          </v-expand-transition>
        </v-card-text>

        <v-card-text v-show="!show"></v-card-text>
    </v-card>
  </b-container>
</template>

<script>
import jobs from '@/data/jobs'

export default {
  data: () => {
    return {
      jobs: jobs,
      show: true
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
</style>

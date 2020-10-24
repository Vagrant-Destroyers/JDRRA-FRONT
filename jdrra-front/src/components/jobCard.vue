<template>
    <div class="job-1">
        <i class="fas fa-angle-down fa-2x showMore" @click="show = !show"></i>
        <div class="job-1__container">
            <div class="job-1__textcontent">
                <div class="job-1__companyName">{{ job.company }}</div>
                <div class="job-1__jobRole">{{ job.title }}</div>
                <v-expand-transition>
                    <div class="job-1__description" v-show="show">
                        {{ job.description.slice(0, 200)}}...
                    </div>
                </v-expand-transition>
                <v-expand-transition>
                    <div class="job-1__description" v-show="!show">
                        {{ job.description.slice(0, (job.description.length - 18))}}
                        <br>
                        <b-button :href="job.link">Read more</b-button>
                        <div class="vote">
                            <div class="upvote" @click="setUpVote(job.id)">
                                <i class="fas fa-thumbs-up fa-2x"></i>
                                <!-- <p>Downvote</p> -->
                            </div>
                            <div class="downvote" @click="setDownVote(job.id)">
                                <i class="fas fa-thumbs-down fa-2x"></i>
                                <!-- <p>Upvote</p> -->
                            </div>
                        </div>
                    </div>
                </v-expand-transition>
                <div class="job-1__technologies">Technologies</div>
                <techTag v-for="(tech, index) in posts" :key="index" :technologies="tech"></techTag>
            </div>
        </div>
    </div>
</template>

<script>
import techTag from '@/components/techTag.vue'
import axios from 'axios'

export default {
  props: ['job'],
  components: {
    techTag
  },
  data () {
    return {
      posts: [],
      show: true
    }
  },
  mounted () {
    this.posts = this.job.jobbacktechs.concat(this.job.jobfronttechs).concat(this.job.jobdevopstechs)
  },
  methods: {
    setUpVote (id) {
      axios.put('http://api.vagrantdestroyers.fun/voteup/' + id)
    },
    setDownVote (id) {
      axios.put('http://api.vagrantdestroyers.fun/votedown/' + id)
    }
  }
}
</script>

<style lang="scss">
i.showMore {
    position: relative;
    float: right;
    right: 2rem;
    top: 2rem;
    cursor: pointer;
    color: black;
}

.vote {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    float: right;
    position: relative;
    right: 1rem;
    top: 2rem;
    cursor: pointer;
    z-index: 1;
}

.vote i:hover {
    color: #42b983;
}

.vote i {
    margin: 0.5rem;
}

.downvote {
    margin-top: 0.5rem;
}

@media (max-width: 575px) {
  .vote {
      float: none;
      margin-top: -2rem;
      margin-bottom: 2rem;
      margin-left: 1rem;
  }
}

.job-1 {
    margin: 2rem;
    &__container {
        border: 1px solid black;
        border-radius: 3rem;
        background: #fff;
        padding: 20px;
        flex-direction: row;
        align-items: center;
        align-content: center;
    }

    &__textcontent {
        margin-left: 20px;
        text-align: left;
    }

    &__companyName {
        font-family: Segoe UI;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -0.034em;
        text-transform: uppercase;
        color: black;
    }

    &__jobRole {
        font-family: Segoe UI;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.034em;
        color: black;
    }

    &__description {
        font-family: Segoe UI;
        font-size: 15px;
        letter-spacing: -0.034em;
        color: black;
        margin-left: 15px;
    }

    &__technologies {
        font-family: Segoe UI;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.034em;
        padding-bottom: 10px;
        color: black;
    }
}

.btn {
    margin-top: 20px !important;
    margin-bottom: 20px !important;
    background-color: #42b983 !important;
    border-radius: 3rem !important;
    border: none !important;

}

.btn:hover {
    background-color: #308860 !important;

}
</style>

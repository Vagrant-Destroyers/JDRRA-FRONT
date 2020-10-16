<template>
    <div class="job-1" @click="show = !show">
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

export default {
  props: ['job'],
  components: {
    techTag
  },
  data () {
    return {
      posts: ['Angular', 'React', 'Node.js'],
      show: true
    }
  }
}
</script>

<style lang="scss">
.job-1 {
    margin: 2rem;
    &__container {
        border: 1px solid #707070;
        border-radius: 56px;
        background: #fff;
        padding: 20px;
        flex-direction: row;
        align-items: center;
        align-content: center;
        cursor: pointer;
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
        color: #797979;
    }

    &__jobRole {
        font-family: Segoe UI;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: -0.034em;
        color: #797979;
    }

    &__description {
        font-family: Segoe UI;
        font-size: 15px;
        letter-spacing: -0.034em;
        color: #797979;
        margin-left: 15px;
    }

    &__technologies {
        font-family: Segoe UI;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.034em;
        padding-bottom: 10px;
        color: #797979;
    }
}

.btn {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #42b983;
    border-radius: 3rem;
    border: none;

}

.btn:hover {
    background-color: #308860;

}
</style>

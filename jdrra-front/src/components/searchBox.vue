<template>
  <div class="wrapper">
    <div class="search_box" v-bind:style="[leftActive === false ? {'border-bottom-left-radius': '0px'} : {}]">
      <div class="dropdown">
        <div class="default_option" @click="leftActive = !leftActive"><b>Category</b></div>
        <ul v-show="!leftActive">
          <li><b>Front-End</b></li>
          <li><b>Back-End</b></li>
          <li><b>DevOps</b></li>
          <li><b>Full-Stack</b></li>
        </ul>
      </div>
      <div class="dropdown">
        <div class="default_option" @click="rightActive = !rightActive"><b>Popularity</b></div>
        <ul v-show="!rightActive">
          <li><b>All</b></li>
          <li><b>Recent</b></li>
          <li><b>Popular</b></li>
          <li><b>Unpopular</b></li>
        </ul>
      </div>
      <div class="search_field">
        <input type="text" class="input" placeholder="Search" v-model="searchString"/>
        <p class="fas fa-search" @click="requestApi"></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      leftActive: true,
      rightActive: true,
      searchString: ''
    }
  },
  methods: {
    requestApi () {
      console.log(this.searchString)
    }
  }
}
</script>

<style>

.wrapper{
  margin: 2rem;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: left;
}

.wrapper .search_box{
  border-radius: 1rem;
  border: 1px solid black;
  background: #fff;
  height: 65px;
  display: flex;
  padding: 10px;
}

.wrapper .search_box .dropdown{
  width: 150px;
  border-right: 2px solid #dde2f1;
  color: black;
  position: relative;
  cursor: pointer;
}

.wrapper .search_box .dropdown .default_option{
  text-transform: uppercase;
  padding: 13px 15px;
  font-size: 14px;
}

.wrapper .search_box .dropdown ul{
  position: absolute;
  top: 53px;
  left: 0px;
  background: #fff;
  width: 150px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 1rem;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  list-style: none;
}

.wrapper .search_box .dropdown ul li{
  padding-bottom: 20px;
}

.wrapper .search_box .dropdown ul li:last-child{
  padding-bottom: 0;
}

.wrapper .search_box .dropdown ul li:hover{
  color: black;
}

.wrapper .search_box .dropdown:before{
  content: "";
  position: absolute;
  top: 18px;
  right: 20px;
  border: 8px solid;
  border-color: #42b983 transparent transparent transparent;
}

.wrapper .search_box .search_field{
  width: 70%;
  height: 100%;
  position: relative;
}

.wrapper .search_box .search_field .input{
  width: 100%;
  height: 100%;
  border: 0px;
  font-size: 16px;
  padding-left: 20px;
  padding-right: 38px;
  color: black;
}

.input:focus {
  outline: none;
}

.wrapper .search_box .search_field .fas{
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 22px;
  color: #42b983;
  cursor: pointer;
}

.fa-search {
  text-align: right;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  font-weight: 500;
  color: #9fa3b1;
}
::-moz-placeholder { /* Firefox 19+ */
  font-weight: 500;
 color: #9fa3b1;
}
:-ms-input-placeholder { /* IE 10+ */
  font-weight: 500;
  color: #9fa3b1;
}

</style>

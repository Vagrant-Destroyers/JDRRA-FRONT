<template>
  <div class="wrapper">
    <div class="search_box" v-bind:style="[leftActive === false ? {'border-bottom-left-radius': '0px'} : {}]">
      <div class="dropdown">
        <div class="default_option">
          <b>Category</b>
          <i class="fas fa-caret-down fa-2x caret-down" @click="leftActive = !leftActive"></i>
        </div>
        <ul v-show="!leftActive">
          <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
            <li><b-form-checkbox value="all-category"><b>All</b></b-form-checkbox></li>
            <li><b-form-checkbox value="front-end"><b>Front-End</b></b-form-checkbox></li>
            <li><b-form-checkbox value="back-end"><b>Back-End</b></b-form-checkbox></li>
            <li><b-form-checkbox value="devops"><b>DevOps</b></b-form-checkbox></li>
          </b-form-checkbox-group>
        </ul>
      </div>
      <div class="dropdown">
        <div class="default_option">
          <b>Popularity</b>
          <i class="fas fa-caret-down fa-2x caret-down" @click="rightActive = !rightActive"></i>
        </div>
        <ul v-show="!rightActive">
          <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
            <li><b-form-checkbox value="all-popularity"><b>All</b></b-form-checkbox></li>
            <li><b-form-checkbox value="recent"><b>Recent</b></b-form-checkbox></li>
            <li><b-form-checkbox value="popular"><b>Popular</b></b-form-checkbox></li>
            <li><b-form-checkbox value="unpopular"><b>Unpopular</b></b-form-checkbox></li>
          </b-form-checkbox-group>
        </ul>
      </div>
      <div class="dropdown less">
        <div class="default_option">
          <i class="fas fa-caret-down fa-2x caret-down" @click="lessActive = !lessActive"></i>
        </div>
        <ul v-show="!lessActive">
          <div class="title">
            <b>Popularity</b>
          </div>
          <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
            <li><b-form-checkbox value="all-popularity"><b>All</b></b-form-checkbox></li>
            <li><b-form-checkbox value="recent"><b>Recent</b></b-form-checkbox></li>
            <li><b-form-checkbox value="popular"><b>Popular</b></b-form-checkbox></li>
            <li><b-form-checkbox value="unpopular"><b>Unpopular</b></b-form-checkbox></li>
          </b-form-checkbox-group>
          <div class="title">
            <b>Category</b>
          </div>
          <b-form-checkbox-group id="checkbox-group-2" v-model="selected" name="flavour-2">
            <li><b-form-checkbox value="all-category"><b>All</b></b-form-checkbox></li>
            <li><b-form-checkbox value="front-end"><b>Front-End</b></b-form-checkbox></li>
            <li><b-form-checkbox value="back-end"><b>Back-End</b></b-form-checkbox></li>
            <li><b-form-checkbox value="devops"><b>DevOps</b></b-form-checkbox></li>
          </b-form-checkbox-group>
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
      lessActive: true,
      searchString: '',
      selected: []
    }
  },
  methods: {
    requestApi () {
      console.log(this.selected, this.searchString)
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
  cursor: default;
}

.default_option .caret-down {
  margin-left: 0.5rem;
  margin-top: -0.1rem;
  color: #42b983;
  cursor: pointer;
}
.dropdown.less {
  display: none;
}

@media (max-width: 575px) {
  .wrapper .search_box .dropdown{
    width: 90px;
  }

  .wrapper .search_box .dropdown .default_option b {
      display: none;
  }

  .wrapper .search_box .dropdown {
    display: none;
  }

  .wrapper .search_box .dropdown.less {
    display: block;
  }

  .wrapper .search_box .dropdown.less div.title {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
  }

  .wrapper .search_box .dropdown .default_option i {
      margin-left: -0.5rem;
  }
}

.wrapper .search_box .dropdown .default_option{
  text-transform: uppercase;
  padding: 13px 15px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -0.2rem;
}

.wrapper .search_box .dropdown ul{
  position: absolute;
  top: 53px;
  left: 0px;
  background: #fff;
  width: 150px;
  padding: 16px;
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

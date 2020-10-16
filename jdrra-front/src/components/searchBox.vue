<template>
  <div class="wrapper">
    <div class="search_box">
      <div class="dropdown">
        <div class="default_option">All</div>
        <ul>
          <li>All</li>
          <li>Recent</li>
          <li>Popular</li>
        </ul>
      </div>
      <div class="dropdown">
        <div class="default_option">All</div>
        <ul>
          <li>All</li>
          <li>Recent</li>
          <li>Popular</li>
        </ul>
      </div>
      <div class="search_field">
        <input type="text" class="input" placeholder="Search" />
        <i class="fas fa-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}

.wrapper .search_box{
  border-radius: 3rem;
  border: 1px solid #707070;
  background: #fff;
  height: 65px;
  display: flex;
  padding: 10px;
}

.wrapper .search_box .dropdown{
  width: 150px;
  border-right: 2px solid #dde2f1;
  color: #9fa3b1;
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
  top: 70px;
  left: -10px;
  background: #fff;
  width: 150px;
  padding: 20px;
  display: none;
}

.wrapper .search_box .dropdown ul.active{
  display: block;
}

.wrapper .search_box .dropdown ul li{
  padding-bottom: 20px;
}

.wrapper .search_box .dropdown ul li:last-child{
  padding-bottom: 0;
}

.wrapper .search_box .dropdown ul li:hover{
  color: #6f768d;
}

.wrapper .search_box .dropdown:before{
  @media (min-width: 576px) and (max-width: 767px) {
    visibility: hidden;
  }
  content: "";
  position: absolute;
  top: 18px;
  right: 20px;
  border: 8px solid;
  /* border-color: #42b983 transparent transparent transparent; */
}

.wrapper .search_box .search_field{
  width: 500px;
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
  color: #6f768d;
}

.wrapper .search_box .search_field .fas{
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 22px;
  color: #42b983;
  cursor: pointer;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #9fa3b1;
}
::-moz-placeholder { /* Firefox 19+ */
 color: #9fa3b1;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #9fa3b1;
}

</style>

<template>
  <div id="app">
    <div id="nav">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand tag="h1" class="mb-0 mr-auto" to="/Jobs" style="color: black;">RemoteJobs</b-navbar-brand>
        <b-nav-item to="#" class="login">Login</b-nav-item>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  h3 {
    float: left;
    font-family: 'Segoe UI';
  }
}

.nav-item {
  list-style: none;
}

.nav-link {
  background-color: #42b983;
  border-radius: 3rem;
  color: white;
}

body {
  @media (min-width: 1904px) {
    background-image: url("../src/img/forma.svg");
    background-position: 50rem -10rem;
  }

  @media (min-width: 1500px) and (max-width: 1903px) {
    background-image: url("../src/img/forma.svg");
    background-position: 50rem -10rem;
  }

  @media (min-width: 1200px) and (max-width: 1499px) {
    background-image: url("../src/img/forma.svg");
    background-position: 30rem -15rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    background-image: url("../src/img/forma.svg");
    background-position: 20rem -15rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    background-image: url("../src/img/forma.svg");
    background-position: 10rem -15rem;

  }

  @media (min-width: 576px) and (max-width: 767px) {
    background-image: url("../src/img/forma.svg");
    background-position: -5rem -30rem;
  }
}

</style>

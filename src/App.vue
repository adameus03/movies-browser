<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div class="container">
    <MovieBrowser/>
    <MovieTable/>
    <MovieListByGenre/>
    <MovieListByCast/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import HelloWorld from './components/HelloWorld.vue'
import MovieBrowser from './components/MovieBrowser.vue'
import MovieTable from './components/MovieTable.vue'
import MovieListByGenre from './components/MovieListByGenre.vue'
import MovieListByCast from './components/MovieListByCast.vue'

@Options({
  components: {
    MovieBrowser,
    MovieTable,
    MovieListByGenre,
    MovieListByCast
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.table-hover > tbody > tr:hover {
  background-color: #D2D2D2;
}
</style>
<!-- ///////
<script>
export default {
  name: 'App',
  /* components: {
    HelloWorld
  } */
  components: {
    MovieBrowser,
    MovieTable,
    MovieListByGenre,
    MovieListByCast
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.table-hover > tbody > tr:hover {
  background-color: #D2D2D2;
}
</style> -->

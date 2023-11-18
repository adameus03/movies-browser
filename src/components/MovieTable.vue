<script setup>
/* import { onMounted, ref } from 'vue'
import axios from 'axios'
const movies = ref([])
onMounted(() => {
  axios.get('http://localhost:3000/getMovies?start=0&stop=9')
    .then((response) => {
      movies.value = response.data.movies
      console.log(response.data)
    })
}) */
import { onMounted, ref, inject } from 'vue'
// import axios from 'axios'
import EventBus from '../eventBus.ts'
const _ = require('lodash')
const commonData = inject('commonData')

// const moviesPreprocessed = ref([])
const moviesProcessedTruncated = ref([])
let moviesProcessedAll = []
let moviesExpandCounter = 0
const moviesExpandChunk = 10
// let rawMovies = []
const moviesPostprocessing = (movies) => {
  return movies.map(movie => ({
    ...movie,
    genres: _.join(movie.genres, ', '), // Stringify genres
    cast: _.join(movie.cast, ', ') // Stringify cast
  }))
  // console.log(moviesPreprocessed.value)
}
/* const loadMoviesData = (start, stop) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://localhost:3000/getMovies?start=${start}&stop=${stop}`)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
} */
const filterMovies = (movies, filterParams) => {
  console.log('Filter params')
  console.log(filterParams)
  return _.filter(movies, (movie) =>
    movie.title.toLowerCase().includes(filterParams.titlePhrase.replace(/\s{2,}/g, ' ').toLowerCase()) &&
    movie.year >= Number(filterParams.startYear) &&
    movie.year <= Number(filterParams.stopYear) &&
    (filterParams.actorPhrase === '' || _.some(movie.cast, (actor) =>
      actor.toLowerCase().includes(filterParams.actorPhrase.replace(/\s{2,}/g, ' ').toLowerCase())
    ))
  )
}
onMounted(() => {
  /* axios.get('http://localhost:3000/getMovies?start=-10&stop=-1')
    .then((response) => {
      // moviesPreprocessed.value = _.chain(response.data.movies)
      //  .map((movie) => {
      //      movie.cast = movie
      //  })
      //  .value()
      moviesPreprocessing(response.data.movies)
    })
  loadMoviesData(-10, -1)
    .then((response) => {
      rawMovies = response.data.movies
      moviesPreprocessing(rawMovies)
    }) */
  EventBus.addEventListener('search', (event) => {
    // console.log(event.data)
    // HERE CONTINUE WITH LODASH........<<<<<<<<<<
    moviesProcessedAll = filterMovies(commonData.movies, event.data)
    moviesProcessedTruncated.value = moviesPostprocessing(_.take(moviesProcessedAll, moviesExpandChunk))
    moviesExpandCounter = 1
  })
})
function expandClick () {
  // {{IMPLEMENT}}
  moviesExpandCounter++
  moviesProcessedTruncated.value = moviesPostprocessing(_.take(moviesProcessedAll, moviesExpandChunk * moviesExpandCounter))
}
</script>
<template>
    <table class="table-condensed table-hover">
        <thead>
            <tr>
            <th>Title</th>
            <th>Production Year</th>
            <th>Cast</th>
            <th>Genres</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in moviesProcessedTruncated" :key="movie.id">
                <td>{{movie.title}}</td>
                <td>{{movie.year}}</td>
                <td>{{movie.cast}}</td>
                <td>{{movie.genres}}</td>
            </tr>
        </tbody>
    </table>
    <!--<table class="table-condensed table-hover">
    <thead>
        <tr>
        <th>Title</th>
        <th>Production Year</th>
        <th>Cast</th>
        <th>Genres</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>ascki</td>
        <td>dvki</td>
        <td>sdvd</td>
        <td>sdvko</td>
        </tr>
    </tbody>
    </table>-->
    <div class="form-group row">
        <input @click="expandClick" type="button" class="btn btn-info col-sm-12" value="Wczytaj więcej"/>
    </div>
</template>

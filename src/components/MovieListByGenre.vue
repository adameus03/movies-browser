<script setup>
// import { onMounted, ref } from 'vue'
import { ref, inject } from 'vue'
// import axios from 'axios'
const _ = require('lodash')
const commonData = inject('commonData')
const moviesByGenre = ref([])
/* onMounted(() => {
  axios.get('http://localhost:3000/getMovies?start=-100&stop=-1')
    .then((response) => {
      // movies.value = response.data.movies

      // Use the lodash flatMap function to handle cases where a movie has multiple genres
      moviesByGenre.value = _.chain(response.data.movies)
        .flatMap(movie => {
          if (!movie.genres || movie.genres.length === 0) {
            // return [{ genre: 'No Genre', movie }]
            return []
          }

          // create a separate movie entry for each movie genre
          return movie.genres.map(genre => ({ genre, movie }))
        })
        .groupBy('genre')
        .map((movies, genre) => ({ genre, movies: movies.map(entry => entry.movie) }))
        .value()
      console.log(moviesByGenre.value)
    })
}) */
const setupData = () => {
  moviesByGenre.value = _.chain(_.takeRight(commonData.movies, 100))
    .flatMap(movie => {
      if (!movie.genres || movie.genres.length === 0) {
        // return [{ genre: 'No Genre', movie }]
        return []
      }
      // create a separate movie entry for each movie genre
      return movie.genres.map(genre => ({ genre, movie }))
    })
    .groupBy('genre')
    .map((movies, genre) => ({ genre, movies: movies.map(entry => entry.movie) }))
    .value()
  console.log(moviesByGenre.value)
}
setupData()
</script>
<!--<template>
    <h1>Filmy wg gatunku</h1>
    <em>
        <p>Animated</p>
        <ol>If the movie has multiple genres,
            <li>Cheese Chasers</li>
            <li>Southbound Duckling</li>
        </ol>
        <p>Comedy</p>
        <ol>
            <li>Special Delivery</li>
        </ol>
    </em>
</template>-->
<template>
    <h1>Filmy wg gatunku</h1>
    <em>
        <span v-for="genreGroup in moviesByGenre" :key="genreGroup.genre">
            <p >{{genreGroup.genre}}</p>
            <ol>
                <li v-for="movie in genreGroup.movies" :key="movie.title">{{movie.title}}</li>
            </ol>
        </span>
    </em>
</template>
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
        <tr v-for="movie in movies" :key="movie.id">
        <td>{{movie.title}}</td>
        <td>{{movie.year}}</td>
        <td>{{movie.cast}}</td>
        <td>{{movie.genres}}</td>
        </tr>
    </tbody>
</table>-->

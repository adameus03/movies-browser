<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const _ = require('lodash')

const moviesByActor = ref([])
onMounted(() => {
  axios.get('http://localhost:3000/getMovies?start=-100&stop=-1')
    .then((response) => {
      // movies.value = response.data.movies

      // Use the lodash flatMap function to handle cases where a movie has multiple actors in cast
      moviesByActor.value = _.chain(response.data.movies)
        .flatMap(movie => {
          if (!movie.cast || movie.cast.length === 0) {
            // return [{ genre: 'No Genre', movie }]
            return []
          }

          // create a separate movie entry for each actor in cast
          return movie.cast.map(actor => ({ actor, movie }))
        })
        .groupBy('actor')
        .map((movies, actor) => ({ actor, movies: movies.map(entry => entry.movie) }))
        .value()
      console.log(moviesByActor.value)
    })
})
</script>
<template>
    <h1>Filmy wg obsady</h1>
    <em>
        <span v-for="actorGroup in moviesByActor" :key="actorGroup.actor">
            <p >{{actorGroup.actor}}</p>
            <ol>
                <li v-for="movie in actorGroup.movies" :key="movie.title">{{movie.title}}</li>
            </ol>
        </span>
    </em>
</template>
<!--<template>
    <h1>Filmy wg obsady</h1>
    <em>
        <p>John Doe</p>
        <ol>
            <li>Cheese Chasers</li>
            <li>Southbound Duckling</li>
        </ol>
        <p>Arnold Schwarzenegger</p>
        <ol>
            <li>Terminator 3</li>
        </ol>
    </em>
</template>-->

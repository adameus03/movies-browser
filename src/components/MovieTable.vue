<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const movies = ref([])
onMounted(() => {
  axios.get('http://localhost:3000/getMovies?start=0&stop=9')
    .then((response) => {
      movies.value = response.data.movies
      console.log(response.data)
    })
})
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
            <tr v-for="movie in movies" :key="movie.id">
            <td>{{movie.title}}</td>
            <td>{{movie.year}}</td>
            <td>{{movie.cast}}</td>
            <td>{{movie.genres}}</td>
            </tr>
        </tbody>
    </table>
    <div class="form-group row">
        <input type="button" class="btn btn-info col-sm-12" value="Wczytaj więcej"/>
    </div>
</template>

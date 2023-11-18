import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import movieData from '../data/movies.json'
// const fs = require('fs');
// let movieData;

const appSetup = (commonData : any) => {
  const app = createApp(App)
  app.provide('commonData', commonData)
  app.mount('#app')
}

appSetup(movieData)

/* fs.readFile('../data/movies.json', 'utf8', (err : any, data : any) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return;
    }
    movieData = JSON.parse(data);
    console.log('JSON file loaded successfully');

    // createApp(App).mount('#app')
    appSetup(movieData)
  }); */

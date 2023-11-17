<script setup>
// import { ref } from 'vue'
import { reactive } from 'vue'
import EventBus from '../eventBus.ts'
/* const titlePhrase = ref('')
const startYear = ref(NaN)
const stopYear = ref(NaN)
const actorPhrase = ref('') */

const searchParams = reactive({
  titlePhrase: '',
  startYear: NaN,
  stopYear: NaN,
  actorPhrase: ''
})

function submitClick () {
  /* EventBus.emit('search', {
    titlePhrase: titlePhrase,
    startYear: ststartYear
    //HERE
    }) */
  EventBus.emit(searchParams.value)
}

</script>
<template>
    <h1>Baza filmów</h1>
    <form>
        <div class="form-group">
            <label for=inputTitle>Tytuł</label>
            <input v-model="searchParams.titlePhrase" type="text" id=inputTitle class="form-control" placeholder="Podaj tytuł lub fragment tytułu filmu"/>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 col-form-label" for="inputProductionFrom">Rok produkcji od:</label>
            <div class="col-sm-8">
                <input v-model="searchParams.startYear" type="text" id=inputProductionFrom class="form-control"  placeholder="Liczba naturalna z przedziału 1900-2023"/>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 col-form-label" for="inputProductionTo">Rok produkcji do:</label>
            <div class="col-sm-8">
                <input v-model="searchParams.stopYear" type="text" id=inputProductionTo class="form-control" placeholder="Liczba naturalna z przedziału 1900-2023"/>
            </div>
        </div>
        <div class="form-group">
            <label for="inputCast">Obsada</label>
            <input v-model="searchParams.actorPhrase" type="text" id="inputCast" class="form-control" placeholder="Imię i nazwisko"/>
        </div>
        <div class="form-group row">
            <input @click="submitClick" type="button" class="btn btn-info col-sm-12" value="Szukaj"/>
        </div>
    </form>
</template>

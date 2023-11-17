<script setup>
// import { ref } from 'vue'
import { ref, reactive } from 'vue'
import EventBus from '../eventBus.ts'
/* const titlePhrase = ref('')
const startYear = ref(NaN)
const stopYear = ref(NaN)
const actorPhrase = ref('') */

const searchParams = reactive({
  titlePhrase: '',
  startYear: '',
  stopYear: '',
  actorPhrase: ''
})

const validationFailed = ref(false)
const validationFailureReason = ref('')

function submitClick () {
  /* EventBus.emit('search', {
    titlePhrase: titlePhrase,
    startYear: ststartYear
    //HERE
    }) */
  if (searchParams.startYear === '' || searchParams === '') {
    validationFailed.value = true
    validationFailureReason.value = 'Proszę uzupełnić pola roku produkcji'
  } else if (isNaN(searchParams.startYear) || isNaN(searchParams.stopYear)) {
    validationFailed.value = true
    validationFailureReason.value = 'Rok produkcji ma być liczbą'
  } else if (Number(searchParams.startYear) < 1900 || Number(searchParams.startYear) > 2023 || Number(searchParams.stopYear) < 1900 || Number(searchParams.stopYear) > 2023) {
    validationFailed.value = true
    validationFailureReason.value = 'Rok produkcji ma być między 1900 a 2023'
  } else {
    validationFailed.value = false
    validationFailureReason.value = ''
    EventBus.emit('search', { ...searchParams })
  }
}

</script>
<template>
    <h1>Baza filmów</h1>
    <!--<div v-if="validationFailed" class="alert alert-danger alert-dismissible fade show">-->
    <div v-if="validationFailed" class="alert alert-danger">
        <strong>Halo, halo!</strong> {{ validationFailureReason }}
        <!--<button type="button" class="btn-close" data-bs-dismiss="alert"></button>-->
    </div>
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

<template>
  <v-container>
    <input type="button" v-on:click="getAllData" value="Click">
  </v-container>
</template>

<script>
import axios from "axios";

const API = "https://api.datos.gob.mx/v2/sinaica";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        data: new Array(),
        pagination: null,
        mexico: new Array(),
      }
    },
    methods: {
      getAllData(){
        console.log(this.data.length);
      },
      async getDataFromApi(numPage) {
        for(let i = 1; i <= numPage; i++){
          await axios.get(`${API}?page=${i}`)
            .then(
              response => (
                this.data.push(response.data.results)
              ));

          if(i == 100){
            break;
          }
        }
      },
      sortData(numPage){ 
        for(let i = 1; i <= numPage; i++){
          this.mexico.push(this.data[i])
        }
      }
    },
    async mounted () {
      await axios.get(API)
        .then(
          response => (
            this.pagination = response.data.pagination
        ));

      const numPage = Math.ceil(this.pagination.total / this.pagination.pageSize);

      this.getDataFromApi(numPage);
    }
  }
</script>

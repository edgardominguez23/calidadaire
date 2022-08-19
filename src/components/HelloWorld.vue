<template>
  <v-container>
    <input type="button" v-on:click="getAllData" value="Click">
  </v-container>
</template>

<script>
import readXlsFile from "read-excel-file";

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
    },
    mounted() {

    }
  }
</script>

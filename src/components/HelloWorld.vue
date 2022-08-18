<template>
  <v-container>
    <input type="button" v-on:click="getAllData" value="Click">
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        mexico: null
      }
    },
    methods: {
      getAllData(){
        console.log("Hello world");
      }
    },
    created() {
      
    },
  }
</script>

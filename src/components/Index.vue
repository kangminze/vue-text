<template>
  <transition name="test">
    <router-view></router-view>
  </transition>
</template>
<script>
  import Vue from 'vue'


  export default {
    name: 'index',
    mounted(){
        this.$router.replace('containers')
    }
  }
</script>

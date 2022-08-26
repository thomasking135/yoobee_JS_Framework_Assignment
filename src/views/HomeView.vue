<template>

  <div class="home">
    
    <HelloWorld msg="Welcome to Hap"/>
    <p>Insert content</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home {
  padding-top: 80px;
}
</style>

<template>
  <div>
    <draglist :list="list" :swing="true">
    </draglist>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      list: ['1', '2', '3']
    }
  },
  methods: {
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
}
</style>

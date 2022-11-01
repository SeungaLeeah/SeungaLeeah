<template>
  <div :class="{'text-color': hasError, active: isActive}">클래스 바인딩</div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      hasError: false
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
<style scoped>
.active{
    background: green;
    font-weight: bold;
}
.text-color{
    color: red;
}
</style>

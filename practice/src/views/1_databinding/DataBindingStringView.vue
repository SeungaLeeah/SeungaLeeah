<!-- 문자열 바인딩 -->
<template>
    <div>
        <h1 class="testColor">{{userName}}</h1>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Leeah',
      message: 'Welcome 개발자 leeah',
      arr: [],
      obj: {}
    }
  }
}
</script>
<style scoped>
.testColor{
    color: red;
}
</style>

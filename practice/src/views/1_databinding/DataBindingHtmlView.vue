<template>
  <div>{{htmlString}}</div>
  <!-- v- 디렉터를 이용해 데이터의 키값을 넣어주면된다. innerHtml로 출력이 된다. -->
  <div v-html="htmlString"></div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p styled="color:red;">빨간색 문자</p>'
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<template>
  <div>
    <!-- <input
     type="search"
     name="" id=""
     @keyup="checkEvent($event)"
     v-model="searchText"
    > -->
    <input
     type="search"
     name="" id=""
     @keyup.enter="doSearch"
     v-model="searchText"
    >
    <button @click="doSearch">조회</button>
    <button type="submit" @click.prevent="doSearch"></button>
  </div>
</template>
<script>
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .stop - event.stopPropagation()를 호출해주는 것과 동일
// .prevent - event.preventDefault()를 호출해주는 것과 동일
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEvent(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>

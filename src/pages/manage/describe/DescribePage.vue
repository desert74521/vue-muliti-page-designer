<template>
  <div>
    <img :src="homeImg" alt="">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class DescribePage extends Vue {
  private homeImg: string = require('@/assets/vue_mvc_designer.png');
}
</script>

<style lang="scss">

</style>
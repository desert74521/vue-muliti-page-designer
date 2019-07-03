<template>
  <div
    v-loading.fullscreen.lock="isLoading"
    element-loading-text="loading"
    element-loading-background="rgba(0, 0, 0, 0)"
    class="page-loading"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PageLoading extends Vue {
  @Prop({type: Boolean, default: false}) public isLoading!: boolean;
}
</script>

<style lang="postcss">
.page-loading {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  width: 200px;
  transform: translate3d(-50%, -50%, 0);
}
</style>

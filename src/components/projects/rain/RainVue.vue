<script setup lang="ts">
import MyProject from '../MyProject.vue';
import IFrameCell from '../IFrameCell.vue';
</script>

<template>
  <MyProject project="rain">
   <IFrameCell src="https://xyqlx.github.io/rain/" :white-background="true" :scale="0.5" :transform="false"></IFrameCell>
  </MyProject>
</template>

<style>
</style>

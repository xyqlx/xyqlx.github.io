<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
const props = defineProps<{
  src: string;
  scale?: number;
  transform?: boolean;
  whiteBackground?: boolean;
}>();
const { src, scale, transform, whiteBackground } = toRefs(props);
const isLoaded = ref(false);

function resizeIFrame(iframe: HTMLIFrameElement){
  // set iframe height to content height
  const screen = iframe.contentWindow?.top?.screen;
  if (screen) {
    const height = iframe.clientWidth / screen.width * screen.height;
    iframe.style.height = `${height}px`;
    if(transform.value){
      iframe.style.marginBottom = `-${height * (1 - (scale?.value ?? 1))}px`
    }
  }
}

function onIFrameLoad($event: Event) {
  isLoaded.value = true;
  const iframe = $event.target as HTMLIFrameElement;
  resizeIFrame(iframe);  
}

const iframeStyle = computed(() => {
  const style: any = {};
  const actualScale = scale?.value ?? 1;
  if(transform?.value){
    style.transform = `scale(${actualScale})`;
    style.width = `100%`;
    style.transformOrigin = 'top center';
  }
  else {
    style.width = `${actualScale * 100}%`;
    style.marginLeft = `${(1 - actualScale) * 50}%`;
  }
  if(whiteBackground?.value && isLoaded) {
    style.backgroundColor = 'white';
  }
  return style;
})
</script>

<template>
  <iframe :src="src" frameborder="0" @load="onIFrameLoad($event)"
    :style="iframeStyle"></iframe>
</template>

<style>
iframe {
  border: none;
}
</style>

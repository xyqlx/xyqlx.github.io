<script setup lang="ts">
import { computed, ref, toRefs } from 'vue';
const props = defineProps<{
  src: string;
  scale?: number;
  transformScale?: number;
  whiteBackground?: boolean;
}>();
const { src, scale, transformScale, whiteBackground } = toRefs(props);
const isLoaded = ref(false);

function resizeIFrame(iframe: HTMLIFrameElement){
  // set iframe height to content height
  const screen = iframe.contentWindow?.top?.screen;
  if (screen) {
    const height = iframe.clientWidth / screen.width * screen.height;
    iframe.style.height = `${height}px`;
    if(transformScale?.value){
      iframe.style.marginBottom = `-${height * (1 - (transformScale?.value ?? 1))}px`
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
  const actualTransformScale = transformScale?.value ?? 1;
  if(actualTransformScale !== 1){
    style.transform = `scale(${actualTransformScale})`;
    style.transformOrigin = 'top center';
  }
  const displayScale = actualScale / actualTransformScale;
  style.width = `${displayScale * 100}%`;
  style.marginLeft = `${(1 - displayScale) * 50}%`;
  if(whiteBackground?.value && isLoaded.value) {
    style.backgroundColor = 'white';
  }
  return style;
})
</script>

<template>
  <div class="iframe-container">
    <iframe :src="src" frameborder="0" @load="onIFrameLoad($event)"
    :style="iframeStyle"></iframe>
  </div>
</template>

<style>
.iframe-container {
  width: 100%;
  overflow: hidden;
}
iframe {
  border: none;
}
</style>

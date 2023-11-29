<script setup lang="ts">
import { toRefs, useSlots, onMounted, ref, onUnmounted, type WatchStopHandle, watch } from 'vue';
import { getProject } from './projects';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { watchDebounced } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useMarkdownStore } from '@/stores/markdown';
import { useThrottleScrollStore } from '@/stores/scroll';

const props = defineProps<{
  project: string;
}>();
const { distance } = storeToRefs(useThrottleScrollStore());
const pageProgress = ref(0);
const { project } = toRefs(props);
const currentProject = getProject(project.value);
const shortcuts = [
  currentProject?.github,
  currentProject?.gitee,
  currentProject?.demo
];
const tagNames = [
  "GitHub",
  "Gitee",
  "Demo"
];
const defaultSlot = useSlots().default
const { t } = useI18n();
const route = useRoute();
const { tocUpdate } = storeToRefs(useMarkdownStore());
let watcher: WatchStopHandle | undefined = undefined;
let tocWatcher: WatchStopHandle | undefined = undefined;
let scrollWatcher: WatchStopHandle | undefined = undefined;
const articleContainer = ref();
const tocScrollbar = ref();
function updateToc() {
  const tocs = document.getElementsByClassName('table-of-contents');
  const parent = document.querySelector('.toc-container nav ol');
  // clear parent
  while (parent?.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  for (let i = 0; i < tocs.length; i++) {
    const toc = tocs[i];
    // get nav ol
    const ol = toc.querySelector('ol');
    // copy all children
    ol!.childNodes.forEach((node) => {
      parent!.appendChild(node.cloneNode(true));
    });
  }
  // replace all href with route path
  const links = parent!.querySelectorAll('a');
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const href = link.getAttribute('href');
    if (href) {
      link.setAttribute('href', `#${route.path}${href}`);
    }
  }
}
const onScroll = () => {
  // get current top position
  const anchors = document.querySelectorAll('.article-container a.header-anchor') as NodeListOf<HTMLAnchorElement>;
  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];
    const rect = anchor.getBoundingClientRect();
    // if card is in viewport, break
    if (rect.top > 0 && rect.top < window.innerHeight) {
      const tocAnchors = document.querySelectorAll(`.toc-container a`);
      const tocToFocus = tocAnchors[i] as HTMLAnchorElement;
      tocToFocus?.classList.add('toc-active');
      tocAnchors.forEach((tocAnchor) => {
        if (tocAnchor !== tocToFocus) {
          tocAnchor.classList.remove('toc-active');
        }
      });
      // scroll to this
      const tocToFocusTop = tocToFocus.offsetTop;
      const tocToFocusRect = tocToFocus.getBoundingClientRect();
      const tocRect = tocScrollbar.value?.$el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // if window height is larger than toc height, do nothing
      // else try to make tocToFocus at the center of toc
      if (tocRect && tocToFocusTop && tocRect.height < windowHeight) {
        // console.log({
        //   'focusTop': tocToFocusTop,
        //   'tocTop': tocRect.top,
        //   'tocHeight': tocRect.height,
        //   'windowHeight': windowHeight,
        // });
        const offset = tocToFocusTop - tocRect.top - (windowHeight - tocToFocusRect.height) / 2;
        tocScrollbar.value?.scrollTo({ top: offset });
      }
      break;
    }
  }
};
onMounted(() => {
  watcher = watch(() => route.hash, () => {
    if (route.hash !== '') {
      const id = encodeURIComponent(route.hash.slice(1));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }
  });
  tocWatcher = watchDebounced(tocUpdate, () => {
    updateToc();
  },
    {
      debounce: 40,
      maxWait: 200
    }
  );
  scrollWatcher = watch(distance, () => {
    const height = (articleContainer.value?.clientHeight ?? 0) - window.innerHeight;
    const tempValue = Math.round(distance.value / height * 100);
    pageProgress.value = tempValue > 100 ? 100 : tempValue;
    onScroll();
  });
})
onUnmounted(() => {
  watcher?.();
  tocWatcher?.();
  scrollWatcher?.();
});
</script>

<i18n>
  {
    "en": {
      "under construction": "This page is under construction.",
      "contents": "Contents",
    },
    "zh-CN": {
      "under construction": "本页面正在建设中。",
      "contents": "目录",
    }
  }
</i18n>

<template>
  <div v-if="currentProject" class="project-container">
    <div class="toc-container">
      <div class="toc-heading">
        <h2>{{ t('contents') }}</h2>
        <div class="page-progress">{{ pageProgress }}</div>
      </div>
      <el-scrollbar height="90%" ref="tocScrollbar">
        <nav>
          <ol></ol>
        </nav>
      </el-scrollbar>
    </div>
    <div class="article-container" ref="articleContainer">
      <div class="title-bar">
        <h1>{{ currentProject.name }}</h1>
        <div class="shortcuts">
          <template v-for="(url, i) in shortcuts" :key="i">
            <a class="tag-container" v-if="url" :href="url">
              <el-tag class="tag" effect="plain" color="transparent">{{ tagNames[i] }}</el-tag>
            </a>
          </template>
        </div>
      </div>
      <div>
        <slot></slot>
        <template v-if="!defaultSlot">
          {{ t('under construction') }}
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.toc-container {
  position: absolute;
  width: 18%;
  height: 100%;
}

.toc-heading {
  background: color-mix(in srgb, var(--color-background) 80%, transparent);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.page-progress {
  font-size: 1.5rem;
  font-style: italic;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.toc-container nav {
  background: color-mix(in srgb, var(--color-background) 80%, transparent);
  border-color: transparent;
  border-radius: 3px;
  border-style: solid;
  padding-left: 0.5rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  left: var(--el-main-padding);
}

/* deep (ol may be cloned) */
.toc-container :deep(ol) {
  padding-left: 1rem;
  margin-top: 0;
  margin-bottom: 0;
  list-style:none;
}

.toc-container :deep(a.toc-active) {
  color: var(--color-text);
  text-decoration: underline;
}

.toc-container :deep(li:before) {
  /* color:#f00; font-family:Times New Roman; */
  /* style of index */
}

.toc-container :deep(li) {
  counter-increment:a 1;
}

.toc-container :deep(li:before) {
  content:counter(a)". ";
}

.toc-container :deep(li li) {
  counter-increment:b 1;
}

.toc-container :deep(li li:before) {
  content:counter(a)"."counter(b)" ";
}

.toc-container :deep(li li li) {
  counter-increment:c 1;
}

.toc-container :deep(li li li:before) {
  content:counter(a)"."counter(b)"."counter(c)" ";
}

.toc-container :deep(li li li li) {
  counter-increment:d 1;
}

.toc-container :deep(li li li li:before) {
  content:counter(a)"."counter(b)"."counter(c)"."counter(d)" ";
}

.toc-container :deep(li li li li li) {
  counter-increment:e 1;
}

.toc-container :deep(li li li li li:before) {
  content:counter(a)"."counter(b)"."counter(c)"."counter(d)"."counter(e)" ";
}

.article-container {
  width: 64%;
  margin-left: calc(18% + 12px);
  background: color-mix(in srgb, var(--color-background) 80%, transparent);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3rem;
}

.title-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.shortcuts {
  margin-top: 0.5rem;
  margin-left: 1rem;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

a:hover {
  background-color: transparent;
}

.tag {
  color: var(--color-text);
}

.tag:hover {
  text-decoration: underline;
}

.tag-container {
  margin-left: 0.8rem;
}

@media (max-width: 1024px) {
  .project-container {
    flex-direction: column;
  }

  .article-container {
    width: 100%;
    margin-left: 0;
  }

  .toc-container {
    display: none;
  }

  .toc-container nav {
    display: none;
  }
}</style>

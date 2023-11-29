<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { type localeText, type Project } from './projects';
import { toRefs, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDark } from '@vueuse/core';
import { VideoPlay } from '@element-plus/icons-vue';

const props = defineProps<{
  project: Project;
}>();
const { project } = toRefs(props);

const { locale } = useI18n();
const isDarkMode = useDark();
const router = useRouter();

function navigate() {
  router.push(`/project/${project.value.name}`);
}

const imageLoading = ref(project.value.cover ? true : false);
</script>

<template>
  <div :name="project.name" class="card" @click="navigate()">
    <div class="title-bar">
      <div class="name">
        {{ project.name }}
      </div>
      <div class="button-bar">
        <a v-if="project.github" :href="project.github" @click.stop=";">
          <el-icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
              <path v-if="!isDarkMode" fill-rule="evenodd" clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f" />
              <path v-if="isDarkMode" fill-rule="evenodd" clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#fff" />
            </svg>
          </el-icon>
        </a>
        <a v-if="project.gitee" :href="project.gitee" @click.stop=";">
          <el-icon>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="72px" height="72px"
              viewBox="0 0 72 72" version="1.1">
              <title>logo_gitee_g_red@1x</title>
              <g id="LOGO" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard-7" transform="translate(-192.000000, -115.000000)" fill="#C71D23">
                  <path
                    d="M228,115 C247.882251,115 264,131.117749 264,151 C264,170.882251 247.882251,187 228,187 C208.117749,187 192,170.882251 192,151 C192,131.117749 208.117749,115 228,115 Z M246.223335,131 C246.222967,131 246.2226,131 246.222232,131.001102 L221.33326,131.001102 C213.969504,131.001102 208,136.970606 208,144.334362 L208,169.222232 C208,170.204066 208.795934,171 209.777768,171 L236.000329,171 C242.627564,171 248,165.627564 248,159.000329 L248,148.778425 C248,147.796591 247.204066,147.000657 246.222232,147.000657 L225.7779,147.000657 C224.796248,147.001123 224.000389,147.796773 223.999667,148.778425 L223.998503,153.222667 C223.997802,154.155409 224.715909,154.920565 225.629522,154.994969 L225.775805,155.00042 L225.775805,155.00042 L238.222276,155.000317 C239.155019,155.000295 239.919992,155.718618 239.994164,156.63225 L240.000044,156.77807 L240.000044,156.77807 L240.000044,157.666909 C240.000044,160.612411 237.612243,163.000213 234.66674,163.000213 L217.776621,163.000213 C216.794928,163.000164 215.999101,162.204358 215.999025,161.222665 L215.998559,144.334184 C215.998337,141.462319 218.268172,139.120556 221.111731,139.005187 L221.331716,139.00088 L221.331716,139.00088 L246.21727,139.00088 C247.198674,138.999777 247.994429,138.204515 247.996141,137.223112 L247.998897,132.77887 C248.000609,131.797037 247.205169,131.000609 246.223335,131 Z"
                    id="logo_gitee_g_red" />
                </g>
              </g>
            </svg>
          </el-icon>
        </a>
        <a v-if="project.demo" :href="project.demo" @click.stop=";">
          <el-icon :color="isDarkMode ? '#ffffff' : '#000000'">
            <VideoPlay />
          </el-icon>
        </a>
      </div>
    </div>
    <div class="tags">
      <router-link v-for="tag in project.tags" :key="tag.toString()"
        :to="'/project?tag=' + (typeof tag === 'string' ? tag : (tag as localeText)['en'])" @click.stop=";">
        <el-tag class="tag" effect="plain" color="transparent">
          <span v-if="typeof tag === 'string'">{{ tag }}</span>
          <span v-else-if="locale in (tag as any)">{{ (tag as any)[locale] }}</span>
          <span v-else>{{ tag['en'] }}</span>
        </el-tag>
      </router-link>
    </div>
    <div class="description" v-if="project.description">
      {{ (project.description as any)[locale] }}
    </div>
    <div class="cover" :class="imageLoading ? 'loading' : ''" v-loading="imageLoading"
      element-loading-background="rgba(123, 123, 123, 0.08)" element-loading-text="Loading...">
      <template v-if="project.cover">
        <el-image :src="project.cover" alt="cover" loading="lazy" @load="imageLoading = false"
          @error="imageLoading = false">
        </el-image>
      </template>
      <template v-else>
        <div class="void-image"></div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-style: solid;
  border-color: var(--color-border);
  border-width: 1px;
  min-width: 200px;
  width: calc(20vw - 20px);
  padding: 10px;
  cursor: pointer;
  background-color: var(--color-background);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

.dark .card {
  box-shadow: rgba(25, 25, 46, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.dark .card:hover {
  border-color: var(--color-text);
  box-shadow: rgba(255, 255, 255, 0.24) 0px 3px 8px;
}

.card:hover {
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

.title-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.button-bar {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
}

.button-bar .el-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.button-bar a {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button-bar a:hover {
  background-color: transparent;
  transform: scale(1.2);
}

.button-bar svg {
  width: 1.5rem;
  height: 1.5rem;
}

.name {
  font-size: 1.5rem;
  word-wrap: break-word;
  word-break: break-all;
}

.cover {
  flex: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.cover.loading {
  height: 180px;
}

.cover>img {
  width: fit-content;
  max-height: 180px;
  max-width: 100%;
}

.cover>img,
.void-image {
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%,
      100%, 0.075),
    /* shadow ring 👇 */
    0 0 0 1px hsla(0, 0%, 0%, 0.05),
    /* multiple soft shadows 👇 */
    0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
    0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
    0 3.5px 6px hsla(0, 0%, 0%, 0.09);
}

.void-image {
  width: 100%;
  height: 180px;
  background-color: var(--color-border);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}

.tag {
  color: var(--color-text);
}

.dark .tag {
  --el-tag-border-color: var(--el-color-primary);
}

.description {
  margin-top: 10px;
  font-size: 1rem;
  word-wrap: break-word;
}

@media (max-width: 512px) {
  .card {
    width: min(90%, 90vw);
  }
}</style>

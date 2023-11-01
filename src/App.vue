<script setup lang="ts">
import { toRef, useDark } from '@vueuse/core';
import { Sunrise, MoonNight } from '@element-plus/icons-vue';
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';
const isDarkMode = useDark();
const { locale } = useI18n({
  useScope: 'global',
  inheritLocale: true,
});
const { t } = useI18n();
const isChinese = toRef(locale.value === 'zh-CN');
watch(isChinese, (value) => {
  locale.value = value ? 'zh-CN' : 'en';
});

</script>

<i18n>
  {
    "en": {
      "home": "Home",
      "project": "Project",
      "about": "About"
    },
    "zh-CN": {
      "home": "首页",
      "project": "项目",
      "about": "关于"
    }
  }
</i18n>

<template>
  <el-container class="container">
    <el-header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/project">{{ t('project') }}</RouterLink>
          <RouterLink to="/about">{{ t('about') }}</RouterLink>
        </nav>
        <div class="functions">
          <el-switch v-model="isDarkMode" :inactive-action-icon="Sunrise" :active-action-icon="MoonNight" />
          <el-switch v-model="isChinese" inline-prompt inactive-text="en" active-text="zh" />
        </div>
      </div>
    </el-header>
    <el-main class="main">
      <RouterView />
    </el-main>
    <el-footer class="footer">
      <div class="copyright">
        ©2023 xyqlx
        <a class="license" href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
      </div>
    </el-footer>
  </el-container>
</template>

<style scoped>
.container {
  height: 100vh;
}

.functions {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.main {
  display: flex;
  justify-content: center;
}

.footer {
  text-align: center;
  padding: 1rem;
  font-size: 12px;
}

.copyright {
  opacity: 0.7;
}

a.license {
  margin-left: 1rem;
  text-decoration: none;
  color: var(--color-text);
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: calc(var(--section-gap) / 2);
}

header .wrapper {
  display: flex;
  align-items: center;
  flex: auto;
  /* flex-wrap: wrap; */
}

.logo {
  display: block;
  margin: 0 2rem 0 0;
}

nav {
  width: 100%;
  text-align: center;
  flex: auto;
  font-size: 1rem;
  padding: 1rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (max-width: 512px) {
  .main {
    padding: 0;
  }
}
</style>

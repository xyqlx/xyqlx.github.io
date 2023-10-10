<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { Sunrise, Sunset } from '@element-plus/icons-vue';
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n';
const isDarkMode = useDark();
const { t } = useI18n();

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
          <el-switch v-model="isDarkMode" :inactive-action-icon="Sunrise" :active-action-icon="Sunset" />
        </div>
      </div>
    </el-header>
    <el-main>
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
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    align-items: center;
    /* flex-wrap: wrap; */
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
  }
}
</style>

<script setup lang="ts">
import MyProject from '../MyProject.vue';
import MarkdownCell from '../MarkdownCell.vue';
import enMarkdown from './en.md?raw';
import zhMarkdown from './zh.md?raw';
import page3_2_1 from './images/page3.2.1.png';
import page3_6_1 from './images/page3.6.1.png';
import page3_6_2 from './images/page3.6.2.png';
import page4_1_1 from './images/page4.1.1.png';
import page4_2_2_1 from './images/page4.2.2.1.png';
import page4_2_2_2 from './images/page4.2.2.2.png';
import page4_2_3_1 from './images/page4.2.3.1.png';
import page4_2_3_2 from './images/page4.2.3.2.png';
import page4_2_4_1 from './images/page4.2.4.1.png';
import page4_2_4_2 from './images/page4.2.4.2.png';
import page4_2_4_3 from './images/page4.2.4.3.png';
import page4_3_1_1 from './images/page4.3.1.1.png';
import page4_3_1_2 from './images/page4.3.1.2.png';
import page4_3_1_3 from './images/page4.3.1.3.png';
import page4_3_1_4 from './images/page4.3.1.4.png';
import page4_3_1_5 from './images/page4.3.1.5.png';
import page4_3_1_6 from './images/page4.3.1.6.png';
import page4_3_1 from './images/page4.3.1.png';
import page4_3_2_1 from './images/page4.3.2.1.png';
import page4_3_2_2 from './images/page4.3.2.2.png';
import page4_3_2_3 from './images/page4.3.2.3.png';
import page4_4_1 from './images/page4.4.1.png';
import page4_5_1_1 from './images/page4.5.1.1.png';
import page4_5_1_2 from './images/page4.5.1.2.png';
import page4_5_1_3 from './images/page4.5.1.3.png';
import page4_5_1_4 from './images/page4.5.1.4.png';
import page4_5_1 from './images/page4.5.1.png';
import page4_5_2_1 from './images/page4.5.2.1.png';
import page4_5_2_2 from './images/page4.5.2.2.png';
import page4_5_2_3 from './images/page4.5.2.3.png';
import page4_5_2_4 from './images/page4.5.2.4.png';
import page4_5_3_1 from './images/page4.5.3.1.png';
import page4_5_3_2 from './images/page4.5.3.2.png';
import page4_5_3_3 from './images/page4.5.3.3.png';
import page4_5_3_4 from './images/page4.5.3.4.png';
import page4_5_3_5 from './images/page4.5.3.5.png';
import page4_5_3_6 from './images/page4.5.3.6.png';
import page4_5_3_7 from './images/page4.5.3.7.png';
import page4_5_3_8 from './images/page4.5.3.8.png';
import page4_5_3_9 from './images/page4.5.3.9.png';
import page4_5_3_10 from './images/page4.5.3.10.png';
import page5_4_1_1 from './images/page5.4.1.1.png';
import page5_4_2_1 from './images/page5.4.2.1.png';
import page5_4_3_1 from './images/page5.4.3.1.png';
import page5_4_4_1 from './images/page5.4.4.1.png';
const urls = {
  'page3.2.1.png': page3_2_1,
  'page3.6.1.png': page3_6_1,
  'page3.6.2.png': page3_6_2,
  'page4.1.1.png': page4_1_1,
  'page4.2.2.1.png': page4_2_2_1,
  'page4.2.2.2.png': page4_2_2_2,
  'page4.2.3.1.png': page4_2_3_1,
  'page4.2.3.2.png': page4_2_3_2,
  'page4.2.4.1.png': page4_2_4_1,
  'page4.2.4.2.png': page4_2_4_2,
  'page4.2.4.3.png': page4_2_4_3,
  'page4.3.1.1.png': page4_3_1_1,
  'page4.3.1.2.png': page4_3_1_2,
  'page4.3.1.3.png': page4_3_1_3,
  'page4.3.1.4.png': page4_3_1_4,
  'page4.3.1.5.png': page4_3_1_5,
  'page4.3.1.6.png': page4_3_1_6,
  'page4.3.1.png': page4_3_1,
  'page4.3.2.1.png': page4_3_2_1,
  'page4.3.2.2.png': page4_3_2_2,
  'page4.3.2.3.png': page4_3_2_3,
  'page4.4.1.png': page4_4_1,
  'page4.5.1.1.png': page4_5_1_1,
  'page4.5.1.2.png': page4_5_1_2,
  'page4.5.1.3.png': page4_5_1_3,
  'page4.5.1.4.png': page4_5_1_4,
  'page4.5.1.png': page4_5_1,
  'page4.5.2.1.png': page4_5_2_1,
  'page4.5.2.2.png': page4_5_2_2,
  'page4.5.2.3.png': page4_5_2_3,
  'page4.5.2.4.png': page4_5_2_4,
  'page4.5.3.1.png': page4_5_3_1,
  'page4.5.3.2.png': page4_5_3_2,
  'page4.5.3.3.png': page4_5_3_3,
  'page4.5.3.4.png': page4_5_3_4,
  'page4.5.3.5.png': page4_5_3_5,
  'page4.5.3.6.png': page4_5_3_6,
  'page4.5.3.7.png': page4_5_3_7,
  'page4.5.3.8.png': page4_5_3_8,
  'page4.5.3.9.png': page4_5_3_9,
  'page4.5.3.10.png': page4_5_3_10,
  'page5.4.1.1.png': page5_4_1_1,
  'page5.4.2.1.png': page5_4_2_1,
  'page5.4.3.1.png': page5_4_3_1,
  'page5.4.4.1.png': page5_4_4_1
};
</script>

<template>
  <MyProject project="PL00WebIDE">
    <MarkdownCell :en="enMarkdown" :zh="zhMarkdown" :urls="urls"></MarkdownCell>
  </MyProject>
</template>

<style scoped></style>

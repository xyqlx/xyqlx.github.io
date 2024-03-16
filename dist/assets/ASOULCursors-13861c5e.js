import{M as e}from"./MyProject-1e418308.js";import{M as r}from"./MarkdownCell-711da591.js";import{m as t,z as o,A as s,C as i,B as a,u as n}from"./index-d06a3c0e.js";import"./tag-5b448513.js";const l=`![logo](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/src/assets/images/icon128.png)\r
\r
## Introduction\r
\r
This is a Chrome extension that switches the mouse cursor based on the website URL. You can set the mouse cursor and matching URLs yourself.\r
\r
![demo](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/banner_5.gif)\r
\r
## Background\r
\r
In 2022, a competition was held in collaboration between Juejin and the virtual idol group A-SOUL. The competition consisted of three tracks: Douyin special effects, Chrome extensions, and computer graphics. This project is a submission for the Chrome extension track.\r
\r
This project won xyqlx two complete sets of collaboration merchandise and one individual item. However, before the end of the competition, the well-known incident of the A-SOUL original member "Carol" graduating occurred, which was regretful.\r
\r
The purpose of this project is to allow A-SOUL fans to switch the mouse cursor based on the websites they browse related to A-SOUL. For example, when browsing A-SOUL member "Diana"'s personal space and livestream on Bilibili, the mouse cursor will change to a "Diana" theme.\r
\r
## Features\r
\r
Click the extension icon in the toolbar or right-click on a blank space on the webpage and select "A-SOUL Cursor Rule Settings" in the menu to open the settings window.\r
\r
Upon installation, the default rules created by the author will be automatically loaded.\r
\r
![Cursor rule settings](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/setting-window.png)\r
\r
The functions of each section are described below.\r
\r
### Enable/Disable\r
\r
In the top-right corner of the settings window, you can select whether to enable the mouse cursor switch.\r
\r
### Add/Edit/Delete Rules\r
\r
- Add Rule: Click the "Add" button to open the rule settings window.\r
- Edit Rule: Click the "Edit" button to open the rule settings window.\r
- Delete Rule: Click the "Delete" button to delete the rule.\r
\r
![Rule editing window](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/rule-window.png)\r
\r
In the rule settings window, you can set the name, matching URLs, and icon information for the rule.\r
\r
- Name: The name of the rule, can be set to any string.\r
- Matching URLs: Prefix-matching URLs for the rule, separated by lines, with no empty line at the end.\r
- Cursor Information: Here, you can specify the image data for the cursor in three states (default, hyperlink, text editing) (supports gif, png, jpeg, cur, etc.), the size of the icon (set width and height or keep the original size), and the position of the icon center (x, y).\r
- Confirm Button: Click the confirm button to save and apply the rule.\r
\r
### Import and Export\r
\r
Pack the saved rules (including cursor image data) into a .gz file to facilitate rule sharing between different users.\r
\r
## build\r
\r
\`\`\`shell\r
npm install\r
npm run build\r
\`\`\`\r
\r
## Project Summary\r
\r
Based on TypeScript, the frontend pages are designed using Ant Design (Angular) and all rule information is saved in IndexedDB.\r
\r
The principle of the cursor pointer is to set the cursor as "none" and create an img element to follow the mouse movement.\r
\r
## Current Issues\r
\r
- The cursor does not follow when dragging the scrollbar within the webpage.\r
- There is a blinking effect when replacing the cursor (e.g., first displaying default and pointer, then blinking and disappearing).\r
- The cursor may not be displayed on interfaces with a z-index of 2147483647.\r
`,u=`![logo](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/src/assets/images/icon128.png)\r
\r
## 介绍\r
\r
根据网页地址切换鼠标指针的Chrome扩展，鼠标指针与匹配网址可以自行设置。\r
\r
![demo](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/banner_5.gif)\r
\r
## 背景\r
\r
2022年掘金与虚拟偶像团体A-SOUL联动举办的比赛，分为三个赛道，分别是抖音特效、Chrome扩展和计算机图形学。本项目为Chrome扩展赛道的参赛作品。\r
\r
这个项目为xyqlx赢得了两份全套联动周边和一份单品，然而在赛程结束之前，发生了众所周知的A-SOUL原成员“珈乐”毕业事件，令人遗憾。\r
\r
本项目初衷是让A-SOUL粉丝（一个魂儿）在浏览A-SOUL相关网站时，根据浏览的网站切换鼠标指针。例如，在B站浏览A-SOUL成员“嘉然”的个人空间和直播间时，鼠标指针会变成“嘉然”主题。\r
\r
## 功能介绍\r
\r
在插件栏单击插件图标，或者在网页空白处右击在菜单中选择\`A-SOUL鼠标指针规则设置\`，可以弹出设置窗口。\r
\r
在安装时会自动加载作者制作的默认规则。\r
\r
![光标规则设置](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/setting-window.png)\r
\r
下面介绍各个部分的功能\r
\r
### 启用/禁用\r
\r
在设置窗口的右上角，可以选择是否启用鼠标指针切换。\r
\r
### 添加/编辑/删除规则\r
\r
- 添加规则：单击添加按钮，弹出规则设置窗口。\r
- 编辑规则：单击编辑按钮，弹出规则设置窗口。\r
- 删除规则：单击删除按钮，删除规则。\r
\r
![规则编辑窗口](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/rule-window.png)\r
\r
规则设置窗口中，可以设置规则的名称、匹配地址、和图标信息。\r
\r
- 名称：规则的名称，可以设置为任意字符串。\r
- 匹配地址：规则的前缀匹配地址，用行分割，结尾不空行。\r
- 光标信息：在这里可以指定光标在三种状态（默认、超链接，文本编辑）下的图片数据（支持gif，png，jpeg，cur等）、图标的大小（设置宽高或者保留原始大小）、图标中心的位置（x,y）。\r
- 确认按钮：点击确认按钮后保存并应用规则。\r
\r
### 导入和导出\r
\r
将保存的规则（包含光标图片数据）打包为.gz文件，实现不同用户之间的规则共享。\r
\r
## build\r
\r
\`\`\`shell\r
npm install\r
npm run build\r
\`\`\`\r
\r
## 项目思路简介\r
\r
基于TypeScript，前端页面采用Ant Design（Angular）设计，在IndexedDB中保存所有的规则信息。\r
\r
光标指针的原理是将cursor设置为none，并创建一个img元素跟随鼠标移动。\r
\r
## 目前的问题\r
\r
- 在拖动网页内部的scrollbar时，光标不会跟随移动\r
- 在替换光标时存在光标闪烁现象（比如先显示default和pointer后闪烁消失）\r
- 在z-index为2147483647的界面可能不会显示\r
`,f=t({__name:"ASOULCursors",setup(c){return(h,d)=>(o(),s(e,{project:"asoul-cursors"},{default:i(()=>[a(r,{en:n(l),zh:n(u)},null,8,["en","zh"])]),_:1}))}});export{f as default};

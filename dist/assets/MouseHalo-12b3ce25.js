import{M as r}from"./MyProject-7350f725.js";import{M as e}from"./MarkdownCell-2eec6931.js";import{m as t,z as o,A as i,C as s,B as a,u as n}from"./index-64cee8c8.js";import"./tag-ecb2b4e0.js";const m=`## Introduction\r
\r
Display the input method's Chinese and English status and copy prompt near the mouse.\r
\r
![demo](https://github.com/xyqlx/MouseHalo/raw/master/images/demo.gif)\r
\r
## Note: This project is provided only in Chinese.\r
\r
## Background\r
\r
The display of Chinese and English status has always been a feature that xyq has wanted to implement, but it has not been implemented due to technical reasons. Recently, with reference to [ImTip](https://github.com/aardio/ImTip), I tried to implement it using WPF.\r
\r
In fact, considering the memory usage and the difficulty of interacting with Win32 APIs, WPF is not a suitable choice.\r
\r
I don't know why sometimes when xyq's PC presses Ctrl+C, it will not copy. So I also added feedback for the clipboard.\r
\r
## Emoji Correspondence Table\r
\r
| emoji | description |\r
| --- | --- |\r
| 🀄 | Chinese |\r
| 🔤 | English |\r
| 📁 | FileDrop |\r
| 🖼 | Bitmap |\r
| 🕸 | Html |\r
| 📗 | Rtf |\r
| 📄 | Text |\r
| ❓︎ | Other situations |\r
\r
## Settings Page\r
\r
![config](https://github.com/xyqlx/MouseHalo/raw/master/images/config.png)\r
\r
## Permissions\r
\r
Running under non-administrator privileges seems to prevent obtaining the input method's status, the specific reason is unknown.\r
\r
The optional startup on boot is implemented through the "Task Scheduler" but can also be managed manually.\r
`,h=`## 介绍\r
\r
在鼠标附近显示输入法中英状态和复制提示。\r
\r
![demo](https://github.com/xyqlx/MouseHalo/raw/master/images/demo.gif)\r
\r
## 背景\r
\r
中英状态显示是xyq一直以来想要实现的功能，但是由于水平原因一直没有实现。近期参考[ImTip](https://github.com/aardio/ImTip)试着用WPF摸了出来。\r
\r
其实从内存占用和Win32 API交互难度考虑WPF并不是合适的选择（\r
\r
不知道为什么xyq的PC按下Ctrl+C有时候不会复制，试着把剪贴板的反馈也做了一下\r
\r
## emoji对应表\r
\r
| emoji | 说明 |\r
| --- | --- |\r
| 🀄 | 中文 |\r
| 🔤 | 英文 |\r
| 📁 | FileDrop |\r
| 🖼 | Bitmap |\r
| 🕸 | Html |\r
| 📗 | Rtf |\r
| 📄 | Text |\r
| ❓︎ | 其他情况 |\r
\r
## 设置页面\r
\r
![config](https://github.com/xyqlx/MouseHalo/raw/master/images/config.png)\r
\r
## 权限\r
\r
在非管理员权限下运行似乎会导致无法获取输入法状态，具体原因未知\r
\r
可选的开机启动是通过“任务计划程序”实现的，也可以自行管理\r
`,y=t({__name:"MouseHalo",setup(l){return(p,c)=>(o(),i(r,{project:"MouseHalo"},{default:s(()=>[a(e,{en:n(m),zh:n(h)},null,8,["en","zh"])]),_:1}))}});export{y as default};

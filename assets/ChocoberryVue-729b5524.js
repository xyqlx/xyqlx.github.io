import{M as e}from"./MyProject-1e418308.js";import{I as t}from"./IFrameCell-012f5f94.js";import{M as i}from"./MarkdownCell-711da591.js";import{m as a,z as s,A as o,C as c,B as r,u as n}from"./index-d06a3c0e.js";import"./tag-5b448513.js";/* empty css             */const l=`## Introduction\r
\r
GPU server monitoring system available in the laboratory.\r
\r
## Note: This project is provided only in Chinese.\r
\r
## Background\r
\r
Similar requirements to nvidia-smi and gpustat.\r
\r
Additional useful features have been added.\r
\r
## About the Backend\r
\r
Developed using Nest.js, but currently in a private state due to security issues.\r
\r
## Features and Technical Details\r
\r
### User Management\r
\r
- User login: Uses JWT, and the access token is saved in the localStorage after login.\r
- User registration: Users can register new accounts when "Open Registration" is enabled (no email verification is provided).\r
- Role management: Administrators can modify the "Open Registration" status.\r
\r
### "Warm Home" Page\r
\r
#### GPU Monitoring\r
\r
Displays the following information for each GPU based on the number of graphics cards:\r
\r
- Graphics card model\r
- Graphics memory usage in size and percentage (process graphics memory usage is differentiated by different colors on the bar)\r
- Graphics card utilization\r
- Information on all processes running on the graphics card\r
\r
Information for each process includes:\r
\r
- Owner username, user ID\r
- Time since the process started running, start time of the process\r
- Process ID, parent process ID\r
- Program name, command line argument, working directory\r
\r
It is also possible to add notifications for process termination from here, as described below.\r
\r
#### Network Traffic Information\r
\r
Displays the processes with the highest network traffic usage, including process ID, username, program name, and sent/received traffic size.\r
\r
#### CPU and Memory Information\r
\r
Displays CPU and memory usage as numbers and provides a tree map showing CPU/memory usage by different processes, using usage as the area.\r
\r
#### Settings\r
\r
Includes methods for mapping colors to each process and settings for the tree map:\r
\r
- Process color saturation/brightness: Algorithm parameters for mapping process ID to color\r
- leafDepth: Depth of the tree map\r
\r
### "Statistics" Page\r
\r
Displays historical information about the server in the form of line graphs, with the option to select a 24-hour or 7-day time range.\r
\r
Includes the following information:\r
\r
- Changes in CPU and memory utilization\r
- Changes in graphics memory usage and utilization for each graphics card\r
\r
### "Notification Rules" Page\r
\r
Displays all notification rules for the current user and allows adding new notification rules or deleting existing ones.\r
\r
Available trigger methods include:\r
\r
- Graphics card utilization change: Triggered when the graphics card is idle or in use. The frequency of triggering can be selected.\r
- Process termination: Triggered when a specific process terminates.\r
- Scheduled: Triggered at a specific time.\r
\r
Available notification methods include:\r
\r
- Email: Sends an email to the registered email address.\r
- Browser notifications: Sends notifications using the Web Notification API. Note that this feature requires HTTPS and user consent.\r
\r
### "User Settings" Page\r
\r
Allows the user to delete their account.\r
\r
If the user is an administrator, they can also modify the "Open Registration" status.\r
\r
## Some Other Technical Details\r
\r
- WebSocket: Uses WebSocket to send notification messages from the backend to the frontend in browser notifications.\r
- Mock Service Worker: Very useful, mainly used here to create a backend-less demo version.\r
- Angular Material: Primarily uses Angular Material components.\r
\r
## Implicit Security Issues\r
\r
Currently, the main security risks are concentrated in the backend, as sensitive information is not controlled when transmitted to the frontend, and there is insufficient vigilance regarding frontend requests.\r
`,d=`## 介绍\r
\r
实验室可用的GPU服务器监控系统\r
\r
## 背景\r
\r
需求类似于nvidia-smi和gpustat\r
\r
增加了其他的一些有用的功能\r
\r
## 关于后端\r
\r
使用Nest.js开发，不过由于安全问题，暂时处于private状态\r
\r
## 功能和技术细节\r
\r
### 用户管理\r
\r
- 用户登录：使用JWT，登录后会在localStorage中保存access token\r
- 用户注册：在\`开放注册\`开启的情况下，用户可以注册新账号（没有提供邮箱验证）\r
- 角色管理：管理员可以修改\`开放注册\`状态\r
\r
### “温暖的家”页面\r
\r
#### GPU监控\r
\r
根据显卡的数量，显示每个显卡的以下信息：\r
\r
- 显卡型号\r
- 显存占用大小与占比（每个进程的显存占用在比例条上采用不同色彩区分）\r
- 显卡使用率\r
- 显卡上运行的所有进程的信息\r
\r
每个进程包括以下信息：\r
\r
- 所属用户名、用户ID\r
- 从运行开始的时间长度、运行开始时间\r
- 进程号、父进程号\r
- 程序名、命令行参数、工作目录\r
\r
还可以从这里添加监听进程结束的通知，见下文\r
\r
#### 网络流量信息\r
\r
显示网络流量占用最大的部分进程，包括进程号，用户名，程序名，发送和接收的流量大小\r
\r
#### CPU和内存信息\r
\r
以数字形式显示CPU和内存的使用率，并且提供一个不同进程CPU/内存占用的tree map，将使用率作为面积显示\r
\r
#### 设置\r
\r
包括为每个进程映射颜色的方法，以及tree map的设置\r
\r
- 进程色彩饱和度/亮度：从进程号映射到颜色的算法参数\r
- leafDepth：tree map的深度\r
\r
### “统计信息”页面\r
\r
这里以折线图形式显示服务器的一些历史信息，可以选择24小时或7天的时间范围\r
\r
包括以下信息：\r
\r
- CPU和内存的变化情况\r
- 每个显卡的显存占用和使用率变化情况\r
\r
### “通知规则”页面\r
\r
这里将会显示本用户的所有通知规则，并且可以添加新的通知规则或者删除已有的通知规则\r
\r
可以选择的触发方式包括：\r
\r
- 显卡占用变动：当显卡空置或者被占用时触发。可以选择触发的次数\r
- 进程结束：当某个进程结束时触发\r
- 定时：选择时间触发\r
\r
可以选择的通知方式包括：\r
\r
- 邮件：发送邮件到注册邮箱\r
- 浏览器通知：使用Web Notification API发送通知，注意此功能需要HTTPS并且用户同意\r
\r
### “用户设置”页面\r
\r
这里可以销毁用户\r
\r
如果用户是管理员，还可以修改\`开放注册\`状态\r
\r
## 一些其他技术细节\r
\r
- WebSocket：在浏览器通知中使用WebSocket从后端发送通知消息到前端\r
- Mock Service Worker：很好用，这里主要用来制作无后端的演示版本\r
- Angular Material：基本上用的是Angular Material的组件\r
\r
## 隐含的安全问题\r
\r
目前而言主要的安全隐患还是集中在后端，一方面没有控制敏感信息向前端的传输，另一方面对于前端的请求不够警惕\r
`,k=a({__name:"ChocoberryVue",setup(m){return(h,u)=>(s(),o(e,{project:"chocoberry"},{default:c(()=>[r(t,{src:"https://xyqlx.github.io/chocoberry-ng/","white-background":!0,scale:1,"transform-scale":.5}),r(i,{en:n(l),zh:n(d)},null,8,["en","zh"])]),_:1}))}});export{k as default};

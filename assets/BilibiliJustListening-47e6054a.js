import{_ as r}from"./MyProject-cc9d09ef.js";import{_ as e}from"./MarkdownCell.vue_vue_type_style_index_0_lang-7e1aad81.js";import{d as t,o as i,g as a,w as s,h as o,f as n}from"./index-477279a9.js";import"./tag-4d8e78b5.js";const l=`## Introduction\r
\r
Accessing Bilibili through the command line using Playwright.\r
\r
![demo](https://raw.githubusercontent.com/xyqlx/BilibiliJustListening/master/images/screenshot1.png)\r
\r
## Background\r
\r
Using the command line to access Bilibili is pretty cool, isn't it? 😎\r
\r
Choosing Playwright is because simulating a browser might be more secure (although it actually comes with many challenges and feels not so great...).\r
\r
## How to Use\r
\r
### Build\r
\r
\`\`\`bash\r
git clone https://github.com/xyqlx/BilibiliJustListening\r
cd BilibiliJustListening\r
dotnet build -c Release\r
\`\`\`\r
\r
### Run\r
\r
\`\`\`bash\r
dotnet run\r
# maybe you need to follow the prompts to install playwright\r
\`\`\`\r
\r
### Commands\r
\r
You can just enter the prefix of a command.\r
\r
| Command | Description | Example |\r
| --- | --- | --- |\r
| help | Show help | help |\r
| exit | Exit the program | exit |\r
| search | Search videos based on keywords | search gemstone |\r
| leftpage | Previous search page | leftpage |\r
| rightpage | Next search page | rightpage |\r
| play | Play a video based on video ID/video link/search result index/keywords | play BV1TJ411a7WV |\r
| recommand | Show current recommended videos | recommand |\r
| screenshot | Show screenshots | screenshot |\r
| latest | Show the latest videos of an uploader | latest 603474  |\r
| popular | Show the hottest videos of an uploader | popular 603474 |\r
| time | Show the time since the last playback started | time |\r
| live | Enter a live room | live 33989 |\r
| rank | Show the rankings | rank music |\r
| clear | Clear the screen | clear |\r
\r
## Configuration File\r
\r
Create a \`config.json\` in the same directory as the executable file.\r
\r
\`\`\`json\r
{\r
  "proxy": {\r
    "server": "http://example.com:8080"\r
  },\r
  "headless": true\r
}\r
\`\`\`\r
\r
If you don't need a proxy, you can omit the \`proxy\` field.\r
\r
When \`headless\` is set to false, a browser window will be displayed for easier debugging.\r
\r
## Tech Stack\r
\r
Primarily implemented using Playwright.\r
\r
Spectre.Console provides rich text support for the command line interface.\r
\r
## Issues\r
\r
### Captcha\r
\r
Accessing web pages may require inputting a captcha, especially when accessing from outside of China. This situation is currently not handled.\r
\r
### Login Popup Window\r
\r
This situation will attempt to close the window automatically, which may cause the video playback to stutter for a moment.\r
\r
### Auto Pausing of Video Playback\r
\r
This issue may occur after playing for a long time.\r
\r
### Regarding Search Page Numbers\r
\r
Since the search results are limited to 20 items, adjacent search pages may not be sequential.\r
\r
### Errors\r
\r
You will get used to them. (laughs)\r
\r
However, there is an error xyq often encounters but doesn't know how to solve, and it goes like this:\r
\r
\`\`\`text\r
Unhandled exception. Microsoft.Playwright.PlaywrightException: System.InvalidOperationException: Cannot read incomplete UTF-16 JSON text as string with missing low surrogate.\r
   at System.Text.Json.ThrowHelper.ThrowInvalidOperationException_ReadIncompleteUTF16()\r
\`\`\`\r
\r
Based on the subsequent error position, it can be seen that this error occurs when calling methods like GetAttribute from Playwright, and it throws an exception within Playwright while using System.Text.Json.\r
\r
Literally, this bug is quite annoying. For example, when playing videos automatically, this issue may suddenly occur, causing the program to crash. Additionally, it cannot be handled simply by catching the exception because after triggering this problem, Playwright will be in a corrupted state and unable to perform other operations. Furthermore, when performing actions such as searching or retrieving rankings, if one video's title does not meet the requirements, the entire program will fail to display the results and crash.\r
\r
So, under which circumstances will this issue occur?\r
\r
One possible cause is 𝓞𝓷𝓮 𝓚𝓲𝓼𝓼, such as BV1yR4y1C7KX or BV1tC4y1Z7ti. A simple way to reproduce this issue is to play them.\r
\r
## Expectations\r
\r
xyqlx thinks that features such as video collections (including accessing stars and collections) and automatic search (perhaps integrated with GPT?) would be interesting.\r
\r
From a record-keeping perspective, preserving the browsing history is also a good idea.\r
`,h=`## 介绍\r
\r
在命令行中用Playwright访问哔哩哔哩\r
\r
![demo](https://raw.githubusercontent.com/xyqlx/BilibiliJustListening/master/images/screenshot1.png)\r
\r
## 背景\r
\r
不觉得用命令行访问哔哩哔哩很酷吗😎\r
\r
选择用Playwright是因为模拟浏览器看起来也许会比较安全（然而实际上会踩很多坑，感觉弗如……）\r
\r
## 如何使用\r
\r
### build\r
\r
\`\`\`bash\r
git clone https://github.com/xyqlx/BilibiliJustListening\r
cd BilibiliJustListening\r
dotnet build -c Release\r
\`\`\`\r
\r
### 运行\r
\r
\`\`\`bash\r
dotnet run\r
# maybe you need to follow the prompts to install playwright\r
\`\`\`\r
\r
### 命令\r
\r
可以只输入命令的前缀\r
\r
| 命令 | 说明 | 示例 |\r
| --- | --- | --- |\r
| help | 显示帮助 | help |\r
| exit | 退出程序 | exit |\r
| search | 根据关键词搜索视频 | search 宝石 |\r
| leftpage | 上一个搜索页 | leftpage |\r
| rightpage | 下一个搜索页 | rightpage |\r
| play | 从视频ID/视频链接/搜索结果序号/关键词播放视频 | play BV1TJ411a7WV |\r
| recommand | 显示当前推荐视频 | recommand |\r
| screenshot | 显示截图 | screenshot |\r
| latest | 显示UP主的最新视频 | latest 603474  |\r
| popular | 显示UP主的最热视频 | popular 603474 |\r
| time | 显示自上次开始播放的时间 | time |\r
| live | 进入直播间 | live 33989 |\r
| rank | 显示排行榜 | rank music |\r
| clear | 清空屏幕 | clear |\r
\r
## 配置文件\r
\r
在可执行文件的同目录下创建\`config.json\`\r
\r
\`\`\`json\r
{\r
  "proxy": {\r
    "server": "http://example.com:8080",\r
  },\r
  "headless": true\r
}\r
\`\`\`\r
\r
如果不需要代理，可以不写\`proxy\`字段\r
\r
headless为false时，会显示浏览器窗口便于调试\r
\r
## 技术栈\r
\r
基本上通过Playwright实现\r
\r
Spectre.Console为命令行界面提供了富文本支持\r
\r
## 问题\r
\r
### 验证码\r
\r
跳转到网页可能需要输入验证码，特别是IP不在国内的情况下。目前无法处理这种情况\r
\r
### 弹出登录窗口\r
\r
这种情况会尝试自动关闭窗口，目前会导致播放卡顿一下\r
\r
### 自动播放暂停\r
\r
播放时间够长也许就会出现这种情况\r
\r
### 关于搜索页码\r
\r
由于搜索结果会限制显示20项，所以相邻的搜索页可能并不是连续的\r
\r
### 报错\r
\r
习惯就好啦（\r
\r
不过有一个错误xyq经常遇到但是并不知道怎么解决，这个错误是这样的：\r
\r
\`\`\`text\r
Unhandled exception. Microsoft.Playwright.PlaywrightException: System.InvalidOperationException: Cannot read incomplete UTF-16 JSON text as string with missing low surrogate.\r
   at System.Text.Json.ThrowHelper.ThrowInvalidOperationException_ReadIncompleteUTF16()\r
\`\`\`\r
\r
根据其后报错位置可以看出大概是在调用PlayWright的GetAttribute等方法时，在PlayWright内部使用System.Text.JSON时抛出异常\r
\r
查了下字面意思上这是由于JSON数据在编码上出现错误，UTF-16的每个字符可能由多个码元组成，而上面的这个错误指的是缺失了一部分码元\r
\r
这个BUG还是相当恶心的，比如说在自动播放视频时，可能就会突然出现这个问题闪退。并且这个用简单的捕获异常还无法处理，因为在触发此问题后，PlayWright就会处于损坏状态，无法执行其他操作。还有就是在搜索/获取排行榜等操作执行完毕时，如果有一个视频的标题不符合要求就会整个都无法显示然后闪退\r
\r
那么在遇到哪些视频的时候会出现这个问题呢？\r
\r
𝓞𝓷𝓮 𝓚𝓲𝓼𝓼可能是触发这一问题的一种方式，比如说BV1yR4y1C7KX，BV1tC4y1Z7ti，一个简单的复现方式就是播放它\r
\r
## 期望\r
\r
xyq认为视频集（包括访问收藏夹，合集等等）和自动搜索（也许可以集成gpt？）是比较有意思的功能\r
\r
从记录的角度看，保留访问历史也是一个不错的主意\r
`,w=t({__name:"BilibiliJustListening",setup(c){return(p,u)=>(i(),a(r,{project:"BilibiliJustListening"},{default:s(()=>[o(e,{en:n(l),zh:n(h)},null,8,["en","zh"])]),_:1}))}});export{w as default};

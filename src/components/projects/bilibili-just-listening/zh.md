## 介绍

在命令行中用Playwright访问哔哩哔哩

![demo](https://raw.githubusercontent.com/xyqlx/BilibiliJustListening/master/images/screenshot1.png)

## 背景

不觉得用命令行访问哔哩哔哩很酷吗😎

选择用Playwright是因为模拟浏览器看起来也许会比较安全（然而实际上会踩很多坑，感觉弗如……）

## 如何使用

### build

```bash
git clone https://github.com/xyqlx/BilibiliJustListening
cd BilibiliJustListening
dotnet build -c Release
```

### 运行

```bash
dotnet run
# maybe you need to follow the prompts to install playwright
```

### 命令

可以只输入命令的前缀

| 命令 | 说明 | 示例 |
| --- | --- | --- |
| help | 显示帮助 | help |
| exit | 退出程序 | exit |
| search | 根据关键词搜索视频 | search 宝石 |
| leftpage | 上一个搜索页 | leftpage |
| rightpage | 下一个搜索页 | rightpage |
| play | 从视频ID/视频链接/搜索结果序号/关键词播放视频 | play BV1TJ411a7WV |
| recommand | 显示当前推荐视频 | recommand |
| screenshot | 显示截图 | screenshot |
| latest | 显示UP主的最新视频 | latest 603474  |
| popular | 显示UP主的最热视频 | popular 603474 |
| time | 显示自上次开始播放的时间 | time |
| live | 进入直播间 | live 33989 |
| rank | 显示排行榜 | rank music |
| clear | 清空屏幕 | clear |

## 配置文件

在可执行文件的同目录下创建`config.json`

```json
{
  "proxy": {
    "server": "http://example.com:8080",
  },
  "headless": true
}
```

如果不需要代理，可以不写`proxy`字段

headless为false时，会显示浏览器窗口便于调试

## 技术栈

基本上通过Playwright实现

Spectre.Console为命令行界面提供了富文本支持

## 问题

### 验证码

跳转到网页可能需要输入验证码，特别是IP不在国内的情况下。目前无法处理这种情况

### 弹出登录窗口

这种情况会尝试自动关闭窗口，目前会导致播放卡顿一下

### 自动播放暂停

播放时间够长也许就会出现这种情况

### 关于搜索页码

由于搜索结果会限制显示20项，所以相邻的搜索页可能并不是连续的

### 报错

习惯就好啦（

不过有一个错误xyq经常遇到但是并不知道怎么解决，这个错误是这样的：

```text
Unhandled exception. Microsoft.Playwright.PlaywrightException: System.InvalidOperationException: Cannot read incomplete UTF-16 JSON text as string with missing low surrogate.
   at System.Text.Json.ThrowHelper.ThrowInvalidOperationException_ReadIncompleteUTF16()
```

根据其后报错位置可以看出大概是在调用PlayWright的GetAttribute等方法时，在PlayWright内部使用System.Text.JSON时抛出异常

查了下字面意思上这是由于JSON数据在编码上出现错误，UTF-16的每个字符可能由多个码元组成，而上面的这个错误指的是缺失了一部分码元

这个BUG还是相当恶心的，比如说在自动播放视频时，可能就会突然出现这个问题闪退。并且这个用简单的捕获异常还无法处理，因为在触发此问题后，PlayWright就会处于损坏状态，无法执行其他操作。还有就是在搜索/获取排行榜等操作执行完毕时，如果有一个视频的标题不符合要求就会整个都无法显示然后闪退

那么在遇到哪些视频的时候会出现这个问题呢？

𝓞𝓷𝓮 𝓚𝓲𝓼𝓼可能是触发这一问题的一种方式，比如说BV1yR4y1C7KX，BV1tC4y1Z7ti，一个简单的复现方式就是播放它

## 期望

xyq认为视频集（包括访问收藏夹，合集等等）和自动搜索（也许可以集成gpt？）是比较有意思的功能

从记录的角度看，保留访问历史也是一个不错的主意

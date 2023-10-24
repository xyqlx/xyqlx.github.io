import{_ as c}from"./MyProject-cc9d09ef.js";import{_ as d}from"./MarkdownCell.vue_vue_type_style_index_0_lang-7e1aad81.js";import{d as o,t as l,o as a,c as h,f as n,g as p,w as f,h as s}from"./index-477279a9.js";import"./tag-4d8e78b5.js";const u=`## Introduction\r
\r
Records tool for xyqlx.\r
\r
## Background\r
\r
The recording tool only implemented a small part of the excessive inspiration it contained. It may be xyqlx's largest and longest frontend project, with over 10,000 lines of code. However, it is not difficult to manage because some modules are on the same level.\r
\r
Recently, some initial ideas have become outdated due to the growth of experience and the development of natural language models.\r
\r
It is not open source. It is a purely personal project that is not intended to serve general needs and has very little value.\r
\r
## What is it\r
\r
### Introduction to underlying settings\r
\r
Taking a normal text record (such as a diary) as an example, we can consider it as a Note type. The properties of this Note include:\r
\r
* id\r
* type (Note)\r
* creation time\r
* last modified time\r
* title\r
* tags\r
* content\r
\r
The content can consist of multiple Passage types, and the content of a Passage can consist of multiple Paragraphs. The content of a Paragraph can consist of multiple Sentences. A Sentence is the smallest unit, and its content consists of multiple words. Each word has a property that represents its content as a string and its modifiers.\r
\r
These types are collectively referred to as Candies. xyqlx uses MongoDB to store this data. The specific storage method is to store all Candies in a collection, with each Candy having a unique id, which is used to reference each other.\r
\r
This fine-grained format is convenient for special annotations of a specific part of a record (such as emphasis or links). When the input is plain text, xyqlx uses line breaks and Jieba word segmentation to convert it into the format in the database. The reverse conversion is easier to implement.\r
\r
PS: Considering the development trend of natural language processing represented by GPT, this word-based recording method has obvious disadvantages. xyqlx is considering whether to store large sections of text together and use external information to achieve fine-grained annotations.\r
\r
Of course, since it is so fine-grained, it is obviously not limited to plain text. In order to create multimedia types of Candies, xyqlx needs to standardize the resources used in all notes. The information of these resources is saved as Activities in the database. The following image shows some types of Activities.\r
\r
![Activities](./activities.png)\r
\r
That's all for the introduction. It is obvious that this complex system requires diligent annotations to be effective. This is also the reason why xyqlx has been trying to improve the overall structure. The purpose of creating this toy is not to increase one's workload.\r
\r
So, why not use existing note-taking software?\r
\r
In fact, OneNote is a good choice. It was also the only designated note-taking tool for xyqlx in the early days. It was abandoned because Microsoft stopped supporting the freely exportable local version of OneNote, and because it lacked certain features (such as tags). xyqlx's research on the OneNote program interface and note format was basically conducted at this time.\r
\r
Most other software is based on Markdown, and xyqlx has no objections to this format. However, due to the influence of OneNote, xyqlx is very persistent in recording the input time of each sentence. However, Markdown does not support this operation (PS: Setting aside the significance of this data, it now appears that there are alternatives).\r
\r
Although Candies is a relatively unsuccessful work, in a positive sense, it has at least preserved some fragments of xyqlx's life. xyqlx is a very forgetful person and believes that memory constitutes the existence of "self". What was the past self like? What forgotten things did it experience in the past? What meaningless thoughts did it have? Only the "present self" would be interested in these things. That is the value of Candies.\r
\r
### Functions\r
\r
* View Recent Notes\r
* Filter Notes based on tags or search terms\r
* Add Note as plain text\r
* Viewing, Adding, Editing, and Modifying Activities\r
* Tag Notes\r
\r
### Version Name\r
\r
The UI has been updated, but unfortunately, the interface of the first version of Candies was not preserved. The current version is named "Transparent Hairpin" and matches the interface style.\r
\r
The previous version was named "Strawberry Cake".\r
\r
## Tech Stack\r
\r
Frontend: Angular\r
Backend: ASP.NET\r
Database: MongoDB\r
`,g=`## 介绍\r
\r
xyqlx的记录工具\r
\r
## 背景\r
\r
寄托了过多的灵感然而仅仅实现了很小一部分的记录工具\r
\r
可能是xyq最大和时间最长的前端项目，超过了10000行代码，不过因为有些模块是平级的，并没有那么难以管理\r
\r
最近，由于经验的增长与自然语言模型的发展，起初的一些想法已经过时\r
\r
不开源。因为是不为通用需求服务的、也没什么价值的、纯粹的个人项目\r
\r
## 这是什么\r
\r
### 底层设定介绍\r
\r
以一个普通的文本记录（例如日记）为例，我们可以把它视作一个Note类型，这个Note的属性包括：\r
\r
* id\r
* 类型（Note）\r
* 创建时间\r
* 最后修改时间\r
* 标题\r
* 标签\r
* 内容\r
\r
内容可以是若干Passage类型，Passage的内容可以是若干Paragraph，Paragraph的内容可以是若干Sentence。Sentence是最小的单位，它的内容是若干个词汇，每个词汇的属性是一个代表内容的字符串和这个词汇的修饰符\r
\r
这些类型统称为Candies。xyq用MongoDB来存储这些数据，具体的存储方式是将所有Candies存储在一个集合中，每个Candy有唯一的id，并且通过这些id来相互引用\r
\r
这样细粒度的格式比较方便对记录的某个部分进行特殊的标注（例如强调，链接等）。当输入为纯文本时，xyq用分行和Jieba分词来将其转换为数据库中的格式，反向转换则更容易实现\r
\r
PS：考虑到GPT的流行代表的自然语言处理发展趋势，这种以词汇为单位的记录方式缺点也很明显。xyq在考虑是否应该将大段文字存放在一起，使用外置信息来实现细粒度标注\r
\r
当然，都这么细粒度了，那么显然不可能仅支持纯文本。为了创造多媒体类型的Candies，xyq需要统一所有笔记中使用的资源。这些资源的信息作为Activities保存到数据库中，下图是一些Activities的类型\r
\r
![Activities](activities.png)\r
\r
介绍就到此为止。显然可以注意到这个繁杂的系统需要勤劳的标注才能发挥作用，这也是xyq一直想改进整体结构的原因，制作这个玩具的目的可不是为了增加自己的工作量啊\r
\r
那么，为什么不使用现有的笔记软件呢？\r
\r
其实OneNote是不错的选择，它也是xyq早期的唯一指定笔记工具。弃用的原因是Microsoft停止支持本地版自由导出的OneNote，以及某些功能（例如标签）的缺失。xyq对OneNote程序接口使用和笔记格式的研究基本上是在这个时候进行的\r
\r
其他的软件大部分是基于Markdown的，xyq对这种格式毫无意见，但是因为受OneNote的影响，xyq非常执着于记录每句话的输入时间，然而Markdown并不支持这种操作（PS：抛开这个数据的意义不谈，现在看来还是有替代方案的）\r
\r
虽然Candies是相对失败的作品，但是从好的意义上讲，至少它成功保留了xyq生活的一些片段。xyq是一个非常健忘的人，也笃信记忆组成了“自我”的存在。过去的自己是怎样的呢，经历了哪些未来会遗忘的事情呢，会有哪些无意义的思考呢，这种事也就只有现在的自己才会感兴趣吧，这就是Candies的价值所在\r
\r
### 功能\r
\r
* 查看最近的Notes\r
* 根据标签或搜索词筛选Notes\r
* 以纯文本的形式添加Note\r
* 查看、添加、编辑与修改Activities\r
* 给Notes标记tag\r
\r
### 版本名称\r
\r
UI经过了一次更新，很可惜并没有保存第一版Candies的界面。现在的版本名称是“透明发卡”，和界面风格是匹配的\r
\r
此前的版本名称是“草莓蛋糕”\r
\r
## 技术栈\r
\r
前端Angular，后端ASP.NET，数据库MongoDB\r
`,m=["src"],y=o({__name:"VideoCell",props:{src:{}},setup(t){const e=t,{src:r}=l(e);return(i,v)=>(a(),h("video",{src:n(r),controls:"",autoplay:"",loop:"",muted:""},null,8,m))}});const x="/assets/activities-e72f3b60.png",N=o({__name:"CandiesVue",setup(t){const e={"activities.png":x};return(r,i)=>(a(),p(c,{project:"candies"},{default:f(()=>[s(y,{src:"https://github.com/xyqlx/xyqlx.github.io/assets/40012783/29eb14a5-6330-473c-96b5-5da5ae0b2316"}),s(d,{en:n(u),zh:n(g),urls:e},null,8,["en","zh"])]),_:1}))}});export{N as default};

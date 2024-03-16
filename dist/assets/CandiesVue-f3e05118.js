import{M as r}from"./MyProject-1e418308.js";import{M as o}from"./MarkdownCell-711da591.js";import{V as a}from"./VideoCell-a32e704e.js";import{m as s,z as i,A as d,C as c,B as e,u as n}from"./index-d06a3c0e.js";import"./tag-5b448513.js";const l=`## Introduction\r
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
### About Note Synchronization\r
\r
Since it is a practical tool, there is a need for multi-device usage. For small-scale projects, the simplest solution is to use a cloud server/cloud database to store data. Since this project is developed for personal use, cloud storage is also a convenient option. The initial version used Google Drive as the data storage, but later switched to OneDrive. The advantage of OneDrive is that it can directly read and write data from the file system without the need to manually handle device offline issues.\r
\r
As a note-taking tool that supports offline operations, certain measures need to be taken to ensure the consistency of data across different devices. Currently, the approach taken by Candies when there are data updates is roughly as follows:\r
\r
1. Update the local MongoDB note database.\r
2. Add the data update as an operation record to the local MongoDB operation record database.\r
3. At regular intervals or manually triggered, perform a "synchronization" by exporting all operation records as data files and clearing them, then upload them to the device-specific folder on the cloud storage.\r
4. The "synchronization" process will also retrieve the latest unimported operation records from other devices on the cloud storage, read them, and update the local MongoDB note database.\r
5. After the "synchronization" is completed, update the timestamp of the latest operation record for each device.\r
\r
Some early designs for synchronization had issues such as missing data and old operations overwriting new operations. This approach has been running stable for a year and a half at the time of writing this section, and no significant errors have been encountered so far.\r
\r
### Version Name\r
\r
The UI has been updated, but unfortunately, the interface image of the first version of Candies was not preserved. The current version is named "Transparent Hairpin" and matches the interface style.\r
\r
The previous version was named "Strawberry Cake".\r
\r
## Tech Stack\r
\r
Frontend: Angular\r
Backend: ASP.NET\r
Database: MongoDB\r
`,h=`## 介绍\r
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
### 关于如何实现笔记的同步\r
\r
既然是实用性的工具，那么当然存在多设备使用的需求。对于小型项目来说，最简单的方案是使用云服务器/云数据库保存数据。因为这个项目是为个人开发的，所以网盘也是一个方便的可选项。最早版本使用Google Drive作为数据存储，后来改用了OneDrive。OneDrive的优点是可以直接从文件系统读写数据，且不需要手动处理设备离线等问题。\r
\r
作为一个支持离线操作的笔记工具，需要采取一定措施保证不同设备上数据的一致性，目前candies在有数据更新时的方案大致是这样的：\r
\r
1. 更新本地的MongoDB笔记数据库\r
2. 把数据更新作为一条操作记录添加到本地的MongoDB操作记录数据库\r
3. 每隔一段时间或者手动触发，执行“同步”，将所有操作记录导出为数据文件并清空，上传到网盘上的设备名文件夹下\r
4. “同步”还会从网盘上检索其他设备最新的未导入操作记录，读取并更新本地的MongoDB笔记数据库\r
5. “同步”结束后更新每个设备的最新操作记录时间\r
\r
早期设计的一些同步方案出现过遗漏、旧操作覆盖新操作的问题，此方案截至撰写本部分时已经稳定运行1年半，目前还未出现明显错误\r
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
`,p="/assets/activities-e72f3b60.png",b=s({__name:"CandiesVue",setup(u){const t={"activities.png":p};return(f,g)=>(i(),d(r,{project:"candies"},{default:c(()=>[e(a,{src:"https://github.com/xyqlx/xyqlx.github.io/assets/40012783/29eb14a5-6330-473c-96b5-5da5ae0b2316"}),e(o,{en:n(l),zh:n(h),urls:t},null,8,["en","zh"])]),_:1}))}});export{b as default};

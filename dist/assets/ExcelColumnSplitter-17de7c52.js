import{M as r}from"./MyProject-fb3fa109.js";import{M as t}from"./MarkdownCell-5aeeb348.js";import{m as i,z as s,A as a,C as o,B as l,u as n}from"./index-3dad54d1.js";import"./tag-cb395b6c.js";const c=`## Introduction\r
\r
An Excel plugin that helps with column and row splitting.\r
\r
![demo](demo.png)\r
\r
## Note: This project is provided only in Chinese.\r
\r
## Background\r
\r
Excel is still widely used in some places for data processing, and there are data formats that are more suitable for humans than machines.\r
\r
xyqlx will first try to use Excel for processing (in fact, the functions of this tool can all be implemented through PowerQuery), and then consider using Python to process the table as a CSV.\r
\r
As for why xyqlx wrote an Excel plugin, it is because ordinary users resist the above two methods.\r
\r
This tool only provides an optional solution. Based on xyqlx's experience, various strange formats, such as inconsistent full-width and half-width characters, and meaningless white spaces, will also appear in real-life scenarios.\r
\r
The underlying framework of this project, VSTO, is a technology that is becoming outdated, and even the GUI defaults to WinForm. xyqlx chose this instead of Web add-ins because it is too complicated to publish.\r
\r
## Features\r
\r
### Core Features\r
\r
Processing data like this:\r
\r
| Role | Abilities |\r
| --- | --- |\r
| sanae | Cooking(Lv.1),Combat(Lv.3),Conversation(Lv.3) |\r
| daiyosei | Gathering(Lv.3),Fishing(Lv.1) |\r
\r
And converting it to the following format:\r
\r
| Role | Ability | Level |\r
| --- | --- | --- |\r
| sanae | Cooking | 1 |\r
| sanae | Combat | 3 |\r
| sanae | Conversation | 3 |\r
| daiyosei | Gathering | 3 |\r
| daiyosei | Fishing | 1 |\r
\r
Or in column format:\r
\r
| Role | Ability1 | Level1 | Ability2 | Level2 | Ability3 | Level3 |\r
| --- | --- | --- | --- | --- | --- | --- |\r
| sanae | Cooking | 1 | Combat | 3 | Conversation | 3 |\r
| daiyosei | Gathering | 3 | Fishing | 1 | | |\r
\r
Although the above functions can be easily achieved using Excel itself, this plugin may save some operations.\r
\r
The key steps of the operation are divided into two parts:\r
\r
1. Splitting: Split the content of each cell into multiple parts based on the specified delimiter (e.g., comma).\r
2. Extraction: Extract multiple values for each split part according to certain rules.\r
\r
### Preview\r
\r
The plugin will attempt to find the first non-empty cell as an example and display the resulting split rows.\r
\r
### Handling Empty Cells\r
\r
Before splitting, you can select "Skip Empty Inputs" to skip rows with empty cells.\r
\r
The option "Skip when all extracted items are empty" is triggered after the extraction process. If all values extracted from a split part are empty, then the saving of that split part will be skipped.\r
\r
### Post-processing\r
\r
After the extraction is completed, you can further process the extracted results. Currently, only the function of extracting provinces is supported.\r
\r
### Filtering Duplicates\r
\r
This feature is for cases where it is required to discard a split part if it conflicts with a previous column. For example:\r
\r
| Role | Talent Ability | Ability List |\r
| --- | --- | --- |\r
| sanae | Conversation | Cooking(Lv.1),Combat(Lv.3),Conversation(Lv.3) |\r
| daiyosei | Gathering | Gathering(Lv.3),Fishing(Lv.1) |\r
\r
If you only want to save non-talent abilities, you can click on the "Filter Duplicates" text box to select the target column to compare against.\r
\r
### Limiting Extraction Results\r
\r
This is basically limiting the number of splits, but here, it considers the case where some split parts may be filtered out during the process.\r
\r
### Presets\r
\r
If you have a fixed file format to process, you can save the parameters of a split in the "Splitting Wizard" window and load them in the "Presets" window.\r
\r
PS: The default save path for presets is \`C:\\Users\\[username]\\AppData\\Local\\Apps\\2.0\\Data\\[something]\\[something else]\\exce..vsto_...\\Data\\[excel version]\`.\r
\r
## Current Issues\r
\r
* Has not been tested with non-text content in the table, it will likely cause issues.\r
* Only applicable if the table starts from the first row.\r
\r
## TODO\r
\r
* Support starting from any row.\r
* Allow presets to be applied to multiple files in batch.\r
\r
## Others\r
\r
Since I haven't written any unit tests or tried many test cases, there may be many bugs. Feedback is welcome.\r
`,p=`## 介绍\r
\r
帮助分列与分行的Excel插件\r
\r
![demo](demo.png)\r
\r
## 背景\r
\r
一些地方仍然采用Excel集中进行数据处理，并且会出现适用于人类而非机器的数据格式\r
\r
xyq本人会先尝试用Excel来处理（例如本工具的功能其实都能通过PowerQuery实现），然后考虑将表格当做csv用Python处理\r
\r
至于为什么要写一个Excel插件，这是因为普通用户抗拒上面的两种方法\r
\r
本工具仅提供一种可选的解决方案，按照xyq的经验，现实场景中这种Excel同时还会出现各种奇怪的格式，比如说全半角不统一，意义不明的空白符等问题\r
\r
本项目的基础框架VSTO属于是正在过时的技术，甚至GUI默认都是WinForm，xyq选择这个而非Web add-ins是因为那个发布起来太麻烦了\r
\r
## 功能介绍\r
\r
### 核心功能\r
\r
处理类似这样的数据：\r
\r
| 角色 | 能力列表 |\r
|---|---|\r
| sanae | 料理(Lv.1),战斗(Lv.3),话术(Lv.3) |\r
| daiyosei | 采集(Lv.3),钓鱼(Lv.1) |\r
\r
将其转换为下面的数据：\r
\r
| 角色 | 能力 | 等级 |\r
|---|---|---|\r
| sanae | 料理 | 1 |\r
| sanae | 战斗 | 3 |\r
| sanae | 话术 | 3 |\r
| daiyosei | 采集 | 3 |\r
| daiyosei | 钓鱼 | 1 |\r
\r
或者是分列的形式：\r
\r
| 角色 | 能力1 | 等级1 | 能力2 | 等级2 | 能力3 | 等级3 |\r
|---|---|---|---|---|---|---|\r
| sanae | 料理 | 1 | 战斗 | 3 | 话术 | 3 |\r
| daiyosei | 采集 | 3 | 钓鱼 | 1 | | |\r
\r
虽然用Excel本身就能轻易做到以上功能，但是此插件也许可以节约一些操作数。\r
\r
操作的关键步骤分为两步：\r
\r
1. 分隔。按照给出的分隔符（比如逗号之类）将每个单元格的内容分隔为多个部分\r
2. 提取。对于每个分隔出的部分，按照一定的规则提取出多个内容\r
\r
### 预览\r
\r
插件会试图寻找第一个非空单元格作为示例，显示此部分的分行结果\r
\r
### 空白处理\r
\r
在分隔之前，可以选中“不处理空白输入”跳过那些单元格为空的行\r
\r
“当所有提取项结果为空时，跳过”这个选项在完成提取处理之后触发，如果某个分隔部分提取出的所有值都是空值，那么会跳过这个分隔部分的保存\r
\r
### 后处理\r
\r
在完成提取后，可以对提取结果进行进一步处理。目前支持的后处理仅有提取省份功能\r
\r
### 过滤重复项\r
\r
此功能面向的需求是要求提取出项目与前面某一列冲突时，应当废弃此分隔部分。举个例子：\r
\r
| 角色 | 天赋能力 | 能力列表 |\r
|---|---|---|\r
| sanae | 话术 | 料理(Lv.1),战斗(Lv.3),话术(Lv.3) |\r
| daiyosei | 采集 | 采集(Lv.3),钓鱼(Lv.1) |\r
\r
只想保存非天赋能力的话，可以点击“过滤重复项”文本框来选中需要比较的目标列\r
\r
### 限制提取结果数量\r
\r
其实就是限制分隔次数，不过这里考虑在处理过程中会过滤掉某些分隔部分的情况\r
\r
### 预设\r
\r
如果你有固定的文件格式需要处理，那么可以在“分列向导”这个窗口中保存某次分列的参数，并且在“预设”窗口中加载\r
\r
PS：预设的默认保存路径是\`C:\\Users\\[username]\\AppData\\Local\\Apps\\2.0\\Data\\[something]\\[something else]\\exce..vsto_...\\Data\\[excel version]\`\r
\r
## 目前问题\r
\r
* 没有测试过表格中包含非文本内容的情况，大概率会出问题\r
* 仅适用于表格从第一行开始\r
\r
## TODO\r
\r
* 支持从任意行开始\r
* 可将预设批量应用于多个文件\r
\r
## 其他\r
\r
因为没写单元测试什么的也没有试很多用例所以可能有很多bug，欢迎反馈\r
`,h="/assets/demo-a19456ad.png",x=i({__name:"ExcelColumnSplitter",setup(d){const e={"demo.png":h};return(m,u)=>(s(),a(r,{project:"ExcelColumnSplitter"},{default:o(()=>[l(t,{en:n(c),zh:n(p),urls:e},null,8,["en","zh"])]),_:1}))}});export{x as default};

import{M as n}from"./MyProject-248cf98e.js";import{I as r}from"./IFrameCell-591a6508.js";import{M as a}from"./MarkdownCell-a95f2c78.js";import{m as o,z as i,A as s,C as l,B as e,u as t}from"./index-c1c3f66c.js";import"./tag-89837a44.js";const h=`## Introduction\r
\r
Undergraduate course project that utilizes genetic algorithm to visualize the maximum value within a function interval on a web page.\r
\r
## Background\r
\r
This might be one of the earliest projects by xyqlx that showcased visualization on a web page and was shared on a public code repository.\r
\r
At that time, xyqlx simply used the code repository as a static web page hosting service, so only the "dist" folder of Vue was uploaded, without the source code.\r
\r
By the way, I've been a Vue developer for 4 years now :)\r
\r
## Usage\r
\r
There are two aspects that can be modified:\r
\r
* Problem definition: including the function expression f(x) and the interval [a, b].\r
* Genetic algorithm parameters: including population size, chromosome length, number of generations, crossover count, crossover probability, mutation probability, and fitness offset.\r
\r
The maximum value textbox is actually a read-only textbox used to display the current maximum value.\r
\r
The two charts on the right side are relatively easy to understand. The chart on the left displays the function graph within the domain, while the chart on the right displays the iterative results.\r
\r
The "Calculate" button below is actually redundant because as soon as the parameters are modified, the calculation will start automatically.\r
\r
## Issue\r
\r
Upon testing, there is actually a bug where the display of the function graph has issues. It might be due to incomplete refreshing of the original data when recalculating the function values.\r
`,c=`## 介绍\r
\r
本科课设，使用遗传算法求解函数区间内最大值的可视化网页。\r
\r
## 背景\r
\r
可能是xyq最早的用网页可视化的方式展示项目、并且发到公开代码仓库的作品。\r
\r
当时xyq只是把代码仓库当做静态网页托管服务使用，所以甚至只上传了vue的dist文件夹，没有源代码。\r
\r
这么说来，我也是4年老Vue开发者了（喜）\r
\r
## 使用方法\r
\r
可以修改包括两个方面：\r
\r
* 问题定义：包括函数表达式f(x)以及区间[a,b]\r
* 遗传算法参数：包括种群数量、染色体长度、遗传代数、交叉数、交叉概率、变异概率、适应度偏移量\r
\r
最大值文本框其实是一个只读的文本框，用于显示当前最大值。\r
\r
右面的两张图表就比较好理解了，左边的图显示定义域内的函数图象，右边的图显示迭代结果。\r
\r
下面的“计算”按钮其实是多余的，因为只要修改了参数，就会自动开始计算。\r
\r
## 问题\r
\r
试了下其实是有BUG的，函数图象的显示有问题，可能是在重新计算函数值的时候，没有完全刷新原来的数据\r
`,w=o({__name:"GeneticAlgorithmFunction",setup(u){return(d,m)=>(i(),s(n,{project:"genetic_algorithm_function"},{default:l(()=>[e(r,{src:"https://xyqlx.github.io/genetic_algorithm_function/","white-background":!0,scale:1,"transform-scale":.8}),e(a,{en:t(h),zh:t(c)},null,8,["en","zh"])]),_:1}))}});export{w as default};

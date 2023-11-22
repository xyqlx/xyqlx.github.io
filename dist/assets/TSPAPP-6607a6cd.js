import{M as t}from"./MyProject-248cf98e.js";import{I as r}from"./IFrameCell-591a6508.js";import{M as a}from"./MarkdownCell-a95f2c78.js";import{m as i,z as o,A as s,C as l,B as e,u as n}from"./index-c1c3f66c.js";import"./tag-89837a44.js";const h=`## Introduction\r
\r
A visualization web page that uses a genetic algorithm to solve the traveling salesman problem.\r
\r
This is an undergraduate project.\r
\r
## Background\r
\r
Since this is an undergraduate project, many background details have been forgotten. There should have been a accompanying presentation at that time. If it can be found, it can be used as a reference to supplement the content of this page.\r
\r
Looking at it now, the UI design is not intuitive enough and some parts are difficult to understand. Even though xyqlx is the author, it still took some time to understand.\r
\r
## Usage\r
\r
Before introducing the usage, let's introduce the concept of "job" to facilitate understanding later.\r
\r
A "job" refers to a solution to the traveling salesman problem, which includes the following configurable parameters:\r
\r
* Data: This refers to the input of the traveling salesman problem, including the number of cities, city coordinates, and distances between cities. To simplify, Euclidean distance on a plane is used here.\r
* Method type: This includes genetic algorithm, adaptive genetic algorithm, and greedy algorithm (for comparison).\r
* Specific parameter configuration: This includes genetic population size, number of generations, crossover probability, mutation probability, etc.\r
\r
In the web page, these configurations can be modified using the "Data" and "Parameter Configuration" panels. After the modifications are done, clicking the "Start Calculation" button will convert the job into a running state, which will be displayed in the "Current Run" panel. The configuration of the running job is fixed and cannot be modified through the panel. As the calculation progresses, the "Total Path Length" will be displayed in the "Chart" panel, showing the change with the "Number of Iterations" in the same color as the current run, as well as the current shortest path.\r
\r
When all the generations of a job have been calculated, it will return to the initial state and start calculating from the first generation again.\r
\r
In the "Current Run" panel, clicking the "Close" icon will stop a running job and clear all the visualization results for that job.\r
\r
Here, it is necessary to explain the method of creating new random data in the "Data" panel. Pressing Enter in the "Use randomly generated dataset" input box will automatically create a random data input. After that, you can select a preset or previously created data input from the dropdown menu.\r
\r
By using the above methods, it is possible to roughly compare the differences in solution effectiveness of different method types and parameter configurations for the same data input.\r
`,c=`## 介绍\r
\r
本科课设，使用遗传算法解决旅行商问题的可视化网页。\r
\r
## 背景\r
\r
因为是本科的作品，所以很多背景信息都已经忘了。当时应该还有配套的presentation，如果找到了可以参考它补充下本页的内容。\r
\r
现在看来，UI设计不够直观，有些难以理解，虽然xyq是作者但是还是花了一会儿才看懂。\r
\r
## 使用方法\r
\r
在介绍使用方法之前，先引入“作业”概念，这样后面理解起来会方便一些。\r
\r
“作业”是指一种旅行商问题的求解方案，这个方案包括以下可以修改的配置：\r
\r
* 数据：也就是旅行商问题的输入，包括城市数量、城市坐标、城市之间的距离等，这里为了简化，其实都是用平面上的欧式距离模拟\r
* 方法类型：包括遗传算法、自适应遗传算法、贪心算法（用于对比）\r
* 具体参数配置：包括遗传种群数量，遗传代数，交叉概率，变异概率等\r
\r
在网页中，上面的这些配置可以用“数据”和“参数配置”面板修改，修改完毕后，点击“开始计算”按钮，就会将这个作业转换为运行状态，并且在“当前运行”面板中显示，已处于运行状态的作业配置固定，不可再通过面板更改。随着计算的进行，会在“图表”面板中，以“当前运行”中相同的颜色显示“路径长度总和”随着“迭代次数”的变化，以及当前最短的路径。\r
\r
当某个作业的所有遗传代数计算完毕，它会返回初始状态，从第1个遗传代重新开始计算。\r
\r
在“当前运行”面板，可以点击“关闭”图标，将一个处于运行状态的作业停止，并清空所有此作业的可视化结果。\r
\r
这里需要补充说明一下“数据”面板创建新的随机数据的方法。在“使用随机生成的数据集”输入框键入回车，就会自动创建一个随机数据输入，此后可以在上面的选择框中选择预设或已创建的数据输入。\r
\r
通过以上的使用方法，可以对同一数据输入，粗略地比较不同方法类型与参数配置的方法的求解效果差异。\r
`,y=i({__name:"TSPAPP",setup(u){return(d,p)=>(o(),s(t,{project:"tsp_app"},{default:l(()=>[e(r,{src:"https://xyqlx.github.io/tsp_view/","white-background":!0,scale:1}),e(a,{en:n(h),zh:n(c)},null,8,["en","zh"])]),_:1}))}});export{y as default};

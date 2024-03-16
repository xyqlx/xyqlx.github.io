import{M as t}from"./MyProject-1e418308.js";import{I as r}from"./IFrameCell-012f5f94.js";import{M as a}from"./MarkdownCell-711da591.js";import{m as i,z as o,A as s,C as l,B as e,u as n}from"./index-d06a3c0e.js";import"./tag-5b448513.js";/* empty css             */const h=`## Introduction\r
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
\r
## Abstract of the Experimental Report\r
\r
Fortunately, xyqlx was able to find undergraduate experimental report and presentation. Here are some excerpts as supplementary information.\r
\r
### Experimental Principles\r
\r
#### Traveling Salesman Problem\r
\r
The Traveling Salesman Problem (TSP) is one of the famous problems in the field of mathematics. Assuming a traveling salesman needs to visit n cities, with known distances between each pair of cities, they must choose a path that satisfies the constraint of visiting each city only once and returning to the original city. The objective is to find the path with the minimum total distance among all possible paths.\r
\r
#### Adaptive Genetic Algorithm\r
\r
The Adaptive Genetic Algorithm is an improvement over the basic genetic algorithm. It significantly enhances the convergence accuracy and speeds up the convergence rate by adaptively adjusting the genetic parameters. This experiment adopts the strategy of adaptive crossover and mutation. During the genetic process, the crossover and mutation probabilities of each individual are determined based on its fitness and the overall fitness of the population. Individuals with higher fitness have smaller probabilities of crossover and mutation, which helps preserve superior individuals.\r
\r
### Development Environment\r
\r
The project is developed using the JavaScript language and runs in a web browser. The running steps are the same as a typical Vue application: first, run \`npm install\` to install all dependencies, then run \`npm run serve\`. If successful, the application can be viewed in a web browser according to the instructions. The development machine used Node.js version v12.6.0, npm version 6.9.0, and Chrome version 79.0.\r
\r
### How to Add Custom Input Data\r
\r
Custom input data can be added in \`store.js\`, referring to <https://github.com/xyqlx/tsp_view/blob/7ad9e282ad5dffacb69bf9c3718869562a0262a8/src/store.js#L19>. The coordinates of the input data should be within the range (0, 100).\r
\r
### How to Add a New Algorithm\r
\r
Implement any algorithm in the \`/algorithms\` directory, providing a parameter panel Vue file and a JavaScript algorithm implementation file.\r
\r
The parameter panel can have any content and should provide an \`add_task\` function to supply parameters to the algorithm.\r
\r
The algorithm implementation should include a parameter constructor, an initialization function (\`init\`), a step function for iterating once, and interfaces (\`generation\`, \`best_route\`, \`best_route_length\`) for displaying charts. You can refer to the implementation of the genetic algorithm in the directory. Additionally, you need to reference and register the algorithm in \`App.vue\`. Afterward, you can utilize the provided charts in this project to compare the differences in performance between different parameters and algorithms.\r
\r
## Additional Information\r
\r
After reviewing the code, it was surprising to find the use of Vuex :)\r
\r
Since this project was completed on December 23, 2019, xyqlx successfully check the [candies](/#/project/candies) at that time to learn more detailed background records.\r
\r
As the deadline for the project defense was the next day, xyqlx didn't finish coding during the day, so xyqlx spent ¥38 with a roommate and stayed up all night at an internet cafe to complete it.\r
\r
xyqlx's classmates are quite talented. The projects they worked on for this experiment were mainly focused on various bio-inspired algorithms, complexity reduction, and improvement of genetic algorithms.\r
\r
Compared to classmates who used matplotlib and LaTeX for presentations, xyqlx's project seems quite primitive.\r
\r
Recently, xyqlx watched an anime "16bit Sensation: Another Layer" and the characters' passion for PC-98 and games was truly dazzling. xyqlx cannot reach that level.\r
\r
However, if there is a field where there is both interest and accumulated knowledge, with works and things to do in the future, and a desire for new enjoyment, then for xyqlx, there is only programming.\r
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
\r
## 实验报告摘要\r
\r
很幸运xyq找到了自己保存的本科实验报告和presentation，这里摘录一些作为补充信息。\r
\r
### 实验原理\r
\r
#### 旅行商问题\r
\r
即TSP问题（Traveling Salesman Problem）是数学领域中著名问题之一。假设有一个旅行商人要拜访n个城市，n个城市之间的相互距离已知，他必须选择所要走的路径，路经的限制是每个城市只能拜访一次，而且最后要回到原来出发的城市。路径的选择目标是要求得的路径路程为所有路径之中的最小值\r
\r
#### 自适应遗传算法\r
\r
即Adaptive Genetic Algorithm，是对基本遗传算法的一种改进，它通过对遗传参数的自适应调整，大大提高了遗传算法的收敛精度，加快了收敛速度。本实验采取的是自适应交叉与变异策略，在遗传过程中每个个体的交叉与变异概率与个体的适应度与群体适应度的关系有关，个体适应度越大，其交叉与变异概率越小，便于保留优良品种\r
\r
### 开发环境\r
\r
采用JavaScript语言编写，在浏览器上运行。运行步骤与一般的Vue应用相同，即先运行npm install 安装所有依赖包后运行npm run serve，若成功运行，则能够根据提示在浏览器查看。开发机器使用的node版本为v12.6.0，npm版本为6.9.0，Chrome版本为79.0\r
\r
### 怎么添加自定义输入数据\r
\r
可以在store.js中添加，参考<https://github.com/xyqlx/tsp_view/blob/7ad9e282ad5dffacb69bf9c3718869562a0262a8/src/store.js#L19>，输入数据的横纵坐标需要在(0, 100)内\r
\r
### 怎么添加新的算法\r
\r
在/algorithms目录下实现任意算法，要求提供一个参数面板Vue文件与一个js算法实现文件。\r
\r
其中，参数面板内容不限，只要求提供一个add_task函数向算法提供参数。\r
\r
算法实现要求提供参数构造函数、init初始化函数，迭代一次的step函数，为了显示图表，还需要提供generation, best_route与best_route_length接口。可以参考目录下遗传算法的实现。之后，还需要在App.vue中引用和注册注册算法。此后，即可利用本项目提供的图表比较不同参数与算法运行效果的差异。\r
\r
## 其他补充信息\r
\r
看了下代码，竟然还使用了Vuex，泪目了\r
\r
因为这个项目的完成时间是2019年12年23日，所以其实可以查到当时的[candies](/#/project/candies)，了解更详细的背景记录\r
\r
当时第二天就要答辩，白天没有写完于是斥资￥38和室友去网吧通宵写完了\r
\r
xyq的同学都挺强的，对这个实验的制作方向大概都是一些比较多种仿生学算法啦，降低复杂度啦，改进遗传算法啦什么的\r
\r
和用matplotlib，LaTeX来汇报的同学比起来，xyq的项目还真是原始人了\r
\r
最近看了《16bit的感动 ANOTHER LAYER》，里面的角色对PC-98、对游戏的热情真是太耀眼了，xyq是做不到那种程度的罢\r
\r
但是如果有一个领域，既有兴趣，又有知识积累，还有作品，有未来想要做的东西，想获得新的乐趣，那对于xyq来说只有写程序了吧\r
`,w=i({__name:"TSPAPP",setup(d){return(p,u)=>(o(),s(t,{project:"tsp_app"},{default:l(()=>[e(r,{src:"https://xyqlx.github.io/tsp_view/","white-background":!0,scale:1}),e(a,{en:n(h),zh:n(c)},null,8,["en","zh"])]),_:1}))}});export{w as default};

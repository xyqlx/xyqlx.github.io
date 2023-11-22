import{M as e}from"./MyProject-248cf98e.js";import{I as t}from"./IFrameCell-591a6508.js";import{M as i}from"./MarkdownCell-a95f2c78.js";import{m as a,z as o,A as s,C as c,B as n,u as r}from"./index-c1c3f66c.js";import"./tag-89837a44.js";const p=`## Introduction\r
\r
A simple example of raining effect simulation using WebGL\r
\r
## Background\r
\r
xyqlx loves rain.\r
\r
But recently, he had the idea of writing this project, probably because of "Symphonic Rain".\r
\r
WebGL is quite interesting, but considering compatibility and development difficulty, frameworks like PixiJS may be a better choice.\r
\r
## How to run\r
\r
open \`index.html\` in your browser\r
\r
## Parameters\r
\r
| Parameter | Description |\r
| --- | --- |\r
| startPosition | the level of water |\r
| k | the stiffness of the spring |\r
| density |  the dampening factor |\r
| spread | how fast the waves spread |\r
| piova | the amount of raindrops |\r
| raindropVelocity | the vertical velocity of rain |\r
| windVelocity | the horizontal velocity of rain |\r
\r
## Problems\r
\r
- If you toggle the page to background and then toggle back, the animation may be paused\r
- I don't know what's the best parameters for the simulation\r
\r
## Reference\r
\r
[d-harel/raindrops](https://github.com/d-harel/raindrops)\r
\r
[Make a Splash With Dynamic 2D Water Effects](https://gamedevelopment.tutsplus.com/make-a-splash-with-dynamic-2d-water-effects--gamedev-236t)\r
\r
## Similiar projects or examples\r
\r
[CSS](https://foolishdeveloper.com/12-css-rain-effect-simple-rain-animation-effect/)\r
\r
[Realistic raindrop effect](https://github.com/codrops/RainEffect)\r
\r
[Animated Rainy Window wallpaper](https://github.com/rocksdanister/rain)\r
\r
[Another realistic effect](https://github.com/jxa/rain)\r
\r
[Particle rain effect](https://github.com/akella/ParticleRainEffect)\r
\r
[Procedural rain generation using PixiJS](https://github.com/ZeroDawn0D/pixirain)\r
\r
[Rainy Mood: Rain Sounds for Sleep & Study](https://www.rainymood.com/)\r
\r
[Rain.today](https://rain.today/)\r
\r
[Frequency-Shaped Natural Rain Noise Generator in mynoise](https://mynoise.net/NoiseMachines/rainNoiseGenerator.php)\r
\r
## TODO\r
\r
Actually, xyqlx wants to add rain sound.\r
\r
xyqlx is struggling whether to simulate it using pure sine waves or use existing rain sound effects.\r
`,h=`## 介绍\r
\r
用WebGL模拟下雨效果的简单示例\r
\r
## 背景\r
\r
xyq喜欢雨\r
\r
但是最近萌发出要写这个项目的想法，果然还是因为《交响乐之雨》\r
\r
WebGL挺有趣的，但是从兼容性和开发难度上考虑，也许类似PixiJS的框架是更好的选择\r
\r
## 如何运行\r
\r
在浏览器中打开\`index.html\`\r
\r
## 参数\r
\r
| 参数 | 描述 |\r
| --- | --- |\r
| startPosition | 水位 |\r
| k | 弹簧的刚度 |\r
| density |  减振因子 |\r
| spread | 波横向传播的速度 |\r
| piova | 雨滴的数量 |\r
| raindropVelocity | 雨滴的垂直速度 |\r
| windVelocity | 雨的水平速度 |\r
\r
## 问题\r
\r
- 如果将页面切换到后台，然后再切换回来，动画可能会暂停\r
- 我不知道模拟的最佳参数是什么\r
\r
## 参考资料\r
\r
[d-harel/raindrops](https://github.com/d-harel/raindrops)\r
\r
[make a splash with dynamic 2d water effects](https://gamedevelopment.tutsplus.com/make-a-splash-with-dynamic-2d-water-effects--gamedev-236t)\r
\r
## 相似项目或示例\r
\r
[CSS](https://foolishdeveloper.com/12-css-rain-effect-simple-rain-animation-effect/)\r
\r
[逼真的雨滴效果](https://github.com/codrops/RainEffect)\r
\r
[雨天动画壁纸](https://github.com/rocksdanister/rain)\r
\r
[另一个逼真的效果](https://github.com/jxa/rain)\r
\r
[粒子雨滴效果](https://github.com/akella/ParticleRainEffect)\r
\r
[使用PixiJS生成像素风格雨滴](https://github.com/ZeroDawn0D/pixirain)\r
\r
[rainymood雨声](https://www.rainymood.com/)\r
\r
[Rain.today](https://rain.today/)\r
\r
[mynoise自然雨声生成器](https://mynoise.net/NoiseMachines/rainNoiseGenerator.php)\r
\r
## TODO\r
\r
其实还挺想加入雨声的\r
\r
在纠结是用纯粹的正弦波模拟呢，还是用现有的雨声音效呢\r
`,b=a({__name:"RainVue",setup(m){return(l,d)=>(o(),s(e,{project:"rain"},{default:c(()=>[n(t,{src:"https://xyqlx.github.io/rain/","white-background":!0}),n(i,{en:r(p),zh:r(h)},null,8,["en","zh"])]),_:1}))}});export{b as default};

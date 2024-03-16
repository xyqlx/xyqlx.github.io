import{M as e}from"./MyProject-1e418308.js";import{I as t}from"./IFrameCell-012f5f94.js";import{M as i}from"./MarkdownCell-711da591.js";import{m as a,z as o,A as s,C as c,B as n,u as r}from"./index-d06a3c0e.js";import"./tag-5b448513.js";/* empty css             */const d=`## Introduction\r
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
## Performance Optimization\r
\r
In the old version, when the value of piova reached 500, the FPS would noticeably decrease. Upon inspecting the code, it was discovered that each raindrop was being drawn using a separate draw call, leading to performance degradation.\r
\r
Therefore, in [commit f6a5249](https://github.com/xyqlx/rain/commit/f6a524925783ad5661ed6425d0c03d1b756d931c), the change from "drawing gl.TRIANGLE_FAN in a for loop" to "drawing gl.TRIANGLES in a single call" significantly improved performance 😙. Now, it can easily handle over 10,000 piova.\r
\r
## Other Implemented Features\r
\r
- Display of FPS and the number of raindrops on the field\r
- Ability to set parameters using URL Query Strings\r
- Addition of input boxes to set parameters beyond the slider range, triggering animations when the slider's upper and lower limits are changed.\r
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
`,p=`## 介绍\r
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
## 性能优化\r
\r
在旧版本中，当piova的值达到500时，FPS会明显下降。检查代码后发现，每个雨滴都是一个单独的绘制调用，这样会导致性能下降\r
\r
因此在[f6a5249](https://github.com/xyqlx/rain/commit/f6a524925783ad5661ed6425d0c03d1b756d931c)中把“在for循环中绘制gl.TRIANGLE_FAN”改为“在单个调用中绘制gl.TRIANGLES”，性能提高了很多😙, 现在可以轻松处理10000多个piova\r
\r
## 实现的其他功能\r
\r
- FPS和场上雨滴数量显示\r
- 可以用URL Query String来设置参数\r
- 添加输入框，来设置超出滑块范围的参数，并且在滑块上下限改变时触发动画\r
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
`,x=a({__name:"RainVue",setup(h){return(l,m)=>(o(),s(e,{project:"rain"},{default:c(()=>[n(t,{src:"https://xyqlx.github.io/rain/","white-background":!0}),n(i,{en:r(d),zh:r(p)},null,8,["en","zh"])]),_:1}))}});export{x as default};

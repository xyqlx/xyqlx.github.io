## 介绍

用WebGL模拟下雨效果的简单示例

## 背景

xyq喜欢雨

但是最近萌发出要写这个项目的想法，果然还是因为《交响乐之雨》

WebGL挺有趣的，但是从兼容性和开发难度上考虑，也许类似PixiJS的框架是更好的选择

## 如何运行

在浏览器中打开`index.html`

## 参数

| 参数 | 描述 |
| --- | --- |
| startPosition | 水位 |
| k | 弹簧的刚度 |
| density |  减振因子 |
| spread | 波横向传播的速度 |
| piova | 雨滴的数量 |
| raindropVelocity | 雨滴的垂直速度 |
| windVelocity | 雨的水平速度 |

## 问题

- 如果将页面切换到后台，然后再切换回来，动画可能会暂停
- 我不知道模拟的最佳参数是什么

## 参考资料

[d-harel/raindrops](https://github.com/d-harel/raindrops)

[make a splash with dynamic 2d water effects](https://gamedevelopment.tutsplus.com/make-a-splash-with-dynamic-2d-water-effects--gamedev-236t)

## 相似项目或示例

[CSS](https://foolishdeveloper.com/12-css-rain-effect-simple-rain-animation-effect/)

[逼真的雨滴效果](https://github.com/codrops/RainEffect)

[雨天动画壁纸](https://github.com/rocksdanister/rain)

[另一个逼真的效果](https://github.com/jxa/rain)

[粒子雨滴效果](https://github.com/akella/ParticleRainEffect)

[使用PixiJS生成像素风格雨滴](https://github.com/ZeroDawn0D/pixirain)

[rainymood雨声](https://www.rainymood.com/)

[Rain.today](https://rain.today/)

[mynoise自然雨声生成器](https://mynoise.net/NoiseMachines/rainNoiseGenerator.php)

## TODO

其实还挺想加入雨声的

在纠结是用纯粹的正弦波模拟呢，还是用现有的雨声音效呢

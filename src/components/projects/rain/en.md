## Introduction

A simple example of raining effect simulation using WebGL

## Background

xyqlx loves rain.

But recently, he had the idea of writing this project, probably because of "Symphonic Rain".

WebGL is quite interesting, but considering compatibility and development difficulty, frameworks like PixiJS may be a better choice.

## How to run

open `index.html` in your browser

## Parameters

| Parameter | Description |
| --- | --- |
| startPosition | the level of water |
| k | the stiffness of the spring |
| density |  the dampening factor |
| spread | how fast the waves spread |
| piova | the amount of raindrops |
| raindropVelocity | the vertical velocity of rain |
| windVelocity | the horizontal velocity of rain |

## Problems

- If you toggle the page to background and then toggle back, the animation may be paused
- I don't know what's the best parameters for the simulation

## Reference

[d-harel/raindrops](https://github.com/d-harel/raindrops)

[Make a Splash With Dynamic 2D Water Effects](https://gamedevelopment.tutsplus.com/make-a-splash-with-dynamic-2d-water-effects--gamedev-236t)

## Similiar projects or examples

[CSS](https://foolishdeveloper.com/12-css-rain-effect-simple-rain-animation-effect/)

[Realistic raindrop effect](https://github.com/codrops/RainEffect)

[Animated Rainy Window wallpaper](https://github.com/rocksdanister/rain)

[Another realistic effect](https://github.com/jxa/rain)

[Particle rain effect](https://github.com/akella/ParticleRainEffect)

[Procedural rain generation using PixiJS](https://github.com/ZeroDawn0D/pixirain)

[Rainy Mood: Rain Sounds for Sleep & Study](https://www.rainymood.com/)

[Rain.today](https://rain.today/)

[Frequency-Shaped Natural Rain Noise Generator in mynoise](https://mynoise.net/NoiseMachines/rainNoiseGenerator.php)

## TODO

Actually, xyqlx wants to add rain sound.

xyqlx is struggling whether to simulate it using pure sine waves or use existing rain sound effects.

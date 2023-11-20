## Introduction

Undergraduate course project that utilizes genetic algorithm to visualize the maximum value within a function interval on a web page.

## Background

This might be one of the earliest projects by xyqlx that showcased visualization on a web page and was shared on a public code repository.

At that time, xyqlx simply used the code repository as a static web page hosting service, so only the "dist" folder of Vue was uploaded, without the source code.

By the way, I've been a Vue developer for 4 years now :)

## Usage

There are two aspects that can be modified:

* Problem definition: including the function expression f(x) and the interval [a, b].
* Genetic algorithm parameters: including population size, chromosome length, number of generations, crossover count, crossover probability, mutation probability, and fitness offset.

The maximum value textbox is actually a read-only textbox used to display the current maximum value.

The two charts on the right side are relatively easy to understand. The chart on the left displays the function graph within the domain, while the chart on the right displays the iterative results.

The "Calculate" button below is actually redundant because as soon as the parameters are modified, the calculation will start automatically.

## Issue

Upon testing, there is actually a bug where the display of the function graph has issues. It might be due to incomplete refreshing of the original data when recalculating the function values.

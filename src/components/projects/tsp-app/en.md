## Introduction

A visualization web page that uses a genetic algorithm to solve the traveling salesman problem.

This is an undergraduate project.

## Background

Since this is an undergraduate project, many background details have been forgotten. There should have been a accompanying presentation at that time. If it can be found, it can be used as a reference to supplement the content of this page.

Looking at it now, the UI design is not intuitive enough and some parts are difficult to understand. Even though xyqlx is the author, it still took some time to understand.

## Usage

Before introducing the usage, let's introduce the concept of "job" to facilitate understanding later.

A "job" refers to a solution to the traveling salesman problem, which includes the following configurable parameters:

* Data: This refers to the input of the traveling salesman problem, including the number of cities, city coordinates, and distances between cities. To simplify, Euclidean distance on a plane is used here.
* Method type: This includes genetic algorithm, adaptive genetic algorithm, and greedy algorithm (for comparison).
* Specific parameter configuration: This includes genetic population size, number of generations, crossover probability, mutation probability, etc.

In the web page, these configurations can be modified using the "Data" and "Parameter Configuration" panels. After the modifications are done, clicking the "Start Calculation" button will convert the job into a running state, which will be displayed in the "Current Run" panel. The configuration of the running job is fixed and cannot be modified through the panel. As the calculation progresses, the "Total Path Length" will be displayed in the "Chart" panel, showing the change with the "Number of Iterations" in the same color as the current run, as well as the current shortest path.

When all the generations of a job have been calculated, it will return to the initial state and start calculating from the first generation again.

In the "Current Run" panel, clicking the "Close" icon will stop a running job and clear all the visualization results for that job.

Here, it is necessary to explain the method of creating new random data in the "Data" panel. Pressing Enter in the "Use randomly generated dataset" input box will automatically create a random data input. After that, you can select a preset or previously created data input from the dropdown menu.

By using the above methods, it is possible to roughly compare the differences in solution effectiveness of different method types and parameter configurations for the same data input.

## Abstract of the Experimental Report

Fortunately, xyqlx was able to find undergraduate experimental report and presentation. Here are some excerpts as supplementary information.

### Experimental Principles

#### Traveling Salesman Problem

The Traveling Salesman Problem (TSP) is one of the famous problems in the field of mathematics. Assuming a traveling salesman needs to visit n cities, with known distances between each pair of cities, they must choose a path that satisfies the constraint of visiting each city only once and returning to the original city. The objective is to find the path with the minimum total distance among all possible paths.

#### Adaptive Genetic Algorithm

The Adaptive Genetic Algorithm is an improvement over the basic genetic algorithm. It significantly enhances the convergence accuracy and speeds up the convergence rate by adaptively adjusting the genetic parameters. This experiment adopts the strategy of adaptive crossover and mutation. During the genetic process, the crossover and mutation probabilities of each individual are determined based on its fitness and the overall fitness of the population. Individuals with higher fitness have smaller probabilities of crossover and mutation, which helps preserve superior individuals.

### Development Environment

The project is developed using the JavaScript language and runs in a web browser. The running steps are the same as a typical Vue application: first, run `npm install` to install all dependencies, then run `npm run serve`. If successful, the application can be viewed in a web browser according to the instructions. The development machine used Node.js version v12.6.0, npm version 6.9.0, and Chrome version 79.0.

### How to Add Custom Input Data

Custom input data can be added in `store.js`, referring to <https://github.com/xyqlx/tsp_view/blob/7ad9e282ad5dffacb69bf9c3718869562a0262a8/src/store.js#L19>. The coordinates of the input data should be within the range (0, 100).

### How to Add a New Algorithm

Implement any algorithm in the `/algorithms` directory, providing a parameter panel Vue file and a JavaScript algorithm implementation file.

The parameter panel can have any content and should provide an `add_task` function to supply parameters to the algorithm.

The algorithm implementation should include a parameter constructor, an initialization function (`init`), a step function for iterating once, and interfaces (`generation`, `best_route`, `best_route_length`) for displaying charts. You can refer to the implementation of the genetic algorithm in the directory. Additionally, you need to reference and register the algorithm in `App.vue`. Afterward, you can utilize the provided charts in this project to compare the differences in performance between different parameters and algorithms.

## Additional Information

After reviewing the code, it was surprising to find the use of Vuex :)

Since this project was completed on December 23, 2019, xyqlx successfully check the [candies](/#/project/candies) at that time to learn more detailed background records.

As the deadline for the project defense was the next day, xyqlx didn't finish coding during the day, so xyqlx spent ¥38 with a roommate and stayed up all night at an internet cafe to complete it.

xyqlx's classmates are quite talented. The projects they worked on for this experiment were mainly focused on various bio-inspired algorithms, complexity reduction, and improvement of genetic algorithms.

Compared to classmates who used matplotlib and LaTeX for presentations, xyqlx's project seems quite primitive.

Recently, xyqlx watched an anime "16bit Sensation: Another Layer" and the characters' passion for PC-98 and games was truly dazzling. xyqlx cannot reach that level.

However, if there is a field where there is both interest and accumulated knowledge, with works and things to do in the future, and a desire for new enjoyment, then for xyqlx, there is only programming.

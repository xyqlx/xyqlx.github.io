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

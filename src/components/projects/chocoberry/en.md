## Introduction

GPU server monitoring system available in the laboratory.

## Note: This project is provided only in Chinese.

## Background

Similar requirements to nvidia-smi and gpustat.

Additional useful features have been added.

## About the Backend

Developed using Nest.js, but currently in a private state due to security issues.

## Features and Technical Details

### User Management

- User login: Uses JWT, and the access token is saved in the localStorage after login.
- User registration: Users can register new accounts when "Open Registration" is enabled (no email verification is provided).
- Role management: Administrators can modify the "Open Registration" status.

### "Warm Home" Page

#### GPU Monitoring

Displays the following information for each GPU based on the number of graphics cards:

- Graphics card model
- Graphics memory usage in size and percentage (process graphics memory usage is differentiated by different colors on the bar)
- Graphics card utilization
- Information on all processes running on the graphics card

Information for each process includes:

- Owner username, user ID
- Time since the process started running, start time of the process
- Process ID, parent process ID
- Program name, command line argument, working directory

It is also possible to add notifications for process termination from here, as described below.

#### Network Traffic Information

Displays the processes with the highest network traffic usage, including process ID, username, program name, and sent/received traffic size.

#### CPU and Memory Information

Displays CPU and memory usage as numbers and provides a tree map showing CPU/memory usage by different processes, using usage as the area.

#### Settings

Includes methods for mapping colors to each process and settings for the tree map:

- Process color saturation/brightness: Algorithm parameters for mapping process ID to color
- leafDepth: Depth of the tree map

### "Statistics" Page

Displays historical information about the server in the form of line graphs, with the option to select a 24-hour or 7-day time range.

Includes the following information:

- Changes in CPU and memory utilization
- Changes in graphics memory usage and utilization for each graphics card

### "Notification Rules" Page

Displays all notification rules for the current user and allows adding new notification rules or deleting existing ones.

Available trigger methods include:

- Graphics card utilization change: Triggered when the graphics card is idle or in use. The frequency of triggering can be selected.
- Process termination: Triggered when a specific process terminates.
- Scheduled: Triggered at a specific time.

Available notification methods include:

- Email: Sends an email to the registered email address.
- Browser notifications: Sends notifications using the Web Notification API. Note that this feature requires HTTPS and user consent.

### "User Settings" Page

Allows the user to delete their account.

If the user is an administrator, they can also modify the "Open Registration" status.

## Some Other Technical Details

- WebSocket: Uses WebSocket to send notification messages from the backend to the frontend in browser notifications.
- Mock Service Worker: Very useful, mainly used here to create a backend-less demo version.
- Angular Material: Primarily uses Angular Material components.

## Implicit Security Issues

Currently, the main security risks are concentrated in the backend, as sensitive information is not controlled when transmitted to the frontend, and there is insufficient vigilance regarding frontend requests.

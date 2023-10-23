![logo](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/src/assets/images/icon128.png)

## Introduction

This is a Chrome extension that switches the mouse cursor based on the website URL. You can set the mouse cursor and matching URLs yourself.

![demo](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/banner_5.gif)

## Background

In 2022, a competition was held in collaboration between Juejin and the virtual idol group A-SOUL. The competition consisted of three tracks: Douyin special effects, Chrome extensions, and computer graphics. This project is a submission for the Chrome extension track.

This project won xyqlx two complete sets of collaboration merchandise and one individual item. However, before the end of the competition, the well-known incident of the A-SOUL original member "Carol" graduating occurred, which was regretful.

The purpose of this project is to allow A-SOUL fans to switch the mouse cursor based on the websites they browse related to A-SOUL. For example, when browsing A-SOUL member "Diana"'s personal space and livestream on Bilibili, the mouse cursor will change to a "Diana" theme.

## Features

Click the extension icon in the toolbar or right-click on a blank space on the webpage and select "A-SOUL Cursor Rule Settings" in the menu to open the settings window.

Upon installation, the default rules created by the author will be automatically loaded.

![Cursor rule settings](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/setting-window.png)

The functions of each section are described below.

### Enable/Disable

In the top-right corner of the settings window, you can select whether to enable the mouse cursor switch.

### Add/Edit/Delete Rules

- Add Rule: Click the "Add" button to open the rule settings window.
- Edit Rule: Click the "Edit" button to open the rule settings window.
- Delete Rule: Click the "Delete" button to delete the rule.

![Rule editing window](https://raw.githubusercontent.com/xyqlx/asoul-cursors/master/README/rule-window.png)

In the rule settings window, you can set the name, matching URLs, and icon information for the rule.

- Name: The name of the rule, can be set to any string.
- Matching URLs: Prefix-matching URLs for the rule, separated by lines, with no empty line at the end.
- Cursor Information: Here, you can specify the image data for the cursor in three states (default, hyperlink, text editing) (supports gif, png, jpeg, cur, etc.), the size of the icon (set width and height or keep the original size), and the position of the icon center (x, y).
- Confirm Button: Click the confirm button to save and apply the rule.

### Import and Export

Pack the saved rules (including cursor image data) into a .gz file to facilitate rule sharing between different users.

## build

```shell
npm install
npm run build
```

## Project Summary

Based on TypeScript, the frontend pages are designed using Ant Design (Angular) and all rule information is saved in IndexedDB.

The principle of the cursor pointer is to set the cursor as "none" and create an img element to follow the mouse movement.

## Current Issues

- The cursor does not follow when dragging the scrollbar within the webpage.
- There is a blinking effect when replacing the cursor (e.g., first displaying default and pointer, then blinking and disappearing).
- The cursor may not be displayed on interfaces with a z-index of 2147483647.

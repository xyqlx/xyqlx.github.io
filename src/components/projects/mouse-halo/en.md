## Introduction

Display the input method's Chinese and English status and copy prompt near the mouse.

![demo](https://github.com/xyqlx/MouseHalo/raw/master/images/demo.gif)

## Note: This project is provided only in Chinese.

## Background

The display of Chinese and English status has always been a feature that xyq has wanted to implement, but it has not been implemented due to technical reasons. Recently, with reference to [ImTip](https://github.com/aardio/ImTip), I tried to implement it using WPF.

In fact, considering the memory usage and the difficulty of interacting with Win32 APIs, WPF is not a suitable choice.

I don't know why sometimes when xyq's PC presses Ctrl+C, it will not copy. So I also added feedback for the clipboard.

## Emoji Correspondence Table

| emoji | description |
| --- | --- |
| 🀄 | Chinese |
| 🔤 | English |
| 📁 | FileDrop |
| 🖼 | Bitmap |
| 🕸 | Html |
| 📗 | Rtf |
| 📄 | Text |
| ❓︎ | Other situations |

## Settings Page

![config](https://github.com/xyqlx/MouseHalo/raw/master/images/config.png)

## Permissions

Running under non-administrator privileges seems to prevent obtaining the input method's status, the specific reason is unknown.

The optional startup on boot is implemented through the "Task Scheduler" but can also be managed manually.

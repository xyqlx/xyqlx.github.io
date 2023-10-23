## Introduction

Accessing Bilibili through the command line using Playwright.

![demo](https://raw.githubusercontent.com/xyqlx/BilibiliJustListening/master/images/screenshot1.png)

## Background

Using the command line to access Bilibili is pretty cool, isn't it? 😎

Choosing Playwright is because simulating a browser might be more secure (although it actually comes with many challenges and feels not so great...).

## How to Use

### Build

```bash
git clone https://github.com/xyqlx/BilibiliJustListening
cd BilibiliJustListening
dotnet build -c Release
```

### Run

```bash
dotnet run
# maybe you need to follow the prompts to install playwright
```

### Commands

You can just enter the prefix of a command.

| Command | Description | Example |
| --- | --- | --- |
| help | Show help | help |
| exit | Exit the program | exit |
| search | Search videos based on keywords | search gemstone |
| leftpage | Previous search page | leftpage |
| rightpage | Next search page | rightpage |
| play | Play a video based on video ID/video link/search result index/keywords | play BV1TJ411a7WV |
| recommand | Show current recommended videos | recommand |
| screenshot | Show screenshots | screenshot |
| latest | Show the latest videos of an uploader | latest 603474  |
| popular | Show the hottest videos of an uploader | popular 603474 |
| time | Show the time since the last playback started | time |
| live | Enter a live room | live 33989 |
| rank | Show the rankings | rank music |
| clear | Clear the screen | clear |

## Configuration File

Create a `config.json` in the same directory as the executable file.

```json
{
  "proxy": {
    "server": "http://example.com:8080"
  },
  "headless": true
}
```

If you don't need a proxy, you can omit the `proxy` field.

When `headless` is set to false, a browser window will be displayed for easier debugging.

## Tech Stack

Primarily implemented using Playwright.

Spectre.Console provides rich text support for the command line interface.

## Issues

### Captcha

Accessing web pages may require inputting a captcha, especially when accessing from outside of China. This situation is currently not handled.

### Login Popup Window

This situation will attempt to close the window automatically, which may cause the video playback to stutter for a moment.

### Auto Pausing of Video Playback

This issue may occur after playing for a long time.

### Regarding Search Page Numbers

Since the search results are limited to 20 items, adjacent search pages may not be sequential.

### Errors

You will get used to them. (laughs)

However, there is an error xyq often encounters but doesn't know how to solve, and it goes like this:

```text
Unhandled exception. Microsoft.Playwright.PlaywrightException: System.InvalidOperationException: Cannot read incomplete UTF-16 JSON text as string with missing low surrogate.
   at System.Text.Json.ThrowHelper.ThrowInvalidOperationException_ReadIncompleteUTF16()
```

Based on the subsequent error position, it can be seen that this error occurs when calling methods like GetAttribute from Playwright, and it throws an exception within Playwright while using System.Text.Json.

Literally, this bug is quite annoying. For example, when playing videos automatically, this issue may suddenly occur, causing the program to crash. Additionally, it cannot be handled simply by catching the exception because after triggering this problem, Playwright will be in a corrupted state and unable to perform other operations. Furthermore, when performing actions such as searching or retrieving rankings, if one video's title does not meet the requirements, the entire program will fail to display the results and crash.

So, under which circumstances will this issue occur?

One possible cause is 𝓞𝓷𝓮 𝓚𝓲𝓼𝓼, such as BV1yR4y1C7KX or BV1tC4y1Z7ti. A simple way to reproduce this issue is to play them.

## Expectations

xyqlx thinks that features such as video collections (including accessing stars and collections) and automatic search (perhaps integrated with GPT?) would be interesting.

From a record-keeping perspective, preserving the browsing history is also a good idea.

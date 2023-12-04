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

You will get used to them. :)

### A Successful Experience Contributing to an Open Source Project

Previously, there was an error that xyqlx frequently encountered but didn't know how to solve. The error looked like this:

```text
Unhandled exception. Microsoft.Playwright.PlaywrightException: System.InvalidOperationException: Cannot read incomplete UTF-16 JSON text as string with missing low surrogate.
   at System.Text.Json.ThrowHelper.ThrowInvalidOperationException_ReadIncompleteUTF16()
```

Based on the error location, it seemed to occur when calling methods like `GetAttribute` in Playwright. The exception was thrown internally by Playwright when using `System.Text.JSON`. Upon further investigation, it was found that this error was due to an encoding issue with the JSON data. Each character in UTF-16 can be composed of multiple code units, and this particular error indicated that some code units were missing.

This bug was quite annoying. For example, it could cause a sudden crash when automatically playing videos. Additionally, it couldn't be easily handled by simple exception handling because after triggering this issue, Playwright would be in a corrupted state and unable to perform other operations. Furthermore, when performing actions like searching or retrieving rankings, if a video's title didn't meet the requirements, the entire display would fail and crash. Here are a few examples: BV1yR4y1C7KX, BV1tC4y1Z7ti (possibly due to special characters like 𝓞𝓷𝓮 𝓚𝓲𝓼𝓼).

To confirm the issue, TypeScript was tested, and it was verified that this problem only occurred when using Playwright.NET. An [issue](https://github.com/microsoft/playwright-dotnet/issues/2748) was raised, and the Playwright team was very efficient. The issue was submitted on November 7, 2023, and the next day, a pull request was created. On the third day, the issue was [fixed](https://github.com/microsoft/playwright/commit/5f527fedb1f6893219b69d735b1a9cdd81ad1466) (it turned out to be a bug in Playwright). In late November, Playwright and Playwright.NET released version 1.40.0. Simply upgrading the dependencies would prevent this problem from occurring again.

## Expectations

xyqlx thinks that features such as video collections (including accessing stars and collections) and automatic search (perhaps integrated with GPT?) would be interesting.

From a record-keeping perspective, preserving the browsing history is also a good idea.

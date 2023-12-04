## Introduction

This is an extension for [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) (referred to as SDWebUI), which allows SDWebUI instances to communicate with other web pages. This plugin utilizes the WebSocket protocol to establish real-time connections.

## Background

During the development of this project, the SDWebUI provided an official backend API, which allowed communication with the backend to generate images. However, the goal of this project is different. It treats the SDWebUI frontend as an independent object, enabling it to communicate with other web pages. This extension aims to assist users in interacting with the SDWebUI frontend and invoke other SDWebUI extensions through the frontend.

The development plan for this project is to create an extension plugin for SDWebUI that facilitates communication on data and images between any regular web application and SDWebUI.

## Implementation Approach

To understand the implementation approach, let's start with the extension principles of SDWebUI. The basic extensions of SDWebUI are implemented by providing event listeners and interfaces for modifying the Gradio interface in a Python script, which can be found in `scripts/websocket.py`.

Additionally, SDWebUI loads JavaScript scripts that are executed when the user interface is loaded. The main content of this script is `javascript/sd-webui-websocket.js`. It implements functionalities to send messages to the WebSocket server and retrieve or set Stable Diffusion WebUI interface elements.

## Installation

Copy the link to this repository and use it for "Install from URL":

```text
https://github.com/xyqlx/sd-webui-websocket
```

Alternatively, you can clone/download this repository and place it in the `stable-diffusion-webui/extensions` directory.

## How do I develop applications using this extension?

After installing this extension, a section called "Websocket" will appear on the `txt2img` tab as shown below:

![section](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/section.png)

Before clicking the "Enable" checkbox, you should set up a WebSocket server and specify its address in the "Route" field. This WebSocket server is the part that needs to be developed.

In the `demo` directory, there is a simple example that includes a Node.js script providing HTTP and WebSocket services. You can refer to this example to develop your own application. Here are the steps to use this extension in conjunction with the example:

```bash
# Install Node.js before running for the first time
npm install

# The default port is 39000, which can be configured in demo.js
node demo.js
```

Once the server is running, you can specify its address in the "Route" field and click the "Enable" checkbox. If everything is correct, a message will be displayed in the console:

![open](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/open.png)

All messages sent or received by the sd-webui-websocket plugin will be displayed in the "Chatbot" box. Some messages may be truncated due to their length.

Now, you can open `http://localhost:39000` or another address in your browser. You will see a page similar to the following:

![demo](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/demo.png)

Here is a brief description of each button on this demo page:

- `Send Message`: Sends a message to the sd-webui-websocket plugin. The message will be displayed in the plugin's console.
- `Get All UI`: Retrieves all UI elements of SDWebUI.
- `Get UI`: Retrieves the UI element specified by the `Query` field. Uses `querySelector` to find the element.
- `Upload Image`: Uploads an image to the `Value` field.
- `Set UI`: Sets the value of the UI element specified by the `Query` field.

These functionalities are achieved by sending JSON messages to the sd-webui-websocket plugin. The message format is as follows:

```json
[
  {
    // Response messages have the same id as this
    "id": 0,
    "type": "get_all_ui"
  },
  {
    "id": 5,
    "type": "get_ui",
    "query": "#html-element-id input"
  },
  {
    "id": 12,
    "type": "set_ui",
    "query": "#html-element-id input",
    "value": "string or number or file base64"
  }
]
```

Successful responses to these messages are in the following format:

```json
[
  {
    "id": 0,
    "type": "response_get_all_ui",
    "status": "success",
    "currentTab": "txt2img",
    "elements": [
      {
        "tab": "tab_txt2img",
        "id": "closest ancestor id",
        "ancestorIds": ["components-2194", "tabs", "..."],
        "type": "textarea, button, file, etc.",
        "value": "value of the input or text content of the button"
      }
    ]
  },
  {
    "id": 5,
    "type": "response_get_ui",
    "status": "success",
    "element": {
      "type": "textarea, button, file, etc.",
      "value": "value of the input or text content of the button"
    }
  },
  {
    "id": 12,
    "type": "response_set_ui",
    "status": "success"
  }
]
```

**Note:** If the Stable Diffusion WebUI is not in the foreground, it may sometimes not trigger a response.

Additionally, sd-web-websocket will send messages to the WebSocket server when the following events occur:

```json
[
  {
    "type": "process",
    "p": {
      "outpath_samples": "",
      "outpath_grids": "",
      "prompt": "",
      "prompt_for_display": null,
      "negative_prompt": "",
      "other attribution of StableDiffusionProcessing": "..."
    }
  },
  {
    "type": "before_process_batch",
    "batch_number": 0,
    "prompts": [],
    "seeds": [],
    "subseeds": []
  },
  {
    "type": "process_batch",
    "batch_number": 0,
    "prompts": [],
    "seeds": [],
    "subseeds": []
  },
  {
    "type": "postprocess_batch",
    "batch_number": 0
  },
  {
    "type": "postprocess_image",
    "pp": {
      "image": "base64code"
    }
  },
  {
    "type": "postprocess",
    "processed": {
      "images": ["base64code"],
      "prompt": "",
      "batch_size": 1,
      "info": "",
      "width": 512,
      "sampler_name": "Euler a",
      "steps": 20,
      "other attribution of Processed": "..."
    }
  }
]
```

## JSON Message Examples

Here are some examples of JSON messages for implementing various functionalities, including the messages and response messages.

### Set txt2img parameters and generate

```json
[
  {
    "id": 0,
    "type": "set_ui",
    "query": "#txt2img_prompt textarea",
    "value": "a cat playing with a hat"
  },
  { "id": 0, "type": "response_set_ui", "status": "success" },
  { "id": 1, "type": "set_ui", "query": "#txt2img_neg_prompt textarea", "value": "blurred" },
  { "id": 1, "type": "response_set_ui", "status": "success" },
  { "id": 2, "type": "set_ui", "query": "#txt2img_sampling input", "value": "DPM++ SDE Karras" },
  { "id": 2, "type": "response_set_ui", "status": "success" },
  { "id": 3, "type": "set_ui", "query": "#txt2img_steps input", "value": "30" },
  { "id": 3, "type": "response_set_ui", "status": "success" },
  { "id": 4, "type": "set_ui", "query": "#txt2img_height input", "value": "720" },
  { "id": 4, "type": "response_set_ui", "status": "success" },
  { "id": 5, "type": "set_ui", "query": "#txt2img_generate", "value": "" },
  { "id": 5, "type": "response_set_ui", "status": "success" },
  { "type": "process", "p": { "...": "..." } },
  { "type": "before_process_batch", "...": "..." },
  { "type": "process_batch", "...": "..." },
  { "type": "postprocess_batch", "batch_number": 0 },
  { "type": "postprocess_image", "pp": { "image": "" } },
  { "type": "postprocess", "processed": { "...": "..." } }
]
```

### Set img2img to redraw image and mask

```json
[
  { "id": 0, "type": "set_ui", "query": "#tabs button:nth-child(2)", "value": "" },
  { "id": 0, "type": "response_set_ui", "status": "success" },
  { "id": 1, "type": "set_ui", "query": "#mode_img2img button:nth-child(5)", "value": "" },
  { "id": 1, "type": "response_set_ui", "status": "success" },
  {
    "id": 2,
    "type": "set_ui",
    "query": "#img_inpaint_base input",
    "value": "data:image/jpeg;base64,..."
  },
  { "id": 2, "type": "response_set_ui", "status": "success" },
  {
    "id": 3,
    "type": "set_ui",
    "query": "#img_inpaint_mask input",
    "value": "data:image/jpeg;base64,..."
  },
  { "id": 3, "type": "response_set_ui", "status": "success" }
]
```

### ControlNet

```json
[
  {
    "query": "#txt2img_controlnet_ControlNet_controlnet_enable_checkbox input",
    "value": "true",
    "type": "set_ui",
    "id": 0
  },
  { "id": 0, "type": "response_set_ui", "status": "success" },
  {
    "id": 1,
    "query": "#txt2img_controlnet_ControlNet_input_image input",
    "value": "data:image/jpeg;base64,..."
  },
  { "id": 1, "type": "response_set_ui", "status": "success" },
  {
    "query": "#txt2img_controlnet_ControlNet_controlnet_preprocessor_dropdown input",
    "value": "tile_colorfix",
    "type": "set_ui",
    "id": 2
  },
  { "id": 2, "type": "response_set_ui", "status": "success" },
  {
    "query": "#txt2img_controlnet_ControlNet_controlnet_model_dropdown input",
    "value": "control_v11f1e_sd15_tile [a371b31b]",
    "type": "set_ui",
    "id": 3
  },
  { "id": 3, "type": "response_set_ui", "status": "success" }
]
```

## Debugging

### Show hidden elements

Comment out the following code in `style.css`:

```css
display: none;
```

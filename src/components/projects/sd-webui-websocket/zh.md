## 介绍

这是[AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)（以下简称SDWebUI）的扩展，它使SDWebUI实例能够与其他网页进行通信。该插件利用WebSocket协议建立实时连接。

## 背景

在本项目开发时，SDWebUI提供了官方的后端API，这种方式可以实现与后端通信生成图片。此项目的目标有所不同，它将SDWebUI前端视为一个独立的对象，使其能够与其他网页进行通信，可以方便地辅助用户在SDWebUI前端的操作，并通过SDWebUI前端调用其他SDWebUI扩展

本项目开发的计划目标是作为SDWebUI的一个扩展插件，能够帮助任意普通的Web应用实现与SDWebUI实行数据、图像上的通信

## 实现思路

这需要从SDWebUI的扩展原理开始说起。SDWebUI的基础扩展是通过以面向对象的方式，给Python脚本提供监听事件与修改gradio界面的接口实现的。这些可以在`scripts/websocket.py`中找到。

另外，SDWebUI还会加载JavaScript脚本，这些脚本会在用户界面加载时执行。这是`javascript/sd-webui-websocket.js`的主要内容。在这个脚本中，实现了向 WebSocket 服务器发送消息，获取或设置 Stable Diffusion WebUI 界面元素的功能。

## 安装

将此存储库的链接复制到“从URL安装”中：

```text
https://github.com/xyqlx/sd-webui-websocket
```

还可以克隆/下载此存储库并将其放置在`stable-diffusion-webui/extensions`目录中。

## 我怎么开发应用结合使用这个扩展？

安装完成本扩展后，将在`txt2img`选项卡上显示一个名为`Websocket`的部分，如下所示：

![section](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/section.png)

在单击“Enable”复选框之前，应该设置一个WebSocket服务器，并在“Route”字段中指定其地址。这个WebSocket服务器就是需要开发的部分

在`demo`目录下，是一个简单的示例，它包含了一个Node.js脚本，提供HTTP服务和WebSocket服务。可以参考这个示例，开发自己的应用。以下是使用这个示例时，结合使用此扩展的步骤：

```bash
# 首次运行之前，安装node.js
npm install

# 默认端口是39000，可以在demo.js中进行设置
node demo.js
```

启动服务器后，可以在“Route”字段中指定其地址，然后单击“Enable”复选框。如果一切正确，控制台中将会显示一条消息：

![open](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/open.png)

sd-webui-websocket插件发送或接收的所有消息都将显示在“Chatbot”框中。由于某些消息太长，因此有些消息可能会被截断。

现在，可以在浏览器中打开`http://localhost:39000`或其他地址。将会显示一个类似于以下的页面：

![demo](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/demo.png)

以下是这个demo页面的每个按钮的功能的简要描述：

- `Send Message`：向sd-webui-websocket插件发送消息。该消息将显示在sd-webui-websocket插件的控制台中。
- `Get All UI`：获取SDWebUI的所有UI元素。
- `Get UI`：获取由`Query`字段指定的UI元素。使用querySelector来查找元素。
- `Upload Image`：将图像上传到`Value`字段。
- `Set UI`：设置由`Query`字段指定的UI元素的值。

这是通过向sd-webui-websocket插件发送JSON消息来实现的。消息的格式如下所示：

```json
[
  {
    // 响应消息具有与此相同的id
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
    "value": "字符串或数字或文件base64"
  }
]
```

对这些消息的成功响应：

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
        "id": "closest ancesotr id",
        "ancestorIds": ["components-2194", "tabs", "..."],
        "type": "textarea, button, file, etc.",
        "value": "input的值或button的文本内容"
      }
    ]
  },
  {
    "id": 5,
    "type": "response_get_ui",
    "status": "success",
    "element": {
      "type": "textarea, button, file, etc.",
      "value": "input的值或button的文本内容"
    }
  },
  {
    "id": 12,
    "type": "response_set_ui",
    "status": "success"
  }
]
```

**注意：** 如果Stable Diffusion WebUI不在前台，它有时不会触发回复。

此外，当发生以下事件时，sd-web-websocket将向WebSocket服务器发送消息：

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

## JSON消息示例

以下是实现一些功能的JSON消息示例，包括消息与响应消息

### 设置txt2img参数并生成

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

### 设置img2img重绘图片与遮罩

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

## 调试

### 显示隐藏元素

在`style.css`中注释掉以下代码：

```css
display: none;
```

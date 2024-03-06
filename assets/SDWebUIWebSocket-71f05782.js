import{M as t}from"./MyProject-7350f725.js";import{V as r}from"./VideoCell-61df5776.js";import{M as s}from"./MarkdownCell-2eec6931.js";import{m as i,z as o,A as a,C as p,B as e,u as n}from"./index-64cee8c8.js";import"./tag-ecb2b4e0.js";const u=`## Introduction\r
\r
This is an extension for [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) (referred to as SDWebUI), which allows SDWebUI instances to communicate with other web pages. This plugin utilizes the WebSocket protocol to establish real-time connections.\r
\r
## Background\r
\r
During the development of this project, the SDWebUI provided an official backend API, which allowed communication with the backend to generate images. However, the goal of this project is different. It treats the SDWebUI frontend as an independent object, enabling it to communicate with other web pages. This extension aims to assist users in interacting with the SDWebUI frontend and invoke other SDWebUI extensions through the frontend.\r
\r
The development plan for this project is to create an extension plugin for SDWebUI that facilitates communication on data and images between any regular web application and SDWebUI.\r
\r
## Implementation Approach\r
\r
To understand the implementation approach, let's start with the extension principles of SDWebUI. The basic extensions of SDWebUI are implemented by providing event listeners and interfaces for modifying the Gradio interface in a Python script, which can be found in \`scripts/websocket.py\`.\r
\r
Additionally, SDWebUI loads JavaScript scripts that are executed when the user interface is loaded. The main content of this script is \`javascript/sd-webui-websocket.js\`. It implements functionalities to send messages to the WebSocket server and retrieve or set Stable Diffusion WebUI interface elements.\r
\r
## Installation\r
\r
Copy the link to this repository and use it for "Install from URL":\r
\r
\`\`\`text\r
https://github.com/xyqlx/sd-webui-websocket\r
\`\`\`\r
\r
Alternatively, you can clone/download this repository and place it in the \`stable-diffusion-webui/extensions\` directory.\r
\r
## How do I develop applications using this extension?\r
\r
After installing this extension, a section called "Websocket" will appear on the \`txt2img\` tab as shown below:\r
\r
![section](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/section.png)\r
\r
Before clicking the "Enable" checkbox, you should set up a WebSocket server and specify its address in the "Route" field. This WebSocket server is the part that needs to be developed.\r
\r
In the \`demo\` directory, there is a simple example that includes a Node.js script providing HTTP and WebSocket services. You can refer to this example to develop your own application. Here are the steps to use this extension in conjunction with the example:\r
\r
\`\`\`bash\r
# Install Node.js before running for the first time\r
npm install\r
\r
# The default port is 39000, which can be configured in demo.js\r
node demo.js\r
\`\`\`\r
\r
Once the server is running, you can specify its address in the "Route" field and click the "Enable" checkbox. If everything is correct, a message will be displayed in the console:\r
\r
![open](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/open.png)\r
\r
All messages sent or received by the sd-webui-websocket plugin will be displayed in the "Chatbot" box. Some messages may be truncated due to their length.\r
\r
Now, you can open \`http://localhost:39000\` or another address in your browser. You will see a page similar to the following:\r
\r
![demo](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/demo.png)\r
\r
Here is a brief description of each button on this demo page:\r
\r
- \`Send Message\`: Sends a message to the sd-webui-websocket plugin. The message will be displayed in the plugin's console.\r
- \`Get All UI\`: Retrieves all UI elements of SDWebUI.\r
- \`Get UI\`: Retrieves the UI element specified by the \`Query\` field. Uses \`querySelector\` to find the element.\r
- \`Upload Image\`: Uploads an image to the \`Value\` field.\r
- \`Set UI\`: Sets the value of the UI element specified by the \`Query\` field.\r
\r
These functionalities are achieved by sending JSON messages to the sd-webui-websocket plugin. The message format is as follows:\r
\r
\`\`\`json\r
[\r
  {\r
    // Response messages have the same id as this\r
    "id": 0,\r
    "type": "get_all_ui"\r
  },\r
  {\r
    "id": 5,\r
    "type": "get_ui",\r
    "query": "#html-element-id input"\r
  },\r
  {\r
    "id": 12,\r
    "type": "set_ui",\r
    "query": "#html-element-id input",\r
    "value": "string or number or file base64"\r
  }\r
]\r
\`\`\`\r
\r
Successful responses to these messages are in the following format:\r
\r
\`\`\`json\r
[\r
  {\r
    "id": 0,\r
    "type": "response_get_all_ui",\r
    "status": "success",\r
    "currentTab": "txt2img",\r
    "elements": [\r
      {\r
        "tab": "tab_txt2img",\r
        "id": "closest ancestor id",\r
        "ancestorIds": ["components-2194", "tabs", "..."],\r
        "type": "textarea, button, file, etc.",\r
        "value": "value of the input or text content of the button"\r
      }\r
    ]\r
  },\r
  {\r
    "id": 5,\r
    "type": "response_get_ui",\r
    "status": "success",\r
    "element": {\r
      "type": "textarea, button, file, etc.",\r
      "value": "value of the input or text content of the button"\r
    }\r
  },\r
  {\r
    "id": 12,\r
    "type": "response_set_ui",\r
    "status": "success"\r
  }\r
]\r
\`\`\`\r
\r
**Note:** If the Stable Diffusion WebUI is not in the foreground, it may sometimes not trigger a response.\r
\r
Additionally, sd-web-websocket will send messages to the WebSocket server when the following events occur:\r
\r
\`\`\`json\r
[\r
  {\r
    "type": "process",\r
    "p": {\r
      "outpath_samples": "",\r
      "outpath_grids": "",\r
      "prompt": "",\r
      "prompt_for_display": null,\r
      "negative_prompt": "",\r
      "other attribution of StableDiffusionProcessing": "..."\r
    }\r
  },\r
  {\r
    "type": "before_process_batch",\r
    "batch_number": 0,\r
    "prompts": [],\r
    "seeds": [],\r
    "subseeds": []\r
  },\r
  {\r
    "type": "process_batch",\r
    "batch_number": 0,\r
    "prompts": [],\r
    "seeds": [],\r
    "subseeds": []\r
  },\r
  {\r
    "type": "postprocess_batch",\r
    "batch_number": 0\r
  },\r
  {\r
    "type": "postprocess_image",\r
    "pp": {\r
      "image": "base64code"\r
    }\r
  },\r
  {\r
    "type": "postprocess",\r
    "processed": {\r
      "images": ["base64code"],\r
      "prompt": "",\r
      "batch_size": 1,\r
      "info": "",\r
      "width": 512,\r
      "sampler_name": "Euler a",\r
      "steps": 20,\r
      "other attribution of Processed": "..."\r
    }\r
  }\r
]\r
\`\`\`\r
\r
## JSON Message Examples\r
\r
Here are some examples of JSON messages for implementing various functionalities, including the messages and response messages.\r
\r
### Set txt2img parameters and generate\r
\r
\`\`\`json\r
[\r
  {\r
    "id": 0,\r
    "type": "set_ui",\r
    "query": "#txt2img_prompt textarea",\r
    "value": "a cat playing with a hat"\r
  },\r
  { "id": 0, "type": "response_set_ui", "status": "success" },\r
  { "id": 1, "type": "set_ui", "query": "#txt2img_neg_prompt textarea", "value": "blurred" },\r
  { "id": 1, "type": "response_set_ui", "status": "success" },\r
  { "id": 2, "type": "set_ui", "query": "#txt2img_sampling input", "value": "DPM++ SDE Karras" },\r
  { "id": 2, "type": "response_set_ui", "status": "success" },\r
  { "id": 3, "type": "set_ui", "query": "#txt2img_steps input", "value": "30" },\r
  { "id": 3, "type": "response_set_ui", "status": "success" },\r
  { "id": 4, "type": "set_ui", "query": "#txt2img_height input", "value": "720" },\r
  { "id": 4, "type": "response_set_ui", "status": "success" },\r
  { "id": 5, "type": "set_ui", "query": "#txt2img_generate", "value": "" },\r
  { "id": 5, "type": "response_set_ui", "status": "success" },\r
  { "type": "process", "p": { "...": "..." } },\r
  { "type": "before_process_batch", "...": "..." },\r
  { "type": "process_batch", "...": "..." },\r
  { "type": "postprocess_batch", "batch_number": 0 },\r
  { "type": "postprocess_image", "pp": { "image": "" } },\r
  { "type": "postprocess", "processed": { "...": "..." } }\r
]\r
\`\`\`\r
\r
### Set img2img to redraw image and mask\r
\r
\`\`\`json\r
[\r
  { "id": 0, "type": "set_ui", "query": "#tabs button:nth-child(2)", "value": "" },\r
  { "id": 0, "type": "response_set_ui", "status": "success" },\r
  { "id": 1, "type": "set_ui", "query": "#mode_img2img button:nth-child(5)", "value": "" },\r
  { "id": 1, "type": "response_set_ui", "status": "success" },\r
  {\r
    "id": 2,\r
    "type": "set_ui",\r
    "query": "#img_inpaint_base input",\r
    "value": "data:image/jpeg;base64,..."\r
  },\r
  { "id": 2, "type": "response_set_ui", "status": "success" },\r
  {\r
    "id": 3,\r
    "type": "set_ui",\r
    "query": "#img_inpaint_mask input",\r
    "value": "data:image/jpeg;base64,..."\r
  },\r
  { "id": 3, "type": "response_set_ui", "status": "success" }\r
]\r
\`\`\`\r
\r
### ControlNet\r
\r
\`\`\`json\r
[\r
  {\r
    "query": "#txt2img_controlnet_ControlNet_controlnet_enable_checkbox input",\r
    "value": "true",\r
    "type": "set_ui",\r
    "id": 0\r
  },\r
  { "id": 0, "type": "response_set_ui", "status": "success" },\r
  {\r
    "id": 1,\r
    "query": "#txt2img_controlnet_ControlNet_input_image input",\r
    "value": "data:image/jpeg;base64,..."\r
  },\r
  { "id": 1, "type": "response_set_ui", "status": "success" },\r
  {\r
    "query": "#txt2img_controlnet_ControlNet_controlnet_preprocessor_dropdown input",\r
    "value": "tile_colorfix",\r
    "type": "set_ui",\r
    "id": 2\r
  },\r
  { "id": 2, "type": "response_set_ui", "status": "success" },\r
  {\r
    "query": "#txt2img_controlnet_ControlNet_controlnet_model_dropdown input",\r
    "value": "control_v11f1e_sd15_tile [a371b31b]",\r
    "type": "set_ui",\r
    "id": 3\r
  },\r
  { "id": 3, "type": "response_set_ui", "status": "success" }\r
]\r
\`\`\`\r
\r
## Debugging\r
\r
### Show hidden elements\r
\r
Comment out the following code in \`style.css\`:\r
\r
\`\`\`css\r
display: none;\r
\`\`\`\r
`,c=`## 介绍\r
\r
这是[AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui)（以下简称SDWebUI）的扩展，它使SDWebUI实例能够与其他网页进行通信。该插件利用WebSocket协议建立实时连接。\r
\r
## 背景\r
\r
在本项目开发时，SDWebUI提供了官方的后端API，这种方式可以实现与后端通信生成图片。此项目的目标有所不同，它将SDWebUI前端视为一个独立的对象，使其能够与其他网页进行通信，可以方便地辅助用户在SDWebUI前端的操作，并通过SDWebUI前端调用其他SDWebUI扩展\r
\r
本项目开发的计划目标是作为SDWebUI的一个扩展插件，能够帮助任意普通的Web应用实现与SDWebUI实行数据、图像上的通信\r
\r
## 实现思路\r
\r
这需要从SDWebUI的扩展原理开始说起。SDWebUI的基础扩展是通过以面向对象的方式，给Python脚本提供监听事件与修改gradio界面的接口实现的。这些可以在\`scripts/websocket.py\`中找到。\r
\r
另外，SDWebUI还会加载JavaScript脚本，这些脚本会在用户界面加载时执行。这是\`javascript/sd-webui-websocket.js\`的主要内容。在这个脚本中，实现了向 WebSocket 服务器发送消息，获取或设置 Stable Diffusion WebUI 界面元素的功能。\r
\r
## 安装\r
\r
将此存储库的链接复制到“从URL安装”中：\r
\r
\`\`\`text\r
https://github.com/xyqlx/sd-webui-websocket\r
\`\`\`\r
\r
还可以克隆/下载此存储库并将其放置在\`stable-diffusion-webui/extensions\`目录中。\r
\r
## 我怎么开发应用结合使用这个扩展？\r
\r
安装完成本扩展后，将在\`txt2img\`选项卡上显示一个名为\`Websocket\`的部分，如下所示：\r
\r
![section](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/section.png)\r
\r
在单击“Enable”复选框之前，应该设置一个WebSocket服务器，并在“Route”字段中指定其地址。这个WebSocket服务器就是需要开发的部分\r
\r
在\`demo\`目录下，是一个简单的示例，它包含了一个Node.js脚本，提供HTTP服务和WebSocket服务。可以参考这个示例，开发自己的应用。以下是使用这个示例时，结合使用此扩展的步骤：\r
\r
\`\`\`bash\r
# 首次运行之前，安装node.js\r
npm install\r
\r
# 默认端口是39000，可以在demo.js中进行设置\r
node demo.js\r
\`\`\`\r
\r
启动服务器后，可以在“Route”字段中指定其地址，然后单击“Enable”复选框。如果一切正确，控制台中将会显示一条消息：\r
\r
![open](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/open.png)\r
\r
sd-webui-websocket插件发送或接收的所有消息都将显示在“Chatbot”框中。由于某些消息太长，因此有些消息可能会被截断。\r
\r
现在，可以在浏览器中打开\`http://localhost:39000\`或其他地址。将会显示一个类似于以下的页面：\r
\r
![demo](https://github.com/xyqlx/sd-webui-websocket/raw/main/README/demo.png)\r
\r
以下是这个demo页面的每个按钮的功能的简要描述：\r
\r
- \`Send Message\`：向sd-webui-websocket插件发送消息。该消息将显示在sd-webui-websocket插件的控制台中。\r
- \`Get All UI\`：获取SDWebUI的所有UI元素。\r
- \`Get UI\`：获取由\`Query\`字段指定的UI元素。使用querySelector来查找元素。\r
- \`Upload Image\`：将图像上传到\`Value\`字段。\r
- \`Set UI\`：设置由\`Query\`字段指定的UI元素的值。\r
\r
这是通过向sd-webui-websocket插件发送JSON消息来实现的。消息的格式如下所示：\r
\r
\`\`\`json\r
[\r
  {\r
    // 响应消息具有与此相同的id\r
    "id": 0,\r
    "type": "get_all_ui"\r
  },\r
  {\r
    "id": 5,\r
    "type": "get_ui",\r
    "query": "#html-element-id input"\r
  },\r
  {\r
    "id": 12,\r
    "type": "set_ui",\r
    "query": "#html-element-id input",\r
    "value": "字符串或数字或文件base64"\r
  }\r
]\r
\`\`\`\r
\r
对这些消息的成功响应：\r
\r
\`\`\`json\r
[\r
  {\r
    "id": 0,\r
    "type": "response_get_all_ui",\r
    "status": "success",\r
    "currentTab": "txt2img",\r
    "elements": [\r
      {\r
        "tab": "tab_txt2img",\r
        "id": "closest ancesotr id",\r
        "ancestorIds": ["components-2194", "tabs", "..."],\r
        "type": "textarea, button, file, etc.",\r
        "value": "input的值或button的文本内容"\r
      }\r
    ]\r
  },\r
  {\r
    "id": 5,\r
    "type": "response_get_ui",\r
    "status": "success",\r
    "element": {\r
      "type": "textarea, button, file, etc.",\r
      "value": "input的值或button的文本内容"\r
    }\r
  },\r
  {\r
    "id": 12,\r
    "type": "response_set_ui",\r
    "status": "success"\r
  }\r
]\r
\`\`\`\r
\r
**注意：** 如果Stable Diffusion WebUI不在前台，它有时不会触发回复。\r
\r
此外，当发生以下事件时，sd-web-websocket将向WebSocket服务器发送消息：\r
\r
\`\`\`json\r
[\r
  {\r
    "type": "process",\r
    "p": {\r
      "outpath_samples": "",\r
      "outpath_grids": "",\r
      "prompt": "",\r
      "prompt_for_display": null,\r
      "negative_prompt": "",\r
      "other attribution of StableDiffusionProcessing": "..."\r
    }\r
  },\r
  {\r
    "type": "before_process_batch",\r
    "batch_number": 0,\r
    "prompts": [],\r
    "seeds": [],\r
    "subseeds": []\r
  },\r
  {\r
    "type": "process_batch",\r
    "batch_number": 0,\r
    "prompts": [],\r
    "seeds": [],\r
    "subseeds": []\r
  },\r
  {\r
    "type": "postprocess_batch",\r
    "batch_number": 0\r
  },\r
  {\r
    "type": "postprocess_image",\r
    "pp": {\r
      "image": "base64code"\r
    }\r
  },\r
  {\r
    "type": "postprocess",\r
    "processed": {\r
      "images": ["base64code"],\r
      "prompt": "",\r
      "batch_size": 1,\r
      "info": "",\r
      "width": 512,\r
      "sampler_name": "Euler a",\r
      "steps": 20,\r
      "other attribution of Processed": "..."\r
    }\r
  }\r
]\r
\`\`\`\r
\r
## JSON消息示例\r
\r
以下是实现一些功能的JSON消息示例，包括消息与响应消息\r
\r
### 设置txt2img参数并生成\r
\r
\`\`\`json\r
[\r
  {\r
    "id": 0,\r
    "type": "set_ui",\r
    "query": "#txt2img_prompt textarea",\r
    "value": "a cat playing with a hat"\r
  },\r
  { "id": 0, "type": "response_set_ui", "status": "success" },\r
  { "id": 1, "type": "set_ui", "query": "#txt2img_neg_prompt textarea", "value": "blurred" },\r
  { "id": 1, "type": "response_set_ui", "status": "success" },\r
  { "id": 2, "type": "set_ui", "query": "#txt2img_sampling input", "value": "DPM++ SDE Karras" },\r
  { "id": 2, "type": "response_set_ui", "status": "success" },\r
  { "id": 3, "type": "set_ui", "query": "#txt2img_steps input", "value": "30" },\r
  { "id": 3, "type": "response_set_ui", "status": "success" },\r
  { "id": 4, "type": "set_ui", "query": "#txt2img_height input", "value": "720" },\r
  { "id": 4, "type": "response_set_ui", "status": "success" },\r
  { "id": 5, "type": "set_ui", "query": "#txt2img_generate", "value": "" },\r
  { "id": 5, "type": "response_set_ui", "status": "success" },\r
  { "type": "process", "p": { "...": "..." } },\r
  { "type": "before_process_batch", "...": "..." },\r
  { "type": "process_batch", "...": "..." },\r
  { "type": "postprocess_batch", "batch_number": 0 },\r
  { "type": "postprocess_image", "pp": { "image": "" } },\r
  { "type": "postprocess", "processed": { "...": "..." } }\r
]\r
\`\`\`\r
\r
### 设置img2img重绘图片与遮罩\r
\r
\`\`\`json\r
[\r
  { "id": 0, "type": "set_ui", "query": "#tabs button:nth-child(2)", "value": "" },\r
  { "id": 0, "type": "response_set_ui", "status": "success" },\r
  { "id": 1, "type": "set_ui", "query": "#mode_img2img button:nth-child(5)", "value": "" },\r
  { "id": 1, "type": "response_set_ui", "status": "success" },\r
  {\r
    "id": 2,\r
    "type": "set_ui",\r
    "query": "#img_inpaint_base input",\r
    "value": "data:image/jpeg;base64,..."\r
  },\r
  { "id": 2, "type": "response_set_ui", "status": "success" },\r
  {\r
    "id": 3,\r
    "type": "set_ui",\r
    "query": "#img_inpaint_mask input",\r
    "value": "data:image/jpeg;base64,..."\r
  },\r
  { "id": 3, "type": "response_set_ui", "status": "success" }\r
]\r
\`\`\`\r
\r
### ControlNet\r
\r
\`\`\`json\r
[\r
  {\r
    "query": "#txt2img_controlnet_ControlNet_controlnet_enable_checkbox input",\r
    "value": "true",\r
    "type": "set_ui",\r
    "id": 0\r
  },\r
  { "id": 0, "type": "response_set_ui", "status": "success" },\r
  {\r
    "id": 1,\r
    "query": "#txt2img_controlnet_ControlNet_input_image input",\r
    "value": "data:image/jpeg;base64,..."\r
  },\r
  { "id": 1, "type": "response_set_ui", "status": "success" },\r
  {\r
    "query": "#txt2img_controlnet_ControlNet_controlnet_preprocessor_dropdown input",\r
    "value": "tile_colorfix",\r
    "type": "set_ui",\r
    "id": 2\r
  },\r
  { "id": 2, "type": "response_set_ui", "status": "success" },\r
  {\r
    "query": "#txt2img_controlnet_ControlNet_controlnet_model_dropdown input",\r
    "value": "control_v11f1e_sd15_tile [a371b31b]",\r
    "type": "set_ui",\r
    "id": 3\r
  },\r
  { "id": 3, "type": "response_set_ui", "status": "success" }\r
]\r
\`\`\`\r
\r
## 调试\r
\r
### 显示隐藏元素\r
\r
在\`style.css\`中注释掉以下代码：\r
\r
\`\`\`css\r
display: none;\r
\`\`\`\r
`,f=i({__name:"SDWebUIWebSocket",setup(l){return(d,b)=>(o(),a(t,{project:"sd-webui-websocket"},{default:p(()=>[e(r,{src:"https://github.com/xyqlx/sd-webui-websocket/assets/40012783/a99087ed-617d-4aa3-ab32-34d8df2330d8"}),e(s,{en:n(u),zh:n(c)},null,8,["en","zh"])]),_:1}))}});export{f as default};

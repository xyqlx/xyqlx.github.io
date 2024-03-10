import type { RouteComponent } from "vue-router";

export type localeText = {
    'en': string,
    'zh-CN': string,
}

export type Project = {
    name: string,
    description?: localeText,
    component: RouteComponent,
    tags: (string | localeText)[],
    cover?: string,
    github?: string,
    gitee?: string,
    demo?: string
};

import rainCover from './rain/rain-cover.gif';
import chocoberryCover from './chocoberry/chocoberry-cover.png';
import excelColumnSplitterCover from './excel-column-splitter/cover.png';
import candiesCover from './candies/cover.png';
import geneticAlgorithmFunctionCover from './genetic-algorithm-function/cover.png';
import TSPAPPCover from './tsp-app/cover.png';
import pcodeViewerCover from './pcode-viewer/demo.png';
import pl00WebIDECover from './pl00-webide/cover.png';

export const projects: Project[] = [
    {
        name: 'xyqlx-channel',
        component: () => import('./xyqlx-channel/XyqlxChannel.vue'),
        tags: ['Vue'],
        github: "https://github.com/xyqlx/xyqlx.github.io",
        demo: "https://xyqlx.github.io",
        description: {
            'en': "Personal website (https://xyqlx.github.io)",
            'zh-CN': "个人网页 https://xyqlx.github.io"
        }
    },
    {
        name: 'rain',
        component: () => import('./rain/RainVue.vue'),
        tags: ['WebGL'],
        github: "https://github.com/xyqlx/rain",
        demo: "https://xyqlx.github.io/rain",
        description: {
            'en': "A simple example of raining effect simulation using WebGL",
            'zh-CN': "一个使用WebGL实现的2D雨中水波效果模拟"
        },
        cover: rainCover
    },
    {
        name: 'chocoberry',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular', 'NestJS', 'lowdb'],
        github: "https://github.com/xyqlx/chocoberry-ng",
        demo: "https://xyqlx.github.io/chocoberry-ng",
        description: {
            'en': "GPU server monitoring system",
            'zh-CN': "GPU服务器监控系统"
        },
        cover: chocoberryCover
    },
    {
        name: 'MouseHalo',
        component: () => import('./mouse-halo/MouseHalo.vue'),
        tags: ['WPF', '.NET'],
        github: "https://github.com/xyqlx/MouseHalo",
        description: {
            'en': "Show input method status and copy hint near the mouse cursor",
            'zh-CN': "在鼠标附近显示输入法中英状态和复制提示"
        },
        cover: "https://github.com/xyqlx/MouseHalo/raw/master/images/demo.gif"
    },
    {
        name: 'BilibiliJustListening',
        component: () => import('./bilibili-just-listening/BilibiliJustListening.vue'),
        tags: ['Playwright', '.NET'],
        github: "https://github.com/xyqlx/BilibiliJustListening",
        description: {
            'en': "Use Playwright to access Bilibili from the command line",
            'zh-CN': "在命令行中用Playwright访问哔哩哔哩"
        },
        cover: "https://github.com/xyqlx/BilibiliJustListening/raw/master/images/screenshot1.png"
    },
    {
        name: 'layer-anything',
        component: () => import('./layer-anything/LayerAnything.vue'),
        tags: ['Segment Anything', {'en': 'Machine Learning', 'zh-CN': '机器学习'}, 'Vue', 'FastAPI'],
        description: {
            'en': "Layer anything with a single click",
            'zh-CN': "图片自动分层"
        }
    },
    {
        name: 'sd-webui-websocket',
        component: () => import('./sd-webui-websocket/SDWebUIWebSocket.vue'),
        tags: ['Stable Diffusion WebUI', 'WebSocket', 'Python', 'JavaScript'],
        github: "https://github.com/xyqlx/sd-webui-websocket",
        description: {
            'en': "WebSocket server for Stable Diffusion WebUI",
            'zh-CN': "用于Stable Diffusion WebUI的WebSocket服务器"
        },
        cover: "https://github.com/xyqlx/sd-webui-websocket/raw/main/README/open.png"
    },
    {
        name: 'underwater-fish-system',
        component: () => import('./underwater-fish-system/UnderwaterFishSystem.vue'),
        tags: [{'en': 'Machine Learning', 'zh-CN': '机器学习'}, {'en': 'Object Detection', 'zh-CN': '目标检测'}, 'PyTorch', 'FastAPI', 'Vue'],
        description: {
            'en': "Underwater fish target detection and semantic segmentation system",
            'zh-CN': "水下鱼类目标检测与语义分割系统"
        }
    },
    {
        name: 'ExcelColumnSplitter',
        component: () => import('./excel-column-splitter/ExcelColumnSplitter.vue'),
        tags: ['Excel', 'Office', '.NET', 'VSTO', 'WinForm'],
        gitee: "https://gitee.com/xyqlx/excel-column-splitter",
        description: {
            'en': "Excel Add-in for Splitting and Stacking Data",
            'zh-CN': "帮助分列与分行的Excel插件"
        },
        cover: excelColumnSplitterCover
    },
    {
        name: 'python-tutorial',
        component: () => import('./python-tutorial/PythonTutorial.vue'),
        tags: ['Angular', 'Pyodide', 'Dexie'],
        gitee: "https://gitee.com/xyqlx/python-tutorial",
        description: {
            'en': "Web version of a runnable Python tutorial",
            'zh-CN': "可以运行的Python教程网页版"
        }
    },
    {
        name: 'PaddyDoctor',
        component: () => import('./paddy-doctor/PaddyDoctor.vue'),
        tags: ['Android', 'Flask'],
        gitee: "https://gitee.com/stop-daydreaming/paddy-doctor-flask-server",
        description: {
            'en': "Identification of Crop Diseases and Pests",
            'zh-CN': "农作物病虫害识别应用"
        }
    },
    {
        name: 'candies',
        component: () => import('./candies/CandiesVue.vue'),
        tags: ['Angular', 'MongoDB', '.NET', 'ASP.NET'],
        description: {
            'en': "Personal recording tool",
            'zh-CN': "xyqlx的个人记录工具"
        },
        cover: candiesCover
    },
    {
        name: 'Cocoa',
        component: () => import('./cocoa/CocoaVue.vue'),
        tags: ['.NET', 'WPF', 'MongoDB', 'ASP.NET'],
        description: {
            'en': "Personal Windows utility portal",
            'zh-CN': "个人的Windows实用工具入口"
        }
    },
    {
        name: 'none-of-azure-kinect',
        component: () => import('./none-of-azure-kinect/NoneOfAzureKinect.vue'),
        tags: ['Electron', 'Angular'],
        github: "https://github.com/xyqlx/none-of-azure-kinect",
        description: {
            'en': "A simple tool for viewing connnected Azure Kinect data",
            'zh-CN': "一个简单的非官方Azure Kinect数据查看工具"
        }
    },
    {
        name: 'ChocolaTimer',
        component: () => import('./chocola-timer/ChocolaTimer.vue'),
        tags: ['.NET', 'WPF'],
        github: "https://github.com/xyqlx/ChocolaTimer",
        description: {
            'en': "Simple timers available for Windows",
            'zh-CN': "Windows可用的简单计时器"
        },
        cover: 'https://github.com/xyqlx/ChocolaTimer/raw/master/Image/active_new.png'
    },
    {
        name: 'asoul-cursors',
        component: () => import('./asoul-cursors/ASOULCursors.vue'),
        tags: ['Chrome', 'Angular'],
        github: "https://github.com/xyqlx/asoul-cursors",
        description: {
            'en': "A Chrome extension for custom mouse cursors",
            'zh-CN': "根据网页地址切换鼠标指针的Chrome扩展"
        },
        cover: 'https://github.com/xyqlx/asoul-cursors/raw/master/README/banner_5.gif'
    },
    {
        name: 'pcode-viewer',
        component: () => import('./pcode-viewer/PCodeViewer.vue'),
        tags: ['Angular', {'en': 'Compilation Principles', 'zh-CN': '编译原理'}, 'ANTLR'],
        gitee: "https://gitee.com/xyqlx/pcode-viewer",
        demo: " https://xyqlx.gitee.io/pcode-viewer",
        description: {
            'en': "Online Interpreter for P-code Languages",
            'zh-CN': "类P-code语言在线解释器"
        },
        cover: pcodeViewerCover
    },
    {
        name: 'PL00WebIDE',
        component: () => import('./pl00-webide/PL00WebIDE.vue'),
        tags: ['Angular', {'en': 'Compilation Principles', 'zh-CN': '编译原理'}, 'ANTLR'],
        gitee: "https://gitee.com/xyqlx/PL00WebIDE",
        demo: "https://xyqlx.gitee.io/pl00-editor-view/",
        description: {
            'en': "Online IDE for extended PL/0 language",
            'zh-CN': "扩展的PL/0语言的在线IDE"
        },
        cover: pl00WebIDECover
    },
    {
        name: 'tsp_app',
        component: () => import('./tsp-app/TSPAPP.vue'),
        tags: ['Vue', {'en': 'Genetic Algorithm', 'zh-CN': '遗传算法' }],
        gitee: "https://gitee.com/xyqlx/tsp_app",
        github: "https://github.com/xyqlx/tsp_view",
        demo: "http://xyqlx.github.io/tsp_view/",
        description: {
            'en': "Visualization of several solutions to TSP problems",
            'zh-CN': "TSP问题的几种解法可视化"
        },
        cover: TSPAPPCover
    },
    {
        name: 'genetic_algorithm_function',
        component: () => import('./genetic-algorithm-function/GeneticAlgorithmFunction.vue'),
        tags: ['Vue', {'en': 'Genetic Algorithm', 'zh-CN': '遗传算法' }],
        gitee: "https://gitee.com/xyqlx/genetic_algorithm_function",
        demo: "https://xyqlx.gitee.io/genetic_algorithm_function/",
        description: {
            'en': 'Genetic algorithm for solving the maximum value of a function',
            'zh-CN': '遗传算法求解函数最大值'
        },
        cover: geneticAlgorithmFunctionCover
    },
    {
        name: 'OneNoteTagGUI',
        component: () => import('./onenote-tag-gui/OneNoteTagGUI.vue'),
        tags: ['.NET', "OneNote", "WPF"],
        github: "https://github.com/xyqlx/OneNoteTagGUI",
        description: {
            'en': 'A GUI tool for managing OneNote tags',
            'zh-CN': '管理OneNote标签的GUI工具'
        }
    },
    {
        name: 'onom',
        component: () => import('./onenote-object-model/OneNoteObjectModel.vue'),
        tags: ['.NET', "OneNote"],
        github: "https://github.com/xyqlx/onom",
        description: {
            'en': 'OneNote Object Model',
            'zh-CN': 'OneNote对象模型'
        }
    },
    // add new project here
]

export function getProject(name: string): Project | undefined {
    return projects.find(p => p.name === name);
}
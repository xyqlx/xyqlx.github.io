import type { RouteComponent } from "vue-router";

type localeText = {
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
        }
    },
    {
        name: 'chocoberry',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular', 'NestJS'],
        github: "https://github.com/xyqlx/chocoberry-ng",
        demo: "https://xyqlx.github.io/chocoberry-ng",
        description: {
            'en': "GPU server monitoring system",
            'zh-CN': "GPU服务器监控系统"
        }
    },
    {
        name: 'MouseHalo',
        component: () => import('./mouse-halo/MouseHalo.vue'),
        tags: ['WPF', '.NET'],
        github: "https://github.com/xyqlx/MouseHalo",
        description: {
            'en': "Show input method status and copy hint near the mouse cursor",
            'zh-CN': "在鼠标附近显示输入法中英状态和复制提示"
        }
    },
    {
        name: 'BilibiliJustListening',
        component: () => import('./bilibili-just-listening/BilibiliJustListening.vue'),
        tags: ['Playwright', '.NET'],
        github: "https://github.com/xyqlx/BilibiliJustListening",
        description: {
            'en': "Use Playwright to access Bilibili from the command line",
            'zh-CN': "在命令行中用Playwright访问哔哩哔哩"
        }
    },
    {
        name: 'layer-anything',
        component: () => import('./layer-anything/LayerAnything.vue'),
        tags: ['Segment Anything', {'en': 'Machine Learning', 'zh-CN': '机器学习'}, 'Vue'],
        description: {
            'en': "Layer anything with a single click",
            'zh-CN': "图片自动分层"
        }
    },
    {
        name: 'sd-webui-websocket',
        component: () => import('./sd-webui-websocket/SDWebUIWebSocket.vue'),
        tags: ['Stable Diffusion WebUI', 'WebSocket'],
        github: "https://github.com/xyqlx/sd-webui-websocket",
        description: {
            'en': "WebSocket server for Stable Diffusion WebUI",
            'zh-CN': "用于Stable Diffusion WebUI的WebSocket服务器"
        }
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
        tags: ['Excel', 'Office', '.NET', 'VSTO'],
        gitee: "https://gitee.com/xyqlx/excel-column-splitter",
        description: {
            'en': "Excel Add-in for Splitting and Stacking Data",
            'zh-CN': "帮助分列与分行的Excel插件"
        }
    },
    {
        name: 'python-tutorial',
        component: () => import('./python-tutorial/PythonTutorial.vue'),
        tags: ['Python'],
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
        gitee: "https://gitee.com/stop-daydreaming/paddy-doctor-flask-server"
    },
    {
        name: 'candies',
        component: () => import('./candies/CandiesVue.vue'),
        tags: ['Angular']
    },
    {
        name: 'Cocoa',
        component: () => import('./cocoa/CocoaVue.vue'),
        tags: ['.NET']
    },
    {
        name: 'none-of-azure-kinect',
        component: () => import('./none-of-azure-kinect/NoneOfAzureKinect.vue'),
        tags: ['Electron', 'Angular'],
        github: "https://github.com/xyqlx/none-of-azure-kinect"
    },
    {
        name: 'ChocolaTimer',
        component: () => import('./chocola-timer/ChocolaTimer.vue'),
        tags: ['.NET'],
        github: "https://github.com/xyqlx/ChocolaTimer"
    },
    {
        name: 'asoul-cursors',
        component: () => import('./asoul-cursors/ASOULCursors.vue'),
        tags: ['Chrome', 'Angular'],
        github: "https://github.com/xyqlx/asoul-cursors"
    },
    {
        name: 'pcode-viewer',
        component: () => import('./pcode-viewer/PCodeViewer.vue'),
        tags: ['Angular', {'en': 'Compilation Principles', 'zh-CN': '编译原理'}, 'ANTLR'],
        gitee: "https://gitee.com/xyqlx/pcode-viewer"
    },
    {
        name: 'PL00WebIDE',
        component: () => import('./pl00-webide/PL00WebIDE.vue'),
        tags: ['Angular', {'en': 'Compilation Principles', 'zh-CN': '编译原理'}, 'ANTLR'],
        gitee: "https://gitee.com/xyqlx/PL00WebIDE"
    },
    {
        name: 'tsp_app',
        component: () => import('./tsp-app/TSPAPP.vue'),
        tags: ['Angular'],
        gitee: "https://gitee.com/xyqlx/tsp_app"
    },
    {
        name: 'genetic_algorithm_function',
        component: () => import('./genetic-algorithm-function/GeneticAlgorithmFunction.vue'),
        tags: ['Angular'],
        gitee: "https://gitee.com/xyqlx/genetic_algorithm_function"
    },
    {
        name: 'OneNoteTagGUI',
        component: () => import('./onenote-tag-gui/OneNoteTagGUI.vue'),
        tags: ['.NET', "OneNote", "WPF"],
        github: "https://github.com/xyqlx/OneNoteTagGUI"
    },
    {
        name: 'onom',
        component: () => import('./onenote-object-model/OneNoteObjectModel.vue'),
        tags: ['.NET', "OneNote"],
        github: "https://github.com/xyqlx/onom"
    }
]

export function getProject(name: string): Project | undefined {
    return projects.find(p => p.name === name);
}
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
    url?: string,
};

export const projects: Project[] = [
    {
        name: 'xyqlx-channel',
        component: () => import('./xyqlx-channel/XyqlxChannel.vue'),
        tags: ['Vue']
    },
    {
        name: 'rain',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['WebGL']
    },
    {
        name: 'chocoberry',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular', 'NestJS']
    },
    {
        name: 'MouseHalo',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['WPF', '.NET']
    },
    {
        name: 'BilibiliJustListening',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Playwright', '.NET']
    },
    {
        name: 'layer-anything',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Segment Anything', {'en': 'Machine Learning', 'zh-CN': '机器学习'}, 'Vue']
    },
    {
        name: 'sd-webui-websocket',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Stable Diffusion WebUI', 'WebSocket']
    },
    {
        name: 'underwater-fish-system',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: [{'en': 'Machine Learning', 'zh-CN': '机器学习'}, {'en': 'Object Detection', 'zh-CN': '目标检测'}, 'PyTorch', 'FastAPI', 'Vue']
    },
    {
        name: 'ExcelColumnSplitter',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Excel', 'Office', '.NET']
    },
    {
        name: 'python-tutorial',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Python']
    },
    {
        name: 'PaddyDoctor',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Android']
    },
    {
        name: 'candies',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular']
    },
    {
        name: 'Cocoa',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['.NET']
    },
    {
        name: 'none-of-azure-kinect',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Electron', 'Angular']
    },
    {
        name: 'ChocolaTimer',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['.NET']
    },
    {
        name: 'asoul-cursors',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Chrome']
    },
    {
        name: 'pcode-viewer',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular', {'en': 'Compilation Principles', 'zh-CN': '编译原理'}, 'ANTLR']
    },
    {
        name: 'PL00WebIDE',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular', {'en': 'Compilation Principles', 'zh-CN': '编译原理'}, 'ANTLR']
    },
    {
        name: 'tsp_app',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular']
    },
    {
        name: 'genetic_algorithm_function',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['Angular']
    },
    {
        name: 'OneNoteTagGUI',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['.NET']
    },
    {
        name: 'onom',
        component: () => import('./chocoberry/ChocoberryVue.vue'),
        tags: ['.NET']
    }
]

export function getProject(name: string): Project | undefined {
    return projects.find(p => p.name === name);
}
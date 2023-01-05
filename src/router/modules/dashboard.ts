const meta = {
    auth: true
};

const pre = 'dashboard-';

export default {
    path: '/dashboard',
    name: 'dashboard',
    redirect: {
        name: `${pre}console`
    },
    meta: {
        ...meta,
        title: '首页',
        icon: 'ios-paper'
    },
    component: () => import('@/layouts/index.vue'),
    children: [
        {
            path: 'console',
            name: `${pre}console`,
            meta: {
                ...meta,
                title: '工作台',
            },
            component: () => import('@/views/dashboard/console.vue')
        }
    ]
};

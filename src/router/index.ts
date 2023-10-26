import { createRouter, createWebHistory } from 'vue-router';
import { staticRouter } from '@/router/modules/staticRouter';
import { useUserStore } from '@/stores/modules/user';
import { useGlobalStore } from '@/stores/modules/global';
import NProgress from '@/utils/progress';

// 路由白名单
const ROUTER_WHITE_LIST = ['/home', '/campaign_course'];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    strict: false,
    routes: [...staticRouter],
});

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const userStore = useUserStore();
    const globalStore = useGlobalStore();

    // 1.判断是访问登录页，有 Token 就在当前页面，没有 Token 重置路由到登录页
    if (to.path.toLocaleLowerCase() === '/login') {
        if (userStore.accessToken) return next(from.fullPath);
        return next();
    }

    // 2.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行 目前首页和钓鱼课件列表不需要鉴权
    if (ROUTER_WHITE_LIST.includes(to.path)) return next();

    // 3.判断是否有 Token，没有重定向到 login 页面
    if (!userStore.accessToken) {
        // console.log(to);
        globalStore.setGlobalState('history', to);
        return next({ path: '/login', replace: true });
    }

    // 4.正常访问页面
    next();
});

router.afterEach(() => {
    NProgress.done();
});

export default router;

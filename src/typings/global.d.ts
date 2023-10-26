import * as echarts from 'echarts';

/* Menu */
declare namespace Menu {
    interface MenuOptions {
        path: string;
        name: string;
        component?: string | (() => Promise<unknown>);
        redirect?: string;
        meta: MetaProps;
        children?: MenuOptions[];
    }

    interface MetaProps {
        // icon: string
        isLink?: boolean;
        title: string;
        activeMenu?: string;
        isKeepAlive: boolean;
    }
}

declare type MyEChartsOption = echarts.EChartsOption;

/* Generic Tools */
type ObjToKeyValUnion<T> = {
    [K in keyof T]: { key: K; value: T[K] };
}[keyof T];

type ObjToKeyValArray<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T];

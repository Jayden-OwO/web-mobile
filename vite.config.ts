import {fileURLToPath, URL} from 'node:url';
import {ConfigEnv, defineConfig, loadEnv, UserConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from '@vant/auto-import-resolver';
import viteCompression from 'vite-plugin-compression';
import {createHtmlPlugin} from 'vite-plugin-html';

// https://vitejs.dev/config/
const viteConfig = defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd());
    return {
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        plugins: [
            vue(),
            vueJsx(),
            AutoImport({
                resolvers: [VantResolver()],
                imports: ['vue', 'vue-router'],
                eslintrc: {
                    enabled: false, // Default `false`
                    filepath: './.eslintrc-auto-import.json',
                    globalsPropValue: true,
                },
                dts: 'src/auto-import.d.ts',
            }),
            Components({
                resolvers: [VantResolver()],
            }),
            viteCompression({
                ext: '.gz',
                algorithm: 'gzip',
                threshold: 1024000, // 对大于 1mb 的文件进行压缩
            }),
            // 注入模板数据
            createHtmlPlugin({
                inject: {
                    data: {
                        ENABLE_ERUDA: env.VITE_ENABLE_ERUDA || 'false',
                    },
                },
            }),
        ],
        server: {
            host: '0.0.0.0',
            port: env.VITE_PORT as unknown as number,
            open: JSON.parse(env.VITE_OPEN),
            hmr: true,
        },

        esbuild: {
            pure: env.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
        },
        build: {
            outDir: 'dist',
            minify: 'esbuild',
            // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
            // minify: "terser",
            // terserOptions: {
            // 	compress: {
            // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
            // 		drop_debugger: true
            // 	}
            // },
            // 禁用 gzip 压缩大小报告，可略微减少打包时间
            reportCompressedSize: false,
            // 规定触发警告的 chunk 大小
            chunkSizeWarningLimit: 2000,
            rollupOptions: {
                output: {
                    // Static resource classification and packaging
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                    manualChunks: id => {
                        // if(id.includes(""))
                        // if (id.includes('node_modules/vue-pdf-embed')) {
                        //   return 'vendor-vue-pdf-embed'
                        // }
                        // if (id.includes('node_modules')) {
                        //   return 'vendor'
                        // }
                        // // if (id.includes("node_modules/@videojs")) {
                        // //     return "vendor-@videojs";
                        // // }
                        // // if (id.includes("node_modules/@videojs")) console.log("id-------------", id);
                    },
                },
            },
        },
    };
});

export default viteConfig;

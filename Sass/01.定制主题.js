/** 1.在vite 中css对象中预处理器中引入主题样式文件 */

    // return defineConfig({
    //     mode: 'development',
    //     server: {
    //         host: true,
    //         open: true,
    //         fs: {
    //             strict: true,
    //         },
    //         proxy: {
    //             '^/api/san-zhi-sys': {
    //                 //target: 'http://127.0.0.1:20086',
    //                 //target: 'http://192.168.10.62:20086',
    //                 //target: 'http://192.168.10.52:20086', // 测试
    //                 target: 'http://192.168.10.127:20086',
    //                 changeOrigin: true,
    //                 rewrite: (path: string) => path.replace(new RegExp('^/api/san-zhi-sys'), '')
    //             },
    //             '^/api/san-zhi-mall': {
    //                 //target: 'http://127.0.0.1:10900',
    //                 //target: 'http://192.168.10.62:20086',
    //                 //target: 'http://192.168.10.52:10900', // 测试
    //                 target: 'http://192.168.10.127:10900',
    //                 changeOrigin: true,
    //                 rewrite: (path: string) => path.replace(new RegExp('^/api/san-zhi-mall'), '')
    //             },
    //         },
    //     },
    //     plugins: [
    //         uni(),
    //         // 浏览器兼容问题配置
    //         legacyPlugin({
    //             targets: ['> 1%', 'last 3 major versions', 'iOS >= 11'],
    //             additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    //             renderLegacyChunks: false,
    //             polyfills: [
    //                 'es.symbol',
    //                 'es.promise',
    //                 'es.promise.finally',
    //                 'es/map',
    //                 'es/set',
    //                 'es.array.filter',
    //                 'es.array.for-each',
    //                 'es.array.flat-map',
    //                 'es.object.define-properties',
    //                 'es.object.define-property',
    //                 'es.object.get-own-property-descriptor',
    //                 'es.object.get-own-property-descriptors',
    //                 'es.object.keys',
    //                 'es.object.to-string',
    //                 'web.dom-collections.for-each',
    //                 'esnext.global-this',
    //                 'esnext.string.match-all',
    //             ],
    //         }),
    //         AutoImport({
    //             imports: ['vue', 'uni-app'],
    //             dirs: ['./src/utils/global'],
    //             // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
    //             dts: 'src/auto-import.d.ts',
    //             // 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
    //             eslintrc: {
    //                 enabled: true,
    //             },
    //         }),
    //     ],
    //     resolve: {
    //         alias: {
    //             '@': path.resolve(__dirname, 'src'),
    //             // '@img': path.resolve(__dirname, 'src/static/images'),
    //         },
    //     },
    //     build: {
    //         target: 'es2015',
    //         sourcemap: environment.VITE_BUILD_SOURCEMAP === 'true',
    //         // rollupOptions: {
    //         //   external: ['miniprogram-file', 'miniprogram-blob', 'miniprogram-text-encoder'],
    //         // },
    //         minify: 'terser',
    //         terserOptions: {
    //             compress: {
    //                 drop_console: environment.VITE_BUILD_DROP_CONSOLE === 'true', // 去除 console
    //             },
    //         },
    //         chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    //     },
    //     css: {
    //         preprocessorOptions: {
    //             scss: {
    //                 additionalData: `@import "@/styles/vars.scss";`,
    //             },
    //         },
    //     },
    // });


    /***************************** 2.在主题文件中定义 不不同主题的样式 ***************************** /

    // $themes: (
    //     normal: (
    //       home_font_size: 15px,
    //       font_12: 14px,
    //       font_14: 16px,
    //       title_s: 18px,
    //       title_m: 20px,
    //       title_large: 24px,
    //       font_tips: 14px,
    //       tabbar_height: 56px,
    //       tabbar_to_bottom_padding: 8px 0px,
    //       card_border_radius: 6px,
    //       card_top_bottom_margin: 12px,
    //       // 主标题行高
    //       title_main_line_height: 20px,
    //       title_main_weight: 600,
    //       title_bottom_line_height: 16px,
    //       // 副标题行高
    //       title_subodrination_margin_top_bottom: 4px 0,
    //       title_subodrination_line_height: 18px,
    //       title_subodrination_weight: 500,
    //       bottom_line_height: 18px,  
          
    //       //form表单
    //       lable_width: 110px,
    //       lable_width_uppop: 60px,
      
    //       // 没有数据时背景text
    //       backgroud_error_title_all: 20px,
    //       backgroud_error_title_weight_all: 500,
    //       backgroud_error_content_all: 18px,
    //       backgroud_error_btn_all: 14px,
    //       backgroud_error_btn_width_all: 68px,
    //       backgroud_error_btn_height_all: 36px,
    //       backgroud_error_btn_height_margin_all: 0px 16px,
      
    //       // 没有数据时，半屏的时
    //       backgroud_error_title_part: 18px,
    //       backgroud_error_title_weight_part: 500,
    //       backgroud_error_content_part: 16px,
    //       backgroud_error_btn_part: 14px,
    //       backgroud_error_btn_width_part: 64px,
    //       backgroud_error_btn_height_part: 28px,
    //       backgroud_error_btn_height_padding_part: 0px 8px,
    //       tabBar_icon_wid: 26px,
    //       tabBar_icon_heig: 26px,
    //       page_bottom_height: 22px,
      
    //       // 背景图片以及图标适配
    //       home_page_header_bg: '@/static/home/bg.png',
    //       home_page_header_left_bg: '@/static/home/integral.png',
    //       home_page_header_right_bg: '@/static/home/help.png',
      
    //       // 我的页面
    //       my_page_header_info_bg: '@/static/my/bg.png',
    //       my_page_record_info_bg: '@/static/my/record.png',
    //       my_page_help_info_bg: '@/static/my/help.png',
    //       my_page_participation_info_bg: '@/static/my/participation.png',
      
    //       // 首页图片宽高设置
    //       home_page_icon_image_width: 72px,
    //       home_page_icon_image_height: 61px,
      
    //       // 主题颜色的定义
    //       B1-6: #E6F4FF,
    //       B1-1: #0366F1,
    //       B1-7: #004ECC,
      
    //       // 水印宽高
    //       activityBanckGround_width: 68px,
    //       activityBanckGround_height: 68px,
    //       activityBanckGround_width_inside: 88px,
    //       activityBanckGround_height_inside: 88px,
      
    //       // 搜索按钮
    //       input_search_width: 10%,
    //       input_search: 8px,
    //       date_time_padding: 0px,
    //       segmented_control_height: 48px
    //     ),
    //     elder: (
    //       home_font_size: 22px,
    //       font_12: 21px,
    //       font_14: 24px,
    //       title_s: 27px,
    //       title_m: 30px,
    //       title_large: 36px,
    //       font_tips: 21px,
    //       tabbar_height: 76px,
    //       tabbar_to_bottom_padding: 12px 0px,
    //       card_border_radius: 12px,
    //       card_top_bottom_margin: 16px,
    //       // 主标题行高
    //       title_main_line_height: 30px,
    //       title_main_weight: 600,
    //       title_bottom_line_height: 24px,
    //       // 副标题行高
    //       title_subodrination_margin_top_bottom: 6px 0,
    //       title_subodrination_line_height: 26px,
    //       title_subodrination_weight: 500,
      
    //       bottom_line_height: 27px,
      
    //       // form表单
    //       lable_width: 150px,
    //       lable_width_uppop: 80px,
      
    //       // 没有数据时背景text
    //       backgroud_error_title_all: 27px,
    //       backgroud_error_title_weight_all: 600,
    //       backgroud_error_content_all: 21px,
    //       backgroud_error_btn_all: 18px,
    //       backgroud_error_btn_width_all: 90px,
    //       backgroud_error_btn_height_all: 48px,
    //       backgroud_error_btn_height_margin_all: 0px 32px,
      
    //       // 没有数据时，半屏的时
    //       backgroud_error_title_part: 24px,
    //       backgroud_error_title_weight_part: 600,
    //       backgroud_error_content_part: 18px,
    //       backgroud_error_btn_part: 15px,
    //       backgroud_error_btn_width_part: 70px,
    //       backgroud_error_btn_height_part: 36px,
    //       backgroud_error_btn_height_padding_part: 0px 16px,
    //       tabBar_icon_wid: 30px,
    //       tabBar_icon_heig: 30px,
    //       page_bottom_height: 33px,
      
    //       // 背景图片以及图标适配
    //       home_page_header_bg: '@/static/elder_image/home/bg.png',
    //       home_page_header_left_bg: '@/static/elder_image/home_left.png',
    //       home_page_header_right_bg: '@/static/elder_image/home_right.png',
      
    //       // 我的页面
    //       my_page_header_info_bg: '@/static/elder_image/home/info_bg.png',
    //       my_page_record_info_bg:'@/static/elder_image/home/upload/upload@3x.png',
    //       my_page_help_info_bg:'@/static/elder_image/home/help/help@3x.png',
    //       my_page_participation_info_bg:'@/static/elder_image/home/action/action@3x.png', 
      
    //       // 首页图片宽高设置
    //       home_page_icon_image_width: 124px,
    //       home_page_icon_image_height: 110px,
         
    //       // 主题颜色的定义
    //       B1-6: #E7F4FF,
    //       B1-1: #1492FF,
    //       B1-7: #0A508C,
      
    //       // 水印宽高
    //       activityBanckGround_width: 100px,
    //       activityBanckGround_height: 100px,
    //       activityBanckGround_width_inside: 120px,
    //       activityBanckGround_height_inside: 120px,
      
    //       // 搜索按钮
    //       input_search_width: 13%,
    //       input_search: 12px 8px,
    //       date_time_padding: 9px 0px,
    //       segmented_control_height: 56px
    //     ),
    //   );
      
    //   // 遍历$themes变量，将子map升级为全局。让函数中可以调用这个$theme-map
    //   @mixin themeify {
    //     @each $theme-name, $theme-map in $themes {
    //       $theme-map: $theme-map !global;
    //       //根标签里添加了data-theme='elder'  最后选择器变为[data-theme='elder'] .xxx{}
    //       [data-theme='#{$theme-name}'] & {
    //         @content;
    //       }
    //     }
    //   }
      
    //   //根据key获取对应的样式值  最后返回的就是#fff
    //   @function themed($key) {
    //     @return map-get($theme-map, $key);
    //   }
      

    /************ 3.在组件中进行调用 ****************/

    // 引入混入类
    // @include themeify() {
    //     font-size: themed('font_14') !important;
    //     line-height: themed('title_main_line_height') !important;
    //     font-weight: themed('title_main_weight') !important;
    // }
/***
 * 
 *   在main.js中创建实例成功后
 *   可以通过app.config.globalProperties.$zwUtils = zwUtils;
 *   给vue实例添加对象，添加成功后，可以在组件的任何地方进行调用
 * 
 */



/***
 * 
 *  import { defineProps, withDefaults } from "vue";
 * 
 *  defineProps: 要么设置默认值要么只设置参数的类型限制
 *  withDefaults 既可以设置默认值也可以设置参数类型
 * 
 *  例如：
 * 	interface Props {
		modelValue : string;
		limit ?: number | string; // 最大选择个数，h5 会自动忽略多选的部分
		title ?: string; // 组件标题，右侧显示上传计数
		mode ?: any; // 选择文件后的文件列表样式:list/grid
		fileMediatype ?: any; // 选择文件类型
		fileExtname ?: string; //选择文件后缀, 逗号隔开
		listStyles ?: any; // mode:list 时的样式
		imagesStyles ?: any; // mode:grid 时的样式
		sizeType ?: any; // original 原图，compressed 压缩图，默认二者都有
		sourceType ?: Array<string>; // album 从相册选图，camera 使用相机，默认二者都有。
		delIcon ?: boolean; // 是否显示删除按钮
		disablePreview ?: boolean; // 禁用图片预览，仅 mode:grid生效
		readonly ?: boolean; // 组件只读，不可选择，不显示进度，不显示删除按钮
		disabled ?: boolean; // 组件禁用
	}
	const props = withDefaults(defineProps<Props>(), {
		modelValue: '',
		limit: 3,
		title: '',
		mode: 'grid',
		fileMediatype: 'image',
		fileExtname: '',
		listStyles: null,
		imagesStyles: null,
		sizeType: ['original', 'compressed'],
		sourceType: ['camera', 'album'],
		delIcon: true,
		disablePreview: false,
		readonly: false,
		disabled: false,
	});
 * 
 */
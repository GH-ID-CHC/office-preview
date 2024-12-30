<template>
	<view>
		<!-- 确保预览容器始终被渲染 -->
		<div v-if="previewReady" ref="officeRef" style="width: 100%; height: 100vh;"></div>
		<view v-else class="error-message">{{ errorMessage }}</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, onMounted, nextTick } from 'vue';
	import jsPreviewDocx from "@js-preview/docx";
	import jsPreviewExcel from "@js-preview/excel";
	import jsPreviewPdf from "@js-preview/pdf";
	import '@js-preview/docx/lib/index.css';
	import '@js-preview/excel/lib/index.css';

	const officeRef = ref(null);
	const previewReady = ref(true); // 初始为 true，确保容器元素渲染
	const errorMessage = ref<string | null>(null);
	const props = defineProps({
		url: String,
		fileType: String
	})
	// 在页面加载完成后进行文档预览
	onMounted(() => {
		// 使用 nextTick 确保 DOM 渲染完成后再操作
		nextTick(() => {
			if (officeRef.value) {
				let myOfficePreviewer;
				if (props.fileType === 'docx') {
					myOfficePreviewer = jsPreviewDocx.init(officeRef.value);
				} else if (props.fileType === 'xlsx') {
					myOfficePreviewer = jsPreviewExcel.init(officeRef.value);
				} else if (props.fileType === 'pdf') {
					myOfficePreviewer = jsPreviewPdf.init(officeRef.value);
				} else {
					errorMessage.value = '文件类型错误';
					previewReady.value = false;
					return
				}
				myOfficePreviewer.preview(props.url)
					.then(() => {
						previewReady.value = true; // 预览成功时显示预览框
					})
					.catch((e) => {
						errorMessage.value = '预览失败：' + e.message;
						previewReady.value = false; // 预览失败时显示错误信息
					});
			} else {
				// 如果 officeRef 没有绑定到 DOM 元素，输出错误信息
				errorMessage.value = '无法找到预览容器元素';
				previewReady.value = false;
			}
		});
	});
</script>

<style lang="scss">
	.error-message {
		color: red;
		font-size: 14px;
	}
</style>
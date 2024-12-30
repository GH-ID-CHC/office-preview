# chai-office

## 第三方依赖

```shell
npm i @js-preview/pdf
npm i @js-preview/excel
npm i @js-preview/pdf
```

## API

|   参数   |             说明             |  类型  |
| :------: | :--------------------------: | :----: |
|   url    | 文件网络访问路经或base64编码 | String |
| fileType | 文件的类型：docx、xlsx、pdf  | String |

## 示例项目

```vue
	<view class="content">
		<chai-office :url="'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'" :fileType="'docx'"></chai-office>
	</view>
```


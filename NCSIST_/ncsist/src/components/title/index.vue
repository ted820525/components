<template>
	<div class="body d-flex justify-content-center">	
			
		<!-- <div class="left align-self-center d-flex flex-column">
			<subtitle class="subtitle" :subtitleInfo = "subtitle.left"/>

			<div class="content-container d-flex flex-column justify-content-around">
				<barChart :barObject="barData" class="barChart-container align-self-center"></barChart>
				
			</div>
					
		</div> -->
		<div class="right align-self-center d-flex flex-column">
			<subtitle class="subtitle" :subtitleInfo = "subtitle.right"/>
			<div class="content-container d-flex flex-column justify-content-around">
				<paraBox class="parameterBox align-self-center" :BoxObject="paraSetting"></paraBox>

				<paraBox class="parameterBox align-self-center" :BoxObject="pointerInput"></paraBox>
			</div>
		</div>
	</div>
</template>

<script>
// import subtitle from './title/subtitle.vue';
// import paraBox from './item/child/parameterBox';

import subtitle from './child/subtitle';
import paraBox from '../item/child/parameterBox';




// import barChart from '../chart/child/barchart';



export default{
	name: 'QualityManage',
	components: {subtitle, paraBox},
	// 可更改父類別的大標題
	data(){
		return{
			subtitle:{
				left:{
					iconSrc: require("@/assets/washingLine/tool/bar.png"),
					text: "Equator 300-Cpk",
					type: "normal",
				},
				right:{
					iconSrc: require("@/assets/washingLine/tool/rise.png"),
					text: "管制尺寸資訊",
					type: "normal",
				},
			},
			paraSetting: {
				type: 'select',
				title: '查詢參數設定'
			},
			pointerInput: {
				type: 'input',
				title: '指標'
			},
			barData:[
				{purple:30, green:60, avg:45},
				{purple:40, green:80, avg:60},
				{purple:50, green:50, avg:50}
					],
		}
	},
	mounted(){	
	},
}
</script>

<style scoped>

.body{
	width: 100%;
	height: calc(89300vh / 1080);
}
.subtitle{
	width: calc(100% - 1.57vw);
	height: calc(6280vh / 1080);
	margin-left: 0.785vw;
}
.left, .right{
	height: calc(84600vh / 1080);
	background-color: #FFFFFFF0;
	border: solid 1px #abb7c8;
}
.left{
	width: calc(81500vw / 1920);
	margin-left: calc(4890vw / 1920);
}

.right{
	width: calc(95000vw / 1920);
	margin-left: calc(2030vw/ 1920);
}
.parameterBox{
	width: calc(85400vw / 1920);
	height: calc(15600vh / 1080);
}

.content-container{
	height: calc(78320vh / 1080);
}
</style>
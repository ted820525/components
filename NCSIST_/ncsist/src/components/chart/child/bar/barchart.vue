<template>
	<div class="main d-flex">
		<div class="legendBar align-self-center d-flex flex-column justify-content-around">
			<img :src="legend1"/> <span>R11955</span> <img :src="legend2"/> <span>R11730</span> <img :src="legend3"/> <span>平均值</span>
		</div>
		<div class="d-flex justify-content-between">
			<div class="d-flex flex-column" v-for="item in barObject" :key='item '>
				<div class="valuetext">{{item.avg}}%</div>
				<div class="barContainer d-flex justify-content-around">
					<div class="barBG align-self-center d-flex">
						<div class="purpleBar align-self-end d-flex justify-content-center"><span class="align-self-start barValue">{{item.purple}}%</span></div>
					</div>
					<div class="barBG align-self-center d-flex">
						<div class="greenBar align-self-end d-flex justify-content-center"><span class="align-self-start barValue">{{item.green}}%</span></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props: {
		barObject: { type: Array }
    },
	data(){
		return{
			legend1: require("@/assets/washingLine/tool/legend1.png"),
			legend2: require("@/assets/washingLine/tool/legend2.png"),
			legend3: require("@/assets/washingLine/tool/legendAvg.png"),
		}
	},
	mounted(){
		var purpleBar = document.getElementsByClassName('purpleBar');
		var greenBar = document.getElementsByClassName('greenBar');
		for(var i=0; i<this.barObject.length; i++){
			purpleBar[i].style.height = this.barObject[i].purple+"%";
			greenBar[i].style.height = this.barObject[i].green+"%";
		}
	},
}
</script>

<style scoped>
*{
	font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
}

.legendBar{
	width: calc(6050vw / 1920);
	height: 87%;
	margin-top: calc(4000vh / 1080);
}
.legendBar span{
	font-size: 1rem;
	font-weight: bold;
	color: #7e8cb5;
}
.legendBar img{
	width: 100%;
}
.main >div:nth-child(2){
	width: 75.5%;
	height: 100%;
	margin-left: 9%;
}
.main >div:nth-child(2) >div{
	width: calc(15200vw / 1920);
	height: 100%;
}
.valuetext{
	width: 100%;
	height: calc(9800vh / 1080);
	font-size: 4.5625rem;
	font-weight: bold;
	text-align: center;
	color: #4f9cd4;
}
.barValue{
	font-size: 0.875rem;
	font-weight: normal;
	color: #FFF;
}
.barContainer{
	width: 100%;
	height: calc(100% - (9800vh/1080));
}
.barBG{
	width: calc(4300vw / 1920);
	height: calc(17160vh / 1080);
	background-color: #e6eef7;
}
.purpleBar{
	width: 100%;
	height: 50%;
	background-color: #6c87b5;
}
.greenBar{
	width: 100%;
	height: 50%;
	background-color: #70b7c0;
}
</style>
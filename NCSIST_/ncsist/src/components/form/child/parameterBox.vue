<template>
	<div class="main d-flex flex-column">
		<div class="d-flex">
			<img class="align-self-center ml-2" />
			<span class="title align-self-center ml-2">{{BoxObject.title}} :</span>
		</div>
		<div class="selectChart d-flex justify-content-around" v-if="BoxObject.type=='select'">
			<div class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">管制圖</span> <select class="align-self-center mb-2"><option>Short Run Chart</option></select> </div>
			<div class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">統計區間</span> <select class="align-self-center mb-2"><option>年</option></select> </div>
			<div class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">週期</span> <select class="align-self-center mb-2"><option>月</option></select> </div>
		</div>
		<div class="pointerInput d-flex justify-content-around" v-if="BoxObject.type=='input'">
			<div  class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">CL</span> <input/> </div>
			<div class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">UCL</span> <input/> </div>
			<div class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">LCL</span> <input/> </div>
			<div class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">Cpk</span> <input/> </div>
			<div class="d-flex flex-column justify-content-center"> <span class="align-self-center mb-2">等級</span> <input/> </div>
			
		</div>
	</div>
</template>

<script>
export default{
	props: {
		BoxObject: Object,
	},
	data(){
		return{
			
		}
	}
}
</script>

<style scoped>

select{
	width: 100%;
	height: calc(3000vh / 1080);
	background-color: #FFF;
	font-size: 0.875rem;
	font-weight: normal;
	color: #4f69a2;
	text-align-last: center;
}
input{
	height: calc(2800vh / 1080);
    width: calc(12000vw / 1920);
	border: solid 0.5px #6c87b5;
	background-color: #ffffff;
}
.main{
	border: solid 0.5px #6c87b5;
	background-color: #e6eef7;
	padding: 0 calc(2510vw / 1920);
    /* 內距 */
}
.main >div:nth-child(1){
	width: 100%;
	height: calc(5300vh / 1080);
	border-bottom: solid 0.5px #6c87b5;
    /* hr線到文字以上的高度,用div:nth-child(1)宣告 */
}
.title{
	font-family: MicrosoftJhengHei;
	font-size: 1rem;
	color: #4f69a2;
}
.selectChart, .pointerInput{
	width: 100%;
	height: calc(10250vh / 1080);
	font-size: 0.875rem;
	color: #4f69a2;
	/* 下面高 */
}
.selectChart span, .pointerInput span{
	font-weight: normal;
}
.selectChart >div:nth-child(1){
	width: calc(20000vw / 1920);
	height: 100%;
	/* 第一個眶第一個選項欄的width */
}
.selectChart >div:nth-child(n+2){
	width: calc(15000vw / 1920);
	height: 100%;
	/* 第一個眶第二個選項欄的width */
}
/* .pointerInput >div{
	width: calc(12000vw / 1920);
	height: 100%;
    用div來調整input的width
    也可以直接在input直接宣告width: calc(12000vw / 1920);
    
} */
</style>
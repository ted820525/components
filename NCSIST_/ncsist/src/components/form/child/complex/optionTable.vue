<template>
	<div class="main d-flex flex-column">
		<div class="eachRow d-flex"  v-for="item in selectType" >
			<div class="d-flex justify-content-center"><span class="align-self-center">{{item.title}}</span></div>
			<div class="d-flex justify-content-around">
				<select class="align-self-center" v-for="selectNum in item.select"><option v-for="opNum in selectNum">{{opNum}}</option></select>
			</div>
		</div>
		<div class="eachRow d-flex" v-for="item in spanType">
			<div class="d-flex justify-content-center"><span class="align-self-center">{{item.title}}</span></div>
			<div class="d-flex justify-content-around">
				<span class="align-self-center" v-for="span in item.span">{{span}}</span>
			</div>
		</div>
		<div class="eachRow d-flex" v-for="item in buttonType">
			<div class="d-flex justify-content-center"><span class="align-self-center">{{item.title}}</span></div>
			<div class="d-flex justify-content-around">
				<button class="align-self-center" v-for="span in item.span">{{span}}</button>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	props: {
		selectType: {type: Array},
		spanType: {type: Array},
		buttonType: {type: Array}
	},
	data(){
		return{
			selectType: [{title:'工單號碼', select:[[123,456], [123,456], [123,456]]}, {title:'工單號碼', select:[[123,456], [123,456], [123,456]]}],
			spanType: [{title:'工單號碼', span:[123, 123, 456] }, {title:'工單號碼', span:[123, 123, 456] }],
			buttonType: [{title:'工單號碼', span:[123, 123, 456] }, {title:'工單號碼', span:[123, 123, 456] }],
		}
	},
	mounted(){
	},
}
</script>

<style scoped>
select{
	width: calc(17000vw / 1920);
	height: calc(2500vh / 1080);
	border: solid 0.5px #6c87b5;
	background-color: #FFF;
	text-align-last: center;
	font-family: MicrosoftJhengHei;
	font-size: 0.875rem;
	font-weight: normal;
	color: #4c6599;
}
button{
	width: calc(8000vw / 1920);
	height: calc(2860vh / 1080);
	border: none !important;
	background-color: #6c87b5;
	font-family: MicrosoftJhengHei;
	font-size: 0.875rem;
	font-weight: normal;
	color: #FFF;
}
.main{
	border-right: solid 0.5px #6c87b5;
	border-top: solid 1px #6c87b5;
}
.eachRow{
	width: 100%;
	height: calc(100% / 6);
	background-color: #e6eef7;
}
.eachRow >div:nth-child(1){
	width: calc(10070vw / 1920);
	background-color: #6c87b5 !important;
	font-size: 1rem;
	font-weight: bold;
	color: #FFF;
}
.eachRow >div:nth-child(n+2){
	width: calc(100% - (10070vw / 1920));
	border-bottom: solid 0.5px #6c87b5;
	font-family: MicrosoftJhengHei;
	font-size: 0.875rem;
	font-weight: normal;
	color: #4c6599;
}
</style>
<template>
	<div class="body d-flex justify-content-center">
		
		<div class="left align-self-center d-flex flex-column">
			
			<div class="content-container d-flex flex-column justify-content-around">
				
				<optionTable :selectType="optionTable.selectType" :spanType="optionTable.spanType" :buttonType="optionTable.buttonType" class="option-table align-self-center"></optionTable>
			</div>
		</div>
	
	</div>
</template>

<script>

import optionTable from './optionTable';


export default{
	name: 'QualityManage',
	components: {optionTable},
	data(){
		return{
			
		
			optionTable: {
				selectType: [
					{title:'工單號碼', select:[['2557A9602931J11'], ['2557A9602931J11'], ['2557A9602931J11']] },
					{title:'加工圖號', select:[['557A-9-60293'], ['557A-9-60293'], ['557A-9-60293']] }
				],
				spanType: [
					{title:'產品名稱', span:['傳爆管體', '傳爆管體', '傳爆管體'] },
					{title:'道次名稱', span:['060铣製', '060铣製', '060铣製'] }
				],
				buttonType: [
					{title:'圖面資訊', span:['圖面', '圖面', '圖面'] },
					{title:'管制圖', span:['查詢', '查詢', '查詢'] }
				]
			}
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
.barChart-container{
	width: calc(74370vw / 1920);
	height: calc(36500vh / 1080);
}
.option-table{
	width: calc(74370vw / 1920);
	height: calc(29060vh / 1080);
}
.right{
	width: calc(95000vw / 1920);
	margin-left: calc(2030vw/ 1920);
}
.parameterBox{
	width: calc(85400vw / 1920);
	height: calc(15600vh / 1080);
}
.lineChart-container{
	width: calc(83000vw / 1920);
	height: calc(28400vh / 1080);
}
.content-container{
	height: calc(78320vh / 1080);
}
</style>
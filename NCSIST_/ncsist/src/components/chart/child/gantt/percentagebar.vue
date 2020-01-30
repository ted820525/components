<template>
	<div class="body d-flex justify-content-center">
		<asideNav style="height: 100%; background-color: #FFF; width: 48.9px; position:absolute; left:0;"></asideNav>
		<div class="left align-self-center d-flex flex-column">
			
			<div class="content-container d-flex flex-column justify-content-around">
				<barChart :barObject="barData" class="barChart-container align-self-center"></barChart>
				
			</div>
		</div>

	</div>
</template>
<script>




import barChart from './barchart'


export default{
	name: 'QualityManage',
	components: { barChart},
	data(){
		return{
			
		
			barData:[
				{purple:30, green:60, avg:45},
				{purple:40, green:80, avg:60},
				{purple:50, green:50, avg:50}
			]
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

</style>
  
<template>
    <div :id="pieObject.id" class="piecontainer"></div>
</template>

<script>
import Highcharts from 'highcharts';
export default {
    name: "pieData",
    props: {
        pieObject: { type: Object }
    },
    data() {
        return {
            ringChart: undefined,
        }
    },
	mounted(){
		//圓餅圖title根據rem調整offset
		var html = document.getElementsByTagName("html")
		var style = window.getComputedStyle(html[0], null).getPropertyValue('font-size');
		var fontSize = parseFloat(style);
		var height = document.getElementById(this.pieObject.id).offsetHeight;
		
		if(this.pieObject.type == 'simple'){
			this.ringChart = Highcharts.chart(this.pieObject.id,
			{
				chart: {
					type: 'pie',
					height: height,
				},
				credits: {
					enabled: false,  //remove highchart.com logo
				}, 
				series: [
					//圓餅圖外圈
					{
						type: 'pie',
						data: [{
							y:this.pieObject.value, color: "#8598c1"
						},{
							y:100-this.pieObject.value, color: '#ebf0f8'
						}],
						size: '120%',
						innerSize: '65%',
						animation: false,
						enableMouseTracking: false,
						dataLabels: false,
						borderWidth: 0,
					}
				],
				title: {
					useHTML: true,
					text: "<span class='valuetext'>"+this.pieObject.value+"%</span><hr/><span class='typetext'>"+this.pieObject.text+"</span>",
					verticalAlign: 'middle',
					align: 'center',
					margin: 0,
					y: fontSize*2.6,
					floating: true,
					style: {
						fontWeight: 'normal',
						fontSize: '2.6rem',
						color: "#4F69A2"
					}
				},
			});
		}
		else if(this.pieObject.type == 'inTable'){
			this.ringChart = Highcharts.chart(this.pieObject.id,
			{
				chart: {
					type: 'pie',
					height: height,
				},
				credits: {
					enabled: false,  //remove highchart.com logo
				}, 
				series: [
					//圓餅圖外圈
					{
						type: 'pie',
						data: [{
							y:this.pieObject.value, color: "#8598c1"
						},{
							y:100-this.pieObject.value, color: '#ebf0f8'
						}],
						size: '280%',
						innerSize: '60%',
						animation: false,
						enableMouseTracking: false,
						dataLabels: false,
						borderWidth: 0,
					}
				],
				title: {
					useHTML: true,
					text: "<span>"+this.pieObject.value+"%</span><br/><span>%</span>",
					verticalAlign: 'middle',
					align: 'center',
					margin: 0,
					y: fontSize*0.6,
					floating: true,
					style: {
						fontWeight: 'normal',
						fontSize: '0.6rem',
						color: "#4F69A2"
					}
				},
			});
		}
		else{
			var selectedIndex = 0;
			var inner = [];
			var total = 0;
			for(var i=0; i<this.pieObject.data.length; i++){
				total += this.pieObject.data[i].y;
				var data = {};
				data['color'] = '#E6EEF7';
				data['y'] = this.pieObject.data[i].y;
				inner.push(data);
			}
			this.ringChart = Highcharts.chart(this.pieObject.id,
			{
				chart: {
					type: 'pie',
					height: height,
				},
				credits: {
					enabled: false,  //remove highchart.com logo
				},
				plotOptions: {
					pie: {
						slicedOffset: 0,
						size: '108%',
						innerSize: '75%',
						shadow: false,
						allowPointSelect: true,
						cursor: 'pointer',
						legend:{
							enabled:false
						},
						animation: false,
						enableMouseTracking: false,
						dataLabels: false,
						colors: ['#8695C2','#18AFC6','#45AEA5'],
					}
				},
				series: [
					{
						type: 'pie',
						data: this.pieObject.data,
					},
					{
						type: 'pie',
						data: inner,
						color:"#ccc",
						size: '81%',
						innerSize:'78%'
					},
				],
				title: {
					useHTML: true,
					text: "<div class='d-flex flex-column'><span class='typetext'>"+this.pieObject.data[selectedIndex].text+"</span><span class='valuetext'>"+(this.pieObject.data[selectedIndex].y/total*100)+"%</span><hr/><span class='typetext'>總計: "+total+"次</span></div>",
					verticalAlign: 'middle',
					align: 'center',
					margin: 0,
					y: fontSize*1,
					floating: true,
					style: {
						fontWeight: 'normal',
						fontSize: '1rem',
						color: "#4F69A2"
					}
				},
			});
		}
	}
};
</script>

<style>
hr{
	width: calc(10000vh / 1080);
	margin: 1px !important;
}
.highcharts-title{
	font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;
	text-align: center;
}
.valuetext{
	font-weight: bold !important;
    font-size: 29px !important;
}
.typetext{
	font-weight: normal !important;
	font-size: 1.3125rem !important;
    font-size: 14px !important;
}
</style>
<template>
    <div :id="lineChartData.id"></div>
</template>


<script>
import Highcharts from 'highcharts';
export default {
    name: "lineChart",
    props: {
			lineChartData: { type: Object }
    },
    data() {
			return {
				chart: {},
				counter: this.lineChartData.dataList[0].data.length
			}
    },
    mounted() {
			var height = document.getElementById(this.lineChartData.id).offsetHeight;
			this.chart = Highcharts.chart(this.lineChartData.id, {
				chart: {
					marginTop: 20,
					backgroundColor: 'transparent',
					height: height,
					animation: Highcharts.svg // don't animate in old IE
				},
				credits: {
					enabled: false
				},
				title: null,
				xAxis: {
						labels: {
								enabled: false
						}
				},
				yAxis: {
					title: null,
					labels: {
						style: {
							color: '#8898bd',
							fontSize: '12px'
						}
					},
				},
				plotOptions: {
					series: {
							lineWidth: 3,
							marker: {
								radius: 6
							}
					},
					line: {
						marker: false
					}
				},
				series: this.lineChartData.dataList
			});
    },
    watch: {
			lineChartData: {
				deep: true,
				handler() {
					for(var i=0; i<this.chart.series.length; i++){
						this.chart.series[i].update({data: this.lineChartData.dataList[i].data});
					}
				}
			}
    }
};
</script>
<style lang="css">
</style>
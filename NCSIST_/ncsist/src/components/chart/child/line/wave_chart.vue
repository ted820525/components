<template>

 <div style="float:left; width: 49.45882vw;">
	<highcharts id="sameData" class="" :options="data" ref="sameData" style="height:29vh;"></highcharts>

</div>

</template>
<script>
import Highcharts from 'highcharts';
import { genComponent } from 'vue-highcharts';
export default {
    name: "capacityAnalysis",
    props: {
    },
    components: {
        Highcharts: genComponent('Highcharts', Highcharts)
    },
    data() {
        return {
            AutoStart: null,
            data: {},
            // 假資料, 用於initial顯示
            data_fake_1: [190, 192, 194, 196, 198, // 1-5
                200, 202, 204, 206, 208, // 6-10
                210, 212, 214, 216, 218, // 11-15
                220, 222, 224, 226, 228, // 16-20
                231, 232, 233, 234, 235, // 21-25
                236, 237, 238, 239, 240, //26-30
                241, 242, 243, 244, 245, // 31-35
                246, 247, 248, 249, 250, // 36-40
                250, 249, 248, 247, 246, // 41-45
                245, 244, 243, 242, 241, // 46-50
                240, 239, 238, 237, 236, // 51-55
                235, 234, 233, 232, 231, // 56-60
                228, 226, 224, 222, 220, // 61-65
                218, 216, 214, 212, 210, // 66-70
                208, 206, 204, 202, 200, // 71-75
                202, 204, 206, 208, 210, // 76-80
                207, 204, 201, 198, 195, // 81-85
                192, 189, 186, 183, 180, // 86-90
                177, 174, 171, 168, 165, // 91-95
                162, 158, 155, 152, 150 // 96-100
            ],

            data_fake_2: [190, 192, 194, 196, 198, // 1-5
                200, 202, 204, 206, 208, // 6-10
                210, 212, 214, 216, 218, // 11-15
                220, 222, 224, 226, 228, // 16-20
                231, 232, 233, 234, 235, // 21-25
                236, 237, 238, 239, 240, //26-30
                241, 242, 243, 244, 245, // 31-35
                246, 247, 248, 249, 250, // 36-40
                250, 249, 248, 247, 246, // 41-45
                245, 244, 243, 242, 241, // 46-50
                240, 239, 238, 237, 236, // 51-55
                235, 234, 233, 232, 231, // 56-60
                228, 226, 224, 222, 220, // 61-65
                218, 216, 214, 212, 210, // 66-70
                208, 206, 204, 202, 200, // 71-75
                202, 204, 206, 208, 210, // 76-80
                207, 204, 201, 198, 195, // 81-85
                192, 189, 186, 183, 180, // 86-90
                177, 174, 171, 168, 165, // 91-95
                162, 158, 155, 152, 150 // 96-100
            ]
        }
    },
    mounted() {
        this.data = {
            chart: {
                type: 'spline',
                backgroundColor: "#ffffff00"
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            credits: {
                enabled: false
            },
            legend: {
                symbolHeight: 12,
                symbolWidth: 12,
                symbolRadius: 6
            },
            xAxis: {
                min: 0,
                max: 100,
                labels: {
                    format: '{value} %'
                },
                crosshair: true,
                showFirstLabel: false, //第一個
                tickAmount: 5,
            },
            yAxis: [{
                min: 0, // y1
                max: 300,
                title: {
                    text: '',
                    align: 'high',
                    rotation: 0,
                    stroke: '#f24',
                    y: 0,
                    style: {
                        color: '#7280B3',
                    }
                },
                labels: {
                    style: {
                        color: '#7280B3' // y1 #05DBB7
                    }
                },
                tickAmount: 7
            },
            {
                min: 0, // y2
                max: 360,
                title: {

                    text: '',
                    align: 'high',
                    rotation: 0,
                    y: 0,

                    style: {
                        color: '#7280B3',
                    }
                }
                ,
                labels: {
                    style: {
                        color: '#7280B3' // y2
                    }
                },
                opposite: true, // y2
                tickAmount: 4
            }],
            plotOptions: {

                series: {
                    marker: {
                        enabled: false
                    },
                    label: {
                        connectorAllowed: false
                    },
                    //pointStart: 2010
                }
            },
            series: [{
                name: 'Y0', //y1
                data: this.data_fake_1,
                color: '#05DBB7',
                yAxis: 0 // 指定 Y1軸
            }, {
                name: 'Y1', //y2
                data: this.data_fake_2,
                color: '#7280B3',
                yAxis: 1 // 指定 Y2軸
            }],
            responsive: {
                rules: [{
                    condition: {
                        //maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            enabled: false
                        },
                    }
                }]
            }
        }
        this.AutoStart = setInterval(this.randomData, 1000);
    },
    destroyed() {
        clearInterval(this.AutoStart)
    },
    methods: {
        randomData: function () {
            var chart = this.$refs.sameData.chart;
            let data_fake_1 = this.data_fake_1.slice();
            let data_fake_2 = this.data_fake_2.slice();
            let pre_1 = data_fake_1.shift()
            let pre_2 = data_fake_2.shift()
            data_fake_1.push(pre_1);
            data_fake_2.push(pre_2);
            chart.series[0].update({ data: data_fake_1 });
            chart.series[1].update({ data: data_fake_2 });
            this.data_fake_1 = data_fake_1.slice();
            this.data_fake_2 = data_fake_2.slice();
        }
    }
};

</script>
<style lang="css">
</style>
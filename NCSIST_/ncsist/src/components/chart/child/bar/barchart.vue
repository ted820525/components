<template>
    <div class="">
        <Highcharts :options="options1" ref="barchart"></Highcharts>
    </div>
</template>

<script type="text/javascript">
import Highcharts from 'highcharts';
import { genComponent } from 'vue-highcharts';
const borderRadius = require('highcharts-border-radius')
borderRadius(Highcharts);

const barlinechart1 = {
    chart: {
        type: 'column',
        height: 260,
    },
    title: {
        text: null,
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [
            '',
            '小铣',
            '大铣',
            '小車',
            '中車',
            '大車',
            ''
        ],
        crosshair: true,
        labels: {
            style: {
                color: '#6678A8'
            }
        },
    },
    yAxis: {
        tickAmount: 6,
        min: 0,
        max: 125,
        title: {
            text: null
        },
        gridLineColor: '#BAC3D1',
        labels: {
            style: {
                color: '#6678A8'
            }
        },
            plotLines: [{
                    color: 'black',
                    dashStyle:'LongDash', 
                    width: 3,
                    value: 45,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                    },
                    zIndex: 5
                }]
    },
      
    credits: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    // 使用borderRadiusTopRight需安裝 "npm install highcharts-border-radius"
    plotOptions: {
        column: {
            colorByPoint: true,
            borderRadiusTopLeft: 30,
            borderRadiusTopRight: 30
            
        },
    },
    series: [{
        name: 'Normal',
        type: 'column',
        data: [
            { y: 0, color: '#fff' },
            { y: 60, color: '#4f69a2' },
            { y: 110, color: '#16a2bc' },
            { y: 85, color: '#009389' },
            { y: 70, color: '#C0C0C0' },
            { y: 50, color: '#8895C0' },
            { y: 0, color: '#fff' }
            ]
            
            },
            {
                    name: 'Datum Line',
                    type: 'line',
                    data: ['', 50, 100, 75, 60, 40,''],
                    color: '#424B5D',
                    marker: {
                        lineWidth: 5,
                        lineColor: '#424B5D',
                    }
            }
    ],
};
export default {
    components: {
        Highcharts: genComponent('Highcharts', Highcharts)
    },
    data() {
        return {
            options1: barlinechart1,
            isActive2: true,
            isActive1: false
        }
    },
    methods: {

    }
}
</script>

<style>
</style>
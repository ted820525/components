<template>
    <div class="mt-4 mb-3">
        <div class="time mb-3">
            修復時間
        </div>
        <Highcharts id="chart1" v-show="isActive1" :class="{ active: isActive1 }" :options="options1" ref="lineChart" style="width: 46.146vw; height: 27.1vh;"></Highcharts>
        <Highcharts id="chart2" v-show="isActive2" :class="{ active: isActive2 }" :options="options2" ref="lineChart" style="width: 46.146vw; height: 27.1vh;"></Highcharts>
        <div class="btcustom-l" @click.stop="leftan()">◀</div>
        <div class="btcustom-r" @click="rightan()">▶</div>
    </div>
</template>

<script type="text/javascript">
import Highcharts from 'highcharts';
import { genComponent } from 'vue-highcharts';

const line1 = {
    chart: {
        type: 'line',
        backgroundColor: "#ffffff00"
    },
    title: {
        text: null,
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [
            '04/01',
            '04/02',
            '04/03',
            '04/04',
            '04/05',
            '04/06',
            '04/07',
            '04/08',
            '04/09',
        ],
        labels: {
            style: {
                color: '#7d8bb5'
            }
        },
    },
    yAxis: {
        tickAmount: 6,
        min: 0,
        max: 25,
        title: {
            text: null
        },
        gridLineColor: '#BAC3D1',
        labels: {
            style: {
                color: '#6678A8'
            }
        }
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
    series: [{
        type: 'line',
        data: [
            { y: 11, color: '#13a1bc' },
            { y: 16, color: '#13a1bc' },
            { y: 11, color: '#13a1bc' },
            { y: 12, color: '#13a1bc' },
            { y: 11, color: '#13a1bc' },
            { y: 16, color: '#13a1bc' },
            { y: 8, color: '#13a1bc' },
            { y: 9, color: '#13a1bc' },
            { y: 7, color: '#13a1bc' }]
    }],
};

const line2 = {
    chart: {
        type: 'line',
        backgroundColor: "#ffffff00"
    },
    title: {
        text: null,
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: [
            '04/01',
            '04/02',
            '04/03',
            '04/04',
            '04/05',
            '04/06',
            '04/07',
            '04/08',
            '04/09',
        ],
        labels: {
            style: {
                color: '#7d8bb5'
            }
        },
    },
    yAxis: {
        tickAmount: 6,
        min: 0,
        max: 25,
        title: {
            text: null
        },
        gridLineColor: '#BAC3D1',
        labels: {
            style: {
                color: '#6678A8'
            }
        }
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
    series: [{
        type: 'line',
        data: [
            { y: 7, color: '#13a1bc' },
            { y: 9, color: '#13a1bc' },
            { y: 8, color: '#13a1bc' },
            { y: 16, color: '#13a1bc' },
            { y: 11, color: '#13a1bc' },
            { y: 12, color: '#13a1bc' },
            { y: 11, color: '#13a1bc' },
            { y: 16, color: '#13a1bc' },
            { y: 11, color: '#13a1bc' }]
    }],
};
export default {
    components: {
        Highcharts: genComponent('Highcharts', Highcharts)
    },
    data() {
        return {
            options1: line1,
            options2: line2,
            isActive2: true,
            isActive1: false
        }
    },
    methods: {
        leftan() {
            // console.log(123)
            // this.isActive2 = true;
            // this.isActive1 = false;
        },
        rightan() {
            // console.log(123)
            // this.isActive1 = true;
            // this.isActive2 = false;
        }
    }
}
</script>

<style scoped>
.btcustom-l {
    position: relative;
    float: left;
    padding-left: 2vw;
    margin-top: -2.9vh;
    cursor: pointer;
    font-size: 12px;
    color: #9097ba;
}
.btcustom-r {
    position: relative;
    float: right;
    padding-right: 0.5vw;
    margin-top: -2.9vh;
    cursor: pointer;
    font-size: 12px;
    color: #9097ba;
}
.time {
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.07px;
    color: #4f69a2;
}
</style>

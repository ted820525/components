<template>
    <div id="chart"></div>
</template>
<script>

import Highcharts from "highcharts";
export default {
    name: "helloworld",
    data() {
        return {
        dataList: [
            {
            showInLegend: false,
            name: "NXB1020A",
            data: [0, 10],
            marker: {
                symbol: "circle"
            },
            color: "#44afa5",
            upFlag: true
            }
        ]
        };
    },
    mounted() {
        this.chart = Highcharts.chart("chart", {
        chart: {
            type: "bar",
            backgroundColor: "transparent",
            // width: 800,
            // height: 300,
            plotBorderWidth: 1,
            plotBorderColor: "#abb7c8",
            animation: Highcharts.svg // don't animate in old IE
        },
        credits: {
            enabled: false
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [""],
        },
        yAxis: {
            // lineColor: '#abb7c8',
            // lineWidth: 1, 要註解掉才可以顯示邊框
            title: {
            text: null
            },

            tickPositions: [
            2,
            4,
            6,
            8,
            10,
            12,
            14,
            16,
            18,
            20,
            22,
            24,
            26,
            28,
            30,
            32,
            34
            ]
        },
        legend: {
            reversed: true,
            align: "right",
            verticalAlign: "top",
            symbolHeight: 10,
            x: 0,
            y: 0
        },
        plotOptions: {
            series: {
            stacking: "normal",
            showInLegend: true //關掉圖例
            }
        },
        series: [
            {
            name: "Shut Down",
            color: "#8e8e8f",
            data: [1]
            },
            {
            name: "ldle",
            color: "#16a2bc",
            data: [3]
            },
            {
            name: "Auto Run",
            color: "#7e97cd",
            data: [4]
            }
        ]
        });
    }
};
</script>

<style scoped>
.highcharts-axis-labels {
    width: 18px;
    height: 16px;
    font-family: FranklinGothic;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #4c6599;
}
.highcharts-legend-title {
    width: 75.8px;
    height: 26.5px;
    font-family: FranklinGothic;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.07px;
    text-align: center;
    color: #7c89b0;
}
</style>
<template>
<div class="container" style="width:62.5vw; height:38.4vh; border:solid 1px #abb7c8 ">
        
        <!-- <div class="chart" style="weight: 60%">
            <stackedgantt></stackedgantt>
        </div> -->
        <!-- 山積圖 -->

        <!-- <div style="float: left; margin-right: 2.72916666666667vw;">
            <threegantt :dataArray="machine"></threegantt>
        
        </div> -->
        <!-- 三軸山積圖 -->

        <!-- <div class="col-md-10">
            <linechart></linechart>
        </div> -->
        <!-- 折線圖 -->

    <!-- <div style="float:left; width: 49vw;">
        <wavechart></wavechart>
    </div> -->
    <!-- 波浪圖 -->

        <!-- Wave chart -->

        <!-- <div class="col-md-8">
            <pieChart style="height:17.9rem;" :pieObject="pieObject2"></pieChart>
        </div> -->
        <!-- 二分之一圓餅圖 -->

        <!-- <div class="col-md-8">
            <percentage_pie style="height:17.9rem;" :pieObject="pieObject2"></percentage_pie>
        </div> -->
        <!-- 百分比圓餅圖 -->



    <!-- <div class="homeRightRight column hSpaceBtw">
        <temperature style="height: 25.19vh;"></temperature>
        
    </div>  -->
    <!-- 溫度計 -->


    <!-- <div >
        <percentage></percentage>
    </div> -->
    <!-- 百分比圖 -->
    

    <!-- <div style="width: 365px; height: 334.7px;">
        <barchart></barchart>
    </div> -->
    <!-- 百分比長條圖 -->


<!--     
    <div style="float:left; width: 49vw;">
        <meterchart></meterchart>
    </div> -->
    <!-- 開發中儀表圖 -->


     <div class="row mt-3 mb-1">
        <div class="col-md-12">
            <totalPower :totalPowerData="totalPower" :Toggle="Toggle"></totalPower>
        </div>
    </div>

</div>

</template>

<script>
// 要使用請更改import顯示,下面也要components 名稱

// import stackedgantt from './child/gantt/stacked_gantt';

// import threegantt from './child/gantt/three_gantt';

// import wavechart from './child/line/wave_chart.vue';

// import linechart from './child/line/linechart';

// import pieChart from './child/pie/piechart';

// import percentage_pie from './child/pie/percentage_pie';

// import percentage from './child/bar/percentage';

// import barchart from './child/bar/barchart';

// import temperature from './temperature/index';

    // import meterchart from './child/pie/meterchart';

    import totalPower from './child/gantt/totalpower'


export default {
    
    components: {totalPower},

data() {
        return {
                        sidebarFlag: {
                side1: false,
                side2: false,
                side3: false,
                side4: false
            },
            rateData: {
                total: 100,
                data1: {
                    title: "R11955",
                    value: 70,
                    color: "#6880ac"
                },
                data2: {
                    title: "R11730",
                    value: 80,
                    color: "#1b96af"
                }
            },
            capacityData: {
                id: "capacityData",
                pieData: [{
                    name: 'W001',
                    y: 8,
                    z: 50,
                }, {
                    name: 'W002',
                    y: 4,
                    z: 25,
                }, {
                    name: 'W003',
                    y: 4,
                    z: 25,
                }],
                upFlag: false
            },   
            totalPower: {
                        name: "totalPower-header",
                        flag: true,
                        data: {
                            allEnergy: 2.5,
                            weekEnergy: 1.2,
                            monthEnergy: 1.5,
                            seasonEnergy: 1.9,
                            accumulatedEnergy: 2.2
                        }
                        },
            machine: [
                {
                    id: "W001",
                    data: [
                        { value: 7, color: "#347f77", title: "加工機等待下料", averger: 15, standard_deviation: 0.2 },
                        { value: 2, color: "#41a195", title: "機械手換爪", averger: 15, standard_deviation: 0.2 },
                        { value: 4, color: "#5aaea5", title: "加工機下料", averger: 15, standard_deviation: 0.2 },
                        { value: 5, color: "#54bacc", title: "視覺辨識", averger: 15, standard_deviation: 0.2 },
                        { value: 4, color: "#4e9bd5", title: "壓機壓合", averger: 15, standard_deviation: 0.2 },
                        { value: 4, color: "#87bde3", title: "去刺站等待下料", averger: 15, standard_deviation: 0.2 },
                        { value: 3, color: "#9bacd1", title: "去刺站下料", averger: 15, standard_deviation: 0.2 },
                        { value: 2, color: "#6c86b5", title: "加工機等待下料", averger: 15, standard_deviation: 0.2 },
                        { value: 3, color: "#516fac", title: "機械手換爪", averger: 15, standard_deviation: 0.2 },
                        { value: 4, color: "#435c92", title: "加工機下料", averger: 15, standard_deviation: 0.2 },
                        { value: 1, color: "#394e77", title: "視覺辨識", averger: 15, standard_deviation: 0.2 },
                        { value: 1, color: "#3a4971", title: "壓機壓合", averger: 15, standard_deviation: 0.2 }]
                }, {
                    id: "W002",
                    data: [
                        { value: 4, color: "#347f77", title: "加工機等待下料", averger: 20, standard_deviation: 0.2 },
                        { value: 2, color: "#41a195", title: "機械手換爪", averger: 20, standard_deviation: 0.2 },
                        { value: 8, color: "#5aaea5", title: "加工機下料", averger: 20, standard_deviation: 0.2 },
                        { value: 5, color: "#54bacc", title: "視覺辨識", averger: 20, standard_deviation: 0.2 },
                        { value: 4, color: "#4e9bd5", title: "壓機壓合", averger: 20, standard_deviation: 0.2 },
                        { value: 3, color: "#87bde3", title: "去刺站等待下料", averger: 20, standard_deviation: 0.2 },
                        { value: 1, color: "#9bacd1", title: "去刺站下料", averger: 20, standard_deviation: 0.2 },
                        { value: 3, color: "#6c86b5", title: "加工機等待下料", averger: 20, standard_deviation: 0.2 },
                        { value: 2, color: "#516fac", title: "機械手換爪", averger: 20, standard_deviation: 0.2 },
                        { value: 3, color: "#435c92", title: "加工機下料", averger: 20, standard_deviation: 0.2 },
                        { value: 2, color: "#394e77", title: "視覺辨識", averger: 20, standard_deviation: 0.2 },
                        { value: 1, color: "#3a4971", title: "壓機壓合", averger: 20, standard_deviation: 0.2 }]
                }, {
                    id: "W003",
                    data: [
                        { value: 3, color: "#347f77", title: "加工機等待下料", averger: 15, standard_deviation: 0.25 },
                        { value: 2, color: "#41a195", title: "機械手換爪", averger: 15, standard_deviation: 0.25 },
                        { value: 7, color: "#5aaea5", title: "加工機下料", averger: 15, standard_deviation: 0.25 },
                        { value: 2, color: "#54bacc", title: "視覺辨識", averger: 15, standard_deviation: 0.25 },
                        { value: 5, color: "#4e9bd5", title: "壓機壓合", averger: 15, standard_deviation: 0.25 },
                        { value: 4, color: "#87bde3", title: "去刺站等待下料", averger: 15, standard_deviation: 0.25 },
                        { value: 6, color: "#9bacd1", title: "去刺站下料", averger: 15, standard_deviation: 0.2 },
                        { value: 3, color: "#6c86b5", title: "加工機等待下料", averger: 15, standard_deviation: 0.25 },
                        { value: 2, color: "#516fac", title: "機械手換爪", averger: 15, standard_deviation: 0.25 },
                        { value: 2, color: "#435c92", title: "加工機下料", averger: 15, standard_deviation: 0.25 },
                        { value: 2, color: "#394e77", title: "視覺辨識", averger: 15, standard_deviation: 0.25 },
                        { value: 1, color: "#3a4971", title: "壓機壓合", averger: 15, standard_deviation: 0.25 }]
                }
            ],
        
            pieObject2: {
                type: 'double',
                id: "pie2",
                data: [
                    {
                        y: 50,
                        text: '小車',
                    },
                    {
                        y: 50,
                        text: '大铣',
                    },
                ],
                
            },
            methods: {
        sidebarActive: function (index) {
            this.sidebarFlag[index] = true;
        },
        sidebarOut: function (index) {
            this.sidebarFlag[index] = false;
        }
    }
        }
    }
}
</script>
<style>
.homeRight {
  width: 39vw;
  height: 100%;
}


</style>
<template>
<div class="container" style="width:62.5vw; height:38.4vh; border:solid 1px #abb7c8 ">
        
        <div class="chart" style="weight: 60%">
            <stackedgantt></stackedgantt>
        </div>
        <!-- 山積圖 -->

        <!-- <div style="float: left; margin-right: 2.72916666666667vw;">
            <threegantt :dataArray="machine"></threegantt>
           
        </div> -->

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

    <!-- <div class="homeRightRight column hSpaceBtw">
        <temperature style="height: 25.19vh;"></temperature>
        
    </div>  -->
    <!-- 溫度計 -->


    <!-- <div >
        <percentage></percentage>
    </div> -->
    <!-- 百分比圖 -->
    

    <div style="width: 365px; height: 334.7px;">
        <barchart></barchart>
    </div>
    <!-- 百分比長條圖 -->


    
    <!-- <div style="float:left; width: 49vw;">
        <meterchart></meterchart>
    </div> -->
    <!-- 開發中儀表圖 -->

</div>

</template>

<script>
// 要使用請更改import顯示,下面也要components 名稱

// import stackedgantt from './child/gantt/stacked_gantt';

// import threegantt from './child/gantt/three_gantt';

// import wavechart from './child/line/wave_chart.vue';

// import linechart from './child/line/linechart';

// import pieChart from './child/pie/piechart';

// import percentage from './child/bar/percentage';

import barchart from './child/bar/barchart';

// import temperature from './temperature/index';


export default {
    
    components: {barchart},

data() {
        return {
        
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
                ]
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
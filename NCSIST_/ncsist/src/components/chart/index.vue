<template>
<div class="container" style="width:62.5vw; height:38.4vh; border:solid 1px #abb7c8 ">
        
        <div class="chart" style="weight: 60%">
            <gantt></gantt>
        </div>
        <!-- 複合式甘特圖 -->

        <!-- <div class="col-md-10">
            <linechart></linechart>
        </div> -->
        <!-- 折線圖 -->

        <!-- <div class="col-md-8">
            <pieChart style="height:17.9rem;" :pieObject="pieObject2"></pieChart>
        </div> -->
        <!-- 二分之一圓餅圖 -->

    <!-- <div class="homeRightRight column hSpaceBtw">
        <temperature style="height: 25.19vh;"></temperature>
        
    </div>  -->
    <!-- 溫度計 -->

    




        
        
</div>

</template>

<script>
// 要使用請更改import顯示,下面也要components 名稱

import gantt from './child/gantt/gantt';
// import linechart from './child/line/linechart';
// import pieChart from './child/pie/piechart';
// import temperature from './temperature/index';


export default {
    
    components: { gantt},

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
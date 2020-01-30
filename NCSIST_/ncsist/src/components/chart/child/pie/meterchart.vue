<template>
<div class="row container-row mt-2">
                <div class="col-7">
                    <div class="row" style="width: 365px; height: 272.9px;">
                        <div class="col panbottom text-left">
                            <div class="w-xl-100 w-xs-100">
                                <div class="">
                                    <div class="now-Power-content mt-4">
                                        <span id="nowPower-Value"></span>
                                        <div class="innerContent">
                                            <canvas id="nowPower"></canvas>
                                        </div>
                                        <span id="nowPower-min-Value">0</span>
                                        <span id="nowPower-max-Value">1500</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
</template>

<script>
import Highcharts from 'highcharts';
import { genComponent } from 'vue-highcharts';
import gauge from './gauge'
export default {
    components: {
        Highcharts: genComponent('Highcharts', Highcharts)
    },
    mounted() {
        let value;
        let opts = {
            angle: 0, // The span of the gauge arc
            lineWidth: 0.25, // The line thickness
            radiusScale: 1, // Relative radius
            pointer: {
                length: 0.25, // // Relative to gauge radius
                strokeWidth: 0.054, // The thickness
                color: '#696969' // Fill color
            },
            limitMax: false, // If false, max value increases automatically if value > maxValue
            limitMin: false, // If true, the min value of the gauge will be fixed
            colorStart: '#6FADCF', // Colors
            colorStop: '#8FC0DA', // just experiment with them
            strokeColor: '#E0E0E0', // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true, // High resolution support
            renderTicks: {
                divisions: 20,
                divWidth: 3.5,
                divLength: 1,
                divColor: '#fff',
                subDivisions: 0,
                subLength: 0,
                subWidth: 0,
                subColor: '#666666'
            },
            staticZones: [
                { strokeStyle: '#49A59E', min: 0, max: 500 },
                { strokeStyle: '#28A4BC', min: 500, max: 1000 },
                { strokeStyle: '#697BB0', min: 1000, max: 1500 },
            ],
        };

        let target = document.getElementById('nowPower'); // your canvas element
        
        gaugeDiagram.setTextField(document.getElementById("nowPower-Value"));
        gaugeDiagram.maxValue = 1500; // set max gauge value
        gaugeDiagram.setMinValue(0); // Prefer setter over gauge.minValue = 0
        gaugeDiagram.set(950); // set actual value

        setInterval(function () {
            value = Math.floor(Math.random() * 1500) + 0;
            gaugeDiagram.set(value); // set actual value
        }, 2000);

}
}
</script>
<style scoped>

#nowPower {
    width: 100%;
}

#nowPower-Value {
    float: right;
    color: #697bb0;
    font-size: 36px;
    
}

#nowPower-min-Value {
    float: left;
    font-size: 16px;
    color: #697bb0;
    position: absolute;
    left: 50px;
}

#nowPower-max-Value {
    float: right;
    font-size: 16px;
    color: #697bb0;
}





.panbottom {
    height: 30vh;
    border: 2px solid #bbc4d2;
    border-radius: 0.3rem;
    background-color: #fff;
    margin-right: 0.25vw !important;
    margin-left: 0.25vw !important;
}


.container {
    max-width: 100%;
}
.container-fluid {
    height: 100%;
    padding-top: 0.5rem;
}
.container-fluid > .row > .col-lg-12 {
    max-height: calc(100vh - 0rem);
}
.container-row {
    padding: 0 1vw;
}

.now-Power-content {
    position: relative;
    padding-top: 0.1rem;
}
.now-Power-content .innerContent {
    text-align: center;
    padding-top: 3rem;
}





.nowPower-content {
    position: relative;
}

#nowPower-Value {
    position: absolute;
    right: 1rem;
    top: 0.3rem;
    color: #697bb0;
    font-size: 2rem;
    font-weight: bold;
}
#nowPower {
    width: 14.9vw;
}
#nowPower-min {
    position: absolute;
    left: 1rem;
    top: 12rem;
}
#nowPower-max {
    position: absolute;
    right: -0.3rem;
    top: 12rem;
}
#nowPower-w {
    position: absolute;
    top: 13rem;
    right: 0;
}
.resultAnalysis-panel {
    position: relative;
}
.resultAnalysis-item {
    z-index: 1000;
    top: 7.407407407407407vh;
    left: 1.8vw;
    width: 4.260417vw;
    position: absolute;
}
.resultAnalysis-items {
    padding-top: 1rem;
    display: block;
    color: #a8acc2;
    text-align: center;
    font-size: 0.75rem;
}
.resultAnalysis-name {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    /* padding-bottom: .25rem; */
}
</style>
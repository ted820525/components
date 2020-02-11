<template>
        <div class="panel" style="background-color: #d6dfed;margin-top:2vh; width: 18vw;">
                    <div class="tit_big">
                        <span>小铣 Cpk-RMP60</span><img class="ml-5" style="margin-top:-1vh;" width="23" src="" alt="">
                   </div>
                    <div  style="height: 25vh; width: 15vw; background: #f5f8fa;top: 10px;">
                        <div style="right:10px">
                        <apexchart class="apexchart" type="radialBar" :options="options1" :series="series" style="margin-top: 3vh;padding-top: 1vh;"></apexchart>
                        <div class="perso">
                            <div class="one_perso">
                                35%
                            </div>
                            <div class="two_perso">
                                20%
                            </div>
                        </div>
                        <div class="name">
                            <div class="one_name">
                                R11955
                            </div>
                            <div class="two_name">
                                R11730
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
export default {
    data() {
        return {
            options1: {
                chart: {
                    background: 'transparent'
                },
                colors: ['#6c87b5', '#70b7c0'],
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '50%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,

                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                }
            },
            series: [76, 67],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'right',
                offsetX: 160,
                offsetY: 10,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                    horizontal: 1,
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        show: false
                    }
                }
            }]

        }
    },
    mounted() {
    }
}
</script>

<style>
.apexchart{
    width: 309px; 
    height: 284px;
}

.panel {
    background-color: rgba(255, 255, 255, 0.8);
    height: 36vh !important;
}
.perso {
    position: relative;
    left: 5vw;
    top: -24vh;
}
.one_perso {
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.12px;
    text-align: left;
    color: #6c87b5;
}
.two_perso {
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.6px;
    text-align: left;
    color: #41a095;
}
.name {
    position: relative;
    z-index: 1;
    top: -23vh;
    left: 5.5vw;
}
.one_name {
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.13px;
    text-align: left;
    color: #4f69a2;
}
.two_name {
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.65px;
    text-align: left;
    color: #41a095;
}
.tit_big {
    font-size: 30px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: 0.15px;
    text-align: center;
    color: #506fad;
}

</style>
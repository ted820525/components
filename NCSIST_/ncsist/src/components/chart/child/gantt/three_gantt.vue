<template>
    <div class="analysis-content-body">
        <div class="content-body-title">
    
        </div>
        <div class="analysis-diagram">
            <div class="analysis-background">
                <img class="up-down-button" src="" />
                <div class="analysis-bar" v-for="(select, index) in selectIndex" :key="index">
                    <select class="float-left select-machine" v-model="selectIndex[index]">
                        <option v-for="(dataObject, i) in dataArray" :key="i" :value="i">{{dataObject.id}}</option>
                    </select>
                    <div class="analysis-line" v-for="j in 19" :key="j">
                        &nbsp;
                    </div>
                    <div class="analysis-table">
                        <div v-for="(data, k) in dataArray[selectIndex[index]].data" :key="k" class="analysis-data"
                            :style="{ 'background-color': data.color, 'width': 'calc(1.2421875vw * ' + data.value + ')' }">
                            &nbsp;
                        </div>
                    </div>
                </div>
                <img class="up-down-button" src="" />
            </div>
            <div class="analysis-step">
                <div v-for="i in 19" :key="i">
                    {{i * 2}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "three_gantt",
    props: {
        dataArray: { type: Array }
    },
    data() {
        return {
            selectIndex: [0, 1, 2]
        }
    },
    mounted() {
        console.log(this.dataArray);
    },
    methods: {}
};
</script>
<style scoped>
.analysis-content-body {
    float: left;
    width: 63.515625vw;
    height: 33.19166666666667vh;
    margin-top: 1.109375vh;
    font-family: Microsoft JhengHei;
}
.content-body-title {
    height: 4.2vh;
    line-height: 4.2vh;
    width: 100%;
}
.content-img {
    width: 1.197916667vw;
}
.workTitle {
    float: left;
    font-size: 0.9375vw;
    font-weight: bold;
    color: #323b4b;
    letter-spacing: 0.09px;
    margin-left: 1vw;
}
.tt-time {
    font-size: 0.72916666666667vw;
    font-weight: bold;
    letter-spacing: 0.07px;
    text-align: center;
    color: #0095b6;
    margin-right: 0.70833333333333vw;
}
.tt-time-value {
    font-size: 2.34375vw;
    font-weight: bold;
    text-align: center;
    color: #0095b6;
    margin-right: 2.15625vw;
}
.balance-rate {
    font-size: 0.72916666666667vw;
    font-weight: bold;
    letter-spacing: 0.07px;
    text-align: center;
    color: #4f69a2;
    margin-right: 0.515625vw;
}
.balance-rate-value {
    font-size: 2.34375vw;
    font-weight: bold;
    text-align: center;
    color: #4f69a2;
    margin-right: 0.515625vw;
}
.analysis-diagram {
    float: left;
    width: 63.51562499999999vw;
    height: 28.99166666666667vh;
    padding: 0 1.46614583333333vw;
    padding-top: 1.916666667vh;
    border-top: 1px #abb7c8 solid;
}
.analysis-background {
    float: left;
    width: 60.58333333333333vw;
    height: 23.2vh;
    background-color: #f2f2f3;
}
.up-down-button {
    width: 0.625vw;
    margin-left: 4.96875vw;
}
.analysis-bar {
    position: relative;
    width: 100%;
    height: 6.21296296296296vh;
    line-height: 6.21296296296296vh;
    vertical-align: middle;
}
.select-machine {
    font-family: FranklinGothic;
    font-size: 0.9375vw;
    color: #4c6599;
    width: 7.35416666666667vw;
    height: 1.90740740740741vh;
    margin-right: 0.36458333333333vw;
    margin-left: 1.60416666666667vw;
    margin-top: 1.90740740740741vh;
    border: solid 0.5px #6880ac;
    background-color: #ffffff;
    text-align: center;
    text-align-last: center;
}
.analysis-line {
    border-left: solid 1px #abb7c8;
    width: 2.67708333333333vw;
    float: left;
}
.analysis-table {
    position: absolute;
    margin-left: 9.5625vw;
}
.analysis-data {
    float: left;
    height: 2.96296296296296vh;
    margin-top: 1.52777777777778vh;
}
.analysis-step {
    float: left;
    margin-left: 9vw;
    margin-top: 1.07407407407407vh;
}
.analysis-step div {
    float: left;
    width: 2.67vw;
    font-family: FranklinGothic;
    font-size: 0.83333333333333vw;
    color: #4c6599;
}
</style>
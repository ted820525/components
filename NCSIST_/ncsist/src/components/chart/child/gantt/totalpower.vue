<template>
  <div id="totalPower" v-show="totalPowerData.flag">
      <div>
          <div class="totalPower">
              <div v-for="(energy, index) in title" v-bind:key="index" class="totalPower-data" :style="[index == 0 ? { border: 0 } : {}]">
                  <div class="totalPower-field">
                      <span :id="fontid(energy.id)">{{energy.name}}</span>
                  </div>
                  <div class="row">
                    <div class="col-md-10">
                      <div class="totalPower-value" style="width:100%;">
                          <div class="progress-container">
                              <div :id="getwidth(energy.id)" :class="energy.class" :style="{ width: (totalPowerData.data[energy.key] / totalPowerData.data.allEnergy * 100) + '%' }">
                                  <span>{{totalPowerData.data[energy.key]}}kwh</span>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div class="col-md-2" style="font-size:3vh;">
                      <div class="splec" :id="spelid(energy.id)" style="margin-top:-1vh;margin-left:-2vh;">
                        ⚠
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    name: "totalPower",
    props: {
        totalPowerData: { type: Object },
        Toggle: { type: Function }
    },
    created() {
    },
    methods:{
      getwidth(id){
        return "width" + id;
      },
      spelid(id){
        return "spel" + id;
      },
      fontid(id){
        return "font" + id;
      }
    },
    data() {
        return {
            title: [
                { key: "weekEnergy", name: "每週用電", percentage: 0, class: "progress-bar-blue", id:1 },
                { key: "monthEnergy", name: "每月用電", percentage: 0, class: "progress-bar-green", id:2 },
                { key: "seasonEnergy", name: "每季用電", percentage: 0, class: "progress-bar-blue-green", id:3 },
                { key: "accumulatedEnergy", name: "累積用電", percentage: 0, class: "progress-bar-light-blue", id:4 }
            ]
        }
    },
    mounted(){
      for (var i = 1; i <= 4; i++) {
          var x = document.getElementById("width"+i).style.width
          var y = x.substr(0,2)
          if(y>=80){
            document.getElementById(this.spelid(i)).style.visibility = "visible"
            document.getElementById(this.fontid(i)).style.color = "#EB6100"
            document.getElementById(this.getwidth(i)).style.backgroundColor = "#EB6100"
          }
      }
    }
};
</script>
<style scoped>
.splec{
  color:#EB6100;
  visibility:hidden;
  font-size:1.8vw;
}
.totalPower {
    height: 100%;
}
.totalPower-data {
    margin: 0;
    border-top: 2px #c6cad5 solid;
    padding: 0.8rem 0;
    font-size: 15px;
    color: #6677a8;
    height: 25%;
}

.totalPower-field {
    width: 20%;
    float: left;
}
.totalPower-value {
    width: 70%;
    float: left;
    padding: 0 10px;
    border-left: 2px #c6cad5 solid;
}
.progress-bar-blue {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #8596c1;
}

.progress-bar-green {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #78bab5;
}

.progress-bar-blue-green {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #19b0c8;
}

.progress-bar-light-blue {
    text-align: right;
    padding-right: 5px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #59c2d9;
}

.progress-container {
    width: 100%;
    height: 30px;
    background: #e8ebee;
    font-weight: 700;
    position: relative;
}

.workTitle {
    font-size: 16px;
    padding-left: 1rem;
    padding-top: 0.5rem;
    color: #444A5A;
    float: left;
    font-weight: bold;
}

.content-body {
    border: 0.1rem solid #bbc4d2;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    border-radius: 5px;
}

@media screen and (min-width: 992px) {
    .w-lg-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .h-lg-90 {
        height: 90%;
    }
}

@media screen and (max-width: 992px) {
    .w-xs-100 {
        float: left;
        width: 100%;
        padding: 5px 15px;
    }
    .totalPower {
        height: 200px;
    }
}

@media screen and (min-width: 1800px) {
    .h-xl-100 {
        height: 100%;
    }
}
</style>

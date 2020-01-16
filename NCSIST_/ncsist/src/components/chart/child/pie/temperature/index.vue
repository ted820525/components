<template>
  <div class="outsideBlock relative">
    <!-- <div class="titleBar vCenter" style="padding: 0;">
      <img src="@/components/item/img/new.png" class="smallIcon" />系統出口露點(℃)
    </div> -->
    <div class="hSpaceBtw vCenter smallContent" style="padding: 0 0.5vw;">
      <div class="temperature-information">
        <div style="padding-bottom: 0.5vh; border-bottom: 1px solid #4f69a2">露點溫度</div>
        <div id="temperature" style="padding-top: 0.5vh;">--℃</div>
      </div>
      <div class="temperature-signal">
        <div class="temperature-signal-image">
          <TemperatureSvg :temperature-percentage="temperaturePercentage"></TemperatureSvg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TemperatureSvg from "./temperature-svg";
export default {
  components: {
    TemperatureSvg
  },
  data: () => ({
    temperaturePercentage: 30
  }),
  mounted() {
      setInterval(()=>{
          var max = 20.0;
          var temp = Math.random() * 3 + 5;
          document.getElementById('temperature').innerHTML = temp.toFixed(1) + '℃';
          this.temperaturePercentage = Math.floor(temp / max * 100);
      }, 1000)
  }
};
</script>

<style scoped src="@/components/chart/temperature/home.css" />
<style scoped src="@/components/chart/temperature/global.css"/>

<style scoped>
.temperature-information {
  opacity: 0.7;
  box-shadow: 1.5px 4.6px 7.7px 0 rgba(182, 190, 214, 0.4);
  text-align: center;
  font-family: "MicrosoftJhengHei";
  font-size: 15px;
  font-weight: bold;
  color: #4f69a2;
  padding: 1vh 1vw;
}
.temperature-signal {
  position: relative;
  height: 16vh;
  width: 16vh;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 0 rgba(26, 19, 17, 0.3);
  border: solid 2px #43b6d3;
}
.temperature-signal > .temperature-signal-image {
  position: absolute;
  min-width: 30%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.outsideBlock{
  width: calc(36500vw / 1920);
	height: calc(27200vh / 1080);

}
</style>
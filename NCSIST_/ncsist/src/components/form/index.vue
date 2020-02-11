<template>
<div class="container" style="width:62.5vw; height:38.4vh; border:solid 1px #abb7c8 ">


    
    <!-- <dropform  :dropformInfo= "dropform.back" ></dropform> -->
    <!-- 下拉式表單 -->


    <!-- <div><complex></complex></div> -->
    <!-- 複合式表單 -->

    <!-- <div><bigform></bigform></div> -->
    <!-- 大表單 -->

<!-- <paraBox class="parameterBox align-self-center" :BoxObject="paraSetting"></paraBox>
<paraBox class="parameterBox align-self-center" :BoxObject="pointerInput"></paraBox> -->
<!-- 輸入框表單,選單式表單 -->






    

    
</div>


</template>

<script>
// import complex from './child/complex/complex';

import paraBox from './child/parameterBox';


// import dropform from './child/下拉式表單';

// import bigform from './child/大表單';



// import parameterBox from './child/parameterBox';




export default {
    
    components: {paraBox},

   data() {
            return {
                paraSetting: {
                    type: 'select',
                    title: '查詢參數設定'
                },
                pointerInput: {
                    type: 'input',
                    title: '指標'
                },
                dropform:{
                back:{

                        background: "white",
                        color: ''

                            }
                        }
                    }
            }
}
</script>




<style scoped>


.color {
    color: "#deb887"/* burlywood */
           '#ff69b4'/* hotpink */
          '#990036' /*Cardinal Red*/
    
}
/* 渲染用:style 比 :clss彈性高 ,可以更改多色 :class只限定自己宣告顏色 ex: red ,green*/



</style>
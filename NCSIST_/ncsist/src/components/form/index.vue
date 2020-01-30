<template>
<div class="container" style="width:62.5vw; height:38.4vh; border:solid 1px #abb7c8 ">
    
    <dropform  :dropformInfo= "dropform.back" ></dropform>
    <!-- 下拉式表單 -->


    <!-- <div><complex></complex></div> -->
    <!-- 複合式表單 -->
    
</div>


</template>

<script>
// import complex from './child/complex/complex';


import dropform from './child/下拉式表單';
export default {
    
    components: { dropform},

    data() {
            return {
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
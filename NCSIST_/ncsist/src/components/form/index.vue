<template>
<div class="container" style="width:62.5vw; height:38.4vh; border:solid 1px #abb7c8 ">
    
    <dropform class="dropform" :dropformInfo= "dropform.background" ></dropform>
    
</div>

</template>

<script>

import dropform from './child/下拉式表單';
export default {
    
    components: { dropform},

    data() {
            return {
                dropform:{
                background:{

                        color: 'red',
                        
                            }
                        }
                    }
            }
}
</script>



<style scoped>

.red {
    background-color: #131412 !important;
}


</style>
<template>
       <div class="col-md">
                            <div class="panel mt-4">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="titlesb borbottom mt-1">
                                            <div class="mb-1">
                                                <img src="@/assets/mainSystem/home/icon1.png" class="mr-2" width="23" alt="">本月累計用電
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3 mb-1">
                                    <div class="col-md-12">
                                        <totalPower :totalPowerData="totalPower" :Toggle="Toggle"></totalPower>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
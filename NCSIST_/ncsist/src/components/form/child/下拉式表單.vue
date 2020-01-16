<template>

<div class="row mr-2">
    <div class="col-md-12">
        <div class="panel mt-2">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="titlesb borbottom mt-1">
                        <div class="mb-1">
                            <img src="@/components/form/img/new.png" class="mr-2" width="18" alt="">工作資訊
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div :class="dropformInfo.color" class="r-tableBlock ">
                <table class="table r-table table-hover cusScrllBar mt-2 " id="break-table">
                    <thead id="break-search">
                    
                    </thead>
                    <thead >
                        <tr>
                            <th style="color: #202f3e;">產線</th>
                            <th style="color: #202f3e;">訂單編號</th>
                            <th style="color: #202f3e;">工件</th>
                            <th style="color: #202f3e;">開始日期</th>
                            <th style="color: #202f3e;">交期</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in tdData" :key='item'>
                            <td scope="row">
                                <div>
                                    <td >{{item.t1}}</td>
                                </div>
                            </td>
                            <td scope="row">
                                <div>
                                    <td>{{item.t2}}</td>
                                </div>
                            </td>
                            <td scope="row">
                                <div>
                                    <td>{{item.t3}}</td>
                                </div>
                            </td>
                            <td scope="row">
                                <div>
                                    <td>{{item.t4}}</td>
                                </div>
                            </td>
                            <td scope="row">
                                <div>
                                    <td>{{item.t5}}</td>
                                </div>
                            </td>
                        </tr>
                        
                    
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
		
    props: {
        tdObject: { type: Array },
        dropformInfo: Object
    },
    data(){
        return{
            tdData:[
				{t1:'CNC加工', t2:10808270001, t3:'DSA001',t4:'2019/06/30',t5:'2019/06/30'},
				{t1:'車床加工', t2:10808270002, t3:'DSA002',t4:'2019/06/30',t5:'2019/06/30'},
                {t1:'CNC加工', t2:10808270003, t3:'DSA003',t4:'2019/06/30',t5:'2019/06/30'},
                {t1:30, t2:60, t3:45,t4:45,t5:45}
                    ],
        }
        }

}
</script>

<style>
.r-table tr {
    display: table;
    table-layout: fixed;
    width: 100%;
}

.r-table tbody tr {
    border-bottom: 1px #C8CEDA solid;
    line-height: 1;
}

.r-table td {
    color: #8898bd;
    border: 0;
    line-height: 2px;
    width: 20%;
    padding: 12px;
    font-family: 'Microsoft JhengHei Light', sans-serif;
    vertical-align: middle;
    text-align: center;
}

.r-table h5 {
    font-size: 20px;
    width: 25px;
    font-weight: bold;
    margin: auto;
}
.r-tableBlock {
    background-color: #EBEFF8;
	height: 210px;
    border: 0.5px #8192b9 solid;
}

.r-table {
    width: calc(100% - 30px) !important;
    margin: 0px 15px 15px !important;
    font-size: 14px;
    
    text-align: center
}

.r-table>thead>tr>th {
    color: #7382B0;
    padding: 5px;
    border-top: 0px;
    border-bottom: 0px;
    font-family: 'Microsoft JhengHei', sans-serif ;
}

.r-table>thead:first-child th {
    color: #434b5d;
    line-height: 28px;
    padding: 6px 0px;
    font-size: 18px;
    border-bottom: 1.8px solid #C8CEDA;
    font-family: 'Microsoft JhengHei Blod', sans-serif ;
}

.r-table>thead:nth-child(2) tr {
    border-bottom: 1.8px solid #6880ac;
}

.r-table>thead:nth-child(2) tr th{
	font-family: MicrosoftJhengHei ;
	font-size: 14px;
	font-weight: bold;
	color: #4f69a2;
}

.r-table>thead:nth-child(2) th:last-child {
    width: 15px;
}
table tbody{
	max-height: calc(19600vh / 1080);
}

table tbody{
	overflow-y: scroll !important;
    display: block;
    height: 164px;
}
thead tr th:nth-last-child(1){
	width: 1.375rem !important;
}
/* table scroll bar style */
tbody::-webkit-scrollbar{
	width: 1.375rem;
    
}
tbody::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #fff;
}
tbody::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("../img/scroll-uparrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}
tbody::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #fff;
	background-image: url("../img/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

</style>
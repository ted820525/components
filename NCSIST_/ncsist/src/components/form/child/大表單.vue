<template>
				<table class="right align-self-center">
					<thead>
						<tr>
							<th>故障發生時間 &#x25BC;</th> <th>故障碼 &#x25BC;</th> <th>處理狀態 &#x25BC;</th> <th>故障設備</th> <th>異常描述</th> <th>異常處理</th> <th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for=" item in malfunctionEvent">
							<td>{{item.time}}</td> <td>{{item.code}}</td> <td>{{item.state}}</td> <td>{{item.machine}}</td> <td>{{item.desc}}</td> 
							<td>
								<div class="d-flex justify-content-around">
									<blueBtn text="故障原因" btnstyle="malfunction" :func="ShowReasonModal" :imgSrc="iconSrc.reason"></blueBtn>
									<blueBtn text="故障報告" btnstyle="malfunction" :func="ShowReportModal" :imgSrc="iconSrc.report"></blueBtn>
									<blueBtn text="主管審核" btnstyle="malfunction" :func="ShowReviewModal" :imgSrc="iconSrc.review"></blueBtn>
								</div>
							</td>
						</tr>
						<!-- table at least 9 rows -->
						<tr v-for=" index in ((9-malfunctionEvent.length)>0)?(9-malfunctionEvent.length):0">
							<td></td><td></td><td></td><td></td><td></td><td></td>
						</tr>
					</tbody>
				</table>
</template>
<script>
import blueBtn from '../child/bigform/blueBtn';

export default {
	name: "MalfunctionManage",
	components: {blueBtn},
	data(){
		return{
			
			iconSrc:{
				reason: require("../img/icon/icon17.png"),
				report: require("../img/icon/icon18.png"),
				review: require("../img/icon/icon19.png"),
			},
			malfunctionEvent:[
				{
					time: '2018/06/15 11:05 am',
					code: 1002,
					state: '未排除',
					machine: 'OP3-1 ROBOT',
					desc:'OP3-1 ROBOT 取料異常'
				},
				{
					time: '2018/06/15 11:05 am',
					code: 1002,
					state: '未排除',
					machine: 'OP3-1 ROBOT',
					desc:'OP3-1 ROBOT 取料異常'
				},
				{
					time: '2018/06/15 11:05 am',
					code: 1002,
					state: '未排除',
					machine: 'OP3-1 ROBOT',
					desc:'OP3-1 ROBOT 取料異常'
				},
				{
					time: '2018/06/15 11:05 am',
					code: 1002,
					state: '未排除',
					machine: 'OP3-1 ROBOT',
					desc:'OP3-1 ROBOT 取料異常'
				},
			],
			reasonModal: false,
			reportModal: false,
			reviewModal: false,
		}
	},
	mounted(){	
	},
		methods: {
		}
}
</script>

<style scoped>
tbody td{
	font-family: MicrosoftJhengHei;
	font-size: 0.8125rem;
	font-weight: normal !important;
}
thead th{
	font-family: MicrosoftJhengHei;
	font-size: 1.0625rem;
	font-weight: bold !important;
}
.body-container{
	height: calc(89300vh / 1080);
	width: 100vw;
}
.content{
	height: calc(84070vh / 1080);
	width: calc(184050vw / 1920);
	background-color: #FFF;
	border: 1.5px solid #bbc4d2;
}
.content-container{
	height: calc(100% - (6280vh / 1080));
	width: 100%;
}
.left{
	height: calc(57430vh / 1080);
	width: calc(45430vw / 1920);
	margin-left: calc(3000vw / 1920);
	background-color: #FFF;
	box-shadow: 3px 3px 3px 0 rgba(26, 19, 17, 0.4);
}
.right{
	height: calc(61500vh / 1080);
	width: calc(130000vw / 1920);
	margin-right: calc(3000vw / 1920);
	margin-bottom: calc((57280vh / 1080) / 9);
	text-align: center;
	color: #4f69a2;
}
.right >tbody{
	border: 1.3px #657ba3 solid;
	max-height: calc(57280vh / 1080);
	overflow-y: scroll;
    display: block;
}
.right tr{
	height: calc((57280vh / 1080) / 9);
	display: table;
	table-layout: fixed;
    width: 100%;
}
.right td{
	border: 1.3px #abb7c8 solid;
}
thead >tr >th:nth-last-child(1){
	width: 1rem;
}
tbody >tr >td:nth-last-child(1), thead >tr >th:nth-last-child(2){
	width: 34%;
}
tbody >tr >td:nth-child(1), thead >tr >th:nth-child(1){
	width: 16%;
}
tbody >tr >td:nth-child(2), thead >tr >th:nth-child(2){
	width: 10%;
}
tbody >tr >td:nth-child(3), thead >tr >th:nth-child(3){
	width: 10%;
}
tbody >tr >td:nth-child(4), thead >tr >th:nth-child(4){
	width: 14%;
}

/* table scroll bar style */
tbody::-webkit-scrollbar{
	width: 1rem;
}
tbody::-webkit-scrollbar-track{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	padding: 0 0;
	background-color: #e3eaf5;
}
tbody::-webkit-scrollbar-button:single-button:vertical:decrement{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-top: 1px solid #bbc4d2;
	background-color: #e3eaf5;
	background-image: url("../img/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}
tbody::-webkit-scrollbar-button:single-button:vertical:increment{
	border-left: 1px solid #bbc4d2;
	border-right: 1px solid #bbc4d2;
	border-bottom: 1px solid #bbc4d2;
	background-color: #e3eaf5;
	background-image: url("../img/scroll-downarrow.png");
	background-size: 8px 8px;
	background-repeat: no-repeat;
	background-position: 50% 50%;
}

.light-blue-button{
	width: 75%;
	height: 8%;
	border: none;
	background-position: center;
	background-size: cover;
	background-color: #FFF;
	background-image: url("../img/icon/button.png");
	font-size: 18px;
	font-weight: bold;
	color: #4f69a2;
}
</style>
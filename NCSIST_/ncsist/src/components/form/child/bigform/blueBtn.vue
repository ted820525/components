<template>
	<button v-on:click="func" type="button" :class="{malfunction: (btnstyle=='malfunction')}" >
		<img :src="imgSrc" height="20" class="mr-2"/>
		{{text}}
	</button>
</template>

<script>
	export default{
		props:{
			text: { type: String},
			func: { type: Function},
			btnstyle: {type: String},
			imgSrc: {type: String},
		},
	}
</script>

<style scoped>
	img{
		height: calc(2000vh / 1080);
	}
	button{
		min-width: fit-content;
		font-size: 14px;
		background-color: #869CC9;
		color: white;
		width: 114px;
		height: 29px;
		border-radius: 0px;
		line-height: 11px;
		font-family: 'Microsoft JhengHei', sans-serif;
		border: none;
	}
	.malfunction{
		font-family: MicrosoftJhengHei !important;
		font-size: 0.6875rem !important;
		font-weight: normal !important;
		color: #FFF !important;
		width: calc(11400vw / 1920) !important;
		height: calc(2300vh / 1080) !important;
	}
</style>
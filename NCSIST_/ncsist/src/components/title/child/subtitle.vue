<template>
	<div class="subtitle d-flex justify-content-between">
		<span class="h-100 d-flex">
			<img :src="subtitleInfo.iconSrc" class="align-self-center" height="23" width="23" />
			<span class="align-self-center ml-2 text-size-18 text-weight-bold text-black-1">{{subtitleInfo.text}}</span>
		</span>		
	</div>
</template>

<script>
	export default{
		name: "subtitle",
		components: {},
		props: {
			subtitleInfo: Object
			
		},
	}
</script>

<style scoped>

.subtitle{
	border-bottom: 1px #8192b9 solid;
}

.subtitle >div{
	margin-right: 1vw;
}
.subtitle img{
	margin-left:1.16vw;
}
.text-black-1{
	color: #434b5d;
}

.text-size-18{
	font-size: 1.125rem;
}
.text-weight-bold{
	font-weight: 700;
}

</style>
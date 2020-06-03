<template>
  <div class="contents">
		<div class="textMain">
				<div class="txtContainer">
						<div>Id</div>
						<div><input type="text" v-model="params.id"></div>
				</div>
				<div class="txtContainer">
						<div>Service Id</div>
						<div><input type="text" v-model="params.serviceId"></div>
				</div>
				<div class="txtContainer">
						<div>Name</div>
						<div><input type="text" v-model="params.name"></div>
				</div>
				<div class="txtContainer">
						<div>Description</div>
						<div><input type="text" v-model="params.desc"></div>
				</div>
				<div class="txtBtn">
						<button type="button" @click="setData">Save</button>
				</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	props: [],
	mixins: [],
	components: {},
	data () {
		return {
			params: {
				id: "",
				serviceId: "",
				name: "",
				desc: ""
			}
		}
	},
	methods: {
		setData () {
			console.log(this.params)
		}
	}
}
</script>
<style>
	.contents .textMain {padding: 50px 10px; width: 330px;}
	.contents .txtContainer {margin-bottom: 10px;}
	.contents .txtContainer div{display: inline-block;}
	.contents .txtContainer > div{width: 100px;}

	.contents .txtBtn {text-align: center; margin-top: 10px;}
	.contents .txtBtn button {border: 1px solid #9e9e9e; width: 100px; border-radius: 5px;}
</style>

<template>
  <div class="Pop">
		<div class="textMain">
				<div class="txtContainer">
						<div>Id</div>
						<div><input type="text" v-model="params.id"></div>
				</div>
				<div class="txtContainer">
						<div>Service Id</div>
						<div><input type="text" v-model="params.service_id"></div>
				</div>
				<div class="txtContainer">
						<div>Name</div>
						<div><input type="text" v-model="params.name"></div>
				</div>
				<div class="txtContainer">
						<div>Description</div>
						<div><input type="text" v-model="params.description"></div>
				</div>
				<div class="txtBtn">
						<button type="button" @click="setData">Save</button>
						<button type="button" @click="close">Cancle</button>
				</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	props: ["id"],
	mixins: [],
	components: {},
	data () {
		return {
			params: {
				id: "",
				service_id: "",
				name: "",
				description: ""
			}
		}
	},
	methods: {
		setData () {
			console.log(this.params)
		},
		close () {
			this.$emit('closePop')
		},
		getData () {
			if (_.isEmpty(this.id)) return
			const urlPath = '/api/menu/' + this.id;
			this.$http.get(urlPath).then(res => {
				this.params = res.data
			}).catch(error => {
				console.log(error)
			})
		},
	},
	mounted () {
		this.getData()
	},
}
</script>
<style>
	.Pop {position: absolute;top: 10px; background: #e6e6e6;}
	.Pop .textMain {padding: 50px 10px; width: 330px;}
	.Pop .txtContainer {margin-bottom: 10px;}
	.Pop .txtContainer div{display: inline-block;}
	.Pop .txtContainer > div{width: 100px;}

	.Pop .txtBtn {text-align: center; margin-top: 10px;}
	.Pop .txtBtn button {border: 1px solid #9e9e9e; width: 100px; border-radius: 5px; margin-right: 5px;}
</style>

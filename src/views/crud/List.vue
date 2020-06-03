<template>
  <div class="contents">
		<div class="list">
			<div>
				<select v-model="search_type">
					<option value="">All</option>
					<option value="id">Id</option>
					<option value="service_id">Service Id</option>
					<option value="name">Name</option>
					<option value="description">Description</option>
				</select>
				<input type="text" v-model="search_param" :disabled="isdisabled"><button type="button" @click="getData()">검색</button>
			</div>
			<div class="grid">
				<table border="1">
					<th>Id</th>
					<th>Service Id</th>
					<th>Name</th>
					<th>Description</th>
					<tr v-for="i in this.list" :key="i.id" @click="goPage(i.id)">
							<td>{{i.id}}</td>
							<td>{{i.service_id}}</td>
							<td>{{i.name}}</td>
							<td>{{i.description}}</td>
					</tr>
				</table>
			</div>
		</div>	
		<Update v-if="isShow" @closePop="isShow=false" :id="detailId"/>
	</div>
</template>

<script>
import Update from "./Update"
export default {
	name: '',
	components: {Update},
	watch: {
		search_type (val, oldVal) {
			if (_.isEmpty(val)) {
				this.isdisabled = true
				this.search_param = '';
			} else {
				this.isdisabled = false
			}
		}
	},
	data () {
		return {
			isdisabled: true,
			list: [],
			search_type: '',
			search_param: '',
			isShow: false,
			detailId: ""
		}
	},
	methods: {		
		goPage (id) {
			this.detailId = id
			this.isShow = true;
		},
		getData () {
			let params = {}
			params[this.search_type] = this.search_param

			const urlPath = '/api/menu';
			this.$http.get(urlPath, {params}).then(res => {
				this.list = res.data
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
	.contents .list .grid {margin-top: 20px;}
	.contents .list .grid table{width: 60%; border: 1px solid #c7c7c7;}
	.contents .list button {border: 1px solid #9e9e9e; width: 100px; border-radius: 5px; height: 30px; position: absolute;}

	.contents .list select {border: 1px solid #b6b6b6; border-right: 0px; height: 30px;}
	.contents .list input {border-left: 0px; border-radius: 0; margin-right: 10px;}

	
</style>
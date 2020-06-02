<template>
	<div class="contents" style="height:740px">
    <div id="error_wrap">
      <div class="error_con">
        <p class="b_txt">404 PAGE NOT FOUND</p>
        <p class="s_txt">
          The Page your are looking for doesn't exist or an other error occurred.<br/>
          Go back, or please contact  your department's IT Admin.
        </p>
        <button class="btn_BTH" type="button" @click="goPage">Back to home</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page404',
  methods: {
    goPage () {
      this.$router.push({name: 'Home'})
    }
  },
}
</script>
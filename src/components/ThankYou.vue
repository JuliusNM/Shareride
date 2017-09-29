<template>
  <div class="about">
    <b-container>
      <div class="jumbotron">
        <h1 class="page-header">Thank You for using ShareRide!</h1>
            <p> An email with the details of your ticket has been sent to you
            </p>
      </div>
    </b-container>   
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.about{
  margin-top: 70px;
}
</style>

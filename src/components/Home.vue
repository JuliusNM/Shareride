<template>
  <b-container class="">
    <b-row>
      <b-col>
        <div class="cab"> <img src="/static/images/cab.png" width="300" height="300"alt="Kitchen" /></div>
      </b-col>
      <b-col>
        <div class="advert">
          <h1>Share a ride,</h1>
          <h2>save a coin</h2><br>
          <router-link to="/register"> <button type="button" class="btn btn-outline-success">Get Started</button></router-link>
         
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
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
.advert, .cab{
   margin-top: 100px;
   align-content: center;
}
</style>

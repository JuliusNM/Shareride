<template>
  <b-container class="">
    <h4>Welcome, {{firstname}}!</h4>
    <b-row class="cab">
      <b-col>
        <div>
          <b-card title="Get A Ride"
            img-src="/static/images/cab.png/"
            style="max-width:20rem;"
            class="mb-2"
            tag="article"
            img-top 
            alt="Kitchen">
          <p class="card-text">See a list of shared rides available in your area.</p>   
          <router-link to="/getride"><b-button variant="primary">See rides</b-button></router-link>
        </b-card>
        </div>
      </b-col>
      <b-col>
        <div>
          <b-card title="Give A Ride"
            img-src="/static/images/cab.png/"
            style="max-width:20rem;"
            class="mb-2"
            tag="article"
            img-top 
            alt="Kitchen">
          <p class="card-text">Share your ride with humans around you.</p>        
          <router-link to="/giveride"><b-button variant="primary">Share my ride</b-button></router-link>
         </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
 
</template>

<script>
import Register from './Register.vue'
export default {
  components: {Register},
  name: 'firstname',

  data () {
    return {
      firstname: Register.data().form.name

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
  color: white;
}
.cab{
  margin-top: 70px;
  align-items: center;
}
</style>

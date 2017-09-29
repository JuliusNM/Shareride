<template>
<div class="container">
  <h4>Rides Available</h4><br>
  <div class="my-1 row">
    <div class="col-md-6">
      <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
        <b-form-select :options="pageOptions" v-model="perPage" />
      </b-form-fieldset>
    </div>
    <div class="col-md-6">
      <b-form-fieldset horizontal label="Filter" :label-cols="3">
        <b-form-input v-model="filter" placeholder="Type to Search" />
      </b-form-fieldset>
    </div>
  </div>

  <div class="row my-1">
    <div class="col-sm-8">
      <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
    </div>
    <div class="col-sm-4 text-md-right">
      <b-button :disabled="!sortBy" @click="sortBy = null">Clear Sort</b-button>
    </div>
  </div>

  <!-- Main table element -->
  <b-table striped hover show-empty
           :items="items"
           :fields="fields"
           :current-page="currentPage"
           :per-page="perPage"
           :filter="filter"
           :sort-by.sync="sortBy"
           :sort-desc.sync="sortDesc"
           @filtered="onFiltered"
  >
    <template slot="actions" scope="row">
      <b-btn class="btn-success" v-b-modal.modalPrevent @click.stop="details(row.item,row.index,$event.target)">Book</b-btn>
    </template>
  </b-table>

  <p>
    Sort By: {{ sortBy || 'n/a' }}, Direction: {{ sortDesc ? 'descending' : 'ascending' }}
  </p>
  <div>
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
      ref="modal"
      title="Confirm email to book"
      @ok="handleOk"
      @shown="clearEmail">
      <p class="my-1 py-1" slot="modal-header">You're booking a ride from &nbsp{{ modalDetails.data }}&nbsp to {{ modalDetails.data2 }}</p>
      <form @submit.stop.prevent="handleSubmit">
        <header>Please confirm your email to receive your ticket</header>
        <b-form-input type="email"
          placeholder="Enter your email"
          required
          v-model="email"></b-form-input>
        </form>
      </b-modal>
  </div>


</div>
</template>

<script>
const items = [
  { origin: 'Kawangware',
    destination: 'Kenyatta Road',
    capacity: '4'},
  { origin: 'Moi Avenue',
    destination: 'Thika Town',
    capacity: '1'},
  { origin: 'Riverside',
    destination: 'Moringa',
    capacity: '2'},
  { origin: 'Thika Arcade',
    destination: 'Safaricom Center',
    capacity: '3'},
  { origin: 'Kakamega',
    destination: 'Busia',
    capacity: '4'},
  { origin: 'Kisumu',
    destination: 'Homabay',
    capacity: '2'},
  { origin: 'Meru',
    destination: 'Tharakanidhi',
    capacity: '1'},
  {origin: 'ihub',
    destination: 'Railway Station',
    capacity: '4'},
  { origin: 'Somewhere',
    destination: 'Anywhere',
    capacity: '5'}
]

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default {
  data () {
    return {
      items: items,
      fields: {
        origin: { label: 'Origin', sortable: true },
        destination: { label: 'Destination', sortable: true, 'class': 'text-center' },
        capacity: { label: 'Capacity', sortable: true },
        actions: { label: 'Actions' }
      },
      currentPage: 1,
      perPage: 5,
      totalRows: items.length,
      pageOptions: [ { text: 5, value: 5 }, { text: 10, value: 10 } ],
      sortBy: null,
      sortDesc: false,
      filter: null,
      modalDetails: { index: '', data: '' },
      email: '',
      emails: []
    }
  },
  methods: {
    details (item, index, button) {
      this.modalDetails.data = JSON.stringify(item.origin, null, 2)
      this.modalDetails.data2 = JSON.stringify(item.destination, null, 2)
      this.modalDetails.index = index
      this.$root.$emit('bv::show::modal', ' modalPrevent', button)
    },
    resetModal () {
      this.modalDetails.data = ''
      this.modalDetails.index = ''
    },
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    handleOk (evt) {
      evt.preventDefault()
      if (!this.email) {
        alert('Please enter your email')
      } else {
        this.handleSubmit()
        this.sendMail()
      }
    },
    handleSubmit () {
      this.emails.push(this.email)
      this.clearEmail()
      this.$refs.modal.hide()
      var router = new VueRouter()
      this.$router.push('/thanks')
      router.go()
    },
    clearEmail () {
      this.email = ''
    },
    sendMail () {
      var link = 'mailto:someone@mail.com' +
        '?cc=jayenem16@gmail.com' +
         '$subject=' + escape('You have booked a ride from &nbsp{{ modalDetails.data }}&nbsp to {{ modalDetails.data2 }}') +
          document.getElementById('email').value +
         '$body=' + escape(document.getElementById(this.email).value)
      window.location.href = link
    }

  }
}
</script>

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
.container{
  margin-top: 50px;
}
</style>

<template>
    <!-- Welcome Text -->
    <div class="container-fuild">
        <div class="row">
            <div class="col col-12 align-items-center justify-content-center">
                <blockquote>
                    <img src="..\assets\path-of-exile-logo.png" width="200" height="200">
                </blockquote>
            </div>
        </div>
    </div>

    <!-- Welcome Image -->

    <div class="container-fluid">
        <div class="row align-items-center justify-content-center">
            <div class="col col-12 col-sm-10 col-md-10">
                <div class="card-group">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Characters</h5>
                    <a @click="viewCharacters" class="btn btn-primary">View Details</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>



<script>

import router from '../router'

  export default {
    name: 'Home',
    data: () => ({
      validUserName: "Guest"
    }),
    mounted() {
      this.getUser();
    },
    methods: {
      viewCharacters() {
        router.push('/character-list');
      },
      getUser() {
        if (localStorage.getItem("isAuthenticates")
          && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
          this.validUserName = JSON.parse(localStorage.getItem("log_user"));
        }
      }
    }
  }
</script>

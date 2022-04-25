 <template>
  <div class="container-fluid">
    <div class="row align-items-center justify-content-center">
      <div class=" col align-items-center">
        <div class="row align-items-center justify-content-center">
          <div class="col col-12 col-sm-10 col-md-10 col-lg-6">
            <div class="alert alert-danger shadow" role="alert"
            v-if="showMsg === 'error'">
              Please verify Character Information
            </div>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col col-12 col-sm-10 col-md-10 col-lg-6 align-items-center">
            <div class="card">
              <div class="card-header">{{pageTitle}}</div>
              <div class="card-body">
                <form ref="form">
                  <div class="container-fluid">




                    <div class="form-group row justify-content-around py-2">
                      <label class="col-4">Character Name</label>
                      <div class="col col-8">
                        <input v-model="character.character_name" type="text" class="form-control-sm form-control">
                      </div>
                    </div>



                    <div class="form-group row justify-content-around py-2">
                      <label class="col-4">Class</label>
                      <div class="col col-8">
                        <input v-model="character.character_class" type="text" class="form-control-sm form-control">
                      </div>
                    </div>



                    <div class="form-group row justify-content-around py-2">
                      <label class="col-4">Date Created</label>
                      <div class="col col-8">
                        <input v-model="character.created_date" type="date" class="form-control-sm form-control">
                      </div>
                    </div>




                    <div class="row justify-content-around">
                      <div v-if="!isUpdate" type="button" class="btn btn-primary col-4" @click="createCharacter">Save</div>
                      <div v-if="isUpdate" type="button" class="btn btn-primary col-4" @click="updateCharacter">Update</div>
                      <div type="button" class="btn btn-secondary col-4" @click="cancelOperation">Cancel</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import router from '../router';
  import {APIService} from '../http/APIService';
  const apiService = new APIService();



  export default {
    name: 'CharacterCreate',
    components: {},
    data() {
      return {
        showError: false,
        character: {},
        pageTitle: "Add New Character",
        isUpdate: false,
        showMsg: '',
      };
    },
    methods: {
      createCharacter() {
        apiService.addNewCharacter(this.character).then(response => {
          if (response.status === 201) {
            this.character = response.data;
             this.showMsg = "";
            router.push('/character-list/new');
          }else{
              this.showMsg = "error";
          }
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }else if (error.response.status === 400) {
            this.showMsg = "error";
          }
        });
      },
      cancelOperation(){
         router.push("/character-list");
      },
      updateCharacter() {
        apiService.updateCharacter(this.character).then(response => {
          if (response.status === 200) {
            this.character = response.data;
            router.push('/character-list/update');
          }else{
              this.showMsg = "error";
          }
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }else if (error.response.status === 400) {
            this.showMsg = "error";
          }
        });
      }
    },
    mounted() {
      if (this.$route.params.pk) {
        this.pageTitle = "Edit Character";
        this.isUpdate = true;
        apiService.getCharacter(this.$route.params.pk).then(response => {
          this.character = response.data;
        }).catch(error => {
          if (error.response.status === 401) {
            router.push("/auth");
          }
        });
      }
    },
  }
</script>

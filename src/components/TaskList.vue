<template>
    <div class="container-fluid">
        <!--Welcome Title -->
        <div class="row align-items-center justify-content-center">
            <div class="col col-12 align-items-center justify-content-center">
                <blockquote>
                    <img src="..\assets\path-of-exile-logo.png" width="200" height="200">
                </blockquote>
            </div>
        </div>
        <div class="alert alert-success"
          v-if="showMsg === 'update'"
          :value="true">
          Character information has been updated.
        </div>


        <!-- Data table -->
        <div class="row align-items-center justify-content-center">
            <div class="d-md-none" id="collapsable-card" style="width: 80%">
                <div class="card" v-for="task in tasks" v-bind:key="task">
                    <div class="card-header" :id="'heading' + task.pk">
                        <!-- <button class="btn btn-link collapsed" data-bs-toggle="collapse" :data-bs-target="'#collapse' + task.pk" aria-expanded="true" :aria-controls="'collapse' + character.pk">
                           <h6 style="color: #0275d8; float: left">Task {{task.task_name}}</h6>
                        </button> -->
                    </div>

                </div>

            </div>
            <div class="col col-12 col-md-10 d-none d-xl-block d-lg-block d-md-block">
                <table class="table table-hover" style="overflow-y: auto"
                       :headers="headers">
                    <thead>
                    <tr>
                        <!--<th scope="col">Task List</th>-->
                        <th scope="col">Task Name</th>
                        <th scope="col">Act</th>
                        <th scope="col">Complete?</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="task in tasks" v-bind:key="task">
                        <!--<th scope="row">{{task.list_name}}</th>-->
                        <td>{{task.task_name}}</td>
                        <td>{{task.act_number}}</td>
                        <td><input type="checkbox" v-model="task.complete_flag" :id="task" @click="updateTasks"></td>
                        <!--<td>{{task.complete_flag}}</td>-->
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<script>
    import router from '../router';
    import {APIService} from '../http/APIService';
    const apiService = new APIService();
    export default {
        name: "TaskList",
        data: () => ({
            tasks: [],
            validUserName: "Guest",
            taskSize: 0,
            showMsg: '',
            isMobile: false,
            headers: [
                {text: 'List Name', sortable: false, align: 'left',},
                {text: 'Task Name', sortable: false, align: 'left',},
                {text: 'Act Number', sortable: false, align: 'left',},
            ],
        }),
        mounted() {
            this.getTasks();
            this.showMessages();
        },
        methods: {
            onResize() {
                if (window.innerWidth < 600)
                    this.isMobile = true;
                else
                    this.isMobile = false;
            },
            showMessages(){
                console.log(this.$route.params.msg)
                if (this.$route.params.msg) {
                    this.showMsg = this.$route.params.msg;
                }
            },
            getTasks() {
                apiService.getTaskList().then(response => {
                    this.tasks = response.data.data;
                    this.taskSize = this.tasks.length;
                    if (localStorage.getItem("isAuthenticates")
                        && JSON.parse(localStorage.getItem("isAuthenticates")) === true) {
                        this.validUserName = JSON.parse(localStorage.getItem("log_user"));
                    }
                }).catch(error => {
                    if (error.response.status === 401) {
                        localStorage.removeItem('isAuthenticates');
                        localStorage.removeItem('log_user');
                        localStorage.removeItem('token');
                        router.push("/auth");
                    }
                });
            },
            updateTasks(task) {
                apiService.updateTasks(this.task).then(response => {
                if (response.status === 200) {
                    this.task = response.data;
                    router.push('/task-list/update');
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
            mounted() {
            if (this.$route.params.pk) {
                this.pageTitle = "Edit Task";
                this.isUpdate = true;
                apiService.getTasks(this.$route.params.pk).then(response => {
                this.task = response.data;
                }).catch(error => {
                if (error.response.status === 401) {
                    router.push("/auth");
                }
                });
            }
            },
        }
    };
</script>

<style>
    button {
        padding: 1rem;
        border: 0;
        cursor: pointer;
    }
</style>
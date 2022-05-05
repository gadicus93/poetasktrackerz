<template>
    <ul class="nav justify-content-end">
        <div class="EFS" style="navtitle">Poe Task Tracker</div>
        <li class="nav-item active">
            <router-link to="/">Home</router-link> |
        </li>
        <li class="nav-item">
            <router-link :to="{name: 'CharacterList'}">Character</router-link>
        </li>
        <li class="nav-item">
            |<router-link :to="{name: 'TaskList'}">Tasks</router-link>
        </li>
        <li class="nav-item" v-if="!authenticated" @click="login" >
            | <router-link :to="{name: 'Auth'}">Log in</router-link>
        </li>
        <li class="nav-item" v-if="!authenticated" @click="register" >
            | <router-link :to="{name: 'Register'}">Register</router-link>
        </li>
        <li class="nav-item">
            |<router-link :to="{name: 'Links'}">Links</router-link>
        </li>
        <li class="nav-item  .justify-content-end" v-if="authenticated" @click="logout" >
            | <router-link :to="{name: 'Auth'}">Logout</router-link>
        </li>
    </ul>
    <router-view/>
</template>
<script>
    import router from './router';
    import {APIService} from './http/APIService';
    const apiService = new APIService();



    export default {
        name: 'App',
        data: () => ({
            authenticated: false,
            dialog: false,
            menu: [
                { title: 'Home', url:"/"},
                { title: 'Characters', url:"/character-list" },
            ]
        }),
        mounted() {
            apiService.getCharacterList().then(response => {
                this.authenticated = true;
            }).catch(error => {
                if (error.response.status === 401) {
                    localStorage.removeItem('isAuthenticates');
                    localStorage.removeItem('log_user');
                    localStorage.removeItem('token');
                    this.authenticated = false;
                }
            });
            console.log('this.authenticated--'+this.authenticated);
        },
        methods: {
            logout() {
                localStorage.removeItem('isAuthenticates');
                localStorage.removeItem('log_user');
                localStorage.removeItem('token');
                this.authenticated = false;
                // router.push('/');
                window.location = "/"
            },
            login() {
                router.push("/auth");
            },
        }
    };
</script>



<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        background-color: rgb(30, 27, 185);

        a {
            font-weight: bold;
            color: #ffffff;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    .nav {
        padding: 1em;
        background-color: rgb(30, 27, 185);

        li {
            font-weight: bold;
            color: #ffffff;
        }



        a {
            color: rgb(255, 255, 255);
            padding: .5em;



            &.router-link-exact-active {
                color: #42b983;
            }
        }



        .EFS{
            margin-right: 33em;
        }
    }



</style>

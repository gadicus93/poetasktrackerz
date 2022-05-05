import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Auth from '@/components/Auth.vue'
import Register from '@/components/Register'
import CharacterList from '@/components/CharacterList'
import CharacterCreate from '@/components/CharacterCreate'
import TaskList from '@/components/TaskList'
import HelpfulLinks from '@/components/HelpfulLinks'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character-list',
    name: 'CharacterList',
    component: CharacterList
  },
  {
    path: '/task-list',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/character-list/:msg',
    name: 'CharacterUpdatedList',
    component: CharacterList
  },
  {
    path: '/character-create',
    name: 'CharacterCreate',
    component: CharacterCreate
  },
  {
    path: '/character-create/:pk',
    name: 'CharacterUpdate',
    component: CharacterCreate
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  },
  {
    path:'/links',
    name: 'Links',
    component: HelpfulLinks
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router

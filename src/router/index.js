import { createRouter, createWebHistory } from 'vue-router'
import ProjectHome from '../components/ProjectHome.vue'
import About from '../components/AppAbout.vue'
import Research from '../components/AppResearch.vue'
import Persona1 from '../components/AppPersona1.vue'
import Persona2 from '../components/AppPersona2.vue'
import Scenario1 from '../components/AppScenario1.vue'
import Scenario2 from '../components/AppScenario2.vue'
import Moodboard from '../components/AppMoodboard.vue'
import Storyboard from '@/components/AppStoryboard.vue'
import Flowchart from '../components/AppFlowchart.vue'
import Wireframes from '../components/AppWireframes.vue'
import GUI from '../components/AppGUI.vue'
import ProjectSearch from '@/components/ProjectSearch.vue'
import ProjectGame from '@/components/ProjectGame.vue'

const routes = [
  { path: '/project-home', component: ProjectHome},
  { path: '/project-search', component: ProjectSearch},
  { path: '/game/:id', component: ProjectGame },
  { path: '/', component: About },
  { path: '/research', component: Research },
  { path: '/persona1', component: Persona1 },
  { path: '/persona2', component: Persona2 },
  { path: '/scenario1', component: Scenario1 },
  { path: '/scenario2', component: Scenario2 },
  { path: '/moodboard', component: Moodboard },
  { path: '/storyboard', component: Storyboard },
  { path: '/flowchart', component: Flowchart },
  { path: '/wireframes', component: Wireframes },
  { path: '/gui', component: GUI },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/AppAbout.vue'
import Research from '../components/AppResearch.vue'
import Persona1 from '../components/AppPersona1.vue'
import Persona2 from '../components/AppPersona2.vue'
import Scenario1 from '../components/AppScenario1.vue'
import Scenario2 from '../components/AppScenario2.vue'
import Moodboard from '../components/AppMoodboard.vue'
import Flowchart from '../components/AppFlowchart.vue'
import Wireframes from '../components/AppWireframes.vue'
import GUI from '../components/AppGUI.vue'
import Prototypes from '../components/AppPrototypes.vue'

const routes = [
  { path: '/', component: About },
  { path: '/research', component: Research },
  { path: '/persona1', component: Persona1 },
  { path: '/persona2', component: Persona2 },
  { path: '/scenario1', component: Scenario1 },
  { path: '/scenario2', component: Scenario2 },
  { path: '/moodboard', component: Moodboard },
  { path: '/flowchart', component: Flowchart },
  { path: '/wireframes', component: Wireframes },
  { path: '/gui', component: GUI },
  { path: '/prototypes', component: Prototypes }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

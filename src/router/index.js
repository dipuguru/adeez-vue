import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/Home-page.vue'
import TurnkeyPage from '@/components/Turnkey-page.vue'
import PlotCollaboration from '@/components/Plot-Collaboration.vue'
import ServicesPage from '@/components/Services-page.vue'
import OurProjects from '@/components/Our-Projects.vue'
import CostCalculator from '@/components/Cost-Calculator.vue'
import ReferralPage from '@/components/Referral-page.vue'
import ContactUs from '@/components/Contact-Us.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/turnkey',
    name: 'Turnkey',
    component: TurnkeyPage
  },
  {
    path: '/plot-collaboration',
    name: 'PlotCollaboration',
    component: PlotCollaboration
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage
  },
  {
    path: '/our-projects',
    name: 'OurProjects',
    component: OurProjects
  },
  {
    path: '/cost-calculator',
    name: 'CostCalculator',
    component: CostCalculator
  },
  {
    path: '/referral',
    name: 'Referral',
    component: ReferralPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
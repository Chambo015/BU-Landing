import { createApp } from 'vue'
import App from './App.vue'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'


import './assets/main.css';
import 'lazysizes';
// import '@/utils/firebase'

// gsap.registerPlugin(ScrollTrigger);

const app = createApp(App)
app.use(autoAnimatePlugin)
app.mount('#app')


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from '@/App.vue'
import router from '@/router'

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

const app = createApp(App)
    .use(pinia)
    .use(router)

// PrimeVue setup
import PrimeVue from 'primevue/config'
import CascadeSelect from 'primevue/cascadeselect'
import Dropdown from 'primevue/dropdown'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import SelectButton from 'primevue/selectbutton'
import Dialog from 'primevue/dialog'
import InputNumber from 'primevue/inputnumber';


import 'primevue/resources/themes/nova/theme.css'
import 'primeicons/primeicons.css'

app.use(PrimeVue)
    .component('CascadeSelect', CascadeSelect)
    .component('Dropdown', Dropdown)
    .component('Panel', Panel)
    .component('Button', Button)
    .component('InputText', InputText)
    .component('SelectButton', SelectButton)
    .component('Dialog', Dialog)
    .component('InputNumber', InputNumber)

app.mount('#app')

require('./bootstrap');

window.Vue = require('vue');

const app = Vue.createApp({})

import ParentComponent from "./ParentComponent";
app.component('parent-component', ParentComponent);

app.use()
    .mount("#app")

import { createRouter, createWebHistory } from 'vue-router'
import FirstOjtContent from "../views/FirstOjtContent.vue"
import Second from "../views/Second.vue"

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'first-content',
            component: FirstOjtContent
        },
        {
            path: '/detail/:id',
            name: 'second',
            component: Second
        }
    ]
})

export default router
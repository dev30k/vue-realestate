import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import firebase from "firebase";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        // authRequired: true,
    },
    {
        path: "/signup",
        name: "Signup",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/SignUp.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Login.vue"),
    },
    {
        path: "/forgotPassword",
        name: "forgotPassword",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/forgotPassword.vue"),
    },
    {
        path: '/properties',
        name: 'details',
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/Details/Details.vue"),

    },
    {
        path: '/upload',
        name: 'Upload',
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/Upload/Upload.vue"),

    },

    {
        path: '/propertyinfo:propertyId',
        name: 'propertyinfo',
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/PropertyInfo/propertyinfo.vue"),

    },
    {
        path: "/profile",
        name: "Profile",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Profile.vue"),
    }, {
        path: "/liked",
        name: "liked",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/liked.vue"),
    },
    {
        path: "/checkout",
        name: "checkout",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../components/checkout.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            next({

                path: '/'

            })
        }

    } else {
        next();
    }
});

export default router;
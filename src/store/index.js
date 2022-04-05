import { createStore } from "vuex";
// import firebase from "firebase";
import { auth, db } from "../firebase/config";
export default createStore({
    state: {
        properties: [],
        comments: [],
        postLoaded: null,
        user: null,
        username: null,
        profileId: null,
        email: null,
        firstname: null,
        lastname: null,


    },
    getters: {
        featuredFeed(state) {
            return state.properties.slice(0, 4);


        },
        featuredComments(state) {
            return state.comments.slice(0, 3);

        },
        featuredDetails(state) {
            return state.properties.slice(0, 15);
        }
    },
    mutations: {
        setProfileInfo(state, doc) {
            state.profileId = doc.id;
            state.username = doc.data().username;
            state.firstname = doc.data().firstname;
            state.lastname = doc.data().lastname;
            state.email = doc.data().email;

        },
        updateUser(state, payload) {
            state.user = payload;


        },
        setProfileInitials(state) {
            state.profileInitials =
                state.firstname.match(/(\b\S)?/g).join("") + state.lastname.match(/(\b\S)?/g).join("");
        },

        changeFirstname(state, payload) {
            state.firstname = payload;

        },
        changeLastname(state, payload) {
            state.lastname = payload;

        },
        changeUsername(state, payload) {
            state.username = payload;

        },

        changeEmail(state, payload) {
            state.username = payload;

        },
    },
    actions: {
        async getCurrentUser({ commit }) {
            const database = await db.collection("users").doc(auth.currentUser.uid);
            const res = await database.get();
            commit("setProfileInfo", res);
            commit("setProfileInitials");
            console.log(res)
        },
        async updateUserSettings({ commit, state }) {
            const database = await db.collection("users").doc(state.profileId);
            await database.update({
                firstname: state.firstname,
                lastname: state.lastname,
                username: state.username,
                email: state.email,

            });
            commit("setProfileInitials")
        },
        async getProperties({ state }) {
            const dbs = await db.collection("properties");
            const results = await dbs.get();
            // const promisethemes
            results.forEach((doc) => {
                const data = {
                    propertyId: doc.id,
                    propertyName: doc.data().propertyName,
                    description: doc.data().description,
                    bedrooms: doc.data().bedrooms,
                    baths: doc.data().baths,
                    squarefeet: doc.data().squarefeet,
                    price: doc.data().price,
                    images: doc.data().images,
                    location: doc.data().location,
                    uploadedOn: doc.data().uploadedOn,
                    //


                };
                state.properties.push(data);

            });
            state.postLoaded = true;
        },
        async getComments({ state }) {
            const dbs = await db.collection("comments");
            const results = await dbs.get();
            // const promisethemes
            results.forEach((doc) => {
                const data = {
                    username: doc.data().username,
                    comment: doc.data().comment,
                    best: doc.data().best,
                    uploadedOn: doc.data().uploadedOn

                };
                state.comments.push(data);
                console.log("comments", data)

            });
            // state.postLoaded = true;
        }





    },
    modules: {},
});
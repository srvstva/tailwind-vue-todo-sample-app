import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            {
                title: "First todo",
                done: true,
                id: 1,
            },
            {
                title: "Second todo",
                done: false,
                id: 2,
            },
        ],
    },
    mutations: {
        addTodo: (state, payload) => {
            state.todos.unshift(payload)
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, payload) => {
            state.todos = state.todos.filter(todo => todo.id !== payload);
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        markComplete: (state, payload) => {
            state.todos.forEach(todo => {
                if (todo.id == payload) {
                    todo.done = !todo.done;
                }
            })
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        loadTodos: state => {
            if (localStorage.todos) {
                state.todos = JSON.parse(localStorage.getItem("todos"));
            }
        }
    },
    getters: {
        allTodos: state => {
            return state.todos;
        },
        completedTodos: state => {
            return state.todos.filter((todo) => todo.done);
        }
    },
    actions: {
        addTodo: ({ commit }, payload) => {
            commit('addTodo', payload);
        },
        removeTodo: ({ commit }, payload) => {
            commit('removeTodo', payload);
        },
        markComplete: ({ commit }, payload) => {
            commit('markComplete', payload);
        },
        loadTodos: ({ commit }) => {
            commit("loadTodos");
        }
    }
});
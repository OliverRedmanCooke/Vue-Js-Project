import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get("http://localhost:5000/tasks");

    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post("http://localhost:5000/tasks", title);

    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:5000/tasks/${id}`);

    commit("removeTodo", id);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:5000/tasks/${id}`);

    commit("removeTodo", id);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(
      `http://localhost:5000/tasks/${updTodo.id}`,
      updTodo
    );

    console.log(response.data);

    commit("updateTodo", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};

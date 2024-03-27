Vue.createApp({
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    const response = await fetch("http://localhost:4730/todos");
    const data = await response.json();
    this.tasks = data;
  },
}).mount("#app");

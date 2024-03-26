Vue.createApp({
  data() {
    return {
      lightOut: false,
    };
  },

  methods: {
    toggleLight() {
      this.lightOut = !this.lightOut;
      document.body.classList.toggle("content-dark");
      if (document.title === "Good Morning") {
        document.title = "Good Night";
      } else {
        document.title = "Good Morning";
      }
    },
  },
}).mount("#app");

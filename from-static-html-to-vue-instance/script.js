Vue.createApp({
  data() {
    return {
      userName: "John Doe",
      date: new Date().toLocaleString("en-us"),
    };
  },
}).mount(".card");

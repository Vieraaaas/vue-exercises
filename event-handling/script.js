Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },

  methods: {
    removeFruit(fruitRem) {
      this.fruitBasket = this.fruitBasket.filter((fruitStay) => {
        return fruitStay !== fruitRem;
      });
    },
  },
}).mount("#app");

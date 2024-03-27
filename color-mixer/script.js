Vue.createApp({
  data() {
    return {
      valueRed: 255,
      valueGreen: 165,
      valueBlue: 0,
    };
  },

  computed: {
    color() {
      return {
        backgroundColor: `rgb(${this.valueRed}, ${this.valueGreen}, ${this.valueBlue})`,
      };
    },
    colorTransparent() {
      return {
        backgroundColor: `rgba(${this.valueRed}, ${this.valueGreen}, ${this.valueBlue}, 0.5)`,
      };
    },
  },

  methods: {
    async changeRandom() {
      try {
        const response = await fetch(
          "https://dummy-apis.netlify.app/api/color"
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          this.valueRed = data.rgb.r;
          this.valueGreen = data.rgb.g;
          this.valueBlue = data.rgb.b;
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
}).mount("#app");

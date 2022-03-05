import axios from "axios";

const weatherMixin = {
  data() {
    return {};
  },
  methods: {
    async getWeatherInfo(city) {
      const API_KEY = "559ceab537cdee707f783e5c8f141a38";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.code}&appid=${API_KEY}`;
      const res = await axios.get(url);
      return res.data;
    },
  },
};

export default weatherMixin;

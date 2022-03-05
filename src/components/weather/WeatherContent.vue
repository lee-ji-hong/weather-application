<template>
  <div class="weather-wrapper">
    <ContentHeader />
    <CitySelector @selectCity="selectCity" />
    <WeatherList :weatherList="weatherList" />
  </div>
</template>

<script>
import weatherMixin from "@/mixins/weatherMixin.js";
import ContentHeader from "./ContentHeader.vue";
import CitySelector from "./CitySelector.vue";
import WeatherList from "./WeatherList.vue";

export default {
  name: "WeatherContent",
  components: {
    ContentHeader,
    CitySelector,
    WeatherList,
  },
  mixins: [weatherMixin],
  data() {
    return {
      weatherList: [],
    };
  },
  methods: {
    selectCity(city) {
      if (city.selected === true) {
        const weather = this.getWeatherInfo(city);
        this.weatherList.push(weather);
      } else {
        const index = this.weatherList.findIndex(
          (weather) => weather.code === city.code
        );
        this.weatherList.splice(index, 1);
      }
    },
  },
};
</script>

<style></style>

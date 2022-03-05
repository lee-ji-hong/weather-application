<template>
  <div>
    <ul class="weather-list">
      <WeatherItem
        v-for="weather in weatherList"
        :key="weather.code"
        :weather="weather"
      />
    </ul>
  </div>
</template>

<script>
import WeatherItem from "./WeatherItem.vue";
export default {
  name: "WeatherList",
  components: {
    WeatherItem,
  },
  props: {
    weatherList: Array,
  },
};
</script>

<style scoped>
.weather-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1em;
  grid-gap: 1em;
}
</style>

<template>
  <div>
    <ul class="weather-list">
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
      <WeatherItem />
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

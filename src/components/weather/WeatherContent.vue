<template>
  <div>
    <ContentHeader />
    <CitySelector />
    <WeatherList />
  </div>
</template>

<script>
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
};
</script>

<style></style>

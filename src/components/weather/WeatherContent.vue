<template>
  <div>
    <ContentHeader />
    <CitySelector />
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader.vue";
import CitySelector from "./CitySelector.vue";

export default {
  name: "WeatherContent",
  components: {
    ContentHeader,
    CitySelector,
  },
};
</script>

<style></style>

<template>
  <li class="weather-item">
    <h3>{{ weather.label }}</h3>
    <p class="temperature">{{ weather.temperature }} &deg;C</p>
    <p class="info">
      <img :src="weather.icon" alt="any" />
      <span>습도 {{ weather.humidity }}</span>
      <span>바람 {{ weather.wind }}m/s</span>
    </p>
  </li>
</template>

<script>
export default {
  name: "WeatherItem",
  props: {
    weather: {
      type: Object,
      default() {
        return {
          label: "서울",
          code: "Seoul",
          temperature: 20,
          humidity: 15,
          wind: 1.5,
        };
      },
    },
  },
}; //props을 받을 때 default value를 설정할 수 있는데 넘겨받는 값이 object나 배열인 경우에 method형식으로 선언 해주어야 한다.
</script>

<style scoped>
.weather-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  padding: 0.5em;
}
.weather-item h3 {
  font-size: 14px;
  color: #333;
}
.temperature {
  font-size: 36px;
}
.info {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.info * {
  margin-right: 0.4em;
}
</style>

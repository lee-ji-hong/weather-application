<template>
  <div>
    <ul class="city-selector">
      <li
        @click="selectCity(city)"
        v-for="city in cities"
        :key="city.code"
        :class="{ isSelected: city.selected === true }"
      >
        {{ city.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CitySelector",
  data() {
    return {
      cities: [
        {
          code: "Seoul",
          label: "서울",
          selected: false,
        },
        {
          code: "Tokyo",
          label: "도쿄",
          selected: false,
        },
        {
          code: "London",
          label: "런던",
          selected: false,
        },
        {
          code: "Moscow",
          label: "모스크바",
          selected: false,
        },
        {
          code: "Yakutsk",
          label: "야크추크",
          selected: false,
        },
      ],
    };
  },
  methods: {
    selectCity(city) {
      city.selected = !city.selected;
    },
  },
};
</script>

<style scoped>
.city-selector {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.city-selector li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  padding: 0.3em;
  cursor: pointer;
}
.isSelected {
  background: #ee9ca7;
  color: #fff;
}
</style>

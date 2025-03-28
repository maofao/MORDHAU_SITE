<template>
  <div>
    <h1>Мувмент, но сначала...</h1>
    <h2>...Типы ударов</h2>
    <table border="2" width="40%" height="150px">
      <tr>
        <td v-for="(strike, index) in strikeTypes" :key="index">{{ strike }}</td>
      </tr>
    </table>

    <h2><b>Виды орудий</b></h2>
    <table border="2" width="50%" height="100px">
      <tr>
        <td v-for="(weapon, index) in weaponTypes" :key="index"><i>{{ weapon }}</i></td>
      </tr>
    </table>

    <h2><i>Типы оружий</i></h2>
    <table border="2" width="50%" height="100px">
      <tr>
        <td rowspan="1">Руки...</td>
      </tr>
      <tr>
        <td v-for="(type, index) in weaponClasses" :key="index"><b>{{ type }}</b></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MovementComponent',
  data() {
    return {
      strikeTypes: [
        'Обычный удар (рубящий)',
        'Обычный удар (колющий)',
        'Аксель (ускоренный)',
        'Драгг (замедленный)',
        'Вессекс (замедленный, прилетающий сзади)',
      ],
      weaponTypes: ['Мечи', 'Топоры', 'Древковые', 'Дробящие', 'Колящие', 'Стрелковые'],
      weaponClasses: ['Одноручные', 'Двуручные', 'Комбинированные', 'Метательное'],
    };
  },
};
</script>

<style scoped>
table {
  margin-bottom: 20px;
}
td {
  text-align: center;
  padding: 10px;
}
</style>
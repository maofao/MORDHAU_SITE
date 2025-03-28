<template>
  <div>
    <h1>MORDHAU это...</h1>
    <p>
      <b>- жестокий и безумно адреналиновый</b>
      <i>средневековый</i> слэшер, где можно:
    </p>
    <ul>
      <li><b>рубиться</b></li>
      <li><b>колоть и крушить</b></li>
    </ul>
    <p>врагов в эпических битвах.</p>
    <img src="@/assets/images/mord1.jpg" alt="mord1" width="700" height="400" title="battle 3x3" />
    <p>Какие же особенности есть у этой игры? Их много! Например:</p>
    <ul>
      <li v-for="(feature, index) in features" :key="index">
        <h3>{{ feature }}</h3>
      </li>
    </ul>
    <p>
      Ссылка на сайт разработчиков:
      <a href="https://triternion.com" target="_blank">triternion.com</a>
    </p>
    <router-link to="/movement" target="_blank">Весь мувмент в MORDHAU</router-link>
    <img src="@/assets/images/tr_logo.png" alt="Сайт разработчиков игры" width="300" height="200" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      features: [
        'Реалистичный бой — здесь нет дурацких комбо-кнопок, только физика, тайминг и хитрость.',
        'Кровавая резня — мечи, топоры, луки и даже кувалды в твоих руках превращаются в орудия кровавого карнавала.',
        'Кастомизация — создай своего ублюдка-наёмника: от брони до голоса (да, можно орать матом перед атакой).',
        'Режимы — дуэли, королевские битвы, осады замков и даже строительство баррикад.',
        'Мемы и троллинг — игроки лютуют: кто-то играет на лютне, пока другие режут друг друга, а кто-то в доспехах гоняется за голыми дезертирами.',
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: #333;
}
ul {
  list-style-type: square;
}
</style>
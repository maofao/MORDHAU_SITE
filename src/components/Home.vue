<template>
  <div class="home">
    <header class="hero">
      <h1>MORDHAU</h1>
      <p class="tagline">Жестокий и адреналиновый средневековый слэшер</p>
      <p class="subtext">Руби, коли и круши врагов в эпических битвах</p>
      <a-button type="danger" size="large" class="play-button">
        <router-link to="/movement">Узнать мувмент</router-link>
      </a-button>
    </header>

    <section class="features">
      <h2>Особенности игры</h2>
      <a-carousel :autoplay="true" dots-class="carousel-dots">
        <div v-for="(feature, index) in features" :key="index" class="carousel-item">
          <a-card :hoverable="true" class="feature-card">
            <template #title>
              <h3>{{ feature }}</h3>
            </template>
          </a-card>
        </div>
      </a-carousel>
    </section>

    <footer class="links">
      <a href="https://triternion.com" target="_blank" class="dev-link">Сайт разработчиков</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      features: [
        'Реалистичный бой — только физика, тайминг и хитрость.',
        'Кровавая резня — мечи, топоры и кувалды в твоих руках.',
        'Кастомизация — создай своего наёмника с бронёй и голосом.',
        'Режимы — дуэли, осады и королевские битвы.',
        'Мемы и троллинг — лютня, мат и голые дезертиры.',
      ],
    };
  },
};
</script>
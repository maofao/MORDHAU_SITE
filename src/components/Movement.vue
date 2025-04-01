<template>
  <div class="movement">
    <header class="hero">
      <h1>Мувмент в MORDHAU</h1>
      <p class="tagline">Освой искусство боя</p>
    </header>

    <section class="category">
      <h2>Типы ударов</h2>
      <a-carousel :autoplay="true" dots-class="carousel-dots">
        <div v-for="(strike, index) in strikeTypes" :key="index" class="carousel-item">
          <a-card :hoverable="true" class="movement-card">
            <span>{{ strike }}</span>
          </a-card>
        </div>
      </a-carousel>
    </section>

    <section class="category">
      <h2>Виды орудий</h2>
      <a-carousel :autoplay="true" dots-class="carousel-dots">
        <div v-for="(weapon, index) in weaponTypes" :key="index" class="carousel-item">
          <a-card :hoverable="true" class="movement-card">
            <span>{{ weapon }}</span>
          </a-card>
        </div>
      </a-carousel>
    </section>

    <section class="category">
      <h2>Типы оружий</h2>
      <a-carousel :autoplay="true" dots-class="carousel-dots">
        <div class="carousel-item">
          <a-card :hoverable="true" class="movement-card hands">
            <span>Руки...</span>
          </a-card>
        </div>
        <div v-for="(type, index) in weaponClasses" :key="index" class="carousel-item">
          <a-card :hoverable="true" class="movement-card">
            <span>{{ type }}</span>
          </a-card>
        </div>
      </a-carousel>
    </section>
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
        'Вессекс (сзади)',
      ],
      weaponTypes: ['Мечи', 'Топоры', 'Древковые', 'Дробящие', 'Колящие', 'Стрелковые'],
      weaponClasses: ['Одноручные', 'Двуручные', 'Комбинированные', 'Метательное'],
    };
  },
};
</script>
<template>
  <header class="header">
    <div class="header-content">
      <div class="logo">Визитка Галай Егор Александровича</div>
      <nav class="nav">
        <a href="#about" class="nav-link" v-smooth-scroll>Обо мне</a>
        <a href="#projects" class="nav-link" v-smooth-scroll>Проекты</a>
        <a href="#contacts-section" class="nav-link" v-smooth-scroll>Контакты</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  position: fixed; /* или sticky, в зависимости от нужного поведения */
  top: 0;
  left: 0;
  right: 0; /* растягиваем на всю ширину */
  width: 100%; /* гарантирует 100% ширины */
  min-width: 100%; /* предотвращает сжатие */
  background-color: #2c3e50; /* ваш цвет фона */
  color: white;
  padding: 1rem 0; /* отступы сверху/снизу */
  z-index: 1000; /* чтобы header был поверх других элементов */
  box-sizing: border-box; /* учитывает padding в ширине */
}

.header-content {
  max-width: 1200px; /* или ваша preferred ширина контента */
  width: 100%;
  margin: 0 auto; /* центрирование */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; /* боковые отступы */
}

.nav {
  display: flex;
  gap: 1rem;
}
.nav-link {
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .header {
    padding: 0.5rem 0;
  }
  .header-content {
    padding: 0 1rem;
  }
}
</style>
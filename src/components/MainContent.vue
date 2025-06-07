<template>
  <main class="main-content">
    <section id="about" class="section">
      <h2>Обо мне</h2>
      <div class="about-content">
        <img src="@/assets/photo.jpg" alt="Мое фото" class="profile-photo">
        <div class="about-text">
          <p>Привет! Я студент первого курса по направлению "Индустриальное программирование".</p>
          <p>С 2024 года работаю техническим писателем в IT-компании Innostage, где:</p>
          <ul>
            <li>составляю техническую документацию для внутренних продуктов;</li>
            <li>разрабатываю руководства пользователя;</li>
            <li>участвую в создании API-документации;</li>
            <li>работаю с Confluence, Swagger и Markdown.</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="skills" class="section">
      <h2>Навыки</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Технические</h3>
          <ul>
            <li>HTML/CSS (Bootstrap, SCSS)</li>
            <li>JavaScript (Vue.js, базовый React)</li>
            <li>Python (Django, Flask)</li>
            <li>SQL (PostgreSQL, MySQL)</li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h3>Документирование</h3>
          <ul>
            <li>Техническая документация</li>
            <li>API документация (Swagger/OpenAPI)</li>
            <li>Руководства пользователя</li>
            <li>Работа с Confluence, Notion</li>
          </ul>
        </div>
        
        <div class="skill-category">
          <h3>Языки</h3>
          <ul>
            <li>Русский (родной)</li>
            <li>Английский (B2 - Upper Intermediate)</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="projects" class="section">
      <h2>Проекты</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Документация для внутреннего API</h3>
          <p>Innostage, 2024</p>
          <p>Разработка и поддержка Технической-документации для REST API</p>
        </div>
        
        <div class="project-card">
          <h3>Учебный проект: Онлайн библиотека</h3>
          <p>Вузовский проект, 2025</p>
          <p>Фронтенд на Vue.js + бэкенд на Golang</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MainContent'
}
</script>

<style scoped>
.main-content {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 3rem;
  padding: 1rem;
}

.about-content {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #42b983;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  border: 1px solid #ddd;
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
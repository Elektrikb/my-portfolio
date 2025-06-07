<template>
  <footer id="contacts-section" class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Контакты</h3>
        <p>Email: <a href="mailto:your.email@example.com">galai.jedai2003@yandex.com</a></p>
        <p>Telegram: <a href="https://t.me/yournick" target="_blank">@elektrikfa</a></p>
      </div>
      
      <div class="footer-section">
        <h3>Соцсети</h3>
        <div class="social-links">
          <a href="https://github.com/Elektrikb" target="_blank" title="GitHub">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h3>© 2025</h3>
        <p>Студент 1 курса & Технический писатель</p>
        <p>Innostage Team</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: 2rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.footer-section {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.footer-section h3 {
  border-bottom: 1px solid #42b983;
  padding-bottom: 0.5rem;
}

.footer-section a {
  color: #42b983;
  text-decoration: none;
}

.social-links {
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
}

.social-links a {
  color: white;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #42b983;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
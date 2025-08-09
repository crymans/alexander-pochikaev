  // Модальное окно поддержки
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('supportModal');
    const btn = document.querySelector('.btn-outline'); // Кнопка "Поддержать проект"
    const span = document.getElementsByClassName('close')[0];
    const amountBtns = document.querySelectorAll('.amount-btn');
    const amountInput = document.getElementById('supportAmount');
    
    // Открытие модального окна
    btn.onclick = function() {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    }
    
    // Закрытие модального окна
    span.onclick = function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    
    // Закрытие при клике вне окна
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    }
    
    // Выбор суммы
    amountBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        amountBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        amountInput.value = this.dataset.amount;
      });
    });
    
    // Ввод своей суммы
    amountInput.addEventListener('input', function() {
      amountBtns.forEach(b => b.classList.remove('active'));
    });
    
    // Обработка формы
    document.getElementById('supportForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Здесь можно добавить отправку данных на сервер
      const formData = {
        amount: amountInput.value,
        name: document.getElementById('supportName').value,
        email: document.getElementById('supportEmail').value,
        message: document.getElementById('supportMessage').value,
        anon: document.getElementById('supportAnon').checked
      };
      
      console.log('Данные для отправки:', formData);
      
      // Временное сообщение об успехе
      alert('Спасибо за вашу поддержку! Мы очень ценим ваш вклад.');
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      this.reset();
      amountBtns.forEach(b => b.classList.remove('active'));
    });
  });

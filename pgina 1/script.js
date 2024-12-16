function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
function search() {
    const searchQuery = document.getElementById('search-input').value;
    alert('Buscando: ' + searchQuery);
    // Aquí podrías agregar lógica para realizar una búsqueda en una base de datos o API.
}
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    let valid = true;
  
    // Validación del nombre
    if (!name.value.trim()) {
      nameError.style.display = 'block';
      valid = false;
    } else {
      nameError.style.display = 'none';
    }
  
    // Validación del correo electrónico
    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      emailError.style.display = 'block';
      valid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // Validación de la contraseña
    if (!password.value || password.value.length < 6) {
      passwordError.style.display = 'block';
      valid = false;
    } else {
      passwordError.style.display = 'none';
    }
  
    // Validación de confirmación de contraseña
    if (password.value !== confirmPassword.value) {
      confirmPasswordError.style.display = 'block';
      valid = false;
    } else {
      confirmPasswordError.style.display = 'none';
    }
  
    if (valid) {
      alert('Registro exitoso');
      // Aquí puedes enviar los datos al servidor o realizar otras acciones.
    }
  });
  
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const siButton = document.getElementById('si');
    const noButton = document.getElementById('no');
    const respuestaDiv = document.getElementById('respuesta');
  
    siButton.addEventListener('click', () => {
      console.log('Se hizo clic en Sí');
      respuestaDiv.innerHTML = '¡Genial! Me alegra que quieras ser mi pareja.';
    });
  
    noButton.addEventListener('click', () => {
      console.log('Se hizo clic en No');
      respuestaDiv.innerHTML = '¡Oh no! Esperaba que dijeras que sí...';
    });
  });
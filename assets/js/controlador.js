function formacion() {
    window.location.href = 'formacion.html';
  }
  function contactame(){
    window.location.href='contactame.html';
  }
  function principal(){
    window.location.href='index.html';
  }
  function habilidades(){
    window.location.href='habilidades.html'
  }
  function sobre(){
    window.location.href='sobre-mi.html'
  }
  function git(){
    window.location.href='https://github.com/ajez022003'
}
function  linkedin(){
    window.open.href='https://www.linkedin.com/in/angelly-jessibel-elvir-141146254'
}
function facebook(){
  window.location.href='https://www.facebook.com/angellyjessibel.elvirzuniga?mibextid=b06tZ0'
}
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3', 'Etiqueta 4'],
    datasets: [{
      label: 'Datos de ejemplo',
      data: [12, 19, 3, 5],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});







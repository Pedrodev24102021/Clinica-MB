const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener('click', (e) => {
    isLeft = e.target.classList.contains('arrow-left');

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove('current-item'));

    items[currentItem].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    });

    items[currentItem].classList.add('current-item');
  });
});
const saida = document.querySelector('.saida');

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 50);
  }
}

digitacao(
  'A MB estética personalizada foi fundada a quatro anos,Promovendo tratamentos para pele,corpo e mente,Durante essa tragetória vem reavendo e aumentando a autoestima de centenas de clientes!',
  0,
);

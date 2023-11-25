// Recomenda-se usar strictNullChecks para um código mais seguro
// Adicione "strict": true, ao seu arquivo tsconfig.json

document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('a[href^="mailto:"]');

    if (emailLink) {
        emailLink.addEventListener('click', () => {
            alert('Seu e-mail foi copiado para a área de transferência.');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const slideContainer = document.querySelector('.slide-container') as HTMLElement;

    const radioButtons = document.querySelectorAll('input[name="slides"]');
    const slideButtons = document.querySelectorAll('.slide-btn');

    let currentSlide = 0;

    function showSlide(index: number) {
        slideContainer.style.transform = `translateX(${-index * 100}%)`;
        currentSlide = index;

        // Marcar o botão correspondente ao slide atual
        (radioButtons[currentSlide] as HTMLInputElement).checked = true;
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            showSlide(currentSlide + 1);
        } else {
            showSlide(0);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        } else {
            showSlide(slides.length - 1);
        }
    }

    // Adicionar eventos aos botões de navegação
    slideButtons.forEach((button, index) => {
        button.addEventListener('click', () => showSlide(index));
    });

    // Adicionar eventos aos botões de rádio
    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener('change', () => showSlide(index));
    });

    // Adicionar eventos para navegação com as setas do teclado (opcional)
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Automatizar a transição de slides (opcional)
    setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos (ajuste conforme necessário)
});
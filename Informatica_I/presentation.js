const slides = Array.from(document.querySelectorAll('.slide'));
const btnAnt = document.getElementById('anterior');
const btnSig = document.getElementById('siguiente');
const indicador = document.getElementById('indicador');
let actual = 0;

function mostrarSlide(idx) {
    slides.forEach((d, i) => d.classList.toggle('active', i === idx));
    btnAnt.disabled = idx === 0;
    btnSig.disabled = idx === slides.length - 1;
    indicador.textContent = `Diapositiva ${idx + 1} de ${slides.length}`;
}

btnAnt.onclick = () => {
    if (actual > 0) {
        actual--;
        mostrarSlide(actual);
    }
};
btnSig.onclick = () => {
    if (actual < slides.length - 1) {
        actual++;
        mostrarSlide(actual);
    }
};

mostrarSlide(actual);

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') btnSig.click();
    if (e.key === 'ArrowLeft') btnAnt.click();
});

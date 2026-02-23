/*let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // scroll w dół
        header.classList.add("hidden");
    } else {
        // scroll w górę
        header.classList.remove("hidden");
        header.classList.add("sticky");
    }

    // gdy jesteśmy na samej górze
    if (currentScroll <= 0) {
        header.classList.remove("sticky");
    }

    lastScroll = currentScroll;
});
const lp1 = document.getElementById("lewa_rysa");


const element = document.getElementById("1s1c1d");


lp1.addEventListener('click', () => {

        element.classList.toggle('active');
        lp1.classList.toggle('active');
    }

);*/


/*const rozwoj = document.querySelectorAll('.opis_drogi');

rozwoj.forEach(przycisk => {
    przycisk.addEventListener('click', () => {
        const targetId = przycisk.getAttribute('data-target');
        const docelowy = document.getElementById(targetId);
        if (docelowy) {
            document.getElementsByClassName('chevron');
            przycisk.classList.toggle('active');
            docelowy.classList.toggle('active');

        }

        //przycisk.classList.toggle('active');
    });
});*/
const rozwoj = document.querySelectorAll('.opis_drogi');
const lightbox = GLightbox({ selector: '.glightbox' });
rozwoj.forEach(przycisk => {
    przycisk.addEventListener('click', () => {
        const targetId = przycisk.getAttribute('data-target');
        const docelowy = document.getElementById(targetId);

        if (docelowy) {
            // 1. SPRAWDŹ, CZY KLIKNIĘTY ELEMENT JUŻ JEST AKTYWNY
            const czyJuzAktywny = przycisk.classList.contains('active');

            // 2. WYCZYŚĆ WSZYSTKIE INNE ELEMENTY
            rozwoj.forEach(p => {
                p.classList.remove('active'); // Usuń z przycisku
                const tId = p.getAttribute('data-target');
                const d = document.getElementById(tId);
                if (d) d.classList.remove('active'); // Usuń z treści
            });

            // 3. JEŚLI KLIKNIĘTY NIE BYŁ AKTYWNY, TO GO OTWÓRZ
            // (Dzięki temu ponowne kliknięcie w ten sam element go zamknie)
            if (!czyJuzAktywny) {
                przycisk.classList.add('active');
                docelowy.classList.add('active');
            }
        }
    });
});
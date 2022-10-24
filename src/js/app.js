import '../components/index.js';

const h3 = document.querySelectorAll('.card__head');
const badge_purple = document.querySelector('.badge_purple');
const badge_yellow = document.querySelector('.badge_yellow');
const button_long = document.querySelector('.button-long');

// Меняет текст в h3 в зависимости от ширины
const changeText = () => {
    if (window.innerWidth > 576) {
    h3.forEach(item => item.textContent = 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020')
    } else {
    h3.forEach(item => item.textContent = 'АКЦИЯ - Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019')
    }
};

window.addEventListener("resize", changeText);

// Меняет бейдж на изображении в зависимости от ширины
const changeBadge = () => {
    if (window.innerWidth > 576) {
        toggleBadge('круглый год', 'badge_yellow', 'badge_purple', 'badge_yellow', 'badge_blue');
    } else {
        toggleBadge('новинка', 'badge_purple', 'badge_yellow', 'badge_blue', 'badge_yellow');
    }
};

const toggleBadge = (text, addPurp, remPurpe, addYel, remYel,) => {
    badge_purple.textContent = text;
    badge_purple.classList.remove(remPurpe);
    badge_purple.classList.add(addPurp);
    badge_yellow.classList.remove(addYel);
    badge_yellow.classList.add(remYel);
}

window.addEventListener("resize", changeBadge);

// Меняет тип кнопки в зависимости от ширины
const changeButtonLong = () => {
    if (window.innerWidth > 576) {
        button_long.classList.remove('button-long');
    } else {
        button_long.classList.add('button-long');
    }
};

window.addEventListener("resize", changeButtonLong);

changeText();
changeBadge();
changeButtonLong();

const timeList = document.querySelectorAll('.time__list');
const timeWrapper = document.querySelectorAll('.time');

// Скрывает и отображает блоу с элементами времени
const openMoreElems = () => {
    timeList.forEach((item, i) => {
        if (item.childElementCount > 4) {
            const elemShow = item.children[3];
            const elemShowContent = elemShow.textContent;
            elemShow.textContent = 'ещё...';

            elemShow.addEventListener('click', () => {
                toggleBlock('visible', '70px', i, elemShow, elemShowContent);

                const elemHide = document.createElement('li');
                elemHide.classList.add('time__item');
                elemHide.textContent = 'скр-ь';

                if (item.lastElementChild.textContent !== 'скр-ь') {
                    timeList[i].append(elemHide);
                }

                elemHide.addEventListener('click', () => {
                    toggleBlock('hidden', '30px', i, elemShow, 'ещё...');
                    elemHide.remove();
                })
            })
        }
    })
}

const toggleBlock = (overflow, maxHeight, i, elem, elemContent) => {
    timeWrapper[i].style.overflow = overflow;
    timeWrapper[i].style.maxHeight = maxHeight;
    elem.textContent = elemContent;
}

openMoreElems();

const card = document.querySelectorAll('.card');

// Тогглит карточку в завимости от ширины
const correctLayout = () => {
    if (window.innerWidth > 576) {
        card[2].classList.toggle('hide');
    } else {
        card[2].classList.toggle('hide');
    }
}

window.addEventListener("resize", correctLayout);

correctLayout();

// Скрывает/Отображает элемент времени в завимости от ширины
const toggleTimeElem = () => {
    if (window.innerWidth > 576) {
        timeList[0].children[3].classList.add('hide');
        timeList[0].children[3].classList.remove('show');
    } else {
        timeList[0].children[3].classList.remove('hide');
        timeList[0].children[3].classList.add('show');
    }
}

window.addEventListener("resize", toggleTimeElem);

toggleTimeElem();
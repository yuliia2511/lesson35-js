//Task3
const content = document.getElementById('section__textarea');
const resizer = document.querySelector('div.section__textarea--resizer');

const makeResize = element => {
    element.preventDefault;
    window.addEventListener('mousemove', runResize);
    window.addEventListener('mouseup', stopResize);
};

const runResize = element => {
    content.style.width = (element.clientX - content.offsetLeft) + 'px';
};

const stopResize = element => {
    window.removeEventListener('mousemove', runResize);
    window.removeEventListener('mouseup', stopResize);
};

resizer.addEventListener('mousedown', makeResize);

//Task1
document.body.addEventListener('keydown', (event) => {
    const div = document.createElement('div');
    if ((event.code === 'KeyE' || event.code === 'Comma') && event.ctrlKey) {
        event.preventDefault();
        const container = document.querySelector('.section__textarea');
        if (event.code === 'KeyE' && container.nodeName === 'DIV') {
            const newContainer = document.createElement('textarea');
            newContainer.className = 'content__textarea';
            newContainer.textContent = container.textContent;
            container.replaceWith(newContainer);
        } else if (event.code === 'Comma' && container.nodeName === 'TEXTAREA') {
            const newContainer = document.createElement('div');
            newContainer.className = 'section__textarea';
            newContainer.textContent = container.value;
            div.className = 'section__textarea--resizer';
            container.replaceWith(newContainer);
        };
    };
});

//Task2
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

table.append(thead, tbody);
document.getElementById('body').appendChild(table);

//Data for table's heading
const row1 = document.createElement('tr');
const title1 = document.createElement('th');
title1.innerHTML = 'No.';
const title2 = document.createElement('th');
title2.innerHTML = 'Name';
const title3 = document.createElement('th');
title3.innerHTML = 'Happens when';
row1.append(title1, title2, title3);

thead.appendChild(row1);

//Data for second row
const row2 = document.createElement('tr');
const row2_info1 = document.createElement('td');
row2_info1.innerHTML = '1.';
const row2_info2 = document.createElement('td');
row2_info2.innerHTML = 'auxclick';
const row2_info3 = document.createElement('td');
row2_info3.innerHTML = 'Кнопка вказівного пристрою (будь-яка неосновна кнопка) була натиснута та відпущена на елементі.';
row2.append(row2_info1, row2_info2, row2_info3);

//Data for third row
const row3 = document.createElement('tr');
const row3_info1 = document.createElement('td');
row3_info1.innerHTML = '2.';
const row3_info2 = document.createElement('td');
row3_info2.innerHTML = 'click (en-US)';
const row3_info3 = document.createElement('td');
row3_info3.innerHTML = 'Кнопка вказівного пристрою (будь-яка кнопка; soon to be primary button only) була натиснута і відпущена на елементі.';
row3.append(row3_info1, row3_info2, row3_info3);

//Data for forth row
const row4 = document.createElement('tr');
const row4_info1 = document.createElement('td');
row4_info1.innerHTML = '3.';
const row4_info2 = document.createElement('td');
row4_info2.innerHTML = 'contextmenu (en-US)';
const row4_info3 = document.createElement('td');
row4_info3.innerHTML = 'Права кнопка мишки натиснута (перед відображенням контекстного меню).';
row4.append(row4_info1, row4_info2, row4_info3);

//Data for fifth row
const row5 = document.createElement('tr');
const row5_info1 = document.createElement('td');
row5_info1.innerHTML = '4.';
const row5_info2 = document.createElement('td');
row5_info2.innerHTML = 'dblclick (en-US)';
const row5_info3 = document.createElement('td');
row5_info3.innerHTML = 'На елементі двічі натискається кнопка вказівного пристрою.';
row5.append(row5_info1, row5_info2, row5_info3);

//Data for sixth row
const row6 = document.createElement('tr');
const row6_info1 = document.createElement('td');
row6_info1.innerHTML = '5.';
const row6_info2 = document.createElement('td');
row6_info2.innerHTML = 'mousedown (en-US)';
const row6_info3 = document.createElement('td');
row6_info3.innerHTML = 'На елементі натискається кнопка вказівного пристрою.';
row6.append(row6_info1, row6_info2, row6_info3);

//Data for seventh row
const row7 = document.createElement('tr');
const row7_info1 = document.createElement('td');
row7_info1.innerHTML = '6.';
const row7_info2 = document.createElement('td');
row7_info2.innerHTML = 'mouseenter (en-US)';
const row7_info3 = document.createElement('td');
row7_info3.innerHTML = 'Вказівний пристрій переміщено на елемент, до якого підключено оброблювач.';
row7.append(row7_info1, row7_info2, row7_info3);

//Data for eighth row
const row8 = document.createElement('tr');
const row8_info1 = document.createElement('td');
row8_info1.innerHTML = '7.';
const row8_info2 = document.createElement('td');
row8_info2.innerHTML = 'mouseleave (en-US)';
const row8_info3 = document.createElement('td');
row8_info3.innerHTML = 'Вказівний пристрій переміщається від елемента, до якого підключено оброблювач.';
row8.append(row8_info1, row8_info2, row8_info3);

//Data for ninth row
const row9 = document.createElement('tr');
const row9_info1 = document.createElement('td');
row9_info1.innerHTML = '8.';
const row9_info2 = document.createElement('td');
row9_info2.innerHTML = 'mousemove (en-US)';
const row9_info3 = document.createElement('td');
row9_info3.innerHTML = 'Вказівний пристрій переміщається по елементу. (Відбувається безперервно під час руху миші.)';
row9.append(row9_info1, row9_info2, row9_info3);

//Data for tenth row
const row10 = document.createElement('tr');
const row10_info1 = document.createElement('td');
row10_info1.innerHTML = '9.';
const row10_info2 = document.createElement('td');
row10_info2.innerHTML = 'mouseover (en-US)';
const row10_info3 = document.createElement('td');
row10_info3.innerHTML = 'Вказівний пристрій переміщується на елемент, до якого підключений обробник, або на один із дочірніх елементів.';
row10.append(row10_info1, row10_info2, row10_info3);

//Data for eleventh row
const row11 = document.createElement('tr');
const row11_info1 = document.createElement('td');
row11_info1.innerHTML = '10.';
const row11_info2 = document.createElement('td');
row11_info2.innerHTML = 'mouseout (en-US)';
const row11_info3 = document.createElement('td');
row11_info3.innerHTML = 'Вказівний пристрій переміщається від елемента, до якого підключений обробник, або від одного з дочірніх елементів.';
row11.append(row11_info1, row11_info2, row11_info3);

//Data for twelfth row
const row12 = document.createElement('tr');
const row12_info1 = document.createElement('td');
row12_info1.innerHTML = '11.';
const row12_info2 = document.createElement('td');
row12_info2.innerHTML = 'mouseup (en-US)';
const row12_info3 = document.createElement('td');
row12_info3.innerHTML = 'Кнопка  вказівного пристрою відпускається над елементом.';
row12.append(row12_info1, row12_info2, row12_info3);

//Data for thirteenth row
const row13 = document.createElement('tr');
const row13_info1 = document.createElement('td');
row13_info1.innerHTML = '12.';
const row13_info2 = document.createElement('td');
row13_info2.innerHTML = 'pointerlockchange (en-US)';
const row13_info3 = document.createElement('td');
row13_info3.innerHTML = 'Вказівник було заблоковано або відпущено.';
row13.append(row13_info1, row13_info2, row13_info3);

//Data for fourteenth  row
const row14 = document.createElement('tr');
const row14_info1 = document.createElement('td');
row14_info1.innerHTML = '13.';
const row14_info2 = document.createElement('td');
row14_info2.innerHTML = 'pointerlockerror (en-US)';
const row14_info3 = document.createElement('td');
row14_info3.innerHTML = 'Вказівник було заблоковано з технічних причин або через відмову у дозволі.';
row14.append(row14_info1, row14_info2, row14_info3);

//Data for fifteenth row
const row15 = document.createElement('tr');
const row15_info1 = document.createElement('td');
row15_info1.innerHTML = '14.';
const row15_info2 = document.createElement('td');
row15_info2.innerHTML = 'select (en-US)';
const row15_info3 = document.createElement('td');
row15_info3.innerHTML = 'Вибирається текст.';
row15.append(row15_info1, row15_info2, row15_info3);

//Data for sixteenth row
const row16 = document.createElement('tr');
const row16_info1 = document.createElement('td');
row16_info1.innerHTML = '15.';
const row16_info2 = document.createElement('td');
row16_info2.innerHTML = 'wheel (en-US)';
const row16_info3 = document.createElement('td');
row16_info3.innerHTML = 'Колесо вказівного пристрою обертається у будь-якому напрямку';
row16.append(row16_info1, row16_info2, row16_info3);

tbody.append(row2, row3, row4, row5, row6, row7, row8, row9, row10, row11, row12, row13, row14, row15, row16);

//sort data in the table
let rows = [...tbody.querySelectorAll("tr")];
let columns = [...thead.querySelectorAll("th")];
for (let e of columns) e.onclick = th_click;

function th_click() {
    let i = columns.indexOf(this);
   if (i === 0) {
    rows.sort((a, b) => a.cells[i].textContent - b.cells[i].textContent)
   } else {
    rows.sort((a, b) => a.cells[i].textContent.localeCompare(b.cells[i].textContent));
   }
    for (let e of rows) tbody.appendChild(e);
};

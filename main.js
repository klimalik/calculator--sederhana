// JUDUL: KALKULATOR ZAMAN NOW

const area = document.querySelector('.area');
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator');
const hasil = document.querySelector('.hasil');
const clear = document.querySelector('.clear');

// + Menampilkan semua elemen di area.
const arrNumber = Array.from(number);
const tampilAngka = () => {
    arrNumber.map(n => {
        n.addEventListener('click', () => {
            let a = area.value += n.value;
        })
    })
}
tampilAngka();

const arrOperator = Array.from(operator);
const tampilOperator = () => {
    return arrOperator.map(a => {
        a.addEventListener('click', () => {
            let b = area.value += a.innerHTML;
            console.log(b);
        })
    })
}
tampilOperator();


// + Menjumlahkan 
hasil.addEventListener('click', () => {
    let hsl = eval(area.value);
    area.value = hsl;
    console.log(hsl);
})

// + fungsi clear
clear.addEventListener('click', () => {
    area.value = '';
})


























// arrOperator.map(a => {
//     a.addEventListener('click', () => {
//         let b = area.value += a.innerHTML;
//         console.log(b);
//     })
// })

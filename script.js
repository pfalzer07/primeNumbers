'use strict';

const buttonEl = document.getElementById('btn');
const fromEl = document.getElementById('from');
const toEl = document.getElementById('to');
const mainEl = document.getElementById('main');

buttonEl.addEventListener('click', function () {
  mainEl.innerHTML = '';
  const start = Number(toEl.value);
  const finish = Number(fromEl.value);
  console.log(typeof from, typeof to);

  function isPrime(number) {
    let start = 2;
    while (start <= Math.sqrt(number)) {
      if (number % start++ < 1) return false;
    }
    return number > 1;
  }

  function getPrimes(start, finish) {
    let realStart = start <= finish ? start : finish;
    let realEnd = start > finish ? start : finish;
    let numbers = [];

    for (let current = realStart; current <= realEnd; current++) {
      if (isPrime(current)) {
        numbers.push(current);
      }
    }

    return numbers;
  }

  let primes = [];

  primes = getPrimes(start, finish);

  console.log(primes);
  primes.forEach(function (p) {
    const html = `<p class="element">${p}</p>`;
    mainEl.insertAdjacentHTML('beforeend', html);
  });
});

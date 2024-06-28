// const exchangeBtn = document.getElementById('exchange-btn');
let requestedCurrncy = document.getElementById('request-currency');
let responsedCurrency = document.getElementById('responsed-currency');
const outputOfCurrency = document.getElementById('res');
const inputOfCurrency = document.getElementById('req');
const swapBtn = document.getElementById('swap-btn');

async function sendRequestForCurrncy() {
  const reqCurrncy = requestedCurrncy.value;
  const resCurrency = responsedCurrency.value;
  const request = await fetch(
    `https://v6.exchangerate-api.com/v6/1f5fa35e0aa344d4006c0162/latest/${reqCurrncy}`
  );
  const data = await request.json();
  const output = data['conversion_rates'][resCurrency];
  const numberOfInput = inputOfCurrency.value;
  outputOfCurrency.value = output * numberOfInput;
}

function swapCurrncies() {
  const reqCurrncy = requestedCurrncy.value;
  const wantedCurrency = responsedCurrency.value;

  requestedCurrncy.value = wantedCurrency;
  responsedCurrency.value = reqCurrncy;

  sendRequestForCurrncy();
}

swapBtn.addEventListener('click', swapCurrncies);
requestedCurrncy.addEventListener('click', sendRequestForCurrncy);
responsedCurrency.addEventListener('click', sendRequestForCurrncy);
// exchangeBtn.addEventListener('click', sendRequestForCurrncy);

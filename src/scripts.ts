const form = document.querySelector('form') as HTMLFormElement;
const amount = document.getElementById('amount') as HTMLInputElement;
const currency = document.getElementById('currency') as HTMLSelectElement;

if (form && amount && currency) {
  // making input amount to receive only numbers:
  amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
  });

  form.onsubmit = (event) => {
    event.preventDefault();
    console.log(currency.value);
  };
} else {
  console.error('Um ou mais elementos não foram encontrados.');
}

// Currency price of the day
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Getting form elements:
const form = document.querySelector('form') as HTMLFormElement;
const amount = document.getElementById('amount') as HTMLInputElement;
const currency = document.getElementById('currency') as HTMLSelectElement;
const footer = document.querySelector('main footer') as HTMLElement;
const description = document.getElementById('description') as HTMLSpanElement;

if (form && amount && currency) {
  // making input amount to receive only numbers:
  amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
  });

  form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
      case 'USD':
        convertCurrency(amount.value, USD, 'US$');
        break;
      case 'EUR':
        convertCurrency(amount.value, EUR, '€');
        break;
      case 'GBP':
        convertCurrency(amount.value, GBP, '£');
        break;
    }
  };
} else {
  console.error('Um ou mais elementos não foram encontrados.');
}

function convertCurrency(amount: string, price: number, symbol: string) {
  try {
    description.textContent = `${symbol} 1 = ${price}`;
    // Add the class that shows footer
    footer.classList.add('show-result');
  } catch (error) {
    // Remove the class that shows footer
    footer.classList.remove('show-result');
    console.log(error);
    alert('Não foi possível converter. Tente novamente mais tarde.');
  }
}

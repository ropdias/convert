// Currency price of the day
const USD = 6.15
const EUR = 6.47
const GBP = 7.8

// Getting form elements:
const form = document.querySelector('form') as HTMLFormElement
const amount = document.getElementById('amount') as HTMLInputElement
const currency = document.getElementById('currency') as HTMLSelectElement
const footer = document.querySelector('main footer') as HTMLElement
const description = document.getElementById('description') as HTMLSpanElement
const result = document.getElementById('result') as HTMLHeadingElement

if (form && amount && currency) {
  // making input amount to receive only numbers:
  amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, '')
  })

  form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
      case 'USD':
        convertCurrency(amount.value, USD, 'US$')
        break
      case 'EUR':
        convertCurrency(amount.value, EUR, '€')
        break
      case 'GBP':
        convertCurrency(amount.value, GBP, '£')
        break
    }
  }
} else {
  console.error('Um ou mais elementos não foram encontrados.')
}

function convertCurrency(amount: string, price: number, symbol: string) {
  try {
    // Showing selected currency price
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    const total = Number(amount) * price

    if (isNaN(total)) {
      return alert('Por favor, digite o valor corretamente para converter.')
    }

    result.textContent = `${formatCurrencyBRL(total).replace('R$', '')} Reais`

    // Add the class that shows footer
    footer.classList.add('show-result')
  } catch (error) {
    // Remove the class that shows footer
    footer.classList.remove('show-result')
    console.log(error)
    alert('Não foi possível converter. Tente novamente mais tarde.')
  }
}

function formatCurrencyBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

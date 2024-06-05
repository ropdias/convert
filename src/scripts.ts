const amount = document.getElementById('amount') as HTMLInputElement;

// making input amount to receive only numbers:
if (amount) {
  amount.addEventListener('input', () => {
    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, '');
  });
}

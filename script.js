document.addEventListener('DOMContentLoaded', () => {
  const billInput = document.getElementById('bill');
  const calculateBtn = document.getElementById('calculate');
  const resultBox = document.getElementById('result');
  const tipEl = document.getElementById('tip');
  const totalEl = document.getElementById('total');
  const thankEl = document.getElementById('thankyou');

  function formatMoney(num){
    return Number(num).toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2});
  }

  calculateBtn.addEventListener('click', () => {
    const billValue = parseFloat(billInput.value);
    if (isNaN(billValue) || billValue < 0){
      tipEl.textContent = 'Please enter a valid bill amount.';
      totalEl.textContent = '';
      thankEl.style.display = 'none';
      resultBox.hidden = false;
      return;
    }

    const tip = billValue * 0.10; // fixed 10% tip
    const total = billValue + tip;

    tipEl.textContent = `Tip (10%): $${formatMoney(tip)}`;
    totalEl.textContent = `Total: $${formatMoney(total)}`;

    // show the thank you message
    thankEl.textContent = 'Thank you';
    thankEl.style.display = 'block';

    resultBox.hidden = false;
  });

  // Allow Enter to calculate
  billInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calculateBtn.click();
  });
});
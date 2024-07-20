
document.addEventListener('DOMContentLoaded', function () {
    const typewriterText = 'Domestic Money Transfer';
    let index = 0;
    const speed = 100; // Speed of typing in milliseconds
  
    function typeWriter() {
      if (index < typewriterText.length) {
        document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  
  const form = document.getElementById('transfer-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const amount = document.getElementById('amount').value;
  const recipient = document.getElementById('recipient').value;
  const recipient_ID = document.getElementById('recipient ID').value;
  const customer_transaction_ID = document.getElementById('customer transaction ID').value;

  try {
    // Step 1: Call the fraud detection API
    const fraudResponse = await fetch('https://your-backend-api/fraud-detection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, recipient, source })
    });
    
    const fraudData = await fraudResponse.json();
    
    // Step 2: Check if the transaction is flagged as fraud
    if (fraudData.isFraud === 1) {
      alert('Fraudulent transaction detected! Please check the details.');
      return; // Exit if fraud is detected
    }

    // Step 3: Proceed with the transfer if not fraud
    const transferResponse = await fetch('/transfer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, recipient, source })
    });

    const transferData = await transferResponse.json();
    
    if (transferData.message === 'Transfer successful') {
      alert('Transfer successful!');
    } else {
      alert('Error: ' + transferData.error);
    }
    
  } catch (err) {
    console.error(err);
    alert('Error: Unable to complete transfer');
  }
});
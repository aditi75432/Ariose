import React, { useState } from 'react'
import Head from './head/Head'
import Calender from './calender/Calender'
import './CSS/eventspg.css'
//import Events from './events/Events'

const EventsPg = () => {
    const [eventid, seteventId]=useState(1);
    //console.log(eventid)
  return (
    <div className='events_pg'>
        <div className="left_container">
            <div className="header_Container">
                <Head />
            </div>
            <div className="calender_container">
                <Calender eventid={seteventId}/>
            </div>
            {/* <div className="events_container">
                <Events />
            </div> */}
        </div>
        <div className="right_container">
            {/* <EventCol eventId={eventid} seteventId={seteventId} /> */}
            <Eventcol eventId={eventid} seteventId={seteventId}/>
        </div>
        
        
    </div>
  )
}

export default EventsPg

// import React, { useState } from 'react'
// import './Login/transaction.css'
// document.addEventListener('DOMContentLoaded', function () {
//     const typewriterText = 'Domestic Money Transfer';
//     let index = 0;
//     const speed = 100; // Speed of typing in milliseconds
  
//     function typeWriter() {
//       if (index < typewriterText.length) {
//         document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
//         index++;
//         setTimeout(typeWriter, speed);
//       }
//     }
  
//     typeWriter();
//   });
  
//   const form = document.getElementById('transfer-form');

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const amount = document.getElementById('amount').value;
//   const recipient = document.getElementById('recipient').value;
//   const recipient_ID = document.getElementById('recipient ID').value;
//   const customer_transaction_ID = document.getElementById('customer transaction ID').value;

//   try {
//     // Step 1: Call the fraud detection API
//     const fraudResponse = await fetch('https://your-backend-api/fraud-detection', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ amount, recipient, source })
//     });
    
//     const fraudData = await fraudResponse.json();
    
//     // Step 2: Check if the transaction is flagged as fraud
//     if (fraudData.isFraud === 1) {
//       alert('Fraudulent transaction detected! Please check the details.');
//       return; // Exit if fraud is detected
//     }

//     // Step 3: Proceed with the transfer if not fraud
//     const transferResponse = await fetch('/transfer', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ amount, recipient, source })
//     });

//     const transferData = await transferResponse.json();
    
//     if (transferData.message === 'Transfer successful') {
//       alert('Transfer successful!');
//     } else {
//       alert('Error: ' + transferData.error);
//     }
    
//   } catch (err) {
//     console.error(err);
//     alert('Error: Unable to complete transfer');
//   }
// });

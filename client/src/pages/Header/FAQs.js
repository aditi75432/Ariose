import React from 'react';
import './FAQs.css'; 

import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function FAQs() {
  return (
    <>
    <h1 className="divider line glow" contenteditable>Frequently Asked Questions</h1>
    <MDBContainer className="mt-5" style={{maxWidth: '1300px'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="How does ARIOSE detect fraud?" >
        ARIOSE monitors transactions in real-time and uses sophisticated machine learning models to analyze patterns and detect anomalies that may indicate fraudulent activity. If suspicious activity is detected, the system flags it immediately for further investigation.

        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="What role does blockchain technology play in ARIOSE?">
        Blockchain technology ensures the security and transparency of each transaction by recording it on a decentralized ledger. This makes all transaction records immutable and tamper-proof, providing an additional layer of security.


        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle=" Who can benefit from using ARIOSE?">
        ARIOSE is beneficial for anyone who wants to ensure the security of their credit card transactions. This includes individuals, businesses, and financial institutions looking to protect their finances and maintain trust with their customers.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="How does ARIOSE ensure the accuracy of fraud detection?">
        ARIOSE's machine learning models are trained on vast datasets, enabling them to identify even the most subtle signs of fraudulent activity. The system continuously updates and improves its algorithms to enhance detection accuracy and reduce false positives.

        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="Is my data secure with ARIOSE?">
        Yes, your data is secure with ARIOSE. We use advanced encryption methods and blockchain technology to ensure that all transaction data is protected from unauthorized access and tampering.

        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="How can I get started with ARIOSE?">
        Getting started with ARIOSE is easy. Simply sign up on our website, integrate our platform with your existing financial system, and start monitoring your transactions for fraud in real-time.


        </MDBAccordionItem>
        <MDBAccordionItem collapseId={7} headerTitle="Can ARIOSE integrate with my existing financial systems?
">
        Yes, ARIOSE is designed to seamlessly integrate with various financial systems. Our platform provides comprehensive oversight and surveillance without disrupting your current operations.


        </MDBAccordionItem>
        
      </MDBAccordion>
    </MDBContainer>
    </>
  );
}

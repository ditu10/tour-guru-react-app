const commonFAQ = [
  {
    title: "What is a TripGuru Shared Experience?",
    content: "",
    details: [
      "Unique itineraries crafted alongside famous travel bloggers and local guides",
      "Small groups only - no buses, no crowds, 5 travellers maximum",
      "Solo travellers don’t pay more - flat rates per person",
    ],
  },
  {
    title: "What should I do if the driver has not shown up on time?",
    content:
      "No worries, please contact the number found in booking confirmation email under the “contact tour operator/guide” section for updates.",
    details: [],
  },
  {
    title: "Who should I contact if I need to change my booking information?",
    content:
      "For changes to your pick-up address, phone number or email, please let your local tour operator know. Their information can be found in booking confirmation email under “contact tour operator/guide”.",
    details: [],
  },
  {
    title: "What should I do if I want to change dates?",
    content:
      "Contact TripGuru. Our email: {{email}} , Hotline: {{hotline}}, WhatsApp(chat only): {{whatsApp}}, or talk to us through the online chat. Please note that last minute changes may not be accepted due to late notice.",
    details: [],
  },
];

const bookingProcessFAQ = [
  {
    title: "How can I book a tour?",
    content:
      "Find your preferred tour, click ‘see dates’ button, select your tour date then number of people, leave your contact information, continue to the payment page, and get your booking confirmation email. Start the adventure!",
    details: [],
  },
  {
    title: "What does ‘Instant Confirmation’ mean when booking a tour?",
    content:
      "Some of our tours are marked ‘Instant Confirmation’, which means you will be able to receive an instant confirmation of your booking via the email address you registered with TripGuru. You’ll also be able to see your confirmed booking, with all the necessary details, on your personal booking dashboard.",
    details: [],
  },
  {
    title: "What is the longest that a tour would take to be confirmed?",
    content:
      "Some of our tours are marked ‘24 Hour Confirmation’, which means that the Tour Operator providing your activity has a period of 24 hours within which accept or reject your booking, depending on their availability. If the Tour Operator accepts your booking, only then will your credit card be processed. If the Tour Operator rejects it, your credit card will not be processed at all.",
    details: [],
  },
  {
    title: "What currencies does TripGuru support?",
    content:
      "At the moment we only support transactions in U.S. dollars. If you’re from another area, your credit card should automatically convert the charges into your local currency.",
    details: [],
  },
  {
    title: "How do I pay for an Activity?",
    content: "You can pay for a TripGuru activity by most major credit cards.",
    details: [],
  },
  {
    title: "Is it possible to pay for an activity in cash or in person?",
    content:
      "Unfortunately, TripGuru does not support payments in cash at the moment and our physical offices do not handle ticketing and booking.",
    details: [],
  },
];

const cancellationFAQ = [
  {
    title: "Can I cancel my tour?",
    content:
      "Yes, please contact TripGuru and we will offer you final confirmation about the cancellation. Our email: {{email}}. Please note that last minute changes may not be accepted due to late notice.",
    details: [],
  },
  {
    title: "Can I get a refund for the cancellation?",
    content:
      "Please contact our support team directly if you need to cancel your tour. Check on the tour page since different cancellation policies apply to different tours. Our team will reply you with the final cancellation confirmation.",
    details: [],
  },
  {
    title: "How long it takes to get my refund?",
    content:
      "Once you get confirmation of  cancellation from our team, we will proceed refund within 2 business days, the refund will go back to the platform you originally used to pay to us. You can expect to see the refund reflect on bank statement in approximately 10 business days. For some banks, this process may take up to 30 days. Should you still not have received your refund in your account within these timeframes, please contact our support team directly.",
    details: [],
  },
];

export const FAQ = { cancellationFAQ, commonFAQ, bookingProcessFAQ };

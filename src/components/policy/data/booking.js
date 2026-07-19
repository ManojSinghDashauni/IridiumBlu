const booking = {
    title: "Booking & Payment Policy",
  
    description:
      "This Booking & Payment Policy explains the terms governing reservations, advance payments, check-in requirements, cancellations, refunds, and payment procedures at IRIDIUM BLU HOTEL.",
  
    effectiveDate: "12 January 2026",
  
    updated: "19 July 2026",
  
    sections: [
  
      {
        id: "introduction",
  
        title: "Introduction",
  
        paragraphs: [
          "This Booking & Payment Policy governs reservations, advance payments, check-in requirements, and payment procedures for stays at IRIDIUM BLU HOTEL (A Unit of SYDRUV LLP).",

          <>
          By making a booking through {" "}
          <a
            href="https://iridiumblu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline hover:opacity-80"
          >
            www.iridiumblu.com
          </a>, phone, WhatsApp, or authorized booking partners, guests agree to the terms outlined in this policy.
        </>
        ]
      },
  
      {
        id: "reservation-confirmation",
  
        title: "Reservation Confirmation",
  
        paragraphs: [
          "A reservation is considered confirmed only after all required conditions have been fulfilled."
        ],
  
        list: [
          "Required guest details have been provided.",
          "The required advance payment has been received.",
          "Payment has been successfully credited to the hotel's account.",
          "An official booking confirmation has been issued."
        ],
  
        note:
          "Pending, failed, reversed, or unsuccessful payments do not confirm a reservation. Guests are responsible for resolving payment issues with their bank or payment provider."
      },
  
      {
        id: "advance-payment",
  
        title: "Advance Payment Policy",
  
        table: [
          {
            label: "Advance Payment",
            value: "30% of total booking amount"
          },
          {
            label: "Remaining Balance",
            value: "Before Check-In"
          }
        ],
  
        note:
          "The hotel reserves the right to deny check-in if the required payment has not been completed."
      },
  
      {
        id: "checkin-checkout",
  
        title: "Check-In & Check-Out",
  
        table: [
          {
            label: "Check-In",
            value: "01:00 PM"
          },
          {
            label: "Check-Out",
            value: "10:30 AM"
          },
          {
            label: "Early Check-In",
            value: "Subject to availability and applicable charges"
          },
          {
            label: "Late Check-Out",
            value: "Subject to availability and applicable charges"
          }
        ]
      },
  
      {
        id: "identification",
  
        title: "Guest Identification",
  
        paragraphs: [
          "All guests must provide valid identification documents during check-in."
        ],
  
        list: [
          "Indian Guests: Valid Government-issued ID",
          "Foreign Guests: Valid Passport and Visa"
        ],
  
        note:
          "Failure to provide valid identification may result in refusal of check-in."
      },
  
      {
        id: "eligibility",
  
        title: "Guest Eligibility",
  
        paragraphs: [
          "IRIDIUM BLU HOTEL is a family-friendly property."
        ],
  
        list: [
          "Unmarried couples are not permitted.",
          "Illegal activities are strictly prohibited.",
          "Consumption or possession of prohibited substances is not allowed."
        ],
  
        note:
          "The hotel reserves the right to refuse admission or discontinue the stay of guests violating hotel policies or applicable laws."
      },
  
      {
        id: "child-policy",
  
        title: "Child Policy",
  
        table: [
          {
            label: "Children (0–5 Years)",
            value: "Complimentary Stay"
          },
          {
            label: "Children (6+ Years)",
            value: "Applicable charges as per hotel policy"
          }
        ]
      },
  
      {
        id: "extra-bed",
  
        title: "Extra Bed Policy",
  
        table: [
          {
            label: "Extra Bed Charge",
            value: "₹1,000 per bed"
          },
          {
            label: "Availability",
            value: "Subject to availability"
          },
          {
            label: "Request",
            value: "Prior request preferred"
          }
        ]
      },
  
      {
        id: "cancellation-refund",
  
        title: "Cancellation & Refund",
  
        table: [
          {
            label: "More than 3 Days Before Check-In",
            value: "100% Refund"
          },
          {
            label: "Within 3 Days of Check-In",
            value: "Non-Refundable"
          },
          {
            label: "No Show",
            value: "Non-Refundable"
          }
        ]
      },
  
      {
        id: "refund-processing",
  
        title: "Refund Processing",
  
        paragraphs: [
          "Approved refunds are processed within 7–10 working days."
        ],
  
        list: [
          "Refunds are sent only to the original payment source.",
          "Processing time may vary depending on banks or payment providers."
        ]
      },
  
      {
        id: "payment-responsibility",
  
        title: "Payment Responsibility",
  
        list: [
          "Provide correct payment details.",
          "Ensure transactions are completed successfully.",
          "Complete payments within the required timeline."
        ],
  
        note:
          "The hotel is not responsible for delays caused by banks, payment gateways, technical failures, or incorrect payment information."
      },
  
      {
        id: "visitor-policy",
  
        title: "Visitor Policy",
  
        list: [
          "Visitors must provide valid identification.",
          "Visitors must register at reception.",
          "Visitor access may be restricted for security and operational reasons."
        ]
      },
  
      {
        id: "outside-food",
  
        title: "Outside Food Policy",
  
        paragraphs: [
          "Outside food is not permitted inside the hotel premises."
        ],
  
        note:
          "Exceptions may be allowed only for legal or medical reasons with hotel approval."
      },
  
      {
        id: "parking",
  
        title: "Parking Policy",
  
        paragraphs: [
          "Complimentary parking is available for hotel guests."
        ],
  
        note:
          "Parking is entirely at the owner's risk. The hotel is not responsible for loss, theft, damage, or accidents involving parked vehicles."
      },
  
      {
        id: "guest-damages",
  
        title: "Guest Responsibility for Damages",
  
        paragraphs: [
          "Guests are responsible for any damage caused to hotel property, furniture, equipment, or facilities during their stay."
        ],
  
        note:
          "Repair or replacement costs may be recovered from the responsible guest."
      },
  
      {
        id: "safety-security",
  
        title: "Safety & Security",
  
        list: [
          "CCTV surveillance in common areas.",
          "Follow lift safety instructions.",
          "Comply with emergency procedures.",
          "Follow hotel guidelines and government regulations."
        ]
      },
  
      {
        id: "force-majeure",
  
        title: "Force Majeure",
  
        paragraphs: [
          "The hotel is not responsible for delays, cancellations, or inability to provide services caused by circumstances beyond reasonable control."
        ],
  
        list: [
          "Weather conditions",
          "Landslides",
          "Road closures",
          "Government restrictions",
          "Natural disasters",
          "Other force majeure events"
        ]
      },
  
      {
        id: "policy-updates",
  
        title: "Policy Updates",
  
        paragraphs: [
          "IRIDIUM BLU HOTEL reserves the right to modify this Booking & Payment Policy at any time.",
  
          <>
          The latest version will always be available on{" "}
          <a
            href="https://iridiumblu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline hover:opacity-80"
          >
            www.iridiumblu.com
          </a>.
        </>
        ]
      },
  
      {
        id: "contact",
  
        title: "Contact Information",
  
        table: [
          {
            label: "Hotel",
            value: "IRIDIUM BLU HOTEL"
          },
          {
            label: "Reservations",
            value: "+91 77788 83561"
          },
          {
            label: "WhatsApp",
            value: "+91 77788 83563"
          },
          {
            label: "Email",
            value: "resv@iridiumblu.com"
          },
          {
            label: "Website",
            value:  <a
            href="https://iridiumblu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline hover:opacity-80"
          >
            www.iridiumblu.com
          </a>
          },
          {
            label: "Hotel Address",
            value: "Kainchi Dham, District Nainital, Uttarakhand, India"
          }
        ]
      }
  
    ]
  };
  
  export default booking;
// Registration data — Source: Official MVB@2047 Brochure
// DO NOT modify fees or bank details without organizer confirmation

export const registrationFees = [
  {
    id: 1,
    category: 'Delegates (Academics & Research Organization)',
    indianFee: 7000,
    foreignFee: 150,
    currency: { indian: 'INR', foreign: 'USD' },
    note: 'For academic researchers, faculty, and research organization professionals',
  },
  {
    id: 2,
    category: 'Students / Research Scholars',
    indianFee: 3000,
    foreignFee: 50,
    currency: { indian: 'INR', foreign: 'USD' },
    note: 'For enrolled students and research scholars',
    highlighted: true,
  },
  {
    id: 3,
    category: 'Delegates (Industry / Govt. Agency)',
    indianFee: 10000,
    foreignFee: 200,
    currency: { indian: 'INR', foreign: 'USD' },
    note: 'For industry professionals and government agency representatives',
  },
];

export const registrationNotes = [
  'Registration fees are excluding GST@18%',
  'Registration includes conference kit, meals, and access to all sessions',
  'Payment must be made via bank transfer to the account below',
];

// Bank Details — Source: Official Brochure
export const bankDetails = {
  accountName: 'IIT ISM CEP ACCOUNT',
  bankName: 'Canara Bank',
  branchName: 'Saraidhela Branch, Dhanbad',
  accountNumber: '110261358281',
  ifsc: 'CNRB0000986',
  micr: '826015003',
  gstin: '20AAAAI0686D1ZA',
};

// Registration form fields — based on Official MVB@2047 Registration Form (brochure screenshot)
export const registrationFormFields = [
  {
    id: 'name',
    label: 'Name (in block letters)',
    type: 'text',
    required: true,
    placeholder: 'Full name in block letters',
    fieldNumber: 1,
  },
  {
    id: 'affiliation',
    label: 'Affiliation',
    type: 'text',
    required: true,
    placeholder: 'Institution / Organization name',
    fieldNumber: 2,
  },
  {
    id: 'address',
    label: 'Address',
    type: 'textarea',
    required: true,
    placeholder: 'Full postal address',
    fieldNumber: 3,
  },
  {
    id: 'mobile',
    label: 'Mobile No.',
    type: 'tel',
    required: true,
    placeholder: '+91 XXXXX XXXXX',
    fieldNumber: 4,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'your@email.com',
    fieldNumber: 5,
  },
  {
    id: 'category',
    label: 'Delegate Category',
    type: 'select',
    options: [
      'Delegates (Academics & Research Organization)',
      'Students / Research Scholars',
      'Delegates (Industry / Govt. Agency)',
    ],
    required: true,
    fieldNumber: '6',
  },
  {
    id: 'abstractSubmitted',
    label: 'Abstract Submitted? (Y/N)',
    type: 'select',
    options: ['Yes', 'No'],
    required: true,
    placeholder: 'Have you submitted an abstract?',
    fieldNumber: '6(i)',
    subField: true,
  },
  {
    id: 'authorName',
    label: "Author's Name",
    type: 'text',
    required: false,
    placeholder: "Author's full name (if abstract submitted)",
    fieldNumber: '6(ii)',
    subField: true,
  },
  {
    id: 'abstractTitle',
    label: 'Title of the Abstract',
    type: 'text',
    required: false,
    placeholder: 'Full title of your abstract / paper',
    fieldNumber: '6(iii)',
    subField: true,
  },
  {
    id: 'ddUtrNo',
    label: 'Demand Draft / UTR No.',
    type: 'text',
    required: true,
    placeholder: 'DD number or bank transaction UTR',
    fieldNumber: '7',
  },
  {
    id: 'paymentDate',
    label: 'Payment Date',
    type: 'date',
    required: true,
    fieldNumber: '7',
  },
  {
    id: 'amount',
    label: 'Amount Paid (INR / USD)',
    type: 'text',
    required: true,
    placeholder: 'e.g., INR 7000 (+ 18% GST)',
    fieldNumber: '7',
  },
  {
    id: 'additionalInfo',
    label: 'Additional Information, if any',
    type: 'textarea',
    required: false,
    placeholder: 'Any additional details or requirements',
    fieldNumber: 8,
  },
];

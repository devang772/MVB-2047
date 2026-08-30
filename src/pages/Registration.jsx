import { useState, useEffect } from 'react';
import { CreditCard, Building2, CheckCircle, AlertCircle, Copy, FileText, QrCode, Download, Database, Table, Printer, Mail } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import SectionHeader from '../components/SectionHeader';
import PricingTable from '../components/PricingTable';
import ScrollReveal from '../components/ScrollReveal';
import qrCodeImg from '../assets/QR.png';
import ismLogoWhite from '../assets/ism-logo-white.png';
import centenaryLogo from '../assets/centenry_logo.png';
import { registrationFees, bankDetails, registrationNotes } from '../data/registration';

/* ── Email URL Generator (Gmail Compose & Mailto) ── */
function getEmailUrls(record, ref) {
  if (!record) return { gmailUrl: '#', mailtoUrl: '#' };
  const to = 'mvb_2047@iitism.ac.in';
  const subject = `MVB@2047 Registration Payment Proof - ${record.name || 'Participant'} (${ref || 'Receipt'})`;
  const body = `Dear Organizing Secretariat,\n\nPlease find attached my payment proof (UTR / Transaction screenshot) for the MVB@2047 Conference registration.\n\nRegistration Details:\n----------------------------------------\nReceipt Ref No: ${ref || 'N/A'}\nFull Name: ${record.name || ''}\nAffiliation: ${record.affiliation || ''}\nDelegate Category: ${record.category || ''}\nMobile: ${record.mobile || ''}\nEmail: ${record.email || ''}\n\nPayment Information:\n----------------------------------------\nUTR / DD / Transaction No: ${record.ddUtrNo || ''}\nPayment Date: ${record.paymentDate || ''}\nAmount Paid: ₹ ${record.amount || ''}\n\nNote: I have attached my downloaded PDF receipt and payment screenshot to this email.\n\nRegards,\n${record.name || ''}`;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const mailtoUrl = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return { gmailUrl, mailtoUrl };
}

/* ── PDF Receipt Generator ── */
async function generatePDFReceipt(data, receiptRef) {
  const container = document.getElementById('receipt-pdf-template-wrapper');
  if (!container) return;

  container.style.display = 'block';
  container.style.visibility = 'visible';
  container.style.position = 'absolute';
  container.style.top = '0';
  container.style.left = '0';
  container.style.zIndex = '99999';

  try {
    const target = document.getElementById('receipt-pdf-template');
    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(`MVB2047_Registration_Receipt_${(data.name || 'Participant').replace(/\s+/g, '_')}.pdf`);
  } catch (err) {
    console.error('PDF generation error:', err);
    alert('PDF Generation Error: ' + (err.message || err.toString()));
  } finally {
    container.style.display = 'none';
    container.style.visibility = 'hidden';
  }
}

/* ── Copy-to-clipboard row ── */
function BankDetailRow({ label, value }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 gap-4">
      <div>
        <p className="text-slate-500 text-xs font-medium">{label}</p>
        <p className="font-bold text-[#0f1e3c] text-sm mt-0.5 break-all">{value}</p>
      </div>
      <button
        onClick={handleCopy}
        className="flex-shrink-0 p-1.5 rounded-md hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors"
        aria-label={`Copy ${label}`}
        title={`Copy ${label}`}
      >
        {copied
          ? <CheckCircle size={15} className="text-green-500" />
          : <Copy size={15} />}
      </button>
    </div>
  );
}

/* ── Excel & Database Helper Functions ── */
function exportToExcel(data, fileName = 'MVB2047_Registration_Details.xlsx') {
  const formattedData = [
    {
      'Full Name': data.name || '',
      'Affiliation / Organization': data.affiliation || '',
      'Postal Address': data.address || '',
      'Mobile Number': data.mobile || '',
      'Email Address': data.email || '',
      'Registration Category': data.category || '',
      'Abstract Submitted': data.abstractSubmitted || '',
      'UTR / DD / Transaction No.': data.ddUtrNo || '',
      'Payment Date': data.paymentDate || '',
      'Amount Paid (₹ / $)': data.amount || '',
      'Submission Timestamp': data.timestamp || new Date().toLocaleString(),
    },
  ];

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Registration');
  XLSX.writeFile(workbook, fileName);
}

function exportMasterDatabaseToExcel() {
  const existing = JSON.parse(localStorage.getItem('mvb_registrations_database') || '[]');
  if (existing.length === 0) {
    alert('No registration records found in database yet.');
    return;
  }
  const formattedRecords = existing.map((data, index) => ({
    'S.No': index + 1,
    'Full Name': data.name || '',
    'Affiliation / Organization': data.affiliation || '',
    'Postal Address': data.address || '',
    'Mobile Number': data.mobile || '',
    'Email Address': data.email || '',
    'Registration Category': data.category || '',
    'Abstract Submitted': data.abstractSubmitted || '',
    'UTR / DD / Transaction No.': data.ddUtrNo || '',
    'Payment Date': data.paymentDate || '',
    'Amount Paid': data.amount || '',
    'Submission Date': data.timestamp || '',
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedRecords);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'All Registrations');
  XLSX.writeFile(workbook, `MVB2047_Master_Registrations_Database_${new Date().toISOString().slice(0, 10)}.xlsx`);
}

/* ── Official Printable Receipt Component (Pure Hex Inline Styles for html2canvas) ── */
function RegistrationReceiptTemplate({ record, receiptRef }) {
  if (!record) return null;

  const tableHeaderStyle = { backgroundColor: '#f8fafc', color: '#475569', fontWeight: '700', padding: '10px', width: '33%', borderRight: '1px solid #e2e8f0' };
  const tableCellStyle = { padding: '10px', color: '#0f172a', fontWeight: '600' };

  return (
    <div id="receipt-pdf-template-wrapper" style={{ display: 'none', visibility: 'hidden' }}>
      <div
        id="receipt-pdf-template"
        style={{
          width: '750px',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '32px',
          margin: '0 auto',
          border: '1px solid #cbd5e1',
          borderRadius: '12px',
          fontFamily: 'Arial, sans-serif',
          boxSizing: 'border-box'
        }}
      >
        {/* Header Banner */}
        <div style={{ backgroundColor: '#0f1e3c', color: '#ffffff', padding: '24px', borderRadius: '12px 12px 0 0', borderBottom: '4px solid #d97706', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '8px 12px', borderRadius: '8px' }}>
            <img src={ismLogoWhite} alt="IIT ISM Logo" style={{ height: '56px', width: 'auto', display: 'block' }} />
            <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
            <img src={centenaryLogo} alt="Centenary Logo" style={{ height: '56px', width: 'auto', display: 'block' }} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>Registration Receipt</p>
            <h2 style={{ fontSize: '22px', fontWeight: '800', margin: '4px 0 0 0', color: '#ffffff' }}>MVB @2047</h2>
            <p style={{ fontSize: '11px', color: '#bfdbfe', margin: '2px 0 0 0' }}>3rd – 4th October 2026</p>
          </div>
        </div>

        {/* Sub Header */}
        <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '10px 24px', display: 'flex', itemsCenter: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
          <p style={{ fontWeight: 'bold', color: '#0f172a', margin: 0 }}>International Conference on "Mining for Viksit Bharat 2047"</p>
          <p style={{ fontWeight: '600', color: '#b45309', margin: 0 }}>IIT (ISM) Dhanbad</p>
        </div>

        {/* Receipt Body */}
        <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Meta Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '16px' }}>
            <div>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', fontWeight: 'bold', margin: 0 }}>Receipt Reference No.</p>
              <p style={{ fontFamily: 'monospace', fontWeight: '800', fontSize: '14px', color: '#0f1e3c', margin: '4px 0 0 0' }}>{receiptRef}</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8', fontWeight: 'bold', margin: 0 }}>Issue Date & Time</p>
              <p style={{ fontWeight: '600', fontSize: '12px', color: '#334155', margin: '4px 0 0 0' }}>{record.timestamp}</p>
            </div>
            <div>
              <span style={{ backgroundColor: '#fef3c7', color: '#78350f', fontSize: '11px', fontWeight: '800', padding: '4px 12px', borderRadius: '20px', border: '1px solid #fde68a', textTransform: 'uppercase' }}>
                PROVISIONAL ACKNOWLEDGEMENT
              </span>
            </div>
          </div>

          {/* Participant Info Table */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#0f1e3c', margin: '0 0 8px 0' }}>
              1. Participant Information
            </h4>
            <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'collapse', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <td style={tableHeaderStyle}>Full Name</td>
                  <td style={{ ...tableCellStyle, fontWeight: '800' }}>{record.name}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={tableHeaderStyle}>Affiliation / Organization</td>
                  <td style={tableCellStyle}>{record.affiliation}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <td style={tableHeaderStyle}>Postal Address</td>
                  <td style={tableCellStyle}>{record.address}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={tableHeaderStyle}>Mobile Number</td>
                  <td style={tableCellStyle}>{record.mobile}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <td style={tableHeaderStyle}>Email Address</td>
                  <td style={tableCellStyle}>{record.email}</td>
                </tr>
                <tr>
                  <td style={tableHeaderStyle}>Delegate Category</td>
                  <td style={{ ...tableCellStyle, color: '#b45309', fontWeight: '800' }}>{record.category}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Abstract Info Table */}
          {record.abstractSubmitted === 'Yes' && (
            <div>
              <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#0f1e3c', margin: '0 0 8px 0' }}>
                2. Abstract Submission Details
              </h4>
              <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'collapse', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                    <td style={tableHeaderStyle}>Author Name</td>
                    <td style={tableCellStyle}>{record.authorName || record.name}</td>
                  </tr>
                  <tr>
                    <td style={tableHeaderStyle}>Title of Abstract</td>
                    <td style={tableCellStyle}>{record.abstractTitle || 'N/A'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Payment Info Table */}
          <div>
            <h4 style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#0f1e3c', margin: '0 0 8px 0' }}>
              {record.abstractSubmitted === 'Yes' ? '3.' : '2.'} Payment Details
            </h4>
            <table style={{ width: '100%', fontSize: '12px', borderCollapse: 'collapse', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <td style={tableHeaderStyle}>DD / UTR / Transaction No.</td>
                  <td style={{ ...tableCellStyle, fontFamily: 'monospace', fontWeight: 'bold' }}>{record.ddUtrNo}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={tableHeaderStyle}>Date of Payment</td>
                  <td style={tableCellStyle}>{record.paymentDate}</td>
                </tr>
                <tr style={{ backgroundColor: '#fffbeb' }}>
                  <td style={tableHeaderStyle}>Amount Paid</td>
                  <td style={{ ...tableCellStyle, color: '#92400e', fontWeight: '800', fontSize: '14px' }}>₹ {record.amount}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Verification Box */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '14px', borderRadius: '8px', fontSize: '11px', color: '#334155' }}>
            <p style={{ fontWeight: 'bold', color: '#0f172a', margin: '0 0 4px 0' }}>Secretariat Verification Note:</p>
            <p style={{ margin: 0, lineHeight: '1.5' }}>
              Please email your payment proof (transaction screenshot / UTR slip) along with this receipt to{' '}
              <strong style={{ color: '#0f1e3c' }}>mvb_2047@iitism.ac.in</strong>. Registration will be confirmed by organizers upon verification of the payment credit in the IIT (ISM) CEP Account.
            </p>
          </div>

          {/* Signature / Footer */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontSize: '10px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', margin: 0 }}>Organizing Secretariat</p>
              <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#0f172a', margin: '2px 0 0 0' }}>Department of Mining Engineering</p>
              <p style={{ fontSize: '11px', color: '#64748b', margin: '2px 0 0 0' }}>IIT (ISM) Dhanbad – 826004, Jharkhand, India</p>
              <p style={{ fontSize: '11px', color: '#b45309', fontWeight: '600', margin: '2px 0 0 0' }}>Email: mvb_2047@iitism.ac.in</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ width: '150px', height: '36px', borderBottom: '1px dashed #cbd5e1', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#94a3b8', fontStyle: 'italic' }}>
                [ Computer Generated Receipt ]
              </div>
              <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Authorized Conference Receipt</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Form Field Wrapper Component (Defined outside parent to prevent re-render focus loss) ── */
function Field({ id, label, num, required: req = false, error, children }) {
  return (
    <div data-error={!!error || undefined}>
      <label htmlFor={`reg-${id}`} className="block text-sm font-semibold text-slate-700 mb-1.5">
        {num && <span className="text-slate-400 font-normal mr-1">{num}.</span>}
        {label}
        {req && <span className="text-red-500 ml-0.5" aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-red-600 text-xs mt-1 flex items-center gap-1">
          <AlertCircle size={12} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

/* ── Registration Form ── */
function RegistrationForm() {
  const [formData, setFormData] = useState({
    abstractSubmitted: '',
    category: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [lastRecord, setLastRecord] = useState(null);
  const [receiptRef, setReceiptRef] = useState('');

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Strict input character filtering
    if (name === 'mobile') {
      value = value.replace(/[^\d\s+\-()]/g, '').slice(0, 16);
    } else if (name === 'amount') {
      value = value.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
    } else if (name === 'name') {
      value = value.toUpperCase().replace(/[^A-Z\s.-]/g, '');
    } else if (name === 'authorName') {
      value = value.replace(/[^A-Za-z\s.-]/g, '');
    } else if (name === 'ddUtrNo') {
      value = value.replace(/[^A-Za-z0-9\s-]/g, '');
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    // 1. Name
    if (!formData.name?.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // 2. Affiliation
    if (!formData.affiliation?.trim()) {
      newErrors.affiliation = 'Affiliation / Institution is required';
    }

    // 3. Address
    if (!formData.address?.trim()) {
      newErrors.address = 'Postal address is required';
    }

    // 4. Mobile
    const digitsOnly = (formData.mobile || '').replace(/\D/g, '');
    if (!formData.mobile?.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      newErrors.mobile = 'Enter a valid mobile number (10 to 15 digits)';
    }

    // 5. Email
    if (!formData.email?.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address (e.g. user@domain.com)';
    }

    // 6. Category
    if (!formData.category) {
      newErrors.category = 'Please select a delegate category';
    }

    // 7. Abstract Submitted
    if (!formData.abstractSubmitted) {
      newErrors.abstractSubmitted = 'Please select whether abstract is submitted';
    } else if (formData.abstractSubmitted === 'Yes' && !formData.abstractTitle?.trim()) {
      newErrors.abstractTitle = 'Abstract title is required when Abstract Submitted is Yes';
    }

    // 8. DD / UTR No
    if (!formData.ddUtrNo?.trim()) {
      newErrors.ddUtrNo = 'DD or UTR transaction number is required';
    } else if (formData.ddUtrNo.trim().length < 4) {
      newErrors.ddUtrNo = 'Enter a valid DD/UTR transaction number (min 4 chars)';
    }

    // 9. Payment Date
    if (!formData.paymentDate) {
      newErrors.paymentDate = 'Payment date is required';
    } else {
      const selectedDate = new Date(formData.paymentDate);
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      if (selectedDate > today) {
        newErrors.paymentDate = 'Payment date cannot be in the future';
      }
    }

    // 10. Amount
    if (!formData.amount?.trim()) {
      newErrors.amount = 'Amount paid is required';
    } else if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Enter a valid numeric amount (e.g., 7000)';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstEl = document.querySelector('[data-error="true"]');
      firstEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const submissionRecord = {
      ...formData,
      timestamp: new Date().toLocaleString(),
    };

    // 1. Save to local database
    const existing = JSON.parse(localStorage.getItem('mvb_registrations_database') || '[]');
    existing.push(submissionRecord);
    // 2. Send to Google Sheets Webhook endpoint if configured
    const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';
    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        const formDataParams = new URLSearchParams();
        Object.keys(submissionRecord).forEach((key) => {
          formDataParams.append(key, submissionRecord[key] || '');
        });

        fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formDataParams.toString(),
        }).catch((err) => console.error('Webhook post error:', err));
      } catch (err) {
        console.error('Webhook post error:', err);
      }
    }

    const generatedRef = 'MVB2047-REC-' + Date.now().toString().slice(-6);
    setReceiptRef(generatedRef);
    setLastRecord(submissionRecord);
    setSubmitted(true);
    setTimeout(() => {
      document.getElementById('registration-success-section')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  if (submitted) {
    return (
      <div id="registration-success-section" className="text-center py-16 px-8 max-w-2xl mx-auto scroll-mt-24">
        {/* Offscreen Template for PDF Rendering */}
        <RegistrationReceiptTemplate record={lastRecord} receiptRef={receiptRef} />

        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 shadow-sm" aria-hidden="true">
          <CheckCircle size={38} className="text-green-600" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1e3c] mb-3">
          Registration Recorded Successfully!
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Your registration details have been recorded. Click the button below to download your official registration receipt in PDF format.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {lastRecord && (
            <>
              <button
                onClick={() => generatePDFReceipt(lastRecord, receiptRef)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer hover:scale-105"
              >
                <Download size={18} />
                1. Download Receipt (.pdf)
              </button>

              <a
                href={getEmailUrls(lastRecord, receiptRef).gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0f1e3c] hover:bg-blue-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer hover:scale-105"
              >
                <Mail size={18} className="text-amber-400" />
                2. Send Proof via Gmail ↗
              </a>
            </>
          )}
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-left mb-6 space-y-3">
          <p className="text-orange-950 font-bold text-sm flex items-center gap-2">
            <Mail size={16} className="text-orange-600" />
            Next Steps to Complete Registration:
          </p>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Please email your payment proof (transaction screenshot / UTR slip) along with your downloaded PDF receipt to the organizing secretariat:
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={getEmailUrls(lastRecord, receiptRef).gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-orange-600 text-white font-extrabold text-xs shadow hover:bg-orange-700 transition-colors"
            >
              Open Gmail Compose (Pre-filled) ↗
            </a>
            <a
              href={getEmailUrls(lastRecord, receiptRef).mailtoUrl}
              className="inline-flex items-center gap-1 text-slate-700 font-bold text-xs hover:text-orange-600 transition-colors underline"
            >
              Or use default Mail App (mailto)
            </a>
          </div>
        </div>

        <button
          onClick={() => { setSubmitted(false); setFormData({ abstractSubmitted: '', category: '' }); }}
          className="text-blue-700 hover:text-orange-500 font-bold text-sm transition-colors cursor-pointer"
        >
          ← Submit another registration
        </button>
      </div>
    );
  }

  const inputCls = (id) =>
    `w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors bg-white ${
      errors[id] ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Conference registration form" className="space-y-6">

      {/* Field 1: Name */}
      <Field id="name" label="Name (in block letters)" num={1} required error={errors.name}>
        <input
          type="text"
          id="reg-name" name="name"
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="YOUR FULL NAME IN CAPITAL LETTERS"
          className={inputCls('name')}
          autoComplete="name"
        />
      </Field>

      {/* Field 2: Affiliation */}
      <Field id="affiliation" label="Affiliation" num={2} required error={errors.affiliation}>
        <input
          type="text"
          id="reg-affiliation" name="affiliation"
          value={formData.affiliation || ''}
          onChange={handleChange}
          placeholder="Institution / Organization name"
          className={inputCls('affiliation')}
        />
      </Field>

      {/* Field 3: Address */}
      <Field id="address" label="Address" num={3} required error={errors.address}>
        <textarea
          id="reg-address" name="address"
          value={formData.address || ''}
          onChange={handleChange}
          rows={3}
          placeholder="Full postal address"
          className={`${inputCls('address')} resize-none`}
        />
      </Field>

      {/* Fields 4 & 5: Mobile + Email (side by side) */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field id="mobile" label="Mobile No." num={4} required error={errors.mobile}>
          <input
            type="tel"
            id="reg-mobile" name="mobile"
            value={formData.mobile || ''}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={inputCls('mobile')}
          />
        </Field>
        <Field id="email" label="Email" num={5} required error={errors.email}>
          <input
            type="email"
            id="reg-email" name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputCls('email')}
          />
        </Field>
      </div>

      {/* Field 6: Participation details */}
      <div className="border border-blue-100 rounded-xl p-5 bg-blue-50/50 space-y-5">
        <p className="text-sm font-bold text-[#0f1e3c]">
          <span className="text-slate-400 font-normal mr-1">6.</span>
          Participation Details
        </p>

        {/* Delegate category */}
        <Field id="category" label="Delegate Category" num="6(a)" required error={errors.category}>
          <select
            id="reg-category" name="category"
            value={formData.category}
            onChange={handleChange}
            className={inputCls('category')}
          >
            <option value="">— Select category —</option>
            {[
              'Delegates (Academics & Research Organization)',
              'Students / Research Scholars',
              'Delegates (Industry / Govt. Agency)',
            ].map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </Field>

        {/* Abstract submitted */}
        <Field id="abstractSubmitted" label="Abstract Submitted? (Y/N)" num="6(i)" required error={errors.abstractSubmitted}>
          <select
            id="reg-abstractSubmitted" name="abstractSubmitted"
            value={formData.abstractSubmitted}
            onChange={handleChange}
            className={inputCls('abstractSubmitted')}
          >
            <option value="">— Select —</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </Field>

        {/* Author's Name */}
        <Field id="authorName" label="Author's Name" num="6(ii)" error={errors.authorName}>
          <input
            type="text"
            id="reg-authorName" name="authorName"
            value={formData.authorName || ''}
            onChange={handleChange}
            placeholder="Author's full name (if abstract submitted)"
            className={inputCls('authorName')}
          />
        </Field>

        {/* Title of Abstract */}
        <Field id="abstractTitle" label="Title of the Abstract" num="6(iii)" error={errors.abstractTitle}>
          <input
            type="text"
            id="reg-abstractTitle" name="abstractTitle"
            value={formData.abstractTitle || ''}
            onChange={handleChange}
            placeholder="Full title of your abstract / paper"
            className={inputCls('abstractTitle')}
          />
        </Field>
      </div>

      {/* Field 7: Payment details */}
      <div className="border border-orange-100 rounded-xl p-5 bg-orange-50/50 space-y-5">
        <p className="text-sm font-bold text-[#0f1e3c]">
          <span className="text-slate-400 font-normal mr-1">7.</span>
          Details of Registration Fees
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field id="ddUtrNo" label="Demand Draft / UTR No." num="" required error={errors.ddUtrNo}>
            <input
              type="text"
              id="reg-ddUtrNo" name="ddUtrNo"
              value={formData.ddUtrNo || ''}
              onChange={handleChange}
              placeholder="DD or bank transaction UTR number"
              className={inputCls('ddUtrNo')}
            />
          </Field>
          <Field id="paymentDate" label="Date of Payment" num="" required error={errors.paymentDate}>
            <input
              type="date"
              id="reg-paymentDate" name="paymentDate"
              value={formData.paymentDate || ''}
              onChange={handleChange}
              className={inputCls('paymentDate')}
            />
          </Field>
        </div>
        <Field id="amount" label="Amount Paid" num="" required error={errors.amount}>
          <input
            type="text"
            id="reg-amount" name="amount"
            value={formData.amount || ''}
            onChange={handleChange}
            placeholder="e.g., INR 7000 (excluding GST)"
            className={inputCls('amount')}
          />
        </Field>
      </div>

      {/* Field 8: Additional info */}
      <Field id="additionalInfo" label="Additional Information, if any" num={8} error={errors.additionalInfo}>
        <textarea
          id="reg-additionalInfo" name="additionalInfo"
          value={formData.additionalInfo || ''}
          onChange={handleChange}
          rows={3}
          placeholder="Any additional details, special requirements, or sponsorship intent"
          className={`${inputCls('additionalInfo')} resize-none`}
        />
      </Field>

      {/* Sponsorship note */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-blue-800 text-xs leading-relaxed">
          <strong>Sponsorships:</strong> I/We intend to sponsor/co-sponsor/nominate ............(No.) Delegates / present a paper in the seminar / advertise in the Souvenir of the Mining Viksit Bharat 2047. Please mention details in Additional Information above.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-amber-800 text-xs leading-relaxed">
          <strong>Note:</strong> This form does not submit data to a server. After completing this form, please send your payment proof (transaction screenshot) to{' '}
          <a href="mailto:mvb_2047@iitism.ac.in" className="font-semibold underline underline-offset-2">mvb_2047@iitism.ac.in</a>. Registration will be confirmed by organizers upon payment verification.
        </p>
      </div>

      <div className="text-center pt-2">
        <button
          type="submit"
          id="registration-submit-btn"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-lg transition-colors text-base hover:shadow-lg hover:shadow-orange-500/20"
        >
          Submit Registration
        </button>
      </div>
    </form>
  );
}

export default function Registration() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <div
        className="py-20 px-4"
        style={{ background: 'linear-gradient(135deg, #08112a 0%, #0f1e3c 60%, #162447 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">Register</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Registration
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-4" />
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            Register to attend MVB 2047. Delegates from academia, industry, government, and international institutions are welcome.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white" aria-label="Registration fees and form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Fee Table */}
          <ScrollReveal>
            <SectionHeader
              label="Registration Fees"
              title="Conference Registration Fees"
              subtitle="Source: Official MVB@2047 Brochure — all fees excluding GST@18%"
            />
            <PricingTable fees={registrationFees} />
            <div className="mt-4 space-y-1.5">
              {registrationNotes.map((note, i) => (
                <p key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" aria-hidden="true" />
                  {note}
                </p>
              ))}
            </div>
          </ScrollReveal>

          {/* Bank Details */}
          <ScrollReveal>
            <SectionHeader
              label="Payment"
              title="Bank Details for Payment"
              subtitle="Transfer the exact registration fee to the account below. DO NOT modify these bank details."
            />

            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {/* Bank card */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between">
                <div className="bg-[#0f1e3c] p-5">
                  <div className="flex items-center gap-3">
                    <Building2 size={22} className="text-orange-400" aria-hidden="true" />
                    <div>
                      <p className="text-white font-bold text-base">{bankDetails.accountName}</p>
                      <p className="text-blue-200 text-sm">{bankDetails.bankName} — {bankDetails.branchName}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <BankDetailRow label="Account Number" value={bankDetails.accountNumber} />
                  <BankDetailRow label="IFSC Code" value={bankDetails.ifsc} />
                  <BankDetailRow label="MICR Code" value={bankDetails.micr} />
                  <BankDetailRow label="GSTIN" value={bankDetails.gstin} />
                </div>
              </div>

              {/* QR Code Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 text-center border border-slate-800 flex flex-col items-center justify-center space-y-3 shadow-md">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">
                  <QrCode size={20} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-orange-400">
                    SCAN & PAY
                  </p>
                  <p className="text-[10px] text-slate-400">IIT ISM CEP ACCOUNT</p>
                </div>

                <div className="w-36 h-36 bg-white rounded-xl p-1.5 flex items-center justify-center shadow-inner overflow-hidden border border-white">
                  <img
                    src={qrCodeImg}
                    alt="IIT ISM CEP ACCOUNT Canara Bank QR Code"
                    className="w-full h-full object-contain"
                  />
                </div>

                <span className="inline-block text-[10px] font-extrabold text-slate-900 bg-orange-400 px-3 py-1 rounded-full uppercase tracking-wider">
                  BHIM UPI
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Registration Form */}
          <ScrollReveal>
            <SectionHeader
              label="Register"
              title="Registration Form"
              subtitle="Fields marked * are mandatory. This form mirrors the official brochure registration form."
              centered
            />
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 max-w-3xl mx-auto">
              {/* Header matching brochure */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">International Conference</p>
                  <p className="text-[#0f1e3c] font-extrabold text-lg leading-tight mt-1">
                    Mining for Viksit Bharat 2047
                  </p>
                  <p className="text-slate-500 text-sm">(MVB 2047)</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-500 text-xs">3rd – 4th Oct 2026</p>
                  <p className="text-slate-500 text-xs">GJLT, IIT-ISM Dhanbad</p>
                  <div className="mt-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold border border-green-200 inline-block">
                    REGISTRATION FORM
                  </div>
                </div>
              </div>
              <RegistrationForm />
            </div>
          </ScrollReveal>

        </div>
      </section>
    </main>
  );
}

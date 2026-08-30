import adaniLogo from '../assets/logo/ADANI.jpg';
import aimilLogo from '../assets/logo/AIMIL.jpg';
import cilLogo from '../assets/logo/CIL.png';
import gmdcLogo from '../assets/logo/GMDC.jpg';
import hclLogo from '../assets/logo/HCL.jpg';
import jmsLogo from '../assets/logo/JMS.jpg';

// CIL Subsidiaries Logos
import bcclLogo from '../assets/logo/BCCL.jpg';
import cclLogo from '../assets/logo/CCL.jpg';
import eclLogo from '../assets/logo/ECL.jpg';
import mclLogo from '../assets/logo/MCL.jpg';
import nclLogo from '../assets/logo/NCL.svg';
import seclLogo from '../assets/logo/SECL.jpg';
import wclLogo from '../assets/logo/WCL.jpg';

// Official Conference Sponsors — Source: assets/logo
export const officialSponsors = [
  {
    id: 'cil',
    name: 'Coal India Limited',
    shortName: 'CIL',
    logo: cilLogo,
    tier: 'Principal Sponsor',
    tierCategory: 'Principal',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-300',
    website: 'https://www.coalindia.in',
  },
  {
    id: 'adani',
    name: 'Adani Group',
    shortName: 'ADANI',
    logo: adaniLogo,
    tier: 'Gold Sponsor',
    tierCategory: 'Gold',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    website: 'https://www.adani.com',
  },
  {
    id: 'gmdc',
    name: 'Gujarat Mineral Dev. Corp.',
    shortName: 'GMDC',
    logo: gmdcLogo,
    tier: 'Gold Sponsor',
    tierCategory: 'Gold',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    website: 'https://www.gmdcltd.com',
  },
  {
    id: 'hcl',
    name: 'Hindustan Copper Limited',
    shortName: 'HCL',
    logo: hclLogo,
    tier: 'Gold Sponsor',
    tierCategory: 'Gold',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    website: 'https://www.hindustancopper.com',
  },
  {
    id: 'jms',
    name: 'JMS Mining',
    shortName: 'JMS',
    logo: jmsLogo,
    tier: 'Silver Sponsor',
    tierCategory: 'Silver',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    website: 'https://www.jmsmining.com',
  },
  {
    id: 'aimil',
    name: 'AIMIL Ltd.',
    shortName: 'AIMIL',
    logo: aimilLogo,
    tier: 'Silver Sponsor',
    tierCategory: 'Silver',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    website: 'https://www.aimil.com',
  },
];

// Coal India Limited (CIL) Coal-Producing Subsidiaries
export const cilSubsidiaries = [
  {
    id: 'bccl',
    name: 'Bharat Coking Coal Limited',
    shortName: 'BCCL',
    logo: bcclLogo,
    website: 'https://www.bcclweb.in',
  },
  {
    id: 'ccl',
    name: 'Central Coalfields Limited',
    shortName: 'CCL',
    logo: cclLogo,
    website: 'https://www.centralcoalfields.in',
  },
  {
    id: 'ecl',
    name: 'Eastern Coalfields Limited',
    shortName: 'ECL',
    logo: eclLogo,
    website: 'https://www.easterncoal.gov.in',
  },
  {
    id: 'mcl',
    name: 'Mahanadi Coalfields Limited',
    shortName: 'MCL',
    logo: mclLogo,
    website: 'https://www.mahanadicoal.in',
  },
  {
    id: 'ncl',
    name: 'Northern Coalfields Limited',
    shortName: 'NCL',
    logo: nclLogo,
    website: 'https://www.nclcil.in',
  },
  {
    id: 'secl',
    name: 'South Eastern Coalfields Limited',
    shortName: 'SECL',
    logo: seclLogo,
    website: 'https://www.secl-cil.in',
  },
];

// Sponsorship packages — Source: Official MVB@2047 Brochure
export const sponsorshipPackages = [
  {
    id: 2,
    tier: 'Gold',
    amount: '7,00,000',
    amountNum: 700000,
    currency: 'INR',
    delegates: 7,
    color: 'gold',
    benefits: [
      '7 delegates free of cost',
      'Gold branding on conference materials',
      'Logo on conference banner and website',
      'Exhibition space allocation',
      'Acknowledgment in conference proceedings',
      'Souvenir advertisement (Full page)',
    ],
    popular: true,
  },
  {
    id: 3,
    tier: 'Silver',
    amount: '5,00,000',
    amountNum: 500000,
    currency: 'INR',
    delegates: 5,
    color: 'silver',
    benefits: [
      '5 delegates free of cost',
      'Silver branding on conference materials',
      'Logo on conference website',
      'Acknowledgment in conference proceedings',
      'Souvenir advertisement (Full page)',
    ],
    popular: false,
  },
  {
    id: 4,
    tier: 'Bronze',
    amount: '3,00,000',
    amountNum: 300000,
    currency: 'INR',
    delegates: 3,
    color: 'bronze',
    benefits: [
      '3 delegates free of cost',
      'Bronze branding on conference materials',
      'Logo on conference website',
      'Acknowledgment in conference proceedings',
    ],
    popular: false,
  },
];

export const sponsorshipNote = 'All sponsorship amounts are excluding GST@18%.';

// EXPO details — Source: Official Brochure
export const expoDetails = {
  title: 'EXPO',
  subtitle: 'Display of Mining Technology, Equipment, Instruments & Software',
  description: 'An exhibition will be organised for various organisation for display of Mining technology, equipment, instruments, software, etc',
  stallDetail: "Display of Poster Equipment Models Instruments per stall 10'×10'×10' for two days (One delegate free of cost)",
  stallDimensions: "10' × 10' × 10'",
  duration: '2 Days (3rd – 4th October 2026)',
  includesDelegate: 'One delegate free of cost',
  price: '1,00,000',
  gst: '5% GST',
  priceFormatted: '₹ 1,00,000/- + 5% GST',
  contact: 'mvb_2047@iitism.ac.in',
};

// Advertisement in Souvenir — Source: Official Brochure
export const souvenirAdvertisement = [
  { type: 'Outside Back Cover Page (color)', amount: '1,00,000', gst: '+ 5% GST', note: 'Color' },
  { type: 'Inside Front and Back Cover Page (Color)', amount: '75,000', gst: '+ 5% GST', note: 'Color' },
  { type: 'Inside Full Page (Color)', amount: '50,000', gst: '+ 5% GST', note: 'Color' },
  { type: 'Inside Full Page (B/W)', amount: '35,000', gst: '+ 5% GST', note: 'B/W' },
  { type: 'Inside Half Page (B/W)', amount: '25,000', gst: '+ 5% GST', note: 'B/W' },
];

export const souvenirNote = 'All advertisement amounts are in INR + 5% GST.';

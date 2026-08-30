# ⛏️ International Conference on Mining for Viksit Bharat 2047 (MVB@2047)

![Conference](https://img.shields.io/badge/Conference-MVB%402047-amber?style=for-the-badge)
![Institution](https://img.shields.io/badge/IIT%20(ISM)-Dhanbad-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-cyan?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)

Official web application for the **International Conference on Mining for Viksit Bharat 2047 (MVB@2047)**, organized by the **Department of Mining Engineering, Indian Institute of Technology (Indian School of Mines), Dhanbad, Jharkhand, India**.

---

## 📅 Conference Overview

- **Dates**: 3rd – 4th October 2026
- **Venue**: GJLT, IIT (ISM) Dhanbad, Jharkhand – 826004, India
- **Organized By**: Department of Mining Engineering, IIT (ISM) Dhanbad

---

## ✨ Key Features

- 🎯 **Interactive Registration Portal**: Real-time input validation, strict numerical character filtering, and seamless registration workflow.
- 📄 **Instant PDF Executive Receipts**: Client-side executive receipt generator powered by `jsPDF` and `html2canvas` with custom styling.
- 📧 **Direct Gmail Compose Links**: One-click pre-filled email submissions for abstracts, papers, and inquiries via direct browser Gmail tabs.
- ⏰ **Live Countdown Timer**: Real-time animated ticker counting down to the conference inauguration date.
- 🏢 **Exhibition & Sponsorship Section**: Complete pricing tier breakdown (Gold, Silver, Bronze), stall booking, and souvenir advertising options.
- 👤 **Committee & Keynote Speakers Showcase**: Dedicated profiles for conference leadership, patrons, conveners, student coordinators, and international keynote speakers.
- 📱 **Fully Responsive Modern UI**: Built with Tailwind CSS v4, smooth scroll reveal animations, and glassmorphism visual styling.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4, Vanilla CSS utilities
- **Icons**: Lucide React Icons
- **PDF Generation**: `jspdf` & `html2canvas`
- **Routing**: React Router DOM v7
- **Backend Integration**: Google Apps Script Web App for registration data persistence

---

## 📁 Project Structure

```text
International_Conference_MVS/
├── public/                     # Static assets (favicons, public logos)
├── src/
│   ├── assets/                 # High-res images, conference photos, logos
│   │   ├── Conference_Organizers/
│   │   └── logo/
│   ├── components/             # Reusable UI components
│   │   ├── CountdownTimer.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollReveal.jsx
│   │   ├── SponsorCard.jsx
│   │   └── Timeline.jsx
│   ├── data/                   # Data sources & configuration files
│   │   ├── committee.js        # Organizers, Patrons & International Advisory
│   │   ├── conference.js       # Institution & Department highlights
│   │   ├── dates.js            # Important dates & deadlines timeline
│   │   ├── registration.js     # Registration fee categories & rules
│   │   ├── speakers.js         # Confirmed Keynote & Invited Speakers
│   │   └── sponsorship.js      # Official sponsors & EXPO packages
│   ├── pages/                  # Page views
│   │   ├── About.jsx
│   │   ├── CallForPapers.jsx
│   │   ├── Committee.jsx
│   │   ├── Contact.jsx
│   │   ├── ExhibitionSponsorship.jsx
│   │   ├── Home.jsx
│   │   ├── ImportantDates.jsx
│   │   ├── Registration.jsx
│   │   ├── Speakers.jsx
│   │   └── Themes.jsx
│   ├── App.jsx                 # Main application routes
│   ├── index.css               # Design system & Tailwind directives
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template with SEO meta tags & white SVG favicon
└── package.json                # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Local Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/devang772/MVB-2047.git
   cd MVB-2047
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🗓️ Important Deadlines

| Milestone / Event | Date |
| :--- | :--- |
| **Call for Abstracts** | **1 June 2026** |
| **Receipt of Abstracts** | **10 September 2026** |
| **Review of Abstracts & Decision Notification** | **12 September 2026** |
| **Receipt of Full Papers** | **Upto 20 September 2026** |
| **Review of Full Papers & Decision Intimation** | **Upto 25 September 2026** |
| **Intimation of Acceptance of Papers** | **Upto 30 September 2026** |
| **Exhibition** | **25–26 September 2026** |
| **Conference** | **3–4 October 2026** |

---

## 📬 Contact & Secretariat

**Department of Mining Engineering**  
Indian Institute of Technology (Indian School of Mines), Dhanbad – 826004, Jharkhand, India

- 📧 **Official Email**: `mvb_2047@iitism.ac.in`
- 🌐 **Website**: [IIT (ISM) Dhanbad](https://www.iitism.ac.in)

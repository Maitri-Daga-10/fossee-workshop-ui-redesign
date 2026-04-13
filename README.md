# FOSSEE Workshop Booking UI/UX Redesign

## Overview
This project is a UI/UX redesign of the FOSSEE Workshop Booking System, focused on improving clarity, usability, and mobile-first interaction.

The goal was not just to improve visuals, but to make the platform feel like a real, usable system for students and institutes to explore, propose, and manage workshops efficiently.

---

## Key Improvements

### 1. Simplified User Flow
- Clear entry points: Explore Workshops, Propose Workshop, Dashboard
- Reduced unnecessary visual clutter
- Focus on primary user actions

### 2. Workshop Discovery Experience
- Added search bar and filter chips (Beginner, Intermediate, Online, Hybrid)
- Introduced domain-based context (Python, OpenFOAM, LaTeX, etc.)
- Displayed only essential information in cards

### 3. Structured Workshop Cards
Each workshop now includes:
- Mode (Online / Hybrid)
- Level (Beginner / Intermediate)
- Date
- Seats and registrations
- Duration
- Short description
- Single primary action: View details

This makes scanning faster and decisions easier.

### 4. Dashboard Clarity
- Replaced dense layouts with simple stacked cards
- Clear status messages (approval, logistics, postponement)
- Quick overview of:
  - Pending requests
  - Scheduled workshops
  - Status updates

### 5. Improved Proposal Experience
- Clean, grouped input fields
- Better placeholder guidance
- Reduced cognitive load for submission

---

## Design Principles

- **Clarity over complexity**  
  Only important information is shown first

- **Mobile-first approach**  
  Layout, spacing, and interactions are optimized for smaller screens

- **Consistency**  
  Reusable components, consistent spacing, and typography

- **Real-system feel**  
  Added structured data (seats, duration, status) to simulate real usage

---

## Responsiveness

The interface is designed to work across devices:
- Desktop → structured layout with side panel
- Tablet → adaptive grid
- Mobile → stacked layout with easy navigation

Typography and spacing are adjusted using responsive styles.

---

## Challenges Faced

- Balancing minimal design with enough information
- Avoiding clutter while still making the system feel complete
- Structuring workshop cards to be informative but not overwhelming
- Maintaining consistency across sections

---

## Trade-offs

- Search and filters are currently static (UI-focused implementation)
- Limited dataset used for demonstration
- Focus was prioritized on UX clarity rather than backend integration

---

## Tech Stack

- React (Vite)
- CSS (custom styling)
- JavaScript

---

## Setup Instructions

```bash
npm install
npm run dev
```
---

## Runs on:
http://localhost:5173/

---

## Screenshots

<img width="1919" height="909" alt="Screenshot 2026-04-13 224445" src="https://github.com/user-attachments/assets/279e220c-a9cd-4edf-9552-d1566ddadce7" />
<img width="1919" height="917" alt="Screenshot 2026-04-13 224611" src="https://github.com/user-attachments/assets/1e20d0b4-c220-4397-a3ba-c07fb0ea8bac" />
<img width="1919" height="911" alt="Screenshot 2026-04-13 224825" src="https://github.com/user-attachments/assets/230feddd-88f0-497c-8ae1-e875f0370fa3" />
<img width="1916" height="921" alt="Screenshot 2026-04-13 224940" src="https://github.com/user-attachments/assets/20dbc636-6aef-4697-b667-d505e3cd7e2c" />
<img width="1919" height="918" alt="Screenshot 2026-04-13 225023" src="https://github.com/user-attachments/assets/eff6774b-ff64-466a-a3f2-daafa2ff4765" />

---

## Conclusion

This redesign focuses on making the workshop booking system more intuitive, structured, and user-friendly.

The aim was to move beyond a visual redesign and create a clearer, more practical experience for real users interacting with the platform.

---

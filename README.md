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

### Before:
![Before UI](before-ui.png)

### After:
![After UI-1](after-ui-1.png)
![After UI-2](after-ui-2.png)
![After UI-3](after-ui-3.png)
![After UI-4](after-ui-4.png)
![After UI-5](after-ui-5.png)
---

## Conclusion

This redesign focuses on making the workshop booking system more intuitive, structured, and user-friendly.

The aim was to move beyond a visual redesign and create a clearer, more practical experience for real users interacting with the platform.

---
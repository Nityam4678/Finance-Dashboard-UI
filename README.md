# 💼 Dashboard UI

A modern, responsive finance dashboard built with React and Tailwind CSS. Features a sleek dark theme with orange accents, real-time transaction management, and role-based access control.

![Dashboard Preview](https://img.shields.io/badge/React-18.2-blue?logo=react) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-5.2-646cff?logo=vite)

## Financial Dashboard

### Admin View
![Admin Dashboard](./Images/Admin%20Page.png)
*Admin role with full access to add, edit, and delete transactions*

### Viewer View
![Viewer Dashboard](./Images/Viewer%20Page.png)
*Viewer role with read-only access to dashboard data*

## Features

### Core Features
- ** Dashboard Overview** - Balance cards, income charts, and transaction summaries
- ** Credit Card Management** - Visual card display with balance tracking
- ** Income Analytics** - Interactive area charts with time filters
- ** Transaction Table** - Sortable, filterable transaction history
- ** Search & Filter** - Real-time search with status/type filters
- ** Responsive Design** - Mobile-first, works on all devices

### Role-Based Access
- **Admin Role** - Full access: add, edit, delete transactions
- **Viewer Role** - Read-only access to dashboard data

### UI/UX Polish
-  Smooth animations and transitions
-  Dark theme with orange accent colors
-  Toast notifications for user feedback
-  Empty states with helpful messages
-  Loading skeletons for async operations
-  LocalStorage persistence for data

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with hooks |
| **Vite** | Fast build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Zustand** | Lightweight state management |
| **Recharts** | Responsive chart library |

##  Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dashboard-ui

# Install dependencies
npm install

# Start development server
npm run dev
```

Open the [Live Dashboard](https://finance-dashboard-ui-beta-virid.vercel.app) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

##  Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components
│   │   ├── Badge.jsx    # Status badges
│   │   ├── Button.jsx   # Button variants
│   │   ├── Card.jsx     # Card container
│   │   ├── EmptyState.jsx
│   │   ├── Input.jsx    # Form input
│   │   ├── Modal.jsx    # Modal dialog
│   │   ├── Skeleton.jsx # Loading states
│   │   └── Toast.jsx    # Notifications
│   │
│   ├── dashboard/       # Dashboard-specific components
│   │   ├── AddTransactionModal.jsx
│   │   ├── AssetsPanel.jsx
│   │   ├── BalanceCard.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── CreditCard.jsx
│   │   ├── GrowthTarget.jsx
│   │   ├── IncomeChart.jsx
│   │   ├── InsightsPanel.jsx
│   │   ├── QuickActions.jsx
│   │   ├── SummaryCard.jsx
│   │   └── TransactionsTable.jsx
│   │
│   ├── Layout.jsx       # Main layout wrapper
│   ├── MainContent.jsx  # Content area
│   ├── Navbar.jsx       # Top navigation
│   └── Sidebar.jsx      # Side navigation
│
├── data/                # Static/mock data
│   └── mockData.js      # Sample transactions & balances
│
├── hooks/               # Custom React hooks
│   └── useInsights.js   # Computed analytics hook
│
├── pages/               # Page components
│   └── Dashboard.jsx    # Main dashboard page
│
├── store/               # State management (Zustand)
│   ├── transactionStore.js  # Transactions state
│   ├── uiStore.js           # UI state (modals, sidebar)
│   └── userStore.js         # User & role state
│
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles & animations
```

##  Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Orange) | `#f97316` | Buttons, accents, active states |
| Dark 400 | `#1a1a1a` | Card backgrounds |
| Dark 600 | `#111111` | Main background |
| Success | `#22c55e` | Positive values, completed |
| Warning | `#eab308` | Processing status |
| Danger | `#ef4444` | Failed, negative values |

### Component Variants

**Button Variants:**
- `primary` - Orange with glow effect
- `secondary` - Dark with border
- `outline` - Transparent with orange border
- `ghost` - Minimal, text only
- `danger` - Red for destructive actions

**Badge Variants:**
- `success` - Green (Completed)
- `warning` - Yellow (Processing)
- `danger` - Red (Failed)

## 🔐 Role-Based Access

Toggle between roles by clicking the role badge in the navbar.

| Feature | Admin | Viewer |
|---------|:-----:|:------:|
| View Dashboard | ✅ | ✅ |
| View Transactions | ✅ | ✅ |
| Search & Filter | ✅ | ✅ |
| Add Transaction | ✅ | ❌ |
| Edit Status | ✅ | ❌ |
| Delete Transaction | ✅ | ❌ |

##  Data Persistence

The app uses localStorage to persist:
- **Transactions** - All transaction data survives page refresh
- **User Role** - Selected role persists across sessions
- **Preferences** - Language and currency settings

To reset data, clear localStorage:
```javascript
localStorage.clear()
```

##  Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


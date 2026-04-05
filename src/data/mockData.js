// Mock data for dashboard

export const balanceData = {
  usd: 254286.00,
  btc: 4.03,
  usdt: 214.00,
  changes: {
    usd: 14.20,
    btc: 6.05,
    usdt: 3.2,
  }
}

export const incomeData = [
  { month: 'Jan', amount: 2000 },
  { month: 'Feb', amount: 5500 },
  { month: 'Mar', amount: 12000 },
]

export const transactions = [
  {
    id: 1,
    date: '2026-04-05 14:00',
    type: 'Withdraw',
    cryptoAmount: '334',
    usdAmount: '+32432 USD',
    fee: '342 USD',
    totalAmount: '+32432 USD',
    status: 'Completed',
  },
  {
    id: 2,
    date: '2025-05-11 12:00',
    type: 'Withdraw',
    cryptoAmount: '1230 USDT',
    usdAmount: '+1230 USD',
    fee: '12 USD',
    totalAmount: '+1230 USD',
    status: 'Completed',
  },
  {
    id: 3,
    date: '2025-05-11 12:00',
    type: 'Deposit',
    cryptoAmount: '--',
    usdAmount: '-100 USD',
    fee: '--',
    totalAmount: '-102 USD',
    status: 'Processing',
  },
  {
    id: 4,
    date: '2025-05-11 12:00',
    type: 'Spend',
    cryptoAmount: '670 USDT',
    usdAmount: '+670 USD',
    fee: '2 USD',
    totalAmount: '+670 USD',
    status: 'Failed',
  },
  {
    id: 5,
    date: '2025-05-10 09:30',
    type: 'Deposit',
    cryptoAmount: '5000 USDT',
    usdAmount: '+5000 USD',
    fee: '--',
    totalAmount: '+5000 USD',
    status: 'Completed',
  },
  {
    id: 6,
    date: '2025-05-09 16:45',
    type: 'Spend',
    cryptoAmount: '250 USDT',
    usdAmount: '-250 USD',
    fee: '5 USD',
    totalAmount: '-255 USD',
    status: 'Completed',
  },
  {
    id: 7,
    date: '2025-05-08 11:20',
    type: 'Withdraw',
    cryptoAmount: '800 USDT',
    usdAmount: '+800 USD',
    fee: '8 USD',
    totalAmount: '+792 USD',
    status: 'Completed',
  },
  {
    id: 8,
    date: '2025-05-07 08:15',
    type: 'Deposit',
    cryptoAmount: '3500 USDT',
    usdAmount: '+3500 USD',
    fee: '--',
    totalAmount: '+3500 USD',
    status: 'Completed',
  },
  {
    id: 9,
    date: '2025-05-06 14:30',
    type: 'Spend',
    cryptoAmount: '120 USDT',
    usdAmount: '-120 USD',
    fee: '2 USD',
    totalAmount: '-122 USD',
    status: 'Processing',
  },
  {
    id: 10,
    date: '2025-05-05 10:00',
    type: 'Withdraw',
    cryptoAmount: '450 USDT',
    usdAmount: '+450 USD',
    fee: '5 USD',
    totalAmount: '+445 USD',
    status: 'Completed',
  },
  {
    id: 11,
    date: '2025-05-04 17:30',
    type: 'Deposit',
    cryptoAmount: '2000 USDT',
    usdAmount: '+2000 USD',
    fee: '--',
    totalAmount: '+2000 USD',
    status: 'Completed',
  },
  {
    id: 12,
    date: '2025-05-03 09:45',
    type: 'Spend',
    cryptoAmount: '85 USDT',
    usdAmount: '-85 USD',
    fee: '1 USD',
    totalAmount: '-86 USD',
    status: 'Failed',
  },
]

export const assets = [
  {
    id: 1,
    symbol: 'USDT',
    name: 'Tether',
    amount: 1900,
    usdValue: 1900,
    icon: '💵',
  },
]

export const cardData = {
  number: '1233 **** **** 1234',
  validThru: '**/**',
  cvv: '***',
  balance: 68402,
  currency: 'USD/US Dollar',
}

export const growthData = {
  percentage: 71,
  yearlyGrowth: '+20% per year',
}

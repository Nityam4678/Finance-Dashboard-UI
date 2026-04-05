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
    date: '2025-05-11 12:00',
    type: 'Deposit',
    cryptoAmount: '10670 USDT',
    usdAmount: '+10670 USD',
    fee: '--',
    totalAmount: '+10670 USD',
    status: 'Completed',
  },
  {
    id: 2,
    date: '2025-05-11 12:00',
    type: 'Spend',
    cryptoAmount: '--',
    usdAmount: '-100 USD',
    fee: '8 USD',
    totalAmount: '-102 USD',
    status: 'Processing',
  },
  {
    id: 3,
    date: '2025-05-11 12:00',
    type: 'Withdraw',
    cryptoAmount: '1230 USDT',
    usdAmount: '+1230 USD',
    fee: '12 USD',
    totalAmount: '+1230 USD',
    status: 'Completed',
  },
  {
    id: 4,
    date: '2025-05-11 12:00',
    type: 'Deposit',
    cryptoAmount: '--',
    usdAmount: '-100 USD',
    fee: '--',
    totalAmount: '-102 USD',
    status: 'Processing',
  },
  {
    id: 5,
    date: '2025-05-11 12:00',
    type: 'Spend',
    cryptoAmount: '670 USDT',
    usdAmount: '+670 USD',
    fee: '2 USD',
    totalAmount: '+670 USD',
    status: 'Failed',
  },
  {
    id: 6,
    date: '2025-05-11 12:00',
    type: 'Withdraw',
    cryptoAmount: '30 USDT',
    usdAmount: '-30 USD',
    fee: '0.5 USD',
    totalAmount: '-30 USD',
    status: 'Processing',
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

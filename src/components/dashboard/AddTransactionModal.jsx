import { useState } from 'react'
import { Modal, Button, Input } from '../ui'
import { useTransactionStore, useUIStore } from '../../store'

const typeOptions = ['Deposit', 'Spend', 'Withdraw']
const statusOptions = ['Completed', 'Processing']

function AddTransactionModal({ isOpen, onClose }) {
  const { addTransaction } = useTransactionStore()
  const { addNotification } = useUIStore()
  
  const [formData, setFormData] = useState({
    type: 'Deposit',
    cryptoAmount: '',
    usdAmount: '',
    fee: '',
    status: 'Processing',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.cryptoAmount && !formData.usdAmount) {
      newErrors.usdAmount = 'Enter an amount'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validate()) return

    const now = new Date()
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`

    const isPositive = formData.type === 'Deposit' || formData.type === 'Withdraw'
    const sign = isPositive ? '+' : '-'
    const usdValue = formData.usdAmount || '0'

    const transaction = {
      date: dateStr,
      type: formData.type,
      cryptoAmount: formData.cryptoAmount || '--',
      usdAmount: `${sign}${usdValue} USD`,
      fee: formData.fee ? `${formData.fee} USD` : '--',
      totalAmount: `${sign}${usdValue} USD`,
      status: formData.status,
    }

    addTransaction(transaction)
    
    // Show success notification
    addNotification({
      type: 'success',
      message: `${formData.type} transaction added successfully!`,
    })
    
    // Reset form
    setFormData({
      type: 'Deposit',
      cryptoAmount: '',
      usdAmount: '',
      fee: '',
      status: 'Processing',
    })
    
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Transaction">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Type */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Type</label>
          <div className="flex gap-2">
            {typeOptions.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleChange('type', type)}
                className={`
                  flex-1 py-2 rounded-xl text-sm font-medium transition-smooth
                  ${formData.type === type
                    ? 'bg-primary-500 text-white'
                    : 'bg-dark-300 text-gray-400 hover:text-white'
                  }
                `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Crypto Amount */}
        <Input
          label="Crypto Amount"
          placeholder="e.g., 1000 USDT"
          value={formData.cryptoAmount}
          onChange={(e) => handleChange('cryptoAmount', e.target.value)}
        />

        {/* USD Amount */}
        <Input
          label="USD Amount"
          placeholder="e.g., 1000"
          type="number"
          value={formData.usdAmount}
          onChange={(e) => handleChange('usdAmount', e.target.value)}
          error={errors.usdAmount}
        />

        {/* Fee */}
        <Input
          label="Fee (USD)"
          placeholder="e.g., 5"
          type="number"
          value={formData.fee}
          onChange={(e) => handleChange('fee', e.target.value)}
        />

        {/* Status */}
        <div>
          <label className="block text-sm text-gray-400 mb-2">Status</label>
          <div className="flex gap-2">
            {statusOptions.map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => handleChange('status', status)}
                className={`
                  flex-1 py-2 rounded-xl text-sm font-medium transition-smooth
                  ${formData.status === status
                    ? status === 'Completed' ? 'bg-success-500 text-white' : 'bg-warning-500 text-dark-900'
                    : 'bg-dark-300 text-gray-400 hover:text-white'
                  }
                `}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4">
          <Button type="button" variant="ghost" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" className="flex-1">
            Add Transaction
          </Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddTransactionModal

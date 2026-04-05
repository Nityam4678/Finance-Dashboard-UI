import { Modal, Button } from '../ui'

function ConfirmModal({ isOpen, onClose, onConfirm, title, message }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
      <p className="text-gray-400 mb-6">{message}</p>
      <div className="flex gap-3">
        <Button variant="ghost" className="flex-1" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" className="flex-1" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  )
}

export default ConfirmModal

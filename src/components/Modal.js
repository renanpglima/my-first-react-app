import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose, isSaleModal}) {
  return ReactDOM.createPortal((
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button onClick={handleClose} className={isSaleModal?'sales-btn':''}>close</button>
      </div>
    </div>    
  ), document.body)
}

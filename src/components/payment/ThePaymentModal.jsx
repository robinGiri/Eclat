import React from 'react';
import ThePaypalPayment from './ThePaypalPayment';
import '../../admin/admin-pages/product-components/TheRecentInvoice.css';
import { IoClose } from "react-icons/io5";

function ThePaymentModal({close}) {
  return (
    <div className="fixed top-0 h-full left-0 w-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-7 pt-[3rem] rounded-lg relative">
        <div className='absolute top-2 right-0 mr-3'>
        <button className='sticky top-0 mb-7' onClick={close}><IoClose className='text-2xl' title='Close'/>
</button>
        </div>
        <div className='h-[45vh] custom-scroll'><ThePaypalPayment /></div>
      </div>
    </div>
  );
}

export default ThePaymentModal;

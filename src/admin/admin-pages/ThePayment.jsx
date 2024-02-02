import { useState } from "react";
import TheStripPayment from "../../components/payment/TheStripPayment";
import Khaltitest from "../../components/payment/KhaltiPayment";
import ThePaymentModal from "../../components/payment/ThePaymentModal";
import { PaypalButton } from "../../components/payment/ThePaymentButtons";

function ThePayment() {
  const [isPaypalModalOpen, setIsPaypalModalOpen] = useState(false);

  const handlePaypalModalOpen = () => {
    setIsPaypalModalOpen(true);
  };

  const handlePaypalModalClose = () => {
    setIsPaypalModalOpen(false);
  };
  return (
    <div className="flex flex-col  m-10">
      <div>
      <TheStripPayment />
      </div>
      <div className="mx-3 mt-2">
      <Khaltitest />
      </div>
      <div className="-mx-2 -mt-7">
      <button onClick={handlePaypalModalOpen}>
            <PaypalButton />
          </button>
      </div>
      {isPaypalModalOpen && <ThePaymentModal close={handlePaypalModalClose} />}
    </div>
  );
}

export default ThePayment;

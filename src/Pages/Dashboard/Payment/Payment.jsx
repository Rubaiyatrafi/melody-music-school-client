import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import useClasses from "../../../Hooks/UseClsasses";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const [selectedClasses] = useClasses();
  const total = selectedClasses.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className=" w-full p-5">
      <Helmet>
        <title>Melody Music | Payment</title>
      </Helmet>
      <div className=" flex flex-col items-center mb-20">
        <h1 className=" text-purple-300 font-semibold">---At a Glance---</h1>

        <h1 className=" text-purple-500 text-5xl font-extrabold">
          Payment System
        </h1>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm
          selectedClasses={selectedClasses}
          price={price}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;

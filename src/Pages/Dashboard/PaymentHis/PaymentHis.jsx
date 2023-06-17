import { Helmet } from "react-helmet-async";

const PaymentHis = () => {
  return (
    <div>
      <div className=" w-full p-5">
        <Helmet>
          <title>Melody Music | My Payment</title>
        </Helmet>
        <div className=" flex flex-col items-center mb-20">
          <h1 className=" text-purple-300 font-semibold">---At a Glance---</h1>

          <h1 className=" text-purple-500 text-5xl font-extrabold">
            My Payments
          </h1>
        </div>
        <h1 className=" text-center text-2xl text-rose-500 font-semibold">
          Your Payment is Pending
        </h1>
      </div>
    </div>
  );
};

export default PaymentHis;

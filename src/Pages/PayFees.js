const PayFees = () => {
  return (
    <div className="pay flex justify-center items-center text-white px-4">
      <div className="border-2 border-secondary px-3 md:px-10 pt-16 bg-primary">
        <div className="text-xl sm:text-2xl md:text-3xl font-medium ">
          <h2 className="pb-2">Account Name : Godswill Onyeka</h2>
          <h2 className="pb-2">Account Number : 0108956357</h2>
          <h3>Bank Name : First Bank</h3>
        </div>

        <p className="pt-8 pb-5 text-lg text-center">
          Pay and send receipt screenshot to{" "}
          <i className="fab fa-whatsapp pl-2"></i>{" "}
          <a href="tel:+234 90 389 683 45" className="text-secondary pl-1">
            +234 90 389 683 45
          </a>
        </p>
      </div>
    </div>
  );
};

export default PayFees;

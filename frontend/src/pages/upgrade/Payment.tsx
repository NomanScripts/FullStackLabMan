import logos from "../../assets/images/cards-logos.png";
import profile from "../../assets/images/default-profile.png";
import {
  XMarkIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [showApplyButton, setShowApplyButton] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showPromoInput, setShowPromoInput] = useState(true);
  const [showContent, setShowContent] = useState(1);

  const handlePromoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPromoCode(value);
    setShowApplyButton(value.length > 0);
    if (isApplied) {
      setIsApplied(false);
    }
    if (showError) {
      setShowError(false);
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.length >= 4) {
      setIsApplying(true);
      setTimeout(() => {
        setIsApplying(false);
        setIsApplied(true);
        setShowPromoInput(false);
      }, 2500);
    } else {
      setShowError(true);
    }
  };

  const handleChangeCode = () => {
    setShowPromoInput(true);
    setIsApplied(false);
    setPromoCode("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {showContent === 1 ? (
        <>
          <div className="flex items-center gap-2 mb-3">
            <XMarkIcon
              className="w-6 h-6 cursor-pointer"
              onClick={() => navigate("/upgrade")}
            />
            <h1 className="text-xl font-semibold">Payment Details</h1>
          </div>
          <p className="text-gray-500 mb-6 text-sm">
            Aspernatur aut odit aut fugit, sed quia conseq uuntur magni dolores
          </p>

          <div className="mb-8">
            <h2 className="text-sm font-semibold mb-2">Your Plan</h2>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BoltIcon className="w-5 h-5 text-dark-100" />
                  <span className="font-semibold text-dark-70">Pro</span>
                </div>
                <CheckCircleIcon className="w-7 h-7 text-primaryGreen-100" />
              </div>
              <div className="flex items-end gap-2 mt-4">
                <span className="text-3xl ">$190.99</span>
                <span className="text-dark-70 text-sm">
                  USD{" "}
                  <span className="text-sm font-semibold text-dark-100">
                    (Per year)
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="w-full p-2 border rounded-md "
                  />
                  <img
                    src={logos}
                    alt="cards-logos"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-28 h-4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Expiry
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Account Title"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-sm font-semibold mb-1">
                  Country or region
                </h3>
                <div className="flex border rounded-md  ">
                  <div className="w-24">
                    <select className="w-full p-2.5">
                      <option>UK</option>
                      <option>US</option>
                    </select>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Enter zip code"
                      className="w-full p-2 "
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>Subtotal</span>
              <span className="">$190.00</span>
            </div>

            <div className="flex justify-between items-center text-primaryGreen-100/90">
              <span>Yearly plan discount</span>
              <span>-$84.00</span>
            </div>

            <div className="flex items-center gap-4">
              {showPromoInput ? (
                <div className="flex items-center gap-2">
                  <span>Got a promo code?</span>

                  <div className="flex relative">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={handlePromoChange}
                      placeholder="Promo code"
                      className={`w-full p-2 border rounded-md ${
                        showError ? "border-red-500" : ""
                      }`}
                    />
                    {showApplyButton && !isApplied && (
                      <button
                        onClick={handleApplyPromo}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-primaryOrange-100 font-semibold"
                      >
                        {isApplying ? (
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25 fill-white"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="fill-primaryOrange-100"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        ) : (
                          "Apply"
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex-1 text-nowrap">
                  <div className="flex">
                    <div className="flex items-center gap-2">
                      <span className="text-dark-100">
                        Promo code applied ({promoCode})
                      </span>
                      <span className="bg-green-100 text-semantic-success px-2 py-0.5 rounded text-xs font-semibold">
                        You saved 20%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-primaryGreen-100/90 ">
                    <button
                      onClick={handleChangeCode}
                      className="text-primaryOrange-100 text-sm font-semibold hover:text-primaryOrange-100/80"
                    >
                      Change Code
                    </button>
                    <span>-$30.00</span>
                  </div>
                </div>
              )}
            </div>
            {showError && (
              <div className="flex justify-center items-center">
                <p className="text-sm text-red-500 max-w-60">
                  You entered an invalid or expired promo code. Please check the
                  code and try again
                </p>
              </div>
            )}

            <div className="flex justify-between items-center py-4 border-t font-semibold">
              <span>Billed Now</span>
              <span>$144.00</span>
            </div>

            <p className="text-sm text-gray-500">
              Any terms and conditions text goes here Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim v
            </p>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 order-2 lg:order-1">
                <ShieldCheckIcon className="w-5 h-5" />
                <span>Pay securely lorem ipsum</span>
              </div>
              <button
                onClick={() => setShowContent(2)}
                className="w-full lg:w-auto bg-primaryOrange-100 text-white px-12 py-2.5 rounded-md font-semibold order-1 lg:order-2"
              >
                Pay Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className=" space-y-6 items-center flex justify-center flex-col">
          <div className="relative w-24 h-24 mb-3">
            <img
              src={profile}
              alt="profile"
              className="w-24 h-24 rounded-full border border-primaryOrange-100"
            />
            <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primaryOrange-100 flex items-center justify-center">
              <BoltIcon className="w-4 h-4 text-white" />
            </div>
          </div>

          <p className="text-dark-100 font-semibold text-xl">
            You're a pro Labman
          </p>
          <div className="text-dark-70 border-b border-dark-20 pb-4">
            Thanks for being a Pro! Email confirmation of your order is on the
            way.
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-dark-70 text-sm ">
              Your subscription will renew on{" "}
              <span className="text-dark-100">January 23, 2024.</span>
            </p>
          </div>
          <button
            className="w-full bg-primaryOrange-100 text-white px-12 py-2.5 rounded-md font-semibold"
            onClick={() => navigate("/dashboard")}
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;

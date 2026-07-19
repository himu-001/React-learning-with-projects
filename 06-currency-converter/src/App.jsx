import { useState } from "react";
import InputBox from "./component/InputBox";
import useCurrencyInfo from "./customHooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    const prevFrom = from;
    const prevTo = to;
    const prevAmount = amount;
    const prevConverted = convertedAmount;

    setFrom(prevTo);
    setTo(prevFrom);
    setAmount(prevConverted);
    setConvertedAmount(prevAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-6xl h-[650px] flex bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Converter */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-white to-slate-100 p-10">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Currency Converter
            </h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-3">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  selectCurrency={from}
                  onCurrencyChange={setFrom}
                  onAmountChange={setAmount}
                />
              </div>

              <div className="relative h-10 flex justify-center items-center">
                <button
                  type="button"
                  onClick={swap}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  ⇄ Swap
                </button>
              </div>

              <div className="w-full mt-3 mb-6">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  selectCurrency={to}
                  onCurrencyChange={setTo}
                  amountDisabled
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                Convert {from.toUpperCase()} → {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 relative">
          <img
            src="https://images.pexels.com/photos/38408903/pexels-photo-38408903.jpeg"
            alt="Currency Exchange"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25"></div>

          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-4xl font-bold">Exchange Money</h2>
            <p className="mt-3 text-lg text-gray-200">
              Fast • Secure • Live Exchange Rates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

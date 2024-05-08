import Link from "next/link";
export default function Checkout() {
    return (
        <div className="flex gap 10 bg-slate-300 w-full">
            
            <div className="flex-1 w-[60%] bg-white min-h-[100vh] p-10">
                <Link href="/event">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 ml-20 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </Link>
                

                <h1 className="text-5xl font-bold mb-10 w-full text-center">Checkout</h1>
                <div className="w-[75%] mx-auto mb-8">
                    <label className="block text-xl mb-3">Email Address <span className="text-red-600">*</span></label>
                    <input className="block w-full border-2 border-slate-300 rounded-md px-2 py-1 text-xl shadow-sm focus:outline-indigo-500" type="Text"/>
                </div>
                <div className="w-[75%] mx-auto mb-8">
                    <label className="block text-xl mb-3">Confirm Email Address <span className="text-red-600">*</span></label>
                    <input className="block w-full border-2 border-slate-300 rounded-md px-2 py-1 text-xl shadow-sm focus:outline-indigo-500" type="Text"/>
                </div>
                <div className="w-[75%] mx-auto mb-8">
                    <label className="block text-xl mb-3">Name on card <span className="text-red-600">*</span></label>
                    <input className="block w-full border-2 border-slate-300 rounded-md px-2 py-1 text-xl shadow-sm focus:outline-indigo-500" type="Text"/>
                </div>
                <div className="w-[75%] mx-auto mb-8">
                    <label className="block text-xl mb-3">Card Number <span className="text-red-600">*</span></label>
                    <input className="block w-full border-2 border-slate-300 rounded-md px-2 py-1 text-xl shadow-sm focus:outline-indigo-500" type="Text"/>
                </div>

                <div className="w-[75%] mx-auto mb-8 flex gap-5">
                    <div className="w-[50%]">
                        <label className="block text-xl mb-3">Expiry Date (MM/YY) <span className="text-red-600">*</span></label>
                        <input className="block w-full border-2 border-slate-300 rounded-md px-2 py-1 text-xl shadow-sm focus:outline-indigo-500" type="Text"/>
                    </div>
                    <div className="w-[50%]">
                        <label className="block text-xl mb-3">CVC <span className="text-red-600">*</span></label>
                        <input className="block w-full border-2 border-slate-300 rounded-md px-2 py-1 text-xl shadow-sm focus:outline-indigo-500" type="Text"/>
                    </div>
                </div>
                <button className="w-[75%] mx-auto bg-indigo-500 block font-bold p-2 rounded-lg text-xl text-white hover:bg-indigo-900">
                    Pay $200
                </button>


            </div>
            <div className="w-[30%]">
                <div className="bg-white mx-auto w-[80%] p-5 mt-10">
                    <h2 className="text-2xl font-semibold mb-10">Order Summary</h2>
                    <div className="flex border-b-2 border-slate-900 pb-5 px-4 flex-wrap">
                        <div className="w-[50%]">
                            <p>x1 Event Title Ticket</p>
                        </div>
                        <div className="w-[50%]">
                            <p className=" text-right w-full">$100</p>
                        </div>
                        <div className="w-[50%]">
                            <p>x1 Event Title Ticket</p>
                        </div>
                        <div className="w-[50%]">
                            <p className=" text-right w-full">$100</p>
                        </div>
                        
                    </div>
                    <div className="flex px-4 mt-3 text-2xl">
                        <div className="w-[50%]">
                            <p>Total</p>
                        </div>
                        <div className="w-[50%]">
                            <p className=" text-right w-full font-semibold">$200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
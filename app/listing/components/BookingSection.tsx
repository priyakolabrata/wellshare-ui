
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";

const BookingSection = () => {
  const [bookingType, setBookingType] = useState('casual');
  const [frequency, setFrequency] = useState('weekly');
  const [term, setTerm] = useState('1month');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Card className="p-6 md:p-10 bg-white rounded-[38px] shadow">
        {/* Booking Type Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-3 bg-[#f4f3e8] rounded-full">
            <button 
              className={`px-6 py-3 rounded-full transition-colors ${
                bookingType === 'casual' 
                  ? 'bg-white text-[#4f4f4f]' 
                  : 'text-[#4f4f4f] hover:bg-white/50'
              }`}
              onClick={() => setBookingType('casual')}
            >
              <span className="text-lg font-semibold">Casual</span>
            </button>
            <button 
              className={`px-6 py-3 rounded-full transition-colors ${
                bookingType === 'regular' 
                  ? 'bg-white text-[#4f4f4f]' 
                  : 'text-[#4f4f4f] hover:bg-white/50'
              }`}
              onClick={() => setBookingType('regular')}
            >
              <span className="text-lg font-semibold">Regular</span>
            </button>
          </div>
        </div>

        {/* Main Booking Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column - Booking Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Frequency Selection */}
            <div className="space-y-3">
              <label className="block text-[#4f4f4f] font-semibold">
                Select Frequency
              </label>
              <div className="flex flex-wrap gap-3">
                <button 
                  className={`px-8 py-3 rounded-full border border-[#928f8c]/30 transition-colors ${
                    frequency === 'daily' 
                      ? 'bg-[#64775e] text-white' 
                      : 'hover:bg-[#f4f3e8]'
                  }`}
                  onClick={() => setFrequency('daily')}
                >
                  Daily
                </button>
                <button 
                  className={`px-8 py-3 rounded-full border border-[#928f8c]/30 transition-colors ${
                    frequency === 'weekly' 
                      ? 'bg-[#64775e] text-white' 
                      : 'hover:bg-[#f4f3e8]'
                  }`}
                  onClick={() => setFrequency('weekly')}
                >
                  Weekly
                </button>
              </div>
            </div>

            {/* Term Selection */}
            <div className="space-y-3">
              <label className="block text-[#4f4f4f] font-semibold">
                Select Term
              </label>
              <div className="flex flex-wrap gap-3">
                {['1 Month', '6 Months', '12 Months'].map((termOption) => (
                  <button 
                    key={termOption}
                    className="px-8 py-3 rounded-full border border-[#928f8c]/30 hover:bg-[#f4f3e8] transition-colors"
                  >
                    {termOption}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar Section */}
            <div className="space-y-3">
              <label className="block text-[#4f4f4f] font-semibold">
                Select Start Date
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-x-auto">
                {/* Calendar Component Goes Here */}
                {/* You can use a calendar library like react-datepicker */}
              </div>
              {/* Calendar Legend */}
              <div className="flex flex-wrap gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full border border-[#928f8c]/30 bg-white" />
                  <span className="text-[#4f4f4f]">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#928f8c]/50" />
                  <span className="text-[#4f4f4f]">Join Waiting List</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#928f8c]/50" />
                  <span className="text-[#4f4f4f]">Not Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:border-l lg:border-[#928f8c]/30 lg:pl-10">
            <div className="space-y-6">
              <h3 className="text-center text-[#4f4f4f] font-semibold">
                Booking Summary
              </h3>
              
              {/* Booking Details */}
              <div className="space-y-6">
                {[1, 2].map((booking) => (
                  <div key={booking} className="space-y-4">
                    <h4 className="font-semibold text-[#4f4f4f]">
                      Minimalist Treatment Room
                    </h4>
                    <div className="space-y-2 text-sm text-[#4f4f4f]">
                      <p>October 1, 2024 - October 30, 2024</p>
                      <p>30 Days</p>
                      <p className="font-semibold">$140.00</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="space-y-3 pt-6 border-t border-[#928f8c]/30">
                <div className="flex justify-between font-semibold">
                  <span>Due Now</span>
                  <span>$1,245.00</span>
                </div>
                {['Deposit', 'Additional Charges', 'Tax'].map((item) => (
                  <div key={item} className="flex justify-between text-sm text-[#928f8c]">
                    <span>{item}:</span>
                    <span>$1,245.00</span>
                  </div>
                ))}
                <div className="flex justify-between font-semibold pt-3">
                  <span>Total Due</span>
                  <span>$1,245.00</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <button className="text-sm text-[#928f8c] w-full text-center">
                  Add another booking
                </button>
                <button className="w-full px-8 py-4 bg-[#64775e] text-white font-semibold rounded-full hover:bg-[#64775e]/90 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookingSection;


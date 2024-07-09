import React, { useState } from "react";
import { Button } from "react-bootstrap";

const BookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [insurance, setInsurance] = useState(false);
  const [childSeat, setChildSeat] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <form className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700">Pick-up Location</label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Drop-off Location</label>
        <input
          type="text"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Additional Options</label>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={insurance}
            onChange={(e) => setInsurance(e.target.checked)}
            className="mr-2"
          />
          <span>Insurance</span>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={childSeat}
            onChange={(e) => setChildSeat(e.target.checked)}
            className="mr-2"
          />
          <span>Child Seat</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      {/* <div className="mb-4">
        <label className="block text-gray-700">Payment Details</label>
        <div className="p-2 border rounded" />
      </div> */}
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Submit
      </Button>
    </form>
  );
};

export default BookingForm;

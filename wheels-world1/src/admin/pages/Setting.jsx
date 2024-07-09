import React from 'react';

const Settings = () => {
  return (
    <div className="mt-24 px-8 pb-12">
      <div className="p-5 rounded-md bg-primary-color">
        <h2 className="text-heading-color font-medium mb-6">Settings</h2>
        <div className="flex items-center gap-8 mb-6">
          <button className="border-none px-6 py-2 bg-transparent rounded-md text-heading-color text-base cursor-pointer">My Details</button>
          <button className="border-none px-6 py-2 bg-transparent rounded-md text-heading-color text-base cursor-pointer active_btn">Profile</button>
          <button className="border-none px-6 py-2 bg-transparent rounded-md text-heading-color text-base cursor-pointer">Password</button>
          <button className="border-none px-6 py-2 bg-transparent rounded-md text-heading-color text-base cursor-pointer">Email</button>
          <button className="border-none px-6 py-2 bg-transparent rounded-md text-heading-color text-base cursor-pointer">Notification</button>
        </div>
        <div className="details_form">
          <h2 className="text-heading-color font-medium mb-1.5">Profile</h2>
          <p className="text-small-text-color mb-8">Update your photo and personal details here</p>
          <form>
            <div className="flex items-center justify-between gap-8 mb-8 text-white">
              <div className="flex flex-col w-1/2">
                <label className="text-heading-color mb-1">Live in</label>
                <input type="text" placeholder="Enter your city" className="w-full p-4 rounded-md bg-transparent border border-gray-300 text-heading-color text-base" />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-heading-color mb-1">Street</label>
                <input type="text" placeholder="Enter Street Name" className="w-full p-4 rounded-md bg-transparent border border-gray-300 text-heading-color text-base" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-8 mb-8 text-white">
              <div className="flex flex-col w-1/2">
                <label className="text-heading-color mb-1">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full p-4 rounded-md bg-transparent border border-gray-300 text-heading-color text-base" />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-heading-color mb-1">Phone Number</label>
                <input type="number" placeholder="Enter your number" className="w-full p-4 rounded-md bg-transparent border border-gray-300 text-heading-color text-base" />
              </div>
            </div>
            <div className="flex items-center justify-between gap-8 mb-8 text-white">
              <div className="flex flex-col w-1/2">
                <label className="text-heading-color mb-1">Date of Birth</label>
                <input type="date" className="w-full p-4 rounded-md bg-transparent border border-gray-300 text-heading-color text-base" />
              </div>
              <div className="flex flex-col w-1/2">
                <label className="text-heading-color mb-1">Gender</label>
                <div>
                  <input type="radio" name="gender" id="male" className="mr-1" />Male
                  <input type="radio" name="gender" id="female" className="ml-4 mr-1" />Female
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-8 mb-8 text-white">
              <div className="flex flex-col w-1/2">
                <label className="text-heading-color mb-1">Your Photo</label>
                <p className="text-small-text-color mb-2.5">This will be displayed in your profile</p>
                <input type="file" className="w-full p-4 rounded-md bg-transparent border border-gray-300 text-heading-color text-base" />
              </div>
              <div className="flex flex-col w-1/2">
                <div className="flex flex-row gap-10">
                  <button className="border-none outline-none bg-transparent text-yellow-300 text-base cursor-pointer">Delete</button>
                  <button className="border-none outline-none bg-transparent text-yellow-300 text-base cursor-pointer">Update</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;

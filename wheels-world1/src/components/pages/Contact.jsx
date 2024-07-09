import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    url: "#",
    icon: <AiFillFacebook />,
  },
  {
    url: "#",
    icon: <AiFillInstagram />,
  },
  {
    url: "#",
    icon: <AiFillLinkedin />,
  },
  {
    url: "#",
    icon: <AiFillTwitterCircle />,
  },
];

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value,
  };

  try {
    const response = await fetch('http://localhost:5500/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

const Contact = () => {
  return (
    <div title="Contact" className="flex bg-gray-100 min-h-screen items-center justify-center p-4">
      <section className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Get In Touch</h2>
          <p className="text-center text-gray-600">We'd love to hear from you! Send us a message using the form below, or email us.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="contact__form">
            <input
              name="name"
              placeholder="Your Name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="contact__form">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="contact__form">
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Contact Information</h3>
          <p className="text-center text-gray-600">Car Market, Udaipur</p>
          <div className="flex flex-col items-center gap-4 my-4">
            <div className="text-center">
              <h6 className="font-bold text-gray-800">Phone:</h6>
              <p className="text-gray-600">+123.....</p>
            </div>
            <div className="text-center">
              <h6 className="font-bold text-gray-800">Email:</h6>
              <p className="text-gray-600">example@gmail.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">Follow Us</h3>
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="text-zinc-00 hover:text-blue-600 transition text-3xl"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

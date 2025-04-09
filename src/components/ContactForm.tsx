import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact Us</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form className="space-y-4 bg-white p-6 rounded-xl shadow">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              SEND
            </button>
          </form>

          {/* Google Map Placeholder */}
          <div className="w-full h-96 bg-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
            Google Map Here (embed iframe if needed)
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

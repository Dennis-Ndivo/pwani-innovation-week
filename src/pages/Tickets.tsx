import React, {Fragment, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';

const Tickets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    agree_terms: false,
    agree_communications: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('https://piw-express.onrender.com/api/waitlist', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSuccess(false);
    setForm({
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      agree_terms: false,
      agree_communications: false,
    });
  };

  return (
    <div className="min-h-screen">

      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white text-center relative">
        <div className="section-container">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Tickets & Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Be among the first to access limited passes for the PIW 2025 experience.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
          >
            Join Waitlist
          </button>
        </div>
      </section>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-2xl font-bold mb-4 text-gray-800">
                    Join the Waitlist
                  </Dialog.Title>

                  {success ? (
                    <div className="text-center">
                      <p className="text-green-600 text-lg mb-4">
                        You’ve been added to the waitlist successfully!
                      </p>
                      <button
                        onClick={closeModal}
                        className="mt-4 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-lg"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex gap-4">
                        <input
                          type="text"
                          name="first_name"
                          placeholder="First Name"
                          value={form.first_name}
                          onChange={handleChange}
                          required
                          className="w-1/2 border border-gray-300 px-4 py-2 rounded-lg"
                        />
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Last Name"
                          value={form.last_name}
                          onChange={handleChange}
                          required
                          className="w-1/2 border border-gray-300 px-4 py-2 rounded-lg"
                        />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                      />
                      <input
                        type="tel"
                        name="phone_number"
                        placeholder="Phone Number"
                        value={form.phone_number}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                      />
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="agree_terms"
                          checked={form.agree_terms}
                          onChange={handleChange}
                          required
                        />
                        <label className="text-sm text-gray-700">
                          I agree to the terms and conditions
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="agree_communications"
                          checked={form.agree_communications}
                          onChange={handleChange}
                          required
                        />
                        <label className="text-sm text-gray-700">
                          I agree to receive communications
                        </label>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-lg font-semibold flex justify-center items-center"
                      >
                        {loading ? (
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            ></path>
                          </svg>
                        ) : (
                          'Submit'
                        )}
                      </button>
                    </form>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Tickets;
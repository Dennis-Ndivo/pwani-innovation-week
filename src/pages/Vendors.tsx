import React, {useState} from 'react';

const Vendors = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    agree_terms: false,
    agree_communications: false,
    business_name: '',
    business_address: '',
    is_registered: false,
    business_phone: '',
    business_email: '',
    vendor_type: 'food',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value, type, checked} = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://piw-express.onrender.com/api/vendors', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setSubmitted(true);
      setForm({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        agree_terms: false,
        agree_communications: false,
        business_name: '',
        business_address: '',
        is_registered: false,
        business_phone: '',
        business_email: '',
        vendor_type: 'food',
      });
    }
  };

  return (
    <div className="min-h-screen">

      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-purple-100/50 to-white text-center">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Vendor Application
          </h1>
          <p className="text-xl text-gray-700 max-w-xl mx-auto">
            Register your business to participate in PIW 2025 as a vendor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="section-container max-w-3xl">
          {submitted ? (
            <div className="text-center">
              <p className="text-green-600 text-lg mb-4">
                Application submitted successfully!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 rounded-lg"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number"
                  value={form.phone_number}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
              </div>

              <input
                type="text"
                name="business_name"
                placeholder="Business Name"
                value={form.business_name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />

              <input
                type="text"
                name="business_address"
                placeholder="Business Address"
                value={form.business_address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="business_phone"
                  placeholder="Business Phone"
                  value={form.business_phone}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
                <input
                  type="email"
                  name="business_email"
                  placeholder="Business Email"
                  value={form.business_email}
                  onChange={handleChange}
                  required
                  className="border border-gray-300 px-4 py-2 rounded-lg"
                />
              </div>

              <select
                name="vendor_type"
                value={form.vendor_type}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              >
                <option value="food">Food Vendor</option>
                <option value="crafts">Crafts Vendor</option>
                <option value="tech">Tech Exhibitor</option>
                <option value="services">Services Provider</option>
              </select>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="is_registered"
                  checked={form.is_registered}
                  onChange={handleChange}
                />
                <label className="text-sm text-gray-700">Business is officially registered</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree_terms"
                  checked={form.agree_terms}
                  onChange={handleChange}
                  required
                />
                <label className="text-sm text-gray-700">I agree to the terms and conditions</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agree_communications"
                  checked={form.agree_communications}
                  onChange={handleChange}
                  required
                />
                <label className="text-sm text-gray-700">I agree to receive communications</label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-lg font-semibold"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default Vendors;

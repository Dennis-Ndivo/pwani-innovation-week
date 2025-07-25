import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar.tsx';
import Footer from '@/components/Footer.tsx';
import { useNavigate } from 'react-router-dom';

const SpeakerApplicationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        phone_number: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        gender: '',
        country: '',
        location: '',
        thematic_area: '',
        session_type: '',
        session_title: '',
        session_description: '',
        target_audience: '',
        target_type: '',
        audience_engagement: '',
        agree_terms: false,
        agree_communications: false,
        delivery_type: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/speakers', formData);
            navigate('/speaker-success');
        } catch (error) {
            alert(error.response?.data?.error || 'Submission failed');
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="section-container py-20">
                <h1 className="text-3xl font-bold mb-6 text-center">Speaker Application Form</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.keys(formData).map((key) => (
                        key !== 'agree_terms' && key !== 'agree_communications' ? (
                            <input
                                key={key}
                                name={key}
                                type="text"
                                placeholder={key.replace(/_/g, ' ')}
                                value={formData[key]}
                                onChange={handleChange}
                                className="border p-3 rounded"
                                required
                            />
                        ) : null
                    ))}

                    <label className="flex items-center col-span-2">
                        <input
                            type="checkbox"
                            name="agree_terms"
                            checked={formData.agree_terms}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        I agree to the terms
                    </label>

                    <label className="flex items-center col-span-2">
                        <input
                            type="checkbox"
                            name="agree_communications"
                            checked={formData.agree_communications}
                            onChange={handleChange}
                            className="mr-2"
                            required
                        />
                        I agree to receive communications
                    </label>

                    <button type="submit" className="col-span-2 bg-[#F97316] text-white py-3 rounded font-semibold hover:shadow-lg">
                        Submit Application
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default SpeakerApplicationForm;

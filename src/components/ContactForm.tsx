'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import type { RootState, AppDispatch } from '@/redux/store';
import { submitForm } from '@/redux/features/formThunk';

export default function ContactForm() {
  const dispatch = useDispatch<AppDispatch>();
  const { submitting, success, error } = useSelector((state: RootState) => state.form);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(submitForm(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>

      {success && <p className="text-green-500">Form submitted successfully!</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
    </form>
  );
}

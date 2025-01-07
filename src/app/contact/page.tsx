"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
  };

  // Validation des champs du formulaire
  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de l’envoi du message.');
      }

      setSuccessMessage('Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' }); // Réinitialiser le formulaire
    } catch (error) {
      setErrorMessage((error as Error).message || 'Une erreur est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen bg-[url('/img/bkgd_black-and-colored-spots.png')] bg-no-repeat bg-center bg-cover bg-[size:33%] bg-[position:center top-20%] md:bg-[url('/img/colored_spots.png')] md:bg-[position:center_0%]">
      <div style={{ height: '150px' }}></div>
      <h1 className="text-4xl font-bold text-navTitle text-shadow mt-[0px]">Me contacter</h1>
      <p className="text-red-500 text-sm mt-2 font-quicksand">* champs obligatoires</p>

      <div id="contact-form" className="w-full max-w-md mt-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            {/* Champ Nom */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                className={`p-2 border rounded-md w-full text-gray-900 focus:outline-none focus:ring-0 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <span className="absolute right-2 top-2 text-red-500 text-lg">*</span>
              {errors.name && <p className="text-red-500 text-sm mt-1">Le nom est requis.</p>}
            </div>

            {/* Champ Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                className={`p-2 border rounded-md w-full text-gray-900 focus:outline-none focus:ring-0 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <span className="absolute right-2 top-2 text-red-500 text-lg">*</span>
              {errors.email && <p className="text-red-500 text-sm mt-1">Un email valide est requis.</p>}
            </div>

            {/* Champ Message */}
            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                rows={5}
                className={`p-2 border rounded-md w-full text-gray-900 focus:outline-none focus:ring-0 ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              <span className="absolute right-2 top-2 text-red-500 text-lg">*</span>
              {errors.message && <p className="text-red-500 text-sm mt-1">Le message est requis.</p>}
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`p-2 rounded-md text-white ${
                isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>

            {/* Messages de feedback */}
            {successMessage && <p className="text-green-500 text-sm mt-4">{successMessage}</p>}
            {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

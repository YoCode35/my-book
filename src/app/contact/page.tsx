import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-[url('/img/bkgd_black-and-colored-spots.png')] bg-no-repeat bg-center bg-cover bg-[size:33%] bg-[position:center top-20%] md:bg-[url('/img/colored_spots.png')] md:bg-[position:center_0%]">
      <div style={{ height: '50px' }}></div>
      <h1 className="text-4xl font-bold text-navTitle text-shadow mt-[0px]">Me contacter</h1>
      <p className="text-red-500 text-sm mt-2 font-quicksand">* champs obligatoires</p>

      <div id="contact-form" className="w-full max-w-md mt-8">
        <form>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
              <span className="absolute right-2 top-2 text-red-500 text-lg">*</span>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                className="p-2 border border-gray-300 rounded-md w-full"
              />
              <span className="absolute right-2 top-2 text-red-500 text-lg">*</span>
            </div>
            <div className="relative">
              <textarea
                name="message"
                placeholder="Votre message"
                rows={5}
                className="p-2 border border-gray-300 rounded-md w-full"
              ></textarea>
              <span className="absolute right-2 top-2 text-red-500 text-lg">*</span>
            </div>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

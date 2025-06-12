import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full  py-20 px-6 sm:px-16">
      <div className="max-w-[800px] text-white text-left">
        <h2 className="text-6xl sm:text-6x1 font-bold mb-4">
          — Restou alguma dúvida ?
        </h2>
        <p className="text-dimWhite text-[25px] leading-relaxed mb-8">
          Deixe que nosso time entra em contato com Você em minutos. Ah! e nada de bots, a comunicação são feitas com humanos para um melhor atendimento e poupança de seu tempo!
        </p>

        <label className="block text-gray-300 text-lg font-semibold mb-2" htmlFor="email">
          Seu melhor email :
        </label>
        <input
          type="email"
          id="email"
          placeholder="seuemailaqui@gmail.com"
          className="w-full max-w-[400px] bg-[#1F1F1F] text-white px-4 py-3 rounded-md placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </section>
  );
};

export default ContactSection;

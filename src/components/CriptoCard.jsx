import React from 'react';
import { videocripto } from '../assets';

const CriptoCard = () => {
  return (
    <section className="w-full bg-cover bg-center py-32 px-6 sm:px-16 rounded-[30px] my-10 min-h-[700px] background_image">
      <div className="max-w-[1380px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Texto à esquerda */}
        <div className="flex-1 text-white">
          <h2 className="text-[49px] font-bold mb-6 ss:leading-[60.8px]">
            — Invista em <br />
             Criptomoedas direto <br />da BDG
          </h2>
          <p className='text-gray-400'>Compre, venda e armazene Bitcoin e outras criptomoedas com total
          segurança. Taxa zero para sua primeira compra!</p>
          <ul className="text-dimWhite text-[16px] leading-loose list-disc list-inside mt-4">
            <li>Biticoin (BTC) a moeda mais valorizada do mundo</li>
            <li>Tether (USDT)</li>
            <li>BULLDOGITO</li>
          </ul>
        </div>

        {/* Vídeo à direita */}
        <div className="flex-1 flex justify-center items-center">
          <video
            src={videocripto}
            className="w-full h-full rounded-lg"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default CriptoCard;

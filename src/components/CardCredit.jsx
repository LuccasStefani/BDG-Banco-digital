import React from 'react';
import { creditcard } from '../assets';
import styles from '../style';
const CardCredit = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-32 px-5 sm:px-16 rounded-[30px] my-10 min-h-[700px] background_image ">
      <div className="max-w-[1380px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Texto à esquerda */}
        <div className="flex-1 text-white">
        <h2 className={`${styles.heading2} mb-6 ss:leading-[60.8px]`}>
            — Reformule sua <br />
            experiência bancária <br />
            com cartões financeiros
          </h2>
          <ul className="text-dimWhite text-[16px] leading-loose list-disc list-inside mt-4">
            <li>- Anuidade ZERO para sempre</li>
            <li>- Limite pré-aprovado até R$ 50.000</li>
            <li>- Aceito em todo o mundo</li>
            <li>- Controle total pelo app</li> 
          </ul>
        </div>

        {/* Imagem do cartão à direita */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={creditcard}
            alt="Cartão"
            className="w-full max-w-[420px] sm:max-w-[330px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CardCredit;

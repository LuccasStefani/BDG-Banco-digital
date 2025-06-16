import styles from "../style";
import { arrowright, discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[25px] h-[25px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Junta-se</span> ao {" "}
            <span className="text-white">Futuro</span> com BDG 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[45px] text-white ss:leading-[80.8px] leading-[65px]">
            A próxima Geração<br className="sm:block hidden" />{" "}
            para <span className="span__orange">métodos </span>{" "} de
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[62px] text-[45px] text-white ss:leading-[100.8px] leading-[65px] w-full">
           pagamentos
        </h1>
        <p className={`${styles.paragraph} max-w-[670px] mt-5 `}>
         Revolucione sua vida financeira com o banco 100% digital mais inovador do Brasil. Sem taxas escondidas, com tecnologia de ponta e atendimento humanizado.
        </p>
        <button className="mt-[20px] bg-[transparet] border text-white font-medium py-4 px-10 flex gap-2
         rounded-[10px] shadow-md hover:brightness-110 transition-all text-[16px]">
          Converse com um especialista <img src={arrowright} />
        </button>
 

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
        <div className="absolute z-0 w-[300px] h-[300px] left-[-160%] rounded-full pink__gradient"/>
        {/* gradient end */}
      </div>
 
    </section>
  );
};

export default Hero;

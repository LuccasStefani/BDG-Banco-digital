import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} id="maquina">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Mais que uma maquininha de cartão: <br className="sm:block hidden" /> uma revolução para cliente BDG
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Aceite pagamentos com cartão de crédito e débito com as menores
      taxas do mercado. Tecnologia avançada para impulsionar suas vendas.
      </p>

      <button
    type="button"
    className={`mt-10 py-4 px-6 font-poppins font-medium text-[18px] text-white border hover:bg-[#42429B] transition duration-300 rounded-[10px] outline-none ${styles}`}
  >
    Solicite uma Maquininha
  </button>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

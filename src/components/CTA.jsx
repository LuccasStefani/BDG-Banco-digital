import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#42429B] rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}> Pronto para elevar sua vida financeira ?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Junte-se a milhões de brasileiros que já escolheram a liberdade
      financeira
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-black hover:border bg-[#F9A34E] hover:bg-[#42429B] hover:text-white transition duration-300 rounded-[10px] outline-none ${styles}`}
  >
    Começe hoje mesmo!
  </button>
    </div>
  </section>
);

export default CTA;

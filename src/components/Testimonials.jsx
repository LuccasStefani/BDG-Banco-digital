import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full orange__gradient blur-[90px] bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        O que nossos dizem<br className="sm:block hidden" /> dizem
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Tudo que você precisa para aceitar pagamentos com cartão e expandir seus negócios em qualquer lugar do planeta.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;

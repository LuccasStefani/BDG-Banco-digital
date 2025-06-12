import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import CardCredit from "./components/CardCredit";
import CriptoCard from "./components/CriptoCard";
import Contato from "./components/Contato";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}  mt-10`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <CardCredit />
        <Billing />
        <CardDeal />
        <CriptoCard />
        <Testimonials />
        <Clients />
        <Contato />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;

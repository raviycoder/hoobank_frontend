/* eslint-disable no-unused-vars */
import styles from "./style";
import {
  NavBar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

function App() {
  return (
    <>
      <div className=" bg-primary w-full overflow-hidden text-white">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>
        <div className={` bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats /> 
            <Business /> 
            <Billing /> 
            <CardDeal /> 
            <Testimonials />
            <Clients /> 
            <CTA /> 
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

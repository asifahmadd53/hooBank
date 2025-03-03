import React from "react";
import styles from "./style";
import { Navbar,  Billing, Button,CardDeal,Testimonial, Clients,Stats,CTA,Footer,Hero,
} from "./Components";
import Business from "./Components/Business";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}
      >     
      <Stats/>
      <Business/>  
      <Billing/> 
      <Button/>
      <CardDeal/>
      <Testimonial />
      <Clients/>
      <CTA/>
      <Footer/>
      

        </div>
      </div>
    </div>
  );
};

export default App;

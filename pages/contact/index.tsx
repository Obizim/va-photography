import { NextPage } from "next";
import styles from "./contact.module.css";

const Contact: NextPage = () => {
  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>
        Need me to cover an event? <br /> Let's work together.{" "}
      </h1>

      <div className={styles.contact_content}>
          <div>
              <p>Whataspp/Call</p>
              <a href="tel:+2348167154563" className="">+23490325679</a>
          </div>
          <div>
              <p>Email</p>
              <a href="mailto:victorabiola@gmail.com">victorabiola@gmail.com</a>
          </div>
          <div>
              <p>Whataspp/Call</p>
              <a href="https://twitter.com/zimway_" className="">@Vict0rr_</a>
          </div>
      </div>
    </section>
  );
};

export default Contact;

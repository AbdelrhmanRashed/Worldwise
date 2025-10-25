import ReactCountryFlag from "react-country-flag";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <ReactCountryFlag
        countryCode={country.code}
        svg
        className={styles.emoji}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

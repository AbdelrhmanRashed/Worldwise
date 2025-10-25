import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";
import styles from "./CityItem.module.css";
import ReactCountryFlag from "react-country-flag";

const CityItem = ({ city, currentCityID, deleteCity }) => {
  const { cityName, date, code, id, position } = city;

  const handleClick = (e) => {
    e.preventDefault();
    deleteCity(id);
  };
  return (
    <li>
      {/* id must be a string */}
      <Link
        className={`${styles.cityItem} ${
          currentCityID === id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <ReactCountryFlag countryCode={code} svg className={styles.emoji} />
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
};

export default CityItem;

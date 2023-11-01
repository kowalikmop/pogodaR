import "./contener.css";
import Sun from "../assets/sun.png";
import Beach from "../assets/beach.png";
import Sunhappy from "../assets/sunhappy.png";
import Degrees from "../assets/c.png";

const Contener = () => {
  const month = ["sierpniu", "wrześniu"];
  return (
    <div className="contener">
      <div className="title">
        <div className="title__text">
          Średnia temperatura w {month[0]}
        </div>
        <div className="title__button">Rozwiń</div>
      </div>
      <div className="article">
        <div className="section">
          <div className="section__picture">
            {" "}
            <img src={Sun} alt="Sun" />
          </div>
          <div className="section__text">17</div>
          <div className="section__picture--degrees">
            {" "}
            <img src={Degrees} alt="Degrees" />
          </div>
          <div className="section__text--title">Temperatura dzień/noc</div>
        </div>
        <div className="section">
          <div className="section__picture">
            {" "}
            <img src={Beach} alt="Beach" />
          </div>
          <div className="section__text">17</div>
          <div className="section__picture--degree">
            {" "}
            <img src={Degrees} alt="Degrees" />
          </div>
          <div className="section__text--title">Temperatura dzień/noc</div>
        </div>
        <div className="section">
          <div className="section__picture">
            {" "}
            <img src={Sunhappy} alt="Sunhappy" />
          </div>
          <div className="section__text">17</div>
          <div className="section__picture--degree">
            {" "}
            <img src={Degrees} alt="Degrees" />
          </div>
          <div className="section__text--title">Temperatura dzień/noc</div>
        </div>
      </div>
    </div>
  );
};

export default Contener;

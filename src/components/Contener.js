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
        <h1>Średnia temperatura w {month[0]}</h1>
        <p>Rozwiń</p>
      </div>
      <div className="article">
        <div className="section">
          <div className="picture">
            {" "}
            <img src={Sun} alt="Sun" />
          </div>
          <p>17</p>
          <div className="degrees"> {" "}
            <img src={Degrees} alt="Degrees" /></div>
          <div className="degrees_title">Temperatura dzień/noc</div>
        </div>
        <div className="section">
        <div className="picture">
            {" "}
            <img src={Beach} alt="Beach" />
          </div>
          <p>17</p>
          <div className="degrees">            
            {" "}
            <img src={Degrees} alt="Degrees" /></div>
          <div className="degrees_title">Temperatura dzień/noc</div>
        </div>
        <div className="section">
        <div className="picture">
            {" "}
            <img src={Sunhappy} alt="Sunhappy" />
          </div>
          <p>17</p>
          <div className="degrees">
            {" "}
            <img src={Degrees} alt="Degrees" />
          </div>
          <div className="degrees_title">Temperatura dzień/noc</div>
        </div>
      </div>
    </div>
  );
};

export default Contener;

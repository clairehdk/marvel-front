import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../component/Loader";

const CharDetails = () => {
  const [data, setData] = useState({});
  const { characterId } = useParams();
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://my-marvel-backend.herokuapp.com/comics/${characterId}`
        );
        console.log(response.data);
        setData(response.data);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="chardetails">
      <Link to="/characters">
        <button>Retour</button>
      </Link>
      <h2>LE PERSONNAGE</h2>
      <div className="perso">
        <div>
          <img
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt={data.name}
          />
        </div>
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
        </div>
      </div>
      <h2>COMICS LIÉS</h2>
      <div className="comics_link">
        {data.comics.map((detail) => {
          return (
            <div key={detail._id} className="comic_link">
              <img
                src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`}
                alt={detail.title}
              ></img>
              <h3>{detail.title}</h3>
              {/* <span>{detail.description}</span> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharDetails;

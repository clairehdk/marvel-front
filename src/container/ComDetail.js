import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../component/Loader";

const CharDetails = () => {
  const [data, setData] = useState({});
  const { comicId } = useParams();
  const [isLoading, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://my-marvel-backend.herokuapp.com/comic/${comicId}`
        );
        console.log(response.data);
        setData(response.data);
        setLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [comicId]);
  return isLoading ? (
    <Loader />
  ) : (
    <div className="chardetails">
      <Link to="/comics">
        <button>Retour</button>
      </Link>
      <h2>LE COMIC BOOK</h2>
      <div className="perso">
        <div>
          <img
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt={data.title}
          />
        </div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharDetails;

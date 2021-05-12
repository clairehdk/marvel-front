import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const CharDetails = () => {
  const [data, setData] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/comics/${characterId}`
        );
        console.log(response.data);
        setData(response.data);
        // setLoader(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [characterId]);
  return (
    <div>
      <div>
        <img
          //   src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.name}
        />
      </div>
      <div>
        <h1>{data.name}</h1>
        <h1>{data.description}</h1>
      </div>
      {data.comics.map((detail) => {
        return <span key={detail._id}>{detail.description}</span>;
      })}
    </div>
  );
};

export default CharDetails;

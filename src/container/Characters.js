import { useEffect, useState } from "react";
import axios from "axios";
import Limit from "../component/Limit";
import Character from "../component/Character";

const Characters = ({ name, skip, limit, setLimit }) => {
  const [data, setData] = useState({});
  const [isLoading, setLoader] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/characters?name=${name}&skip=${skip}&limit=${limit}`
        );
        console.log(response.data);
        setData(response.data);
        setLoader(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, [name, skip, limit]);
  return isLoading ? (
    <span>En cours de chargement</span>
  ) : (
    <div className="container">
      <Limit count={data.count} setLimit={setLimit} />
      <div className="comics">
        {data.results.map((character) => {
          return <Character key={character._id} character={character} />;
        })}
      </div>
    </div>
  );
};
export default Characters;

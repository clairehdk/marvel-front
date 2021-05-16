import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CardFav from "../component/CardFav";
import Loader from "../component/Loader";

const Favorites = ({ userId, userToken }) => {
  let history = useHistory();
  const [isLoading, setLoader] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    const fecthData = async () => {
      try {
        const data = { userId };
        const response = await axios.post(
          "https://my-marvel-backend.herokuapp.com/user/favs",
          data,
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        setData(response.data);
        setLoader(false);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fecthData();
  }, []);

  return userToken ? (
    isLoading ? (
      <Loader />
    ) : (
      <div className="favs">
        <h1>Mes favoris</h1>
        <div className="favorites">
          {data.map((fav) => {
            return (
              <CardFav
                key={fav._id}
                fav={fav}
                userId={userId}
                userToken={userToken}
              />
            );
          })}
        </div>
      </div>
    )
  ) : (
    history.push("/login")
  );
};

export default Favorites;

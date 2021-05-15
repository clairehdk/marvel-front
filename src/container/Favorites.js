import { useEffect } from "react";
import axios from "axios";

const Favorites = ({ userId, userToken }) => {
  useEffect(() => {
    const fecthData = async () => {
      try {
        const data = { userId };
        const response = await axios.post(
          "http://localhost:3001/user/favs",
          data,
          {
            headers: {
              authorization: `Bearer ${userToken}`,
            },
          }
        );
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fecthData();
  }, []);
  return (
    <div>
      <h1>Mes favoris</h1>
    </div>
  );
};

export default Favorites;

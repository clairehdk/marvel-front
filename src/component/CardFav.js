import axios from "axios";

const CardFav = ({ fav, userToken, userId }) => {
  const removeFav = async () => {
    try {
      const data = { userId, id: fav._id };
      const response = await axios.post(
        `https://my-marvel-backend.herokuapp.com/fav/remove`,
        data,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(response.data);
      window.location.reload(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="favorite">
      <img
        src={`${fav.thumbnail.path}.${fav.thumbnail.extension}`}
        alt={fav.title}
      ></img>
      <div>
        <p>{fav.title}</p>
        <button onClick={removeFav}>
          <i className="fas fa-star"></i>
        </button>
      </div>
    </div>
  );
};

export default CardFav;

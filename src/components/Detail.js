import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);
  // console.log(horoscopeObj)

  return (
    <div className="details">
      <img src={sign.backgroundImg} alt="Sign Name" />
      <h2>{sign.name}</h2>
      <h4>{sign.element}: </h4>
      <h4>{sign.traits}: </h4>
    </div>
  );
};

export default Detail;

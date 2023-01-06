import "../../App.css";
import { AiFillAmazonCircle } from "react-icons/ai";
import StyleButton from "../StyleButton";

export default function ListLayout(props) {
  const { imgURL, heading, discription, altName } = props;
  return (
    <li className="list-design">
      <div className="list-design-img">
        <img src={imgURL} alt={altName} />
      </div>
      <div className="list-design-text">
        <h2>{heading}</h2>
       
        <p>{discription}</p>
        <div className="buttonStyle">
       
      <StyleButton type="normal" icon={<AiFillAmazonCircle/>} label="white"/>
      <StyleButton type="primary" label="blue"/>
      <StyleButton type="danger" label="red"/>
      </div>
      </div>
    </li>
  );
}

//import { useHistory} from "react-router-dom";
import imgError404 from "../../assets/images/404.jpg";

export default function Error404() {
  return (
    <div> 
      <img src={imgError404} alt="Error 404 - Page Not Found"/>     
    </div>
  );
}
import {
  BtnDefault,
  BtnDefaultBlue,
  BtnInvisibly,
  Btn,
  BtnOpacity,
  BtnBuy,
} from "../components/Button";
import "../assets/btn.css";
import Buy from "../assets/Buy.png";

function App() {
  return (
    <div className="ctnMain">
      <div className="card">
        <BtnDefault>Default</BtnDefault>
        <BtnDefaultBlue>Default</BtnDefaultBlue>
        <BtnInvisibly>Default</BtnInvisibly>
        <Btn>Default</Btn>
        <BtnOpacity>Default</BtnOpacity>
        <BtnBuy>
          <img style={{ margin: ".3rem", height: "20px" }} src={Buy} />
          Default
        </BtnBuy>
      </div>
    </div>
  );
}

export default App;

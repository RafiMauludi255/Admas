import "../style/body.css";
import ListAsk from "./ListAsk";
import Trendy from "../asset/trendy.svg";
import Premium from "../asset/premium.svg";
import Prices from "../asset/prices.svg";
import Fast from "../asset/fast.svg";

export default function Body() {
  return (
    <div className="body">
      <h1 className="heading">Trendy. Comfortable. Affordable.</h1>
      <p className="welcome">
        Welcome to RSCH,{" "}
        <span className="highlight">
          your one-stop shop for the latest fashion trends!
        </span>{" "}
        Whether you're looking for casual wear, chic office outfits, or
        something for a special occasion, we’ve got you covered.
      </p>
      <BtnStart props="Shop Now" props2="Learn More" />
 
        <ListAsk
          imgCard1={Trendy}
          headCard1="Trendy Style"
          dataCard1="Stay ahead with the latest designs."
          imgCard2={Premium}
          headCard2="Premium"
          dataCard2="Fabrics that feel as good as they look."
          imgCard3={Prices}
          headCard3="Affordable Prices"
          dataCard3="Fashion that doesn't break the bank."
          imgCard4={Fast}
          headCard4="Fast Shipping"
          dataCard4="Get your order delivered quickly and hassle-free."
        />
    </div>
  );
}

function BtnStart({ props, props2 }) {
  return (
    <div>
      <button className="btnStart">{props}</button>
      <button className="btnLearn">{props2}</button>
    </div>
  );
}



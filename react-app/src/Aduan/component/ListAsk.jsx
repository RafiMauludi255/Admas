// import img from "next/img";

export default function ListAsk({
    headCard1,
    headCard2,
    headCard3,
    headCard4,
    dataCard1,
    dataCard2,
    dataCard3,
    dataCard4,
    imgCard1,
    imgCard2,
    imgCard3,
    imgCard4,
  }) {
    return (
      <div className="bodyListAsk">
        <h1 className="headList">
          Apa Saja Keunggulannya ?{" "}
          <span className="pHeadList">
          </span>
        </h1>
        <div className="flexCard">
          <div className="card">
            <img src={imgCard1} alt={imgCard1} />
            <h2>{headCard1}</h2>
            <p>{dataCard1}</p>
          </div>
          <div className="card">
            <img src={imgCard2} alt={imgCard2} />
            <h2>{headCard2}</h2>
            <p>{dataCard2}</p>
          </div>
          <div className="card">
            <img src={imgCard3} alt={imgCard3} />
            <h2>{headCard3}</h2>
            <p>{dataCard3}</p>
          </div>
          <div className="card">
            <img src={imgCard4} alt={imgCard4} />
            <h2>{headCard4}</h2>
            <p>{dataCard4}</p>
          </div>
        </div>
      </div>
    );
  }
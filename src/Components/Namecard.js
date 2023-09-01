import pfp from "../images/pfp.jpg";

export default function Namecard() {
  return (
    <div className="containeri">
      <div className="content">
        <div className="overlay">
          <img src={pfp} alt="" className="image"/>
        </div>
        <div className="namecard">
          <div className="namecardsecondlayer"></div>
          <div className="namecardthirdlayer"> </div>
        </div>
      </div>
    </div>
  );
}

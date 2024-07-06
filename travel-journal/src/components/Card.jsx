// import img1 from "../assets/1.png"

export default function Card(props) {
  console.log("debug:");

  console.log(props.image);

  return (
    <div className="card--border">
      <div className="card">
        <img className="card--img" src={props.imageSVG} />
        <div className="card--info">
          <div className="card--header">
            <div className="card--locationInfo">
              <img className="card--locationIcon" src="locationIcon.svg" />
              <span className="card--location">{props.location}</span>
              <a className="card--viewLink" href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
          </div>
          <h1 className="card--title">{props.title}</h1>
          <h2 className="card--dates">
            {props.startDate} - {props.endDate}
          </h2>
          <p className="card--description">{props.description}</p>
        </div>

      </div>
      <div className="card--bottom"></div>
    </div>
  );
}

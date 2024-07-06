import world from "../assets/world.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <img className="header--world" src={world}></img>
        <span className="header--text">my travel journal. </span>
      </div>
    </>
  );
}

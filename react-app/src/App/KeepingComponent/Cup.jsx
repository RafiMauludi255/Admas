export default function Clock() {
  let jam = new Date();
  let hours = jam.getHours();
  let className;
  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{jam.toLocaleTimeString()}</h1>;
}

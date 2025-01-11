import { people } from "./TesData.jsx";

export default function List() {
  const chemist = people.filter((person) => person.profession === "chemist");

  const elseChemist = people.filter(
    (person) => person.profession !== "chemist"
  );

  return (
    <div>
      <h1>Chemist</h1>
      <ul>
        {chemist.map((person) => (
          <li>
            <p>
              <b>{person.name}</b>
              {" " + person.profession + " "}
              know for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h1>Any Else</h1>
      <ul>
        {elseChemist.map((person) =>(
            <li>
                <p>
                    <b>{person.name}</b>
                    {' ' + person.profession + ' '}
                    know for {person.accomplishment}
                </p>
            </li>
        ))}
      </ul>
    </div>
  );
}

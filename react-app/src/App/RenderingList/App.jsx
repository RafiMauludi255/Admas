import { Fragment } from "react";

export default function App() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "Mathematician",
    },
    {
      id: 1,
      name: "Mario Jose Molina-Pasquel Henrique",
      profession: "Chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "Physicist",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "Chemist",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "Astrophysicist",
    },
  ];
// Untuk memfilter sebuah array
//   const chemists = people.filter((person) => person.profession === "Chemist");

// Untuk menampilkan semua data di array
  const listItems = people.map((person) => (
    // <li key={person.id}>
    //   <p>
    //     <b>{person.name}</b>
    //     {" " + person.profession + " "}
    //   </p>
    // </li>

    <Fragment key={person.id}>
        <h1>{person.name}</h1>
        <p>{person.profession}</p>
    </Fragment>
  ));

  return <ul>{listItems}</ul>;
}

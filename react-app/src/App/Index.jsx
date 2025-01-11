import React from "react";
import "../Style/index.css";
// import { getImageUrl } from "./utils";
import Avatar from "./Avatar";

function Notifikasi() {
  var inputan = document.getElementById("inputan").value;

  alert(`Hallo ${inputan}`);
}

function Greeting(props) {
  return <h1>Hallo {props.people}</h1>;
}

function Card() {
  return (
    <div className="Kotak">
      w
    </div>
  )
}

export default function Index() {
  return (
    <div>
      <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      </Card>
      {/* <Avatar 
      size={80}
      person={{
        name: "Aklilu Lemma",
        imageId: 'OKS67lh'
      }}
      />
      <Avatar 
      size={50}
      person={{
        name: "Lin Lanying",
        imageId: "1bX5QH6"
      }}
      /> */}
    </div>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>Posts</h1>
      <p>Nilai : {count}</p>
      <button onClick={() => setCount(count + 1)}>tambah</button>
      <ul>
        {data ? (
          data.map((item) => (
            <div>
              <li key={item.id}>ID : {item.id}</li>
              <p>Title : {item.title}</p>
              <p>Content : {item.content}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}

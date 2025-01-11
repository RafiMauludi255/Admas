import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/api/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <table border="1" style={{ borderCollapse: "collapse" }}>
        <thead>
          <th>Nama</th>
          <th>Usia</th>
          <th>Status</th>
          <th>TTL</th>
          <th>No. WA</th>
          <th>Email</th>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.nama}</td>
              <td>{user.usia}</td>
              <td>{user.status}</td>
              <td>{user.ttl}</td>
              <td>{user.wa}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

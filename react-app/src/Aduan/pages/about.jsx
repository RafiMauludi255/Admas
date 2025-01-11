import { useEffect, useState } from "react"
import Navbar from "../component/navbar"

export default function About() {
    const [data, setData ] = useState("");

    useEffect(() => {
        fetch("http://localhost:8001/about")
        .then((response) => response.text())
        .then((data) => setData(data));
    }, []);
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
           <p>{data}</p> 
        </div>
    )
}
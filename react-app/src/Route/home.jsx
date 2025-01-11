import { Link } from "react-router";

export default function Home() {
    return (
        <div>
            <h1>Hello World</h1>
            <Link to="/about">About</Link>
        </div>
    )
}
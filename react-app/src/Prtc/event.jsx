export default function Event() {
    return (
        <div onClick={() => alert("Mengklik Toolbar")}>
            <Button onClick={() => alert('Playing')}>Play Movie</Button>
            <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
        </div>
    )
}

function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>{children}</button>
    )
}


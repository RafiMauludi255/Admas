export default function Fetching() {
  return (
    <div>
        {/* <AlertBtn message="Memutar">Putar Lagu</AlertBtn>
        <AlertBtn message="Upload">Upload Gambar</AlertBtn> */}
        <PlayButton movieName="AVENGER"/>
        <UploadButton />
    </div>
  );
}

// Menggunakan Props
function AlertBtn({ message, children }) {
    return (
        <button onClick={() => alert(message)}>{children}</button>
    )
}

// Mengoper event handler sebagai props
function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert(`Playing ${movieName}!`);
    }
    return (
        <button onClick={handlePlayClick}>Play "{movieName}"</button>
    )
}

function UploadButton() {
    return (
        <button onClick={() => alert("Uploading!")}>Upload Image</button>
    )
}


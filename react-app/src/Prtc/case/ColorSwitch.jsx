export default function ColorSwitch() {
    function onChangeColor() {
        let page = document.body.style;
        if (page.background === "black") {
            page.background = "white";
        } else {
            page.background = "black";
        }
    }
    return (
        <button onClick={onChangeColor}>Change Color</button>
    )
}
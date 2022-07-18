import signs from "../../img/a.png"

const images = []
images.push(<img src={`../../img/${"a"}.png`}></img>)
const TranslationBox = () => {
    return (
        <>
            <h3>Translation box</h3>
            {images}
            <img src={ signs } alt="sign letters"></img>
        </>
    )
}

export default TranslationBox
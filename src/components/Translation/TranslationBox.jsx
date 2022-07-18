import "./Translation.css"
// import signs from "../../img/a.png"


// const images = []
// images.push(<img alt="sign letter" src={`../../img/${"a"}.png`}></img>)
const TranslationBox = (input) => {
    let result = []
    for (let i = 0; i < input.length; i++) {
        result.push(<img alt="sign letter" key={i} src={`/img/${input[i]}.png`}></img>)
    }
    return result
}

export default TranslationBox
import signs from "../../img/a.png"
import "./Translation.css"

const images = []
images.push(<img alt="sign letter" src={`../../img/${"a"}.png`}></img>)
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



//Från video

// const TranslationForm = () => {

//     const { register, formState: { errors }} = useForm()
//     return (
//         <form>

//         </form>
//     )
// }
// export default TranslationForm
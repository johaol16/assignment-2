import "./Translation.css"


const TranslationBox = (input) => {
    let result = []
    for (let i = 0; i < input.length; i++) {
        result.push(<img alt="sign letter" key={i} src={`/img/${input[i]}.png`}></img>)
    }
    return result
}

<<<<<<< HEAD
export default TranslationBox
=======
export default TranslationBox
>>>>>>> 25f9ae9e905af946982284206ead76dd2469e998

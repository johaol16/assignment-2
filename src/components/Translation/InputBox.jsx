import { useState } from "react"
import { useForm } from "react-hook-form"
import TranslationBox from "./TranslationBox"



const InputBox = ({ onTranslation }) => {

    const { register, handleSubmit } = useForm()

    const [images, setImages] = useState([])

    const onSubmit = ({ translationNotes }) => {
         onTranslation(translationNotes) 
         setImages(TranslationBox(translationNotes))
    }


   
    return (
        <>
        <form id="translationForm" onSubmit={ handleSubmit(onSubmit) }>
            <fieldset id="translationFieldset">
                <input id="translationInput" type="text" placeholder="Write something here..." { ...register("translationNotes") }></input>
                <button id="translationButton" type="submit"><i id="arrow"></i></button>
            </fieldset>
        </form>
        <div>
             {images}
        </div>
        </>
    )
}

export default InputBox
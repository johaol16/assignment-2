import { useForm } from "react-hook-form"



const InputBox = ({ onTranslation }) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = ({ translationNotes }) => { onTranslation(translationNotes) }


   
    return (
        <>
        <form id="translationForm" onSubmit={ handleSubmit(onSubmit) }>
            <fieldset id="translationFieldset">
                <input id="translationInput" type="text" placeholder="Write something here..." { ...register("translationNotes") }></input>
                <button id="translationButton" type="submit"><i id="arrow"></i></button>
            </fieldset>
        </form>

        </>
    )
}

export default InputBox
import withAuth from "../hoc/withAuth"
import TranslationBox from "../components/Translation/TranslationBox"
import InputBox from "../components/Translation/InputBox"
import { useUser } from "../context/UserContext"


const Translation = () => {

    const { user } = useUser()

    const handleTranslationClick = notes => {
        console.log(notes.trim())

    
        
    }

    return (
        <>
            <InputBox onTranslation={ handleTranslationClick }/>
            <TranslationBox/>
        </>

    )
}
export default withAuth(Translation)
import withAuth from "../hoc/withAuth"
import TranslationBox from "../components/Translation/TranslationBox"

const Translation = () => {
    return (
        <>
            <h1>Translation</h1>
            <TranslationBox/>
        </>

    )
}
export default withAuth(Translation)
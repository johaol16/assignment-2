import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
import "./profile.css"

const ProfileTranslationHistory = ({ translations }) => {
    
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation } translation={ translation } />
        )
    
    return (
        <section id="profileSection">
            <h3>Your translation history</h3>
            <ol className="translationListNumbers">{ translationList.slice(-10) }</ol>
        </section>
    )
}

export default ProfileTranslationHistory
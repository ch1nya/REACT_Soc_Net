import s from "./ProfileInfo.module.css"
import Preloader from "../../CommonComponents/Preloader"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div>
                <img src='https://images.unsplash.com/photo-1675966356873-06f6eedffeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img style={{ borderRadius: "30%" }} src={props.profile.photos.large} alt="" />
                <h3 style={{fontFamily:"cursive",fontSize: "30px"}}>{props.profile.fullName}</h3>
                <ProfileStatus status={'sosal'}/>
                <p style={{fontFamily:"cursive",fontStyle:'italic',fontSize: "1.2rem"}}>{props.profile.aboutMe}</p>
                <p>
                    <span style={{ fontWeight: "bold", fontSize: '1.2rem' }}>
                    {props.profile.lookingForAJob ? "Looking for a job rn" : "happily employed"}
                    </span>
                </p>
                <div className={s.contactsSection}>
                    <h3>My contacts</h3>
                    <p>My facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : "don't have"}</p>
                    <p>My github: {props.profile.contacts.github ? props.profile.contacts.github : "don't have"}</p>
                    <p>My website: {props.profile.contacts.website ? props.profile.contacts.website : "don't have"}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
import React, { useContext, useState } from 'react';
import PenEditIcon from '../PenEditIcon/PenEditIcon';
import ModalEdi from './Modal';
import { AuthContext } from "../../contexts/AuthContext";
import SafeMapService from "../../services/profile.service";
import CustomForm from '../CustomForm/CustomForm';
import { useParams } from 'react-router-dom';
import { getProfileDetails } from '../../utils';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

const ModalLogic = () => {
    const { user, setUser } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [editProfileData, setEditProfileData] = 
    useState({
        username: "",
        password: "",
        email: ""
    });
    
const {id} = useParams()
const {username, password, email} = user

const PROFILE_DETAILS = getProfileDetails(username, password, email)

    const handleIconClick = () => {
        setShowModal(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Datos", name, value)
        setEditProfileData({ ...editProfileData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = await SafeMapService.editProfile(id, editProfileData);
        console.log("COSITAS", updatedProfile)
            setShowModal(false);
            setUser(updatedProfile)
            try {
            } catch (error) {
             console.log("ERROR ==>", error)
            }
          }
            

    const PROFILE_OPTIONS = [
        "username",
        "password",
        "email"
    ];

    return (
        <div>
            <ProfileDetails
            onOpen={() => setShowModal(true)}
            profileDetails={PROFILE_DETAILS}/>
            {showModal && (
                <ModalEdi isOpen={showModal} onClose={() => setShowModal(false)}>
                    <CustomForm
                        options={PROFILE_OPTIONS}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        title={"Edita tu perfil"}
                    />
                </ModalEdi>
            )}
        </div>
    );
}

export default ModalLogic;

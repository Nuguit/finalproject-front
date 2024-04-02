import React, { useState, useContext } from "react";
import axios from "axios";
import icono from "../../../utils/icono.jpg";
import { AuthContext } from "../../../contexts/AuthContext";
import SafeMapService from "../../../services/profile.service"
import { Input } from "@chakra-ui/react";
import { useEffect } from "react";

const UploaderImage = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState(localStorage.getItem("selectedImage") || "");
  const { user, setUser } = useContext(AuthContext); 

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem("selectedImage", selectedImage); 
    }
  }, [selectedImage]);



  const handleImageChange = async (event) => {
    try {
      console.log("handleImageChange triggered");
      const file = event.target.files[0];
      console.log("Selected file:", file);
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "safemap");
      console.log("Sending request to Cloudinary...");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dbtkmtchi/image/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Cloudinary response:", response);
      console.log("Uploaded image URL:", response.data.secure_url);
      setSelectedImage(response.data.secure_url);
      if (typeof onChange === 'function') {
        onChange(response.data.secure_url);
      }
         
      const updatedUser = { ...user, user: { ...user.user, avatar: response.data.secure_url } };
      setUser(updatedUser); 
      console.log("UPDATED USER", updatedUser.user.avatar)
      await SafeMapService.updateUserAvatar(updatedUser.user.avatar);
      console.log("Avatar URL saved to user profile:", updatedUser.user.avatar);
    } catch (error) {
      console.error("Error al subir la imagen: ", error);
    }
  };
  
  return (
    <div   style={{ display: "inline-block" }}>
      <label htmlFor="image-upload">
        <img
          src={selectedImage}
          alt="Preview"
          style={{
            borderRadius: "60px",
            maxWidth: "100px",
            maxHeight: "100px",
            cursor: "pointer",
          }}
        />
      </label>
      <Input
        id="image-upload"
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: "none" }}
      />
      </div>
  );
};

export default UploaderImage;

import React, { useState, useContext } from "react";
import axios from "axios";
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
      const file = event.target.files[0];
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "safemap");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dbtkmtchi/image/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      setSelectedImage(response.data.secure_url);
      if (typeof onChange === 'function') {
        onChange(response.data.secure_url);
      }
      const updatedUser = { ...user, user: { ...user.user, avatar: response.data.secure_url } };
      setUser(updatedUser);
      await SafeMapService.updateUserAvatar(updatedUser.user.avatar);
    } catch (error) {

    }
  };

  return (
    <div style={{ display: "inline-block" }}>
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

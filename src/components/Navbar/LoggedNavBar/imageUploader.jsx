import React, { useState, useContext } from "react";
import axios from "axios";
import icono from "../../../utils/icono.jpg";
import { AuthContext } from "../../../contexts/AuthContext";

const UploaderImage = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState(icono);
  const { user, setUser } = useContext(AuthContext); // Obtener user y setUser del contexto AuthContext

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
      onChange(response.data.secure_url); // Llama a la función onChange con la URL de la imagen

      // Actualiza user.user.avatar con la URL de la imagen cargada
      const updatedUser = { ...user, user: { ...user.user, avatar: response.data.secure_url } };
      setUser(updatedUser); // Actualiza el usuario en el contexto AuthContext

      // Envía la URL de la imagen al backend para actualizar el perfil del usuario
      await axios.post("/api/user/avatar", {
        avatarUrl: response.data.secure_url,
      });

      console.log("Avatar URL saved to user profile:", response.data.secure_url);
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
      <input
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

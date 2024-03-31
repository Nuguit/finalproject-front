import { useState } from "react";
import { Image, Box, Flex } from "@chakra-ui/react";
import icono from "../../../utils/icono.jpg";

const UploaderImage = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState(icono);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: "inline-block" }}>
      <label htmlFor="image-upload">
        <img
        
          src={selectedImage}
          alt="Preview"
          style={{ borderRadius: "60px", maxWidth: "100px", maxHeight: "100px", cursor: "pointer" }}
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

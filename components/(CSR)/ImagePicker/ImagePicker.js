"use client";
import classes from "./imagePicker.module.css";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  console.warn("Rendering ImagePicker");

  // Reference to the file input
  const imageInput = useRef(null),
    pickImageHandler = () => {
      imageInput.current.click(); // Trigger the file input click
    };

  // State to store the selected images
  const [pickedImages, setPickedImages] = useState([]),
    // Async function to handle the file selection and processing
    handleImageChange = async (event) => {
      const files = Array.from(event.target.files); // Get all selected files. This is synchronous, no need for await

      // Helper function to read each file using FileReader with async/await
      const readFile = (file) => {
        return new Promise((resolve) => {
          const reader = new FileReader(); // Create a new FileReader instance
          reader.onload = () => resolve(reader.result); // Resolve the promise with the file result (data URL)
          reader.readAsDataURL(file); // Read the file as a data URL
        });
      };

      // Iterate over each file and use await to get the result
      const newImages = []; // Array to store the new images
      for (const file of files) {
        // Loop through each file
        const imageData = await readFile(file); // Wait for the file to be processed
        newImages.push(imageData); // Add the result to the newImages array
      }

      // After all files are processed, update the state
      setPickedImages([...pickedImages, ...newImages]);
    };

  return (
    <section className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg, image/webp, image/jpg" // Accepted file types
          id={name}
          name={name}
          ref={imageInput} // Reference the input field
          onChange={handleImageChange} // Handle file change
          multiple // Allow multiple file selection
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={pickImageHandler} // Trigger input field on button click
        >
          Pick an Image
        </button>
      </div>
      <div className={classes.preview}>
        {/* Preview the selected images */}
        {pickedImages.length > 0 &&
          pickedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Selected ${index + 1}`}
              className={classes.preview}
            />
          ))}
      </div>
    </section>
  );
}

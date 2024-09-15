"use client";

import classes from "./imagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  console.warn("Rendering ImagePicker");

  // Reference to the file input
  const imageInput = useRef(null),
    pickImageHandler = () => {
      imageInput.current.click(); // Trigger the file input click
    };

  // State to store the selected images
  const [pickedImages, setPickedImages] = useState([]), // Initialize as an empty array
    // Async function to handle the file selection and processing
    handleImageChange = async (event) => {
      const files = [...event.target.files]; // Spread operator to get all selected files

      if (!files.length) return setPickedImages([]); // If no files are selected, clear the state

      // Helper function to read each file using FileReader
      const readFile = (file) =>
        new Promise((resolve) => {
          // Create a new promise
          const reader = new FileReader(); // Create a new FileReader instance
          reader.onload = () => resolve(reader.result); // Resolve the promise with the file result (data URL)
          reader.readAsDataURL(file); // Read the file as a data URL
          //  When readAsDataURL() is called, the file is read as a data URL, which is a base64-encoded string representing the file content. This string can be used as the src attribute of an image element to display the image.
          //  The onload event is triggered when the file is read successfully, and the result property of the reader object contains the data URL.
        });

      // Use `map` to create an array of promises for reading each file
      const imagePromises = files.map((file) => readFile(file));
      console.warn("imagePromises");
      console.dir(imagePromises);

      // Wait for all files to be processed and resolve the promises
      const newImages = await Promise.all(imagePromises);

      // Update the state with new images
      setPickedImages((prevImages) => [...prevImages, ...newImages]);
    };

  return (
    <section className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImages.length && <p>No Image selected</p>}
          {pickedImages.length > 0 &&
            pickedImages.map((image, index) => (
              <Image
                src={image}
                width={100}
                height={100}
                alt="The Image selected by the user"
                key={index}
                className={classes.image}
              />
            ))}
        </div>
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
    </section>
  );
}

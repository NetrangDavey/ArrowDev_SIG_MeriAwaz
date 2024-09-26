import React, { useState } from "react";
import { storage, db } from "../../firebase"; // Import Firestore
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore"; // Import Firestore methods
import { useSelector } from "react-redux";

function PostUpload() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const user = useSelector((state) => state.user.user);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    const storageRef = ref(storage, `posts/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    // Save post to Firestore
    await addDoc(collection(db, "posts"), {
      uid: user.uid,
      description,
      url,
      timestamp: new Date(),
    });

    setDescription("");
    setFile(null);
  };

  return (
    <div>
      <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleUpload}>Upload Post</button>
    </div>
  );
}

export default PostUpload;

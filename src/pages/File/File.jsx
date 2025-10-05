import React, { useState, useEffect } from "react";
import axios from "axios";

const File = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch list of files on component mount
  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/files");
      setFiles(res.data);
    } catch (error) {
      console.error("Failed to fetch files:", error);
      setMessage("Failed to fetch files");
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!selectedFile) {
      setMessage("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile); // key must match backend param

    try {
      await axios.post("http://localhost:8080/api/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("File uploaded successfully");
      setSelectedFile(null);
      fetchFiles(); // Refresh list after upload
    } catch (error) {
      console.error("Upload failed:", error);
      setMessage("Upload failed: " + error.message);
    }
  };

  return (
    <div>
      <h1>📁 File Manager</h1>

      <section>
        <h2>Your Files</h2>
        {files.length > 0 ? (
          <ul>
            {files.map((file) => (
              <li key={file.id}>
                {file.fileName} ({file.contentType}, {file.size} bytes)
              </li>
            ))}
          </ul>
        ) : (
          <p>No files uploaded yet</p>
        )}
      </section>

      <section>
        <h2>Upload New File</h2>
        <form onSubmit={handleUpload}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Upload</button>
        </form>
        {message && <p>{message}</p>}
      </section>
    </div>
  );
};

export default File;

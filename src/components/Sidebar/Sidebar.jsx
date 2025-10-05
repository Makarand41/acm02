import React, { useState, useEffect } from 'react';
import items from './sidebarData';
import './Sidebar.css';
import axios from 'axios';

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  
  // Store files fetched from backend for "File" accordion
  const [fileList, setFileList] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [fileError, setFileError] = useState(null);

  const toggle = async (index) => {
    if (openIndex === index) {
      // Close accordion if same clicked
      setOpenIndex(null);
      setOpenSubIndex(null);
    } else {
      setOpenIndex(index);
      setOpenSubIndex(null);

      // If "File" accordion clicked, fetch files
      if (items[index].label === 'File') {
        setLoadingFiles(true);
        setFileError(null);
        try {
          const res = await axios.get('http://localhost:8080/api/files');
          setFileList(res.data);
        } catch (error) {
          setFileError('Failed to load files');
        }
        setLoadingFiles(false);
      }
    }
  };

  const toggleSub = (index) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Session Explorer - Estimate</div>

      {items.map((item, index) => (
        <div key={index}>
          {/* Accordion Header */}
          <div onClick={() => toggle(index)} className="accordion-header">
            {item.label}
            <span
              className="accordion-arrow"
              style={{
                transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              ▼
            </span>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="accordion-content">
              {item.label === 'File' ? (
                // Dynamic file list rendering for File accordion
                <>
                  {loadingFiles && <div>Loading files...</div>}
                  {fileError && <div style={{ color: 'red' }}>{fileError}</div>}
                  {!loadingFiles && !fileError && fileList.length === 0 && (
                    <div>No files uploaded yet.</div>
                  )}
                  <ul>
                    {fileList.map((file) => (
                      <li key={file.id}>
                        {file.fileName} ({file.contentType}, {file.size} bytes)
                      </li>
                    ))}
                  </ul>
                </>
              ) : item.children ? (
                item.children.map((sub, subIndex) => (
                  <div key={subIndex}>
                    {sub.children ? (
                      <>
                        {/* Sub-Accordion Header */}
                        <div
                          onClick={() => toggleSub(subIndex)}
                          className="sub-accordion-header"
                        >
                          {sub.label}
                          <span
                            className="sub-accordion-arrow"
                            style={{
                              transform:
                                openSubIndex === subIndex
                                  ? 'rotate(180deg)'
                                  : 'rotate(0deg)',
                            }}
                          >
                            ▼
                          </span>
                        </div>

                        {/* Nested Content */}
                        {openSubIndex === subIndex && (
                          <div className="nested-content">
                            {sub.children.map((nested, nestedIndex) => (
                              <div key={nestedIndex} className="nested-item">
                                {nested.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="simple-sub-item">{sub.label}</div>
                    )}
                  </div>
                ))
              ) : (
                <div className="simple-content">{item.content}</div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

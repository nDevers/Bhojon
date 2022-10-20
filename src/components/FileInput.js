import React from 'react';
import { AiFillInfoCircle } from "react-icons/ai";

const FileInput = ({ fileInputTitle = 'File Input Title', fileButtonColor = 'text-cyan-400' }) => {
    return (
        <div className="grid grid-cols-2 items-center w-3/6">
            <h3>{fileInputTitle}</h3>
            <div className="flex items-center gap-x-4">
                <input type="file" id="myfile" name="myfile" />
                <button className={`p-1 ${fileButtonColor} border-0`}>
                    <AiFillInfoCircle />
                </button>
            </div>
        </div >
    );
};

export default FileInput;
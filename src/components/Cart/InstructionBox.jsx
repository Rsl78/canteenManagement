import React from 'react';

const InstructionBox = () => {
    return (
        <div>
            <hr className="h-px bg-gray-200 border-0 my-3" />
            <h3 className={"font-bold text-xl py-1"}>Special Instruction</h3>
            <p className={"text-xs font-extralight"}>Special requests are subject to the restaurant's approval. Tell us here!</p>
            <textarea
                className="w-full mt-5 p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-300 text-sm text-gray-600"
                placeholder="Add your special instructions here..."
                rows={4}
            ></textarea>
        </div>
    );
};

export default InstructionBox;
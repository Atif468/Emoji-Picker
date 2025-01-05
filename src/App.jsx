// https://github.com/ealush/emoji-picker-react

import React, { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [openEmoji, setOpen] = useState(false);  
  const InputRef = useRef(null);

  const insertEmoji = (emojiData) => {

    const start = InputRef.current.selectionStart; //where cursor is pointing
    const end = InputRef.current.selectionEnd;

    const newValue =
    InputRef.current.value.substring(0, start) + emojiData.emoji + InputRef.current.value.substring(end);

    setInputValue(newValue);
    input.setSelectionRange(start + emojiData.emoji.length, start + emojiData.emoji.length);
    input.focus();
  };

  const toggleEmojiPicker = () => {
    setOpen(!openEmoji);
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div>
          {openEmoji && (
            <div className=" z-10">
              <EmojiPicker
                theme="dark"
                emojiStyle="facebook"
                onEmojiClick={insertEmoji} 
              />
            </div>
          )}
        </div>
        <input
          type="text"
          ref={InputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter message"
          className="w-full p-2 border border-gray-300 rounded-md text-lg"
        />
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-md"
          onClick={toggleEmojiPicker}
        >
          {openEmoji ? "Close Emoji Picker" : "Open Emoji Picker"}
        </button>
      </div>
    </div>
  );
}

export default App;

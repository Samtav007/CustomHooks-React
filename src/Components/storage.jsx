import React, { useState } from 'react';

function Storage() {
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    const typed = event.target.value;
    setContent(typed);
    localStorage.setItem('content', typed);
    sessionStorage.setItem('content', typed);
  };

  return (
    <div>
      <input
        style={{ height: 50, width: 350, fontSize: 20 }}
        type="text"
        value={content}
        onChange={handleChange}
      />
    </div>
  );
}

export default Storage;

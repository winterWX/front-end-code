import React, { useRef, useLayoutEffect } from 'react';

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
};

export default AutoFocusInput

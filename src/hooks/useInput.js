import { useState } from "react";

export default function useInput(initialInputValue) {
  const [inputValue, setInputValue] = useState(initialInputValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  return { inputValue, handleInputChange };
}
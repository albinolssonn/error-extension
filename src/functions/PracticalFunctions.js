export const resetFunction = (setInput, setResult) => {
  setInput("");
  setResult("");
};

export const copyResultFunction = (result) => {
  navigator.clipboard.writeText(result);
};

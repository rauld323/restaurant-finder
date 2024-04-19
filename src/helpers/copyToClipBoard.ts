export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied the text: " + text);
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
};

export const handleCopy = (text: string) => {
  copyToClipboard(text);
};

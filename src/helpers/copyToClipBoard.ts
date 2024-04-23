export const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Postcode "${text}" was copied.`);
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
};

export const handleCopy = (text: string) => {
  copyToClipboard(text);
};

const extendHex = (shortHex) => {
  // Remove the # prefix if present
  shortHex = shortHex.replace(/^#/, '');

  // Ensure that the shortHex is exactly 3 characters long
  if (shortHex.length !== 3) {
    return "Invalid short hex code. It should be 3 characters long.";
  }

  // Convert shortHex to full hex code by repeating each character
  const fullHex = shortHex
    .split('')
    .map(char => char.repeat(2))
    .join('');

  // Add the # prefix and return the result
  return `#${fullHex.toUpperCase()}`;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

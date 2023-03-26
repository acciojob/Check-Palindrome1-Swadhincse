function palindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  
  // Check if clean string is equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = palindrome;

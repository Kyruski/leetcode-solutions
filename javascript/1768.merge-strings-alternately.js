let output = '';
for (let i = 0; i <= word1.length; i++) {
  if (i === word2.length) {
    output += word1.slice(i);
    return output
  } else if (i === word1.length) {
    output += word2.slice(i);
    return output
  }
  output += word1[i] + word2[i]
}
return output;
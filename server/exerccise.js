function Solution(S) {
  let result = "";
  let count = 1;
  
  for (let i = 0; i < S.length; i++) {
    if (i > 0 && S[i] === S[i-1]) {
      count++;
    } else {
      count = 1;
    }
    
    if (count < 3) {
      result += S[i];
    }
  }
  
  return result;
}

Solution("eedaaad");
Solution("xxxtxxx");
Solution("uuuuxaaaaxuuu");

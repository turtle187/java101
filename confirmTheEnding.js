function confirmEnding(str, target) {
  //check if the last part of str matches target...
  if (str.substr(str.length - target.length) === target) {
    //return true if string matches...
    return true;
  }
  //in all other cases return false...
  return false;
}

confirmEnding("Bastian", "n");
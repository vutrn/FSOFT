function makePascalCase(str){
  return str
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

console.log(makePascalCase("hello_world")) 
import url from 'url';
const myUrl= new URL("https://www.youtube.com:8000");
myUrl.pathname="/a/b/c";
myUrl.search="?d=e";
myUrl.hash= "#fgh";

console.log(myUrl);
console.log(myUrl.href);
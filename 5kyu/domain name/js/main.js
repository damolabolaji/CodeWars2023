//Extract domain name from URL
//Write a function which when given a url as a string, parses out just the domain name as a string
//'http://www.github.com/hoyw/' ==> 'github'
//'http://github.com/hoyw/' ==> 'github'
//'http://github.com/hoyw/' ==> 'github'

function produceDomain(str) {
  slashString = str.split("/");
  // 0: "http:"
  // 1: ""
  // 2: "www.github.com"
  // 3: "hoyw"
  // 4: ""
  domainArray = slashString
    .filter((item) => item.includes(".com"))
    .map((item) => item.split("."));
  return domainArray[0][domainArray[0].length - 2];
}

let string = "http://www.github.com/hoyw/";
console.log(produceDomain(string));

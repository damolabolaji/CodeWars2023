//Extract domain name from URL
//Write a function which when given a url as a string, parses out just the domain name as a string
//'http://www.github.com/hoyw/' ==> 'github'
//'http://github.com/hoyw/' ==> 'github'
//'http://github.com/hoyw/' ==> 'github'

function produceDomain(str) {
  slashString = str.split("/");

  domainArray = slashString
    .filter((item) => item.includes(".com"))
    .map((item) => item.split("."));
  if (domainArray[0][1] != "com") {
    return domainArray[0][1];
  } else return domainArray[0][0];

  // domainArray[0][domainArray[0].length - 2];
}

let string = "https://youtube.com";
console.log(produceDomain(string));

//codewars solution
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
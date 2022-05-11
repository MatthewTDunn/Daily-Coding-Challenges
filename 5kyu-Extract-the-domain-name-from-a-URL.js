// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})

// my code

function domainName(url){
    let firstURLIndex;
    let finalURLIndex;
    
    //determine if the URL has both HTPP & WWW in it and handle accordingly
    if (url.includes("http") && url.includes("www")){
        let initialMarker = url.indexOf(".",0)+1
        let returnURL = url.substring(initialMarker,url.indexOf(".",initialMarker+1))
        return returnURL
        }
    
    //determine if it contains just one (assuming the previous statement fails) and handle accordingly
    if (url.substring(0,4) == "http" || url.substring(0,3) == "www"){
      firstURLIndex = (url.substring(0,4) == "http") ? url.indexOf("//")+2 : url.indexOf("www.")+4
      finalURLIndex = url.indexOf(".", firstURLIndex)
    } else{
      //handle it as if there is no Hyper Text Transfer Protocol or WWW call and parse to point of first .
      firstURLIndex = 0;
      finalURLIndex = url.indexOf(".",0)
    }
    return url.substring(firstURLIndex,finalURLIndex)
  }
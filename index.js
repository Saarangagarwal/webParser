const fetch = require("node-fetch");

const fileUrl = 'https://app-dev.condoworks.co/test-q1.txt'

fetchDataFromURL(fileUrl)

function fetchDataFromURL(fileUrl) {

   fetch(fileUrl)
   .then( r => r.text() )
   .then( bill => { 

      reg = /[0-9]+\s*-\s*[0-9]+/g;
      matches = bill.match(reg);
      console.log("Customer no.: " + matches[0].substr(0,7))
      console.log("Account no.: " + matches[0].substr(10))
      
      reg = /[a-zA-Z0-9]+\s*[a-zA-Z0-9,]+\s*[a-zA-Z0-9]+ to [a-zA-Z0-9,]+\s*[0-9]+[,]\s*[0-9]+/g;
      matches = bill.match(reg);
      console.log("Bill Period: "+matches[0])

      reg = /Bill number: [0-9]+/g;
      matches = bill.match(reg);
      console.log(matches[0])

      var reg = /Bill date: [a-zA-Z0-9]+ [0-9]+, [0-9]+/g;
      var matches = bill.match(reg);
      console.log(matches[0])

      reg = /Total new charges [\s*]+[$][0-9,.]+/g;
      matches = bill.match(reg);
      temp = matches[0].replace(/ /g,'')
      dollarIndex = temp.indexOf("$")
      console.log("Total new charges: " + temp.substr(dollarIndex) )

    } )

}





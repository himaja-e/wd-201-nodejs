const hello = () => {
  console.log("Hello Node.js!");
}



const readline = require("readline");

const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,


lineDetail.question(`port `, (port) => {
  lineDetail.close();


fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  http
    .createServer((request, response) => {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(home);
      response.end();
    })
    .listen(${port});
});

});

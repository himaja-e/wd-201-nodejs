const hello = () => {
  console.log("Hello Node.js!");
}

hello();


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
    .listen(5000);
});

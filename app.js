const events = require("events");
const fs = require("fs");
const http = require("http");

///////////// Task 1

///////// messaging Event
// const emitter = new events.EventEmitter();

// emitter.on("messageEvent",(message)=>{
//     console.log(message);
// })

// emitter.emit("messageEvent","Za warudoo");

//////// File Read
//// Sync
// const txt = fs.readFileSync("example.txt","utf-8");
// console.log(txt)

//// Async
// fs.readFile("example.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data)
// });

//////// File write
//// Sync
// fs.writeFileSync("write.txt","Za Warudooo")


//// Async
// fs.writeFile("writeAsync.txt", "Za Warudooo", (err) => {
//     if (err) {
//         console.error("An error occurred:", err);
//     } else {
//         console.log("File written successfully!");
//     }
// });



////////////// Task 2
// const readStream = fs.createReadStream("shinobu-rm.jpg")
// const writeStream = fs.createWriteStream("newPicture.jpg")


/////// manual
// readStream.on("data",(chunk)=>{
//     console.log("-- NEW CHUNK --")
//     console.log(chunk)
//     writeStream.write(chunk)
// })

/////// with pipe
// readStream.pipe(writeStream)



//////////// Task 3
// const server = http.createServer((req, res) => {
//     console.log("Request made to server")
//     res.setHeader("Content-Type", "text/html")
//     fs.readFile("dummy.htm", (err, data) => {
//         if (err) {
//             console.log(err)
//             res.end();
//         }
//         else {
//             res.write(data);
//             res.end();
//         }
//     })
// })

// const PORT = 3000
// server.listen(PORT, "localhost", () => {
//     console.log("listening on port 3000");
// })


//////////////// Task 4
// const express = require("express")

// const app = express();
// app.get("/",(req,res)=>{
//     console.log("here");
//     // res.status(200).send("hi");
//     // res.status(500).json({message:"Server error happened!"});
//     // res.download("arthurmorgan.jpeg")
//     //res.sendFile(`${__dirname}/test.html`)
// })
// app.get("users/:id",(req,res)=>{
//     console.log(req.params.id);
// })
// app.post("/",(req,res)=>{
//     res.send("POST request received")
// })
// app.put("/",(req,res)=>{
//     res.send("PUT request received")
// })
// app.delete("/",(req,res)=>{
//     res.send("DELETE request received")
// })
// app.use((req,res)=>{
//     res.status(404).send("404 Not Found")
// })


// app.listen(3000,()=>{
//     console.log("Server running on 3000")
// });
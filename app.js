const events = require("events");
const fs = require("fs");

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
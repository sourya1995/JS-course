const name = process.argv[2];
console.log(process.argv);
console.log(`Hi, I'm ${name}`);
const location = process.argv[3];
console.log(`I live in ${location}`);
console.log("process.env: ", process.env);
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
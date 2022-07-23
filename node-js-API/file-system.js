const fs = require("fs").promises;

const getStats = async (path) => {
    try {
        const stats = await fs.stat(path);
        console.log(stats);
        console.log(`isFile: ${stats.isFile()}`);
        console.log(`isDirectory: ${stats.isDirectory()}`);
    } catch (error) {
        console.error(error);
    }
};

//getStats("./test.txt");

const readFile = async(path) => {
    try{
        const contents = await fs.readFile(path, "utf8");
        console.log(contents);
    } catch(error) {
        console.log(error);
    }
};

//readFile("./test.txt")

const writeFile = async(path, data) => {
    try{
        await fs.writeFile(path, data);
    } catch(error) {
        console.error(error);
    }
};

//writeFile("./test.txt", "a quick brown fox.");

const appendFile = async(path, data) => {
    try{
        await fs.appendFile(path, data);

    }catch(error) {
        console.error(error);
    }
};

appendFile("./test.txt", "just try again");
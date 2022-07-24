const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;
const path = require('path');
const recipesRouter = require('./routers/recipes');
const usersRouter = require('./routers/users')
const handleError = require('./utils/error');
const { initialize } = require('passport');


app.use(cors());

app.use((req, res, next) => {
    const {method, path } = req;
    console.log(`New request to ${method} ${path} at ${new Date().toISOString()}`);
    next();
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/recipes', recipesRouter);
app.use(handleError);
app.use(auth.initialize());
app.use('/api/v1/users', usersRouter);

app.get("/", (req, res) => {
    res.redirect("/api/v1/recipes");
})

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));




app.listen(port, () => {
    console.log(`Server is up on port: ${port}`);
});
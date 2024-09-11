const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');
const app = express();

let initial_path = path.join(__dirname, "public");

app.use(express.static(initial_path));
app.use(fileUpload());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

app.get("/:artigo", (req, res) => {
    res.sendFile(path.join(initial_path, "artigos.html"));
})

app.use((req, res) => {
    res.json(404);
})


app.listen(80, () => {
    console.log('listening......');
});

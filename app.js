const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 9000, () => {
    console.log(`Application running on port: ${process.env.PORT || 9000}`);
});
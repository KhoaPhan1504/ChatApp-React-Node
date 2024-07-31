const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
    const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username},
            { headers: {'private-key': '67bc045d-bb07-4c59-b94c-b6888fb1b676'}}
        )
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
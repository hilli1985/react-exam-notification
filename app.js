const express = require('express');
const app = express();
const port = 8080;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, live-chat-token')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/api/v1/getNotifications', (req, res) => {
    res.send({
        notifications: [
            {
                color: 'red',
                information: 'B-LAO APU Air intake flap actuator needs to be reviewed',
                active: false,
                date: 'NOV-21-2017'
            },
            {
                color: 'red',
                information: 'B-HLQ equipment status: SHUTDOWN. LRU Fault: Bleed flow sensor assembly failed',
                active: true,
                date: 'NOV-20-217'
            },
            {
                color: 'yellow',
                information: 'B-KPT equipment criticality: ADIVSORY.LRU Fault: EGT Rake 1 failure',
                active: true,
                date: 'NOV-18-2017'
            },
            {
                color: 'green',
                information: 'B-LAO APU Air intake flap actuator needs to be reviewed',
                active: false,
                date: 'NOV-12-2017'
            },
            {
                color: 'red',
                information: 'B-HLQ equipment status: SHUTDOWN. LRU Fault: Bleed flow sensor assembly failed',
                active: false,
                date: 'NOV-10-2018'
            },
            {
                color: 'yellow',
                information: 'B-HLQ equipment status: SHUTDOWN. LRU Fault: Bleed flow sensor assembly failed',
                active: false,
                date: 'NOV-08-2017'
            },
            {
                color: 'red',
                information: 'B-LAO APU Air intake flap actuator needs to be reviewed',
                active: true,
                date: 'NOV-04-2017'
            }
        ]
    })
});

app.listen(port, () => console.log(`The server is now listening on port: ${port}`));
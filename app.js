const express = require('express');

const app = express();

const indexRouter = require('./routes');
const userRouter = require('./routes/uesr');

app.set('port', process.env.PORT || 3000);


app.use('/', indexRouter);
app.use('/uesr', userRouter);

app.use((req, res, next) => {
    res.status(404).send('NotFound');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
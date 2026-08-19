const express = requier('express');

const app = express()

const authCtrl = requier('../controller/authCtrl')



app.get('/auth/sign-up', authCtrl.signup);
app.post('/auth/sign-up', authCtrl.register);
app.get('/auth/sign-in', authCtrl.signin);
app.post('/auth/sign-in', authCtrl.login);
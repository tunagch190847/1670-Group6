const express  = require('express')
const session = require('express-session')
const app = express() //Su dung thu vien express

const route = require('./routers');


app.use(session({ secret: '12447yd@@$%%#', cookie: { maxAge: 60000 }, saveUninitialized: false, resave:false}))

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Set view
app.set('view engine', 'hbs') //Khai bao su dung thu muc views
app.use(express.urlencoded({ extended: true})) //Lay du lieu tu cac Form: textbox, combobox...


//Router init
route(app);

app.get('/',(req, res)=>{
    res.render('home',{userInfo:req.session.User})
    //res.render('home')
})
    
const adminController = require('./controllers/admin');
const router = require('./controllers/admin');
//tat cac cac dia chi co chua admin: localhost:5000/admin
app.use('/admin', adminController)



const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Server is running! " + PORT)
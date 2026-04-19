const  express = require('express');
//const { title } = require('node:process');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');


 // express app
 const app = express();


 //connect mongodb
const  dbURI = 'mongodb+srv://dbNode:<U PASS>@nodetuto.ng43pzs.mongodb.net/?appName=nodetuto'
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err));


 //register view engine 
 app.set('view engine', 'ejs');
//app.set('views','ejs');

// listent for requests
//app.listen(3000);



//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));


//////mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my blog',
//         body: 'more about my blog',
//     });

//     blog.save()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })


// app.get('/single-blog', (req, res) => {
//     Blog.findById('69e3c8ab2887d5a43f09450c')
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })

//routes
app.get('/', (req,res)=>{

    res.redirect('/blogs')

});


app.get('/about', (req,res)=>{
    
    // res.sendFile('./views/about.html',{root:__dirname });
    //res.send('<p> about page </p>');
    res.render('about',{title:'About'});
});




// redirects----blog routes
app.use('/blogs' ,blogRoutes);

//404 page
app.use((req,res) => {
    
    //res.status(404).sendFile('./views/404.html',{root:__dirname })
    res.status(404).render('404',{title:'404'});
})
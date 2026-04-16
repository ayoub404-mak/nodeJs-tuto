const  express = require('express');
const { title } = require('node:process');
const morgan = require('morgan');

 // express app
 const app = express();

 //register view engine 
 app.set('view engine', 'ejs');
//app.set('views','ejs');

// listent for requests
app.listen(3000);



//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));



app.get('/', (req,res)=>{

    const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
    
    //res.send('<p> home page </p>');
    //res.sendFile('./views/index.html',{root:__dirname });
    res.render('index',{title: 'Home', blogs:blogs});
});


app.get('/about', (req,res)=>{
    
    // res.sendFile('./views/about.html',{root:__dirname });
    //res.send('<p> about page </p>');
    res.render('about',{title:'About'});
});




// redirects
app.get('/blogs/create',(req,res) =>{
    res.render('create',{title:'Creat a new Blog'});
})


//404 page
app.use((req,res) => {
    
    //res.status(404).sendFile('./views/404.html',{root:__dirname })
    res.status(404).render('404',{title:'404'});
})
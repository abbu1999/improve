const express=require('express')
const path = require('path');


//init app
const app=express();


//load view engine 
app.set('./views',path.join(__dirname,'views'));
app.set('view engine','pug');



//home route 
app.get('/',function(req,res){
    let articles=[
    {
      id:1,
      title:'article one',
      author:'abhishek',
      body:'this is article one'    
    },
    {
        id:2,
        title:'article two',
        author:'abbu',
        body:'this is article two'    
      },
      {
        id:3,
        title:'article three',
        author:'abhishek',
        body:'this is article three'    
      },
]; 
res.render('index',{
    title:'Articles',
    articles: articles
});
});



//add route
app.get ('/article/add',function(req,res){
    res.render('./add_articles',{
        title:'Add Articles'
    });
});


//start server 
app.listen(3000,function(){
    console.log('server started on port 3000')
});
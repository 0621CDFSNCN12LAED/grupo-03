const authLoggedMiddleware= (req,res, next)=>{
 if (req.session.usuarioLogueado){
    next();
 }
   else {res.redirect("/users/login")}
};




module.exports= authLoggedMiddleware

const authAdminMiddleware= (req,res, next)=>{
 if (req.session.usuarioLogged =="admin@morfi.com"){
    next();
 }
   else {res.redirect("../")}
};




module.exports= authAdminMiddleware
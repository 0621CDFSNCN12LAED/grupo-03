const authLoggedMiddleware = (req,res, next) => {

   if (req.session.loggedUserId) {

      next();

   } else {

      res.redirect("/users/login");

   }

};

module.exports= authLoggedMiddleware;
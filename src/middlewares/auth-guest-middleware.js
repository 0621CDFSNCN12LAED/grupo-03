const authGuestMiddleware = (req,res, next) => {

   if (req.session.loggedUserId == undefined) {

      next();

   } else {

      res.redirect("/users/profile");

   }

};

module.exports= authGuestMiddleware;
const authAdminMiddleware = (req,res, next) => {

   if (req.session.loggedUserId == 101) {

      next();

   } else {

      res.redirect("back");

   }

};

module.exports= authAdminMiddleware;
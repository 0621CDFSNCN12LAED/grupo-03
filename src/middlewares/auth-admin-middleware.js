const authAdminMiddleware = (req,res, next) => {

   if (req.session.loggedUserId == 1) {

      next();

   } else {

      res.redirect("back");

   }

};

module.exports= authAdminMiddleware;
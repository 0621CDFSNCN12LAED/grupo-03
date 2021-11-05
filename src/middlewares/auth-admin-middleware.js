const authAdminMiddleware = (req,res, next) => {

   if (req.user.userCategoryId == 2) {

      next();

   } else {

      res.redirect("back");

   }

};

module.exports= authAdminMiddleware;
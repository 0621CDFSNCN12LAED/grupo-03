module.exports = async (req, res, next) => {
    const errors = req.session.errors;
    if (errors) {

        req.session.errors = null;
        res.locals.errors = errors;

    }
    next();
};
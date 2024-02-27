const jwt = require("jsonwebtoken");

/**
 * @method ensureauth
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns that User is Authorized or Not
 */

const ensureauth = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(403).json({ message: "Token is Required" });
  }

  try {
    const decoded = jwt.verify(
      req.headers["authorization"],
      process.env.SECRET
    );
    return next();
  } catch (error) {
    return res.status(403).json({ message: "Token is Not Valid or Expired" });
  }
};

module.exports = {
  ensureauth
};

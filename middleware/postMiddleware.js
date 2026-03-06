const jwt = require("jsonwebtoken");
module.exports = validatePostToken = (req, res, next) => {
  const authHeader = req.body.headers.Authorization;

  if (!authHeader) {
    return res.sendStatus(401).json({ msg: "error" });
  } else {
    const verify = jwt.verify(
      authHeader,
      "69a6ffae-6664-4dbb-8e5f-cd62ab6c98e6",
    );
    req.name = verify;
    if (verify) {
      next();
    } else {
      console.log("error");
    }
  }
};

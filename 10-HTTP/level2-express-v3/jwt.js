const jwt = require("jsonwebtoken");
const SECRET_KEY = "secretKey";

function generateToken(payload) {
    const token =
        "Bearer " +
        jwt.sign(payload, SECRET_KEY, {
            expiresIn: "60",
        });
    return token;
}

function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log("verify error", err);
            return res.json({ code: "404", msg: "token无效" });
        }
        console.log("verify decoded", decoded);
        next();
    });
}

module.exports = {
    generateToken,
    verifyToken,
};

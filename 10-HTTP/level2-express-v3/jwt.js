const jwt = require("jsonwebtoken");
const SECRET_KEY = "secretKey";

function generateToken(payload) {
    const token = jwt.sign(payload, SECRET_KEY, {
        expiresIn: "60",
    });
    return token;
}

function verifyToken(req, res, next) {
    console.log(req.headers);
    next();
}

// function verifyToken(req, res, next) {
//     const token = req.headers.Authorization;
//     jwt.verify(token, SECRET_KEY, (err, decoded) => {
//         if (err) {
//             console.log("verify error", err);
//             res.send({ OK: false, message: "token无效" });
//         }
//         console.log("verify decoded", decoded);
//         next();
//     });
// }

module.exports = {
    generateToken,
    verifyToken,
};

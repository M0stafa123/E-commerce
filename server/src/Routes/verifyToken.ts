import jwt, { Secret } from "jsonwebtoken";

const verifyToken = (req: any, res: any, next: any) => {
  const header = req.headers.token;
  if (header) {
    const token = header.split(" ")[1];
    jwt.verify(token, process.env.JWT as Secret, (err: any, user: any) => {
      if (err) {
        res.status(403).json("Token is not valid!");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).json("you are not permitted");
  }
};
const verifyAuth = (req: any, res: any, next: any) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      console.log(req.user);
      res.status(403).json("you are not allowed to do that");
    }
  });
};
const verifyAdmin = (req: any, res: any, next: any) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(403).json("you are not allowed to do that");
    }
  });
};
export { verifyAuth, verifyAdmin };

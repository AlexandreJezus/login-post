export default async (role = []) =>
  (req, res, next) => {
    if (role.includes(req.user.role)) {
      next();
    } else {
      res.sendStatus(403);
    }
  };

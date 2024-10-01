import jsonWebToken from "jsonwebtoken";

const generateAcesssToken = (user) => {
  jsonWebToken.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1d",
    }
  );
};

const verifyAcessToken = (token) =>
  jsonWebToken.verify(token, process.env.JWT_PRIVATE_KEY);

export default {
  generateAcesssToken,
  verifyAcessToken,
};

import JsonWebToken from "jsonwebtoken";

const generateAcesssToken = (user) => {
  jsonWebToken.sign(
    {
      _id: user._id,
      email: user.email,
      password: user.password,
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

const verifyAcessToken = (token) => {
  jsonWebToken.verify(token, process.env.JWT_PRIVATE_KEY);
};

export default {
  generateAcesssToken,
  verifyAcessToken,
};

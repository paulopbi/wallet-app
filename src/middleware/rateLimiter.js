import ratelimit from "../config/upstach.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { sucess } = await ratelimit.limit("my-rate-limit");

    if (!sucess) {
      return res
        .status(429)
        .json({ message: "Too many request, please try again later." });
    }

    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;

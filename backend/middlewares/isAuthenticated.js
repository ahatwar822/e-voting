import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized",
                success: false
            });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }
        req.id = decoded.userId;  // Make sure 'userId' is correctly being extracted from the token
        next(); 
    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticated;

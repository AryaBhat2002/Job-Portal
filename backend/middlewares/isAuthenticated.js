import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token;
        if(!token) {
            return res.status(401).json({
                message: "Unauthorized access, token is missing",
                success: false,
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({
                message: "Unauthorized access, invalid token",
                success: false,
            });
        }

        req.id = decoded.userId; 
        next();
    } catch (error) {
        console.error("Error in isAuthenticated middleware:", error);
        return res.status(401).json({
            message: "Unauthorized access, invalid or expired token",
            success: false,
        });
    }
}

export default isAuthenticated;
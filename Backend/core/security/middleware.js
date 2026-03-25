function authMiddleware(req, res, next) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== 'mysecret') {
        return res.status(403).json({ message: "Forbidden", code: 403 });
    }
    // Continue to the next middleware or route handler
    next();
}
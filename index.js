import express from "express";

const app = express();


app.use((req,res,next)=>{
    const startTime = Date.now();

    // Log the incoming request details
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    // Capture the response finish event to log processing time
    res.on("finish", () => {
        const duration = Date.now() - startTime;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} - ${duration}ms`);
    });

    // Proceed to the next middleware or route
    next();
})

app.get("/",(req,res)=>{
    res.send("Welcome to the Home Page");
})

app.get("/about",(res,req)=>{
    res.send("About Us");
})

app.listen(8082,()=>{console.log("Server starting at port:8082")})
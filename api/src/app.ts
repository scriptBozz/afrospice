import Express from "express";
import Cors from "cors";
import passport from "passport";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import sellerRouter from "./routes/seller";
import orderRouter from "./routes/order";
import { jwtstrategy } from "./config/passport";

const app = Express();

app.use(Express.json());
// app.use(Cors());
app.use(passport.initialize());
passport.use(jwtstrategy)


const corsOptions = {
  origin: "*", // Specify the origin you want to allow
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type","Authorization"],
};

// Use the CORS middleware with the options
app.use(Cors(corsOptions));


app.use("/products", productRouter);
app.use("/users", userRouter);
app.use ("/orders", orderRouter);
app.use("/seller", sellerRouter);


export default app;

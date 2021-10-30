import { app } from "./app";

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🚀 Server Started On Port: ${port}`);
});

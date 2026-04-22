const express = require("express");
const app = express();

// Lấy port từ biến môi trường, nếu không có thì chạy 3000
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "IU BIBI",
  });
});

app.get("/health", (req, res) => {
  // Route này chuyên dùng cho CI/CD hoặc load balancer check xem app còn sống không
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

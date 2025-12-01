const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/message', (req, res) => {
  const userMessage = req.body.message;
  console.log('收到前端信息:', userMessage);

  res.json({
    reply: `后端已收到: ${userMessage}`
  });
});

app.listen(port, () => {
  console.log(`后端服务运行在 http://localhost:${port}`);
});
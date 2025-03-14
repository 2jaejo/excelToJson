const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const app = express();
// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// SSL 인증서 로드 (Self-Signed)
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/ekenzo.duckdns.org/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/ekenzo.duckdns.org/fullchain.pem')
};

const server = https.createServer(options, app);


// 서버 시작
const PORT = process.env.PORT || 8025;
server.listen(PORT, () => {
  console.log(`시그널링 서버가 포트 ${PORT}에서 실행 중입니다`);
});
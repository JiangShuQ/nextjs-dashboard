const axios = require('axios');

// 飞书机器人的 Webhook 地址
const webhookUrl =
  'https://open.feishu.cn/open-apis/bot/v2/hook/b68eb4eb-fbbf-479f-8f89-7a34adb2c1d2';

// 发送消息的函数
async function sendLarkMessage(message) {
  try {
    const response = await axios.post(webhookUrl, {
      msg_type: 'text',
      content: {
        text: message,
      },
    });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.message);
  }
}

// 发送一条测试消息
sendLarkMessage('这是一条来自 Node.js 的测试消息！');

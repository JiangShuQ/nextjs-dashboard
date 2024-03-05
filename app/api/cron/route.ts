import axios from 'axios';

// 飞书机器人的 Webhook 地址
const webhookUrl =
  'https://open.feishu.cn/open-apis/bot/v2/hook/b68eb4eb-fbbf-479f-8f89-7a34adb2c1d2';

async function sendLarkMessage(message: string) {
  try {
    const response = await axios.post(webhookUrl, {
      msg_type: 'text',
      content: {
        text: message,
      },
    });
    console.log('Message sent:', response.data);
  } catch (error: any) {
    console.error('Error sending message:', error.message);
  }
}

export default async function GET() {
  // 发送一条测试消息
  await sendLarkMessage('这是一条来自 Node.js 的测试消息！');

  return Response.json({ status: 200 });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const webhookUrl = 'https://n8n.bradescoparamedicos.com/webhook-test/landing';

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('n8n webhook response error:', errorText);
      return res.status(response.status).json({ message: `Error from n8n: ${errorText}` });
    }

    const responseData = await response.json();
    return res.status(200).json(responseData);

  } catch (error) {
    console.error('Error forwarding request to n8n:', error);
    return res.status(500).json({ message: 'Internal Server Error while forwarding request.' });
  }
}
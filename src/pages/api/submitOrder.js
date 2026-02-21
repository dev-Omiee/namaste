import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://omkaramane22:MongoMongoBaby@megazon.wvzgcsp.mongodb.net/?retryWrites=true&w=majority&appName=MegaZon";
const client = new MongoClient(uri);

// Function to generate random 4 characters
function generateRandom4Chars() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to MongoDB
      await client.connect();
      const database = client.db("megazon");
      const orders = database.collection("orders");

      // Get the last inserted orderId
      const lastOrder = await orders.findOne({}, { sort: { createdAt: -1 } });

      let newOrderId;

      if (lastOrder && lastOrder.orderId) {
        const orderIdStr = lastOrder.orderId.toString();
        const numericPartStr = orderIdStr.slice(0, -4); // Remove last 4 characters
        const numericPart = parseInt(numericPartStr, 10); // Convert to number
        const incrementedPart = numericPart + 1;
        newOrderId = incrementedPart.toString() + generateRandom4Chars();
      } else {
        // If no orders exist, start from 1000 + random 4 chars
        newOrderId = '1000' + generateRandom4Chars();
      }


      const { cartItems, customerInfo } = req.body;

      // Validate incoming data
      if (!cartItems || !customerInfo) {
        return res.status(400).json({ message: 'Missing cartItems or customerInfo' });
      }

      // Prepare order data
      const orderData = {
        orderId: newOrderId,  // Use the generated orderId
        cartItems,
        customerInfo,
        createdAt: new Date(),
      };

      // Insert order data into the database
      const result = await orders.insertOne(orderData);
      console.log("Order inserted:", result);

      // Respond with success
      res.status(200).json({ message: "Order placed successfully!", orderId: newOrderId });
    } catch (error) {
      console.error("Error occurred during order insertion:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

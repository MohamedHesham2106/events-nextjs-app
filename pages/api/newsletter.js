import { connectDB, insertDocument } from "../../helpers/db-util";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;
    // basic validation
    if (!email || !email.includes("@")) {
      return req.status(422).json({ message: "Invalid Email Address." });
    }
    let client;

    try {
      client = await connectDB();
    } catch (error) {
      return res.status(500).json({ message: "Failed to Connect to Database" });
    }

    try {
      await insertDocument(client, "newsletter", { email: email });
      client.close();
    } catch (error) {
      return res.status(500).json({ message: "Failed to Insert data" });
    }
    

    // console.log(email);
    res.status(201).json({ message: "Signed Up." });
  }
};

export default handler;

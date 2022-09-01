// domain.com/comments/{id}
import {
  connectDB,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  let client;
  try {
    client = await connectDB();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect to database" });
    return;
  }

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      client.close();
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    let result;
    try {
      result = await insertDocument(client, "comments", newComment);
      // add id from mongodb
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Added comment.", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Inserting comment failed!" });
    }

    res.status(201).json({ message: "Added comments", comment: newComment });
  }
  if (req.method === "GET") {
    const db = client.db();

    // getting all documents from comments db , sorting and changing it to an array
    // _id:-1 for descending order
    try {
      const documents = await getAllDocuments(client, "comments", { _id: -1 });
      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed." });
    }
  }
  client.close();
};
export default handler;

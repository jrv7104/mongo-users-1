// Uses the db client from loader.js
import client from "./loader.js";

const userConnection = client.db("user_db").collection("users");

export default {
  add(newUser) {
    // TODO: Find if the email already exists
    const existingUser = userConnection.findOne({ email: newUser.email });
    return userConnection.insertOne(newUser);
  },
};

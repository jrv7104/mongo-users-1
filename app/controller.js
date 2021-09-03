// Uses the db client from loader.js
import client from "./loader.js";

const userConnection = client.db("user_db").collection("users");

export default {
  add(newUser) {
    return userConnection.insertOne(newUser);
  },
};

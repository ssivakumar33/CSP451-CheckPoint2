// Simple in-memory database simulation for checkpoint lab

class Database {
  constructor() {
    this.users = [];
    this.connected = false;
  }

  // Connect to the database
  connect() {
    this.connected = true;
    console.log("[db] connected");
  }

  // Add user to database
  insertUser(user) {
    if (!this.connected) throw new Error("DB not connected");
    this.users.push(user);
  }

  // Return all users
  getUsers() {
    if (!this.connected) throw new Error("DB not connected");
    return this.users;
  }

  // Clear all users
  reset() {
    this.users = [];
  }
}

// auto-connect on require
const db = new Database();
db.connect();

module.exports = db;

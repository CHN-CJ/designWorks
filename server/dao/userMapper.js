module.exports = {
    addUser: "INSERT INTO designworks.user(user_name, user_password) VALUES (?, ?);",
    findUsers: "SELECT * FROM designworks.user"
}
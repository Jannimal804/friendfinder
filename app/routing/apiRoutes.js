var friendData = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/friends", function(req,res) {
        res.json(friendData);
    });

    app.post("/api/friends.js", function(req,res){
        friendData.push(req.body);
        res.json(false);
    });
};
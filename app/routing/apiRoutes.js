var tableData = require("./../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    for(var i = 0; i < tableData.friends.length; i++)
    {
        res.json(tableData.friends);
        console.log(tableData.friends);
    }
  });

  /*app.post("/api/friends", function(req, res) {
    
    for(var i = 0; i < friends.friends)
    {


    }


})
} 
*/
}

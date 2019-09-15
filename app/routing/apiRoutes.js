var friends = require("./../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    
        res.json(friends);

  });

  app.post("/api/friends", function(req, res) {
    
    //getting new user info
    var newUser = req.body;
    
    //turning score details into integers
    for(var i = 0; i < newUser.scores.length; i++)
    {
      newUser.scores[i] = parseInt(newUser.scores[i]);
    }

    var newBestFriendIndex = 0;
    var differenceMinimum = 100;


    for(var i = 0; i < friends.length; i++)
    {
      var differenceTotal = 0;
      for(var j = 0; j < friends[i].scores.length; j++)
      {
        var difference = Math.abs(newUser.scores[j] - friends[i].scores[j]);
        differenceTotal += difference;
      }
     console.log(differenceTotal);
    

    if(differenceTotal < differenceMinimum)
    {
      newBestFriendIndex = i;
      differenceMinimum = differenceTotal;
    }
  }
    friends.push(newUser);
    console.log("your new best friend is: " + friends[newBestFriendIndex].name);
    console.log("your new best friend's photo: " + friends[newBestFriendIndex].photo);
    res.json(friends[newBestFriendIndex]);
    
})
} 

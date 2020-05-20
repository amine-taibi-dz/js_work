var Parse = require('parse/node');
Parse.serverURL = 'http://127.0.0.1:1337/parse'
Parse.initialize('myApp123', 'jsApp123');
const GameScore = Parse.Object.extend("GameScore");
const gameScore = new GameScore();

gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save()
    .then((gameScore) => {
        // Execute any logic that should take place after the object is saved.
        console.log('New object created with objectId: ' + gameScore.id);
    }, (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        console.log('Failed to create new object, with error code: ' + error.message);
    });

var Post = Parse.Object.extend("Post");
var Comment = Parse.Object.extend("Comment");

// Create the post
var myPost = new Post();
myPost.set("title", "I'm Hungry");
myPost.set("content", "Where should we go for lunch?");

// Create the comment
var myComment = new Comment();
myComment.set("content", "Let's do Sushirrito.");

// Add the post as a value in the comment
myComment.set("parent", myPost);

// This will save both myPost and myComment
myComment.save();

var post1 = new Post();
post1.id = "1zEcyElZ80";

myComment.set("parent", post1);
async function test0() {
    const post2 = await fetchedComment.get("parent");
    await post2.fetch();
    const title = post2.get("title");
    return title;
}

console.log(`title ${test0()}`);


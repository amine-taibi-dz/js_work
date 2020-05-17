$(document).ready(function () {

  // You define them when you start the Parse server
  const parseApplicationId = 'myApp123';
  const parseJavaScriptKey = 'jsApp123';
  /*
    curl -X POST \
    -H "X-Parse-Application-Id: myApp123" \
    -H "Content-Type: application/json" \
    -d '{"score":1337,"playerName":"Sean Plott","cheatMode":false}' \
    http://localhost:1337/parse/classes/GameScore
  
    {"objectId":"EXQejnbX4l","createdAt":"2020-05-17T16:29:10.453Z"}
  
    curl -X GET \
    -H "X-Parse-Application-Id: myApp123" \
    http://localhost:1337/parse/classes/GameScore/EXQejnbX4l
  
    {"objectId":"EXQejnbX4l","score":1337,"playerName":"Sean Plott","cheatMode":false,"createdAt":"2020-05-17T16:29:10.453Z","updatedAt":"2020-05-17T16:29:10.453Z"}
  
    { "objectId": "EXQejnbX4l", 
      "score": 1337, 
      "playerName": "Sean Plott", 
      "cheatMode": false, 
      "createdAt": "2020-05-17T16:29:10.453Z", 
      "updatedAt": "2020-05-17T16:29:10.453Z" }
  */

  Parse.initialize(parseApplicationId, parseJavaScriptKey);
  Parse.serverURL = 'http://localhost:1337/parse';
  //parse-server --appId myApp123 --masterKey jsApp123 --databaseURI mongodb://localhost/test
  const Test = Parse.Object.extend('Test');
  const test = new Test();
  const query = new Parse.Query(Test);

  $('.btn-save').click(function () {
    let data;
    try {
      data = JSON.parse($('textarea').val());
    } catch (e) {
      alert('Invalid JSON');
    }
    if (!data) return false;
    test.save(data, {
      success: (result) => {
        console.log('Parse.com object is saved: ', result);
        $('.log').html(JSON.stringify(result, null, 2));
        //alternatively you could use alert('Parse object is saved')
      },
      error: (error) => {
        console.log(`Error! Parse.com object is not saved: ${error}`);
      }
    })
  })

  $('.btn-get').click(function () {
    query.find({
      success: function (results) {
        $('.log').html(JSON.stringify(results, null, 2));
      },
      error: function (error) {
        alert(`Error: ${error.code} ${error.message}`);
      }
    })
  })

})

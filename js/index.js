$(document).ready(function(){
    var $tweetsContainer = $('.tweets');
    var tweets = streams.home;
      var index = tweets.length - 1;
      console.log(index)
      while(index > 0 ){
      
      var mostRecent = tweets[index];
      console.log(mostRecent)
      var $tweet = $('<li />');
      //turns html jquery object to a string?
      $tweet.html('@' + mostRecent.user + ': ' + mostRecent.message + ' ' + 'time: '+ parseTime(mostRecent.created_at));
      $tweetsContainer.append($tweet);
      index-=1
      }

     function parseTime(date){
       var hour = date.getHours()
       var minutes = date.getMinutes();
       var ampm = 'am';
       if(hour > 12){
        hour = hour - 12;
        ampm = 'pm'
       }
       if(minutes < 10){
        minutes = '0' + minutes
       }
       return hour + ':' + minutes + ampm; 
     }
   
    function appendNewTweet () {
      //get most recent
      var mostRecentTweet = tweets[tweets.length-1]

       for (var i = 11; i < 12; i++){
        var $newTweet = $('<li />');
        $newTweet.html(mostRecentTweet.user + ':' + mostRecentTweet.message)//insert the most recent tweet
        $tweetsContainer.prepend($newTweet)
       } 
       if(i < 50) window.setTimeout(appendNewTweet, 3000)

     }
   appendNewTweet()


   //console.log($tweetsContainer)
   //create a target button
    //on click grab that data and append it to the tweetsContainer
    //var button = $('.button'). button that we are going to target
    //create a jquery object to referecne the input text 
    //referencing the text a user inputs
  

    //in order to send tweets to the tweets container
    var $button = $('.submitButton')
    $button.on("click", function () {
      //access the tweet from the user
      var tweet = $("#user-input").val();
      //create a jquery object 
      var $userTweet = $('<li />')
      $userTweet.html('user: ' + tweet);
      $tweetsContainer.prepend(tweet);

    }

    )//button.click
    

   

    // var index = streams.home.length - 1;
    // console.log(streams.home)
    // while(index >= 0){
    //   var tweet = streams.home[index];
    //   var $tweet = $('<div></div>');
    //   $tweet.text('@' + tweet.user + ': ' + tweet.message);
    //   $tweet.appendTo('$body');
    //   index -= 1;
    // }

  });


//create a jquery object
//



//use createdAt later


// <!--     <script>

//       $(document).ready(function(){
//         var $body = $('body');
//         $body.html('');

//         var index = streams.home.length - 1;
//         while(index >= 0){
//           var tweet = streams.home[index];
//           var $tweet = $('<div></div>');
//           $tweet.text('@' + tweet.user + ': ' + tweet.message);
//           $tweet.appendTo($body);
//           index -= 1;
//         }

//       });

//     </script>
//  -->




/*Used a for loop. but ended up using a while loop in order to display the new tweets*/
    // for(var i = tweets.length-1; i >= 0; i--){
    //   var mostRecent = tweets[i];
    //   var $tweet = $('<li />');
    //   //turns html jquery object to a string?
    //   $tweet.html('@' + mostRecent.user + ': ' + mostRecent.message + ' ' + 'time: '+ parseTime(mostRecent.created_at) + 'am' );
    //   $tweetsContainer.append($tweet);
    // }
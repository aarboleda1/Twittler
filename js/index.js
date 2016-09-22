$(document).ready(function(){
    //var $body = $('body');
    //$body.html('');
    var $tweetsContainer = $('.tweets');
    var tweets = streams.home;
    for(var i = tweets.length-1; i >= 0; i--){
      var mostRecent = tweets[i];
      var $tweet = $('<li />');
      $tweet.html('@' + mostRecent.user + ': ' + mostRecent.message + ' ' + 'time: '+ parseTime(mostRecent.created_at) + 'am' );
      $tweetsContainer.append($tweet);
    }
    function parseTime(date){
       return date.getHours() + ':' + date.getMinutes(); 
  
    } 
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
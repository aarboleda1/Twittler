$(document).ready(function() {
            //a jQuery object to hold the tweets
            var $tweetsContainer = $('.tweets');
            var tweets = streams.home;
            var index = tweets.length - 1;
            //console.log(index)
            while (index > 0) {
                var mostRecent = tweets[index];
                var $tweet = $('<li id="clickable-tweet" />');
                $tweet.addClass(mostRecent.user);           
                $tweet.html('@' + mostRecent.user + ': ' + mostRecent.message + ' ' + 'time: ' + parseTime(mostRecent.created_at));
                $tweetsContainer.append($tweet);
                index -= 1
            }
            /*This code is to return the date/time in a presentable manner*/
            function parseTime(date) {
                var hour = date.getHours()
                var minutes = date.getMinutes();
                var ampm = 'am';
                if (hour > 12) {
                    hour = hour - 12;
                    ampm = 'pm'
                }
                if (minutes < 10) {
                    minutes = '0' + minutes
                }
                return hour + ':' + minutes + ampm;
            }
            /*This code is to append new tweets to the timeline*/
            function appendNewTweet() {
                //get most recent
                var mostRecentTweet = tweets[tweets.length - 1]

                for (var i = 11; i < 12; i++) {
                    var $newTweet = $('<li id="clickable-tweet" />');
                    $newTweet.addClass(mostRecentTweet.user);
                    $newTweet.html('@' + mostRecentTweet.user + ': ' + mostRecentTweet.message + '     time: ' + parseTime(mostRecentTweet.created_at)); //insert the most recent tweet
                    $tweetsContainer.prepend($newTweet)
                }
                if (i < 50) window.setTimeout(appendNewTweet, Math.random() * 9000)
            }
            //appendNewTweet();


            /*This code should append all the tweets of a given user when clickec on */
            $('body').on('click', '#clickable-tweet', function () {
      
              //determine whose tweet it was (by class name)
              console.log(this.className)
              var className = this.className; //this refers to the object which was clicked. and its class name

              //get all the elements by that class name aka all of one persons tweets
              
              //remove all the current tweets
              //append all new tweets to the dom

              
              //remove current dom
              //append the elements to the dom

              console.log('testing for clicking list ')
              //console.log()

            })

            /*This code should submit user input from text area to live feed when tweet buttton is clicked*/
            //in order to send tweets to the tweets container
            var $button = $('.submitButton')
            $button.on("click", function() {
                        //access the tweet from the user
                        var tweet = $("#user-input").val();
                        //create a jquery object 
                        var $userTweet = $('<li />')
                        $userTweet.html('user: ' + tweet);
                        $tweetsContainer.prepend(tweet);


                    }

                ) //button.click
    

   

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
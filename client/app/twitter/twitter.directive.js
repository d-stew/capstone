(function() {
  'use strict';

  angular.module('app.twitter')
    .directive('twitter', twitterDirective);


  function twitterDirective () {
    return {
      templateUrl: '/app/twitter/twitter.directive.html',
      controller: controller
    }
  }

  controller.$inject = ['$scope', '$http', 'socket'];

  function controller($scope, $http, socket) {
    socket.on('newTweet', function (tweet) {
      console.log('hey');
      $scope.tweet = tweet.text
      $scope.user = tweet.user.screen_name

      //parse language and location from payload
      var lang = tweet.lang
      var coords = tweet.coordinates
      var place = tweet.place
      var geo = tweet.geo

      //all hashtags in the tweet
      var hashtags = tweet.entities.hashtags.map(function(el){
        return el.text.toLowerCase()
      })

      //check source for geolocation
      if (coords) console.log("Coordinates: ", coords.coordinates);
      if (place) console.log("Place: ", place.bounding_box.coordinates[0][0]);
      if (geo) console.log("Geo: ", geo.coordinates)
    });
  }

}());

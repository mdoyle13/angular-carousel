var homeCarousel = angular.module('homeCarousel', ['ngAnimate']);
  
  function homeCarouselController($scope) {
    $scope.images = [

      {
        image: "http://placehold.it/500x500&text=1",
        caption: "This is my creed"
      },
      {
        image: "http://placehold.it/500x500&text=2",
        caption: "This is my code"
      },
      {
        image: "http://placehold.it/500x500&text=3",
        caption: "3"
      }

    ];

    //initial starting image

    $scope.selectedImage = 0;

    $scope.$watch('selectedImage', function() {
      
    });

    $scope.setSelected = function(selected) {
      $scope.selectedImage = selected
    },

    $scope.nextSlide = function() {
      if ($scope.selectedImage + 1 < $scope.images.length) {
        $scope.setSelected($scope.selectedImage += 1);  
      } else if ($scope.selectedImage + 1 >= $scope.images.length ) {
        $scope.setSelected(0);
      }
    }


    //Auto Increment
    // var carouselTimer = setInterval(function() {
    //   $scope.$apply(function() {
    //     $scope.nextSlide()
    //   });
    // }, 3000);
  }
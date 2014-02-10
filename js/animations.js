homeCarousel.animation('.carousel', function() {
 return {
    enter: function(element, done) {
      console.log('enter!');
    },

    leave: function(element, done) {
      console.log('leave!');
    },

    beforeAddClass : function(element, className, done) {
      if(className == 'ng-hide') {
        element.css('opacity',1);
        jQuery(element).animate({
          opacity:0
        }, done);
      }
      else {
        done();
      }
    },
    removeClass : function(element, className, done) {
      if(className == 'ng-hide') {
        element.css('opacity',0);
        jQuery(element).animate({
          opacity:1
        }, done);
      }
      else {
        done();
      }
    }
  };
});
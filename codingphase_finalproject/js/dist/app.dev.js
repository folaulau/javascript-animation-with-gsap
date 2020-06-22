"use strict";

// Page Transitions Animations
var initialPageAnimation = function initialPageAnimation() {
  var tl = gsap.timeline();
  tl.fromTo(".logo", {
    x: -200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
  }).fromTo(".menu", {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: 0.5,
    duration: 1.3
  }, ">-1.8").fromTo(".info-section h1", {
    x: 0,
    y: 100,
    opacity: 0
  }, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.3
  }).addLabel("h1Show").fromTo(".girl", {
    height: 0
  }, {
    height: 600,
    duration: 1.4,
    ease: "power2.inOut"
  }, ">-.5").fromTo(".boy", {
    height: 0
  }, {
    height: 600,
    duration: 1.4,
    ease: "power2.inOut"
  }, ">-1").fromTo(".shape1", {
    scale: 0,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1,
    ease: "power2.inOut"
  }, ">-1").fromTo(".shape3", {
    opacity: 0
  }, {
    opacity: 0.6,
    ease: "power2.inOut",
    duration: 1
  }, ">-.2").fromTo(".shape3", {
    x: -50,
    y: 500
  }, {
    y: 465,
    repeat: -1,
    duration: 1.5,
    ease: "sine.inOut",
    yoyo: true
  }).fromTo(".shape2", {
    opacity: 0
  }, {
    opacity: 0.3,
    ease: "power2.inOut",
    duration: 1
  }, ">-2").fromTo(".shape2", {
    x: 550,
    y: -150
  }, {
    y: -185,
    repeat: -1,
    duration: 1.5,
    ease: "sine.inOut",
    yoyo: true
  }).fromTo(".info-section h4", {
    x: -50,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1.3
  }, "h1Show").fromTo(".call-actions", {
    x: -50,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 1.3
  }, "h1Show+=1");
};

var delay = function delay(n) {
  return new Promise(function (done) {
    setTimeout(function () {
      done();
    }, n);
  });
};

var loadingLeave = function loadingLeave() {
  var timeline = gsap.timeline();
  timeline.fromTo(".loading-bg", {
    y: "100%"
  }, {
    y: 0
  });
};

var loadingEnter = function loadingEnter() {
  var timeline = gsap.timeline();
  timeline.fromTo('.loading-bg', {
    y: 0
  }, {
    y: "100%",
    duration: 2
  });
};

var galleryEnter = function galleryEnter() {
  var timeline = gsap.timeline();
  timeline.fromTo(".white-bg", {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "power1.inOut"
  }).fromTo(".white-bg ul li", {
    y: 50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.4,
    stagger: 0.2,
    ease: "power1.inOut"
  });
};

barba.init({
  sync: true,
  transitions: [{
    name: "page-wipe",
    leave: function leave(data) {
      var done;
      return regeneratorRuntime.async(function leave$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              done = this.async();
              console.log("Leaving Page Animation");
              loadingLeave();
              _context.next = 5;
              return regeneratorRuntime.awrap(delay(1500));

            case 5:
              done();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              loadingEnter();
              initialPageAnimation();
              console.log("Entering Page Animation");

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    },
    once: function once(data) {
      return regeneratorRuntime.async(function once$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              initialPageAnimation();

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    name: "gallery-transition",
    from: {
      namespace: ['home', 'about']
    },
    to: {
      namespace: ['gallery']
    },
    leave: function leave(data) {
      var done;
      return regeneratorRuntime.async(function leave$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              done = this.async();
              console.log("Leaving Gallery Page Animation");
              loadingLeave();
              _context4.next = 5;
              return regeneratorRuntime.awrap(delay(1500));

            case 5:
              done();

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              loadingEnter();
              galleryEnter();
              console.log("Entering Gallery Animation");

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }],
  views: [// {
  //   namespace: "index",
  //   beforeLeave(data) {
  //     // do something before leaving the current `index` namespace
  //   },
  // },
  {
    namespace: "about",
    afterEnter: function afterEnter(data) {
      loadingEnter();
    }
  }, {
    namespace: "gallery",
    afterEnter: function afterEnter(data) {
      loadingEnter();
      galleryEnter();
    }
  }]
}); // Scroll Animations

var tlServicesScroll = new gsap.timeline({
  onUpdate: debugPercentage
});

function debugPercentage() {
  console.log(tlServicesScroll.progress());
}

tlServicesScroll.fromTo('#main-services', {
  x: '100%'
}, {
  x: 0
});
var serviceElement = document.querySelector('#main-services');
var homeController = new ScrollMagic.Controller();
var serviceScene = new ScrollMagic.Scene({
  triggerElement: '#main-services',
  triggerHook: 1,
  reverse: true,
  // offset: 450,
  duration: serviceElement.offsetHeight
}).setTween(tlServicesScroll).addIndicators().addTo(homeController);
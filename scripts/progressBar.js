window.onload = function onLoad() {
  var bar = new ProgressBar.Circle(HC_container, {
    color: '#31333e',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,   //width of the  line of circular ProgressBar
  trailWidth: 1,    //width of the transperent line of circular ProgressBar
  easing: 'easeIn',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#cad9c3', width: 0.5},
  to: { color: '#2a7408', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);  //this adds the color to the circular path
      circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value + "%");
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';

    bar.animate(1.0);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Circle(H2_container, {
    color: '#31333e',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeIn',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#cad9c3', width: 0.5},
  to: { color: '#2a7408', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
            circle.setText(value + "%");
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';

    bar.animate(0.9);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Circle(H3_container, {
    color: '#31333e',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeIn',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#cad9c3', width: 0.5},
  to: { color: '#2a7408', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
            circle.setText(value + "%");
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';

    bar.animate(0.8);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Circle(H4_container, {
    color: '#31333e',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeIn',
  duration: 2000,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#cad9c3', width: 0.5},
  to: { color: '#2a7408', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
            circle.setText(value + "%");
        }

      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';

    bar.animate(0.75);  // Number from 0.0 to 1.0
};

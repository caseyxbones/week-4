// custom markers for leaflet --> uses an options object
      // this is the basic "insert marker" format for leaflet:
          L.marker([lat, long]).addTo(map);

      // marker options allow you to configure the marker and are passed through an object
          L.marker([lat, long],{options:boolean}).addTo(map); // This is the basic format for options
          L.marker([lat, long],{draggable:true}).addTo(map); // This is a specific example of how to use those options


      //alternately, you could define the new object

          var optionsMine = {
            draggable: true,
            opacity: 0.5,
          };

          L.marker([lat, long],{optionsMine}).addTo(map); // in this case you set all the options before hand in the variable and then call them

      // Another way to look at / think about Options objects:

          var muOptions = {
            "name" : "Casey",
            "number": 123123,
          };

          var generateID = function (options) {
            return options.name + options.number;
          };


// LOOKING AT PROPERTIES

      // _.isFunction
      // _.isArray
      // _.isObject
      // _.where
      // _.filter
      // _.sortBy
      // _.groupBy

// AJAX

    // Ajax creates "a promise" that there will be some response if you give it time

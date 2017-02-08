/* =====================
  Lab 2, part3: a full application (stretch goal)

  We're going to use the skills we've just been practicing to write a full application
  which is responsive to user input.
  At your disposal are a set of variables which we use to track user input (see
  part3-main.js and part3-setup.js for more details on how this is done — we'll
  cover this topic at a later date). Their values will be logged to console to
  aid in debugging.

  In this lab, which is very much open-ended, your task is to use the value of
  these variables to define the functions below. Try to come up with interesting
  uses of the provided user input.

  Some ideas:
    There are two numeric fields: can you write this application to filter
    using both minimum and maximum?
    There is a boolean (true/false) field: can you write your code to filter according
    to this boolean? (Try to think about how you could chop up this data to make this meaningful.)
    There is a string field: can you write your code to filter/search based on user
    input?

  Remember, this is open-ended. Try to see what you can produce.
===================== */

/* =====================
  These are global variables that we can use throughout our application.
===================== */
// var myData;
// var myMarkers = [L.marker([39.9522, -75.1639])];
// var numericField1, numericField2, booleanField, stringField;





/* =====================
  Define a resetMap function to remove markers from the map and clear the array of markers
===================== */

var resetMap = function() {
    _.each(myMarkers, function (individualMarker){
      map.removeLayer(individualMarker);
    });
};

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */
var parseData = function(allAjaxResponseValues) {
  return JSON.parse(allAjaxResponseValues);
};

var getAndParseData = function() {
  var downloadData = $.ajax("https://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-bike-crashes-snippet.json")
  .done(function(data){
    myData = parseData(data);
    // var test = parseData(data);
    // console.log(test);
    // return test;
    // return(test);
  });
};


/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
// var filterData = function(allParsedData) {
//   return _.filter(allParsedData, function(crashObject){
//     return crashObject.FATAL === parseInt(stringField);
//   });
// };
var makeMarkersAndMap =  function (parsedVariables) {
    var markersTemp = _.map(parsedVariables, function(crash) {
      return L.marker([crash.lat_final, crash.long_final]).addTo(map);
    }
  );
  return markersTemp;
};

var hasFatality = function(crashObject){
  return crashObject.FATAL === parseInt(stringField); // If someone types "1" into the string field, this will turn it into a number and filter by that number
};                                                    // I think you could also use the Boolean function for this because technically it's a boolean variable but I don't knpw how to do that

// var filterData = function(allParsedData) {
//   return _.filter(allParsedData, function(crashObject){
//     return crashObject.FATAL === parseInt(stringField);
//   });
// };

var plotData = function(){
  var filtered = _.filter(myData, hasFatality);
  return makeMarkersAndMap(filtered);
};

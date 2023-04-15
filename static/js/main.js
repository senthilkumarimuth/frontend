$(document).ready(function() {
  // Handle the form submit event
  $('#route-form').submit(function(event) {
    // Prevent the form from submitting via the browser
    event.preventDefault();

    // Serialize the form data
    var form_data = $(this).serializeArray();
    var form_json = JSON.stringify(objectifyForm(form_data));

    // Send the form data to the server
    $.ajax({
      url: '/get_route',
      type: 'POST',
      contentType: 'application/json',
      data: form_json,
      success: function(response) {
        // Update the route details
        $('#route-details').html(JSON.stringify(response.route));

        // Update the map on the right-hand side of the page
        $('#map-container').html(response.map_html);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});

// Helper function to convert form data to JSON object
function objectifyForm(formArray) {
  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}

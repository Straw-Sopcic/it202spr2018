/*

  yelp fusion api pass-through

  2018/04/10 - heymrhayes@gmail.com


  resources:
    https://developers.google.com/apps-script/reference/url-fetch/url-fetch-app
    https://developers.google.com/apps-script/reference/content/content-service
    https://developers.google.com/apps-script/guides/content#serving_json_from_scripts
    https://developers.google.com/apps-script/guides/web#request_parameters
    https://developers.google.com/apps-script/guides/web


*/

function doGet(e) {

  // yelp fusion API key - use your own
  var myKey = "SkUyjbs57SzLLMoQHPxEt_I-yS_Z3-svPdrLy9hbCXFsq-FRwQoufkmAHR3QOM1MbhVpfFo5kB0xIpjc65gOUDYmjRwSj_HpOoGw9BWUw-UrTX-v_MAtHlujrYDOWnYx"

  // the API authorization requires the key be passed in the header as part of the authorization value
  var headers = {
    'Authorization': 'Bearer '+ myKey
  };

  //  options to pass to fetch method
  var options = {
   'method' : 'get',
   'headers' : headers
 };

// endpoint from Yelp Fusion documentation
 var endpoint = "https://api.yelp.com/v3/autocomplete?text=del&latitude=37.786882&longitude=-122.399972";

 //TODO:  parse parameters and construct desired endpoint


 var response = UrlFetchApp.fetch(endpoint, options);

 //  return text content of the response, as JSON
 return ContentService.createTextOutput(response.getContentText())
     .setMimeType(ContentService.MimeType.JSON);

}

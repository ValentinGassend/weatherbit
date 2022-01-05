const settings = {
    "async": true,
    "url": "http://localhost/weatherbit/www/weather.php",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response) {
    response = JSON.parse(response);
    var time = new Date(response.data[0].ob_time);
    console.log(response.data[0].city_name);
    console.log(response.data[0].temp);
    console.log(response.data[0]);
    console.log(response.data[0]);
    console.log(response.data[0]);
    console.log(response.data[0]);
    $('p.city').text(response.data[0].city_name);
    $('p.temperature-icon').text(response.data[0].temp + "°");
    $('p.wind_value').text(Math.round(response.data[0].wind_spd * 3.6) + " km/h");
    $('p.sunrise_value').text(response.data[0].sunrise);
    $('p.sunset_value').text(response.data[0].sunset);
    $('p.precip_value').text(response.data[0].precip + ' mm');
    if (!isNaN(time.getDay())) {
        var day = "today";
        switch (time.getDay()) {
            case 0:
                day = "Sun";
                break;
            case 1:
                day = "Mon";
                break;
            case 2:
                day = "Tue";
                break;
            case 3:
                day = "Wed";
                break;
            case 4:
                day = "Thu";
                break;
            case 5:
                day = "Fri";
                break;
            case 6:
                day = "Sat";
                break;
            default:
                day = "O"; // we don't have a valid day
        }


    }
    $('p.precip_value').text(time.getDay());
});
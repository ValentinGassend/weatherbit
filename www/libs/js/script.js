const settings = {
    "async": true,
    "url": "http://localhost/weatherbit/www/weather.php",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response) {
    response = JSON.parse(response);
    const options = {
        month: 'long',
        day: 'numeric'
    };
    var time = new Intl.DateTimeFormat('fr-FR', options).format(new Date(response.data[0].ob_time));
    console.log(response.data[0].city_name);
    console.log(Math.round(response.data[0].temp));
    console.log(response.data[0]);
    console.log(response.data[0]);
    console.log(response.data[0].weather.code);
    $('p.city').text(response.data[0].city_name);
    $('p#date').text("today " + time);
    $('p.temperature-icon').text(Math.round(response.data[0].temp) + "°");
    $('p.wind_value').text(Math.round(response.data[0].wind_spd * 3.6) + " km/h");
    $('p.sunrise_value').text(response.data[0].sunrise);
    $('p.sunset_value').text(response.data[0].sunset);
    $('p.precip_value').text(response.data[0].precip + ' mm');
    var icon_code = response.data[0].weather.code;



    //Weather background switch
    if (response.data[0].temp < 10) {
        console.log("true");
        $(document.body).css("background", "linear-gradient(72.85deg, #1DA9C2 0%, #F8AD48 100%)");
    } else {
        if (response.data[0].temp > 25) {
            $(document.body).css("background", "linear-gradient(72.85deg, #D9547B 0%, #F8AD48 100%)");
        } else {
            $(document.body).css("background", "linear-gradient(72.85deg, #71376E 0%, #F8AD48 100%)");
        }
    }

    //Weather Icon switch
    //200-202 Rain_storm, 230-233 thnderstorm, 300-302 snowy, 500-502 rainy, 511 rainy,520-522 rainy, 600-602 snowy, 610-612 cloudy, 621-623 snowy, 700 partly_cloudy, 711 partly_cloudy, 721 partly_cloudy, 731 partly_cloudy, 741 partly_cloudy, 751 partly_cloudy, 800 slight_touch_happyday,801-804 partly_cloudy, 900
    if (icon_code < 203) {
        console.log("weather");
        $('img.weather-icon').attr('src', "./libs/img/svg/Rain_storm.svg");
    } else {
        if (icon_code < 234) {
            $('img.weather-icon').attr('src', "./libs/img/svg/thnderstorm.svg");
        } else {
            if (icon_code < 303) {
                $('img.weather-icon').attr('src', "./libs/img/svg/snowy.svg");
            } else {
                if (icon_code < 503) {
                    $('img.weather-icon').attr('src', "./libs/img/svg/rainy.svg");
                } else {
                    if (icon_code = 511) {
                        $('img.weather-icon').attr('src', "./libs/img/svg/rainy.svg");
                    } else {
                        if (icon_code < 523) {
                            $('img.weather-icon').attr('src', "./libs/img/svg/rainy.svg");
                        } else {
                            if (icon_code < 603) {
                                $('img.weather-icon').attr('src', "./libs/img/svg/snowy.svg");
                            } else {
                                if (icon_code < 613) {
                                    $('img.weather-icon').attr('src', "./libs/img/svg/cloudy.svg");
                                } else {
                                    if (icon_code < 624) {
                                        $('img.weather-icon').attr('src', "./libs/img/svg/snowy.svg");
                                    } else {
                                        if (icon_code = 700) {
                                            $('img.weather-icon').attr('src', "./libs/img/svg/partly_cloudy.svg");
                                        } else {
                                            if (icon_code = 711) {
                                                $('img.weather-icon').attr('src', "./libs/img/svg/partly_cloudy.svg");
                                            } else {
                                                if (icon_code = 721) {
                                                    $('img.weather-icon').attr('src', "./libs/img/svg/partly_cloudy.svg");
                                                } else {
                                                    if (icon_code = 731) {
                                                        $('img.weather-icon').attr('src', "./libs/img/svg/partly_cloudy.svg");
                                                    } else {
                                                        if (icon_code = 741) {
                                                            $('img.weather-icon').attr('src', "./libs/img/svg/partly_cloudy.svg");
                                                        } else {
                                                            if (icon_code = 751) {
                                                                $('img.weather-icon').attr('src', "./libs/img/svg/partly_cloudy.svg");
                                                            } else {
                                                                if (icon_code = 800) {
                                                                    $('img.weather-icon').attr('src', "./libs/img/svg/slight_touch_happyday.svg");
                                                                } else {
                                                                    if (icon_code < 805) {
                                                                        $('img.weather-icon').attr('src', "./libs/img/svg/partly_cloudy.svg");
                                                                    } else {
                                                                        $('img.weather-icon').attr('src', "./libs/img/svg/cloudy.svg");
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
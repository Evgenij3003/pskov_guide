/*==========================================================================================================================================================================*/
/* Проверка устройства, на котором открыта страница */
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector("body").classList.add("ie");
}
if (isMobile.any()) {
    document.querySelector("body").classList.add("_touch");
}



/*==========================================================================================================================================================================*/
/* Проверка браузера на поддержку формата webp */
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("_webp");
    } else {
        document.querySelector("body").classList.add("_no-webp");
    }
});



/*==========================================================================================================================================================================*/
/* Slider Swiper */
window.onload = function() {
    if (document.querySelector(".main-slider")) {
        let sliderMain = new Swiper(".main-slider", {
            navigation: {
                nextEl: ".main-slider .swiper-button-next",
                prevEl: ".main-slider .swiper-button-prev",
            },
            pagination: {																		
                el: ".main-slider__fraction",											
                type: "fraction",															
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
            parallax: true,                                                                
            speed: 1500,                                                              
            slidesPerView: 1,                                                                                                                                 
            centeredSlides: true,
        })
    }
};



/*==========================================================================================================================================================================*/
/* Google Maps */
window.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector("#map-castle")) {
        const googleMap = document.querySelector(".page-map");
        let flagMap = 0;
        window.addEventListener("scroll", initMap);
    
    
        function initMap() {
            let scrollY = window.scrollY;
            console.log(scrollY);
            if ((scrollY >= (googleMap.offsetTop - window.innerHeight) - 800) && (flagMap === 0)) {
                flagMap = 1;
                let map = new google.maps.Map(document.getElementById("map-castle"), {
                    center: {
                        lat: 57.821780, lng: 28.330452
                    },
                    zoom: 15,
                });
            }
        }
        initMap();
    }


    if (document.querySelector("#map-city")) {
        function initMapCity() {
            if (document.querySelector("#map-city")) {
                let mapCity = new google.maps.Map(document.getElementById("map-city"), {
                    center: {
                        lat: 57.819380,
                        lng: 28.332452
                    },
                    zoom: 10,
                });
                let marker = new google.maps.Marker({
                    position: {
                        lat: 57.819380,
                        lng: 28.332452
                    },
                    map: mapCity,
                    animation: google.maps.Animation.DROP,
                    title: "Pskov",
                });
            }
        };
        initMapCity();
    }
})
(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),o=(a(9),a(1)),i=(a(10),a(11),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",null,e.city,", ",e.country),r.a.createElement("h4",{className:"py-3"},"Last Updated : ",e.date),r.a.createElement("h5",{className:"py-1"},r.a.createElement("i",{className:"wi ".concat(e.icon," display-1")})),r.a.createElement("h1",{className:"py-4"},e.temp,"\xb0"),r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e.min,"\xb0"),r.a.createElement("span",{className:"px-4"},e.max,"\xb0")),r.a.createElement("h4",null,r.a.createElement("div",null,"Humidity  : ",r.a.createElement("span",{className:"px-4"},e.humidity,"%")),r.a.createElement("div",null,"Pressure   : ",r.a.createElement("span",{className:"px-4"},e.pressure," atm"))),r.a.createElement("h5",{className:"py-3"},e.description,r.a.createElement("span",null,r.a.createElement("h6",null,e.brief))))),r.a.createElement("div",{class:"bg-light bottom-container footer-copyright text-center py-3"},r.a.createElement("a",{class:"footer-link",href:"https://www.linkedin.com/in/sandeep-v-4b01551a4/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn"),r.a.createElement("a",{class:"footer-link",href:"https://github.com/sandeep-v1404",target:"_blank",rel:"noopener noreferrer"},"GitHub"),r.a.createElement("a",{class:"footer-link",href:"https://www.instagram.com/sandeep._.144/",target:"_blank",rel:"noopener noreferrer"},"Instagram"),r.a.createElement("p",{class:"copyright"},"\xa9 2020 Sandeep V @coding.tech")))}),l=(a(12),a(13),"http://api.openweathermap.org/data/2.5/weather?units=metric&appid=c65082e510e9cbf36a5cae8041688105&q="),m={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"};function u(e,t){switch(!0){case t>=200&&t<232:return e.Thunderstorm;case t>=300&&t<=321:return e.Drizzle;case t>=500&&t<=521:return e.Rain;case t>=600&&t<=622:return e.Snow;case t>=701&&t<=781:return e.Atmosphere;case 800===t:return e.Clear;case t>=801&&t<=804:default:return e.Clouds}}function p(e){return new Date(e).toDateString()}var h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({name:"City"}),h=Object(o.a)(s,2),d=h[0],w=h[1];return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h3",{className:"display-4"},"Weather App"),r.a.createElement("p",{class:"lead"},"A simple Web app which shows you weather by using OpenWeatherAPI made by ReactJS")),r.a.createElement("input",{name:"city",type:"text",className:"form-control",placeholder:"Search for a City..",onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement("button",{className:"btn btn-danger mt-4",onClick:function(){fetch("".concat(l).concat(a)).then((function(e){return e.json()})).then((function(e){w(e),c(""),console.log(e)}))}},"Get Weather"),"undefined"!=typeof d.main?r.a.createElement(i,{city:d.name,country:d.sys.country,temp:Math.round(d.main.temp),description:d.weather[0].main,brief:d.weather[0].description,max:Math.round(d.main.temp_max),min:Math.round(d.main.temp_min),humidity:d.main.humidity,pressure:Math.round(d.main.pressure/1013.25),sunrise:p(1e3*d.sys.sunrise),sunset:p(1e3*d.sys.sunset),date:p(1e3*d.dt),icon:u(m,d.weather[0].id)}):"")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b11d7a7a.chunk.js.map
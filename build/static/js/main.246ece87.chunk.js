(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},129:function(e,t,a){e.exports=a.p+"static/media/flight.76c388a7.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/nonstop.a8b2e228.png"},131:function(e,t,a){e.exports=a.p+"static/media/multiflight.9f029423.png"},133:function(e,t,a){e.exports=a(336)},138:function(e,t,a){},139:function(e,t,a){},328:function(e,t,a){},330:function(e,t,a){},331:function(e,t,a){},332:function(e,t,a){},333:function(e,t,a){},334:function(e,t,a){},335:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(13),l=a.n(r),o=(a(138),a(139),a(25)),m=a(9),c=a(26),d=a(22),u=a(74);a(328),a(329);const s=["Pune (PNQ)","Mumbai (BOM)","Bengaluru (BLR)","Delhi (DEL)"],g=e=>"Invalid Date"!==new Date(e)&&!isNaN(new Date(e)),p=e=>n.a.createElement("label",{style:{color:"red"}},e.message),h={findFlights:e=>({type:"GET_ROUTES",payload:e})};var f=Object(o.b)(e=>({flights:e.flights}),h)(e=>{let t,a;const[r,l]=Object(i.useState)(!1),[o,h]=Object(i.useState)({isValid:!1});let f={};return n.a.createElement(d.a,null,n.a.createElement(d.a.Body,null,n.a.createElement(m.a,{className:"search-form-container",onSubmit:i=>{i.preventDefault();const{flights:n}=e;f={};const r={origin:t.state.text,destination:a.state.text,departureDate:i.target.dateOfDep.value,numOfPassengers:i.target.numOfPassengers.value};i.target.flightType[1].checked&&(r.returnDate=i.target.dateOfReturn.value,g(i.target.dateOfReturn.value)||(f.returnDate=!0)),s.includes(r.origin)||(f.origin=!0),s.includes(r.destination)&&r.origin!==r.destination||(f.destination=!0),g(r.departureDate)||(f.departureDate=!0),g(r.departureDate)||(f.departureDate=!0),Object.keys(f).length>0?h({isValid:!1,...f}):(h({isValid:!0}),e.findFlights({flights:n,criteria:r}))}},n.a.createElement(m.a.Group,null,n.a.createElement(m.a.Check,{inline:!0,checked:!r,type:"radio",label:"One way",name:"flightType",id:"formHorizontalRadios1",onChange:e=>l(!1)}),n.a.createElement(m.a.Check,{inline:!0,checked:r,type:"radio",label:"Return",name:"flightType",id:"formHorizontalRadios2",onChange:e=>l(!0)})),n.a.createElement(m.a.Group,{controlId:"formGridOrigin"},n.a.createElement(u.Typeahead,{id:"originTypeahead",labelKey:"origin",options:s,placeholder:"Enter Origin",ref:e=>t=e}),o.origin&&n.a.createElement(p,{message:"Please enter a valid airport"})),n.a.createElement(m.a.Group,{controlId:"formGridDestination"},n.a.createElement(u.Typeahead,{id:"destinationTypeahead",labelKey:"destination",options:s,placeholder:"Enter Destination",ref:e=>a=e}),o.destination&&n.a.createElement(p,{message:"Please enter a valid airport but not same as origin"})),n.a.createElement(m.a.Group,{controlId:"formGridDateOfDep"},n.a.createElement(m.a.Label,null,"Departure Date"),n.a.createElement(m.a.Control,{type:"date",name:"dateOfDep",placeholder:"yyyy-mm-dd",required:!0}),o.departureDate&&n.a.createElement(p,{message:"Please enter a valid departure date"})),r&&n.a.createElement(m.a.Group,{controlId:"formGridDateOfReturn"},n.a.createElement(m.a.Label,null,"Return Date"),n.a.createElement(m.a.Control,{type:"date",name:"dateOfReturn",placeholder:"yyyy-mm-dd",required:!0}),o.returnDate&&n.a.createElement(p,{message:"Please enter a valid return date"})),n.a.createElement(m.a.Group,{controlId:"exampleForm.ControlSelect1"},n.a.createElement(m.a.Control,{as:"select",name:"numOfPassengers",placeholder:"Number of Passengers"},n.a.createElement("option",null,"Number of Passengers"),n.a.createElement("option",null,"1"),n.a.createElement("option",null,"2"),n.a.createElement("option",null,"3"),n.a.createElement("option",null,"4"),n.a.createElement("option",null,"5"))),n.a.createElement(c.a,{variant:"primary",type:"submit"},"Search"))))}),T=(a(330),a(331),a(129)),E=a.n(T);const v=e=>{const{origin:t,destination:a,date:i}=e.criteria;return n.a.createElement("section",{className:"flight-search-info"},n.a.createElement("div",null,n.a.createElement("img",{src:E.a,width:"40px",height:"40px",alt:"Flight"}),n.a.createElement("h3",null,"".concat(t," to ").concat(a))),n.a.createElement("p",null,e.count," flights found \xa0 ",(e=>{const t=new Date(e);t.setDate(t.getDate()+1);const a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],i=t.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()];return"".concat(a,", ").concat((e=>{if(e>3&&e<21)return"".concat(e,"th");switch(e%10){case 1:return"".concat(e,"st");case 2:return"".concat(e,"nd");case 3:return"".concat(e,"rd");default:return"".concat(e,"th")}})(i)," ").concat(n)})(i)))};a(332);const S=e=>n.a.createElement("div",{className:"detail-label"},n.a.createElement("h4",null,e.mainText),n.a.createElement("p",null,e.subText));a(333);const D=e=>n.a.createElement("div",{className:"price-info"},n.a.createElement("p",null,"\u20b9 ",e.amount));var N=a(130),b=a.n(N);const y=e=>e.map(e=>({...e,arrivalTimeStamp:new Date("".concat(e.date," ").concat(e.arrivalTime)).getTime(),departureTimeStamp:new Date("".concat(e.date," ").concat(e.departureTime)).getTime()})),B=e=>{const t=String(Math.floor(e/36e5)).padStart(2,"0"),a=String(Math.round(e%864e5%36e5/6e4)).padStart(2,"0");return"".concat(t,"h ").concat(a,"m")};a(127);const I=()=>n.a.createElement("img",{src:b.a,width:"32",height:"32",alt:"Non-stop Flight"}),L=e=>{const{name:t,flightNo:a,departureTime:i,origin:r,arrivalTime:l,destination:o,price:m,date:u}=e.data,s=e.isMultiMode,g=new Date("".concat(u," ").concat(l))-new Date("".concat(u," ").concat(i));return n.a.createElement(d.a,null,n.a.createElement("section",{className:"Flight-info ".concat(s?"gray-background":"")},n.a.createElement(I,null),n.a.createElement(S,{mainText:t,subText:a}),n.a.createElement(S,{mainText:i,subText:r}),n.a.createElement(S,{mainText:l,subText:o}),n.a.createElement(S,{mainText:B(g),subText:s?"":"Non stop"}),s?null:n.a.createElement(D,{amount:m}),s?null:n.a.createElement(c.a,{variant:"danger"},"Book")))};var O=a(131),P=a.n(O);a(334);const A=e=>n.a.createElement("img",{src:P.a,alt:"multiple flights logo",width:"32",height:"32"}),M=e=>n.a.createElement("p",{className:"layover-info"},"Layover of ",e.time),R=e=>{const{cumulativeFlight:{departureTime:t,origin:a,arrivalTime:r,destination:l,totalFare:o,arrivalTimeStamp:m,departureTimeStamp:u,dayChange:s},flights:g}=e.data,[p,h]=Object(i.useState)("Show Details"),f=m-u;return n.a.createElement(d.a,null,n.a.createElement("section",{className:"Flight-info"},n.a.createElement(A,null),n.a.createElement("div",{className:"detail-label"},n.a.createElement("h4",null,"Multiple"),n.a.createElement("a",{href:"#",onClick:()=>h("Show Details"===p?"Hide Details":"Show Details")},p)),n.a.createElement(S,{mainText:t,subText:a}),n.a.createElement(S,{mainText:r+(s?"(+1)":""),subText:l}),n.a.createElement(S,{mainText:B(f),subText:"Total Duration"}),n.a.createElement(D,{amount:o}),n.a.createElement(c.a,{variant:"danger"},"Book")),"Hide Details"===p&&g.map((e,t)=>{const a=t<g.length-1?g[t+1].departureTimeStamp-e.arrivalTimeStamp:null;return n.a.createElement(i.Fragment,{key:t},n.a.createElement(L,{data:e,isMultiMode:!0}),a&&n.a.createElement(M,{time:B(a)}))}))};var F=e=>{const t=e.flights||{},a=(t.nonStopFlights&&t.nonStopFlights.length)+(t.multiStopFlights&&t.multiStopFlights.length);return n.a.createElement("div",{className:"flights-info-container"},e.criteria&&n.a.createElement(v,{criteria:e.criteria,count:a||0}),t.nonStopFlights&&t.nonStopFlights.map(e=>n.a.createElement(L,{data:e})),t.multiStopFlights&&t.multiStopFlights.map(e=>n.a.createElement(R,{data:e})))},G=a(43);a(335);var w=()=>n.a.createElement("div",null,n.a.createElement("h2",{style:{margin:"40px",alignSelf:"flex-start",display:"flex"}},"Available Flights"),G.map((e,t)=>n.a.createElement("div",{key:t,className:"list-flights"},e.flights?n.a.createElement(R,{data:e}):n.a.createElement(L,{data:e}))));const x={getFlights:()=>({type:"GET_FLIGHTS"})};var j=Object(o.b)(e=>({flights:e.flights,routes:e.routes,filters:e.filters}),x)(function(e){const{getFlights:t,flights:a,routes:r}=e;Object(i.useEffect)(()=>{t()},[t]);const{origin:l,destination:o,departureDate:m,returnDate:c}=e.filters||{};return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h2",null,"Flight Search App")),n.a.createElement("section",{className:"Main-container"},n.a.createElement("aside",{className:"Search-section"},n.a.createElement(f,null)),n.a.createElement("section",{className:"Results-section"},!e.routes&&n.a.createElement("div",{style:{width:"1080px"}},n.a.createElement(w,null)),r&&r.onwards&&n.a.createElement(F,{flights:r.onwards,criteria:{origin:l,destination:o,date:m}}),r&&r.return&&n.a.createElement(F,{flights:r.return,criteria:{origin:o,destination:l,date:c}}))))}),Q=a(132),C=a(75);var _=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FLIGHTS":case"GET_FILTERS":case"GET_ROUTES":return{...e,loading:!0};case"GET_FLIGHTS_SUCCESS":return{...e,flights:t.json,loading:!1};case"GET_FILTERS_SUCCESS":return{...e,filters:t.json,loading:!1};case"GET_ROUTES_SUCCESS":return{...e,routes:t.json,loading:!1};default:return e}},J=a(16);function k(e){let{graph:t=[],from:a,to:i,date:n}=e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const l=function(e){const t=new Map;return function(){var a=JSON.stringify(arguments),i=t.get(a);return i||(i=e.apply(this,arguments),t.set(a,i),i)}}(function(e,t){return e.reduce((e,a)=>(a.origin===t&&e.push({destination:a.destination,config:{...a}}),e),[])}.bind(null,t));return function e(t,a){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];let n=arguments.length>3?arguments[3]:void 0;r.push(n||t);for(let o of l(t))if(o.destination!==a)U({edge:{from:t,to:o.destination},path:r.map(e=>e&&e.destination?e.destination:e)})||e(o.destination,a,i,o);else{let e=r.slice();e.push({...o}),i.push(e)}r.pop();return i}(a,i)}function U(e){let{edge:t,path:a}=e;return function(e,t){var a,i=[];for(a=0;a<e.length;a++)e[a]===t&&i.push(a);return i}(a,t.from).some(e=>a[e+1]===t.to)}function H(e){let{flights:t=y(G),criteria:a={origin:"Bengaluru (BLR)",destination:"Delhi (DEL)"}}=e;return function(e,t,a){const i=e.filter(e=>(function(e){let t=!1,a={};for(let i=0;i<e.length;i++){const n=e[i]&&e[i].destination?e[i].destination:e[i];if(a.hasOwnProperty(n)){t=!0;break}a[n]=e[i]}return!t})(e)).filter(e=>(function(e,t){let a=!1;if(e.length>1&&e[1].config.date!==t.replace(/-/g,"/"))return!1;for(let i=0;i<e.length-1;i++)if("object"===typeof e[i]&&"object"===typeof e[i+1]&&e[i+1].config.departureTimeStamp-e[i].config.arrivalTimeStamp<=18e5){a=!0;break}return!a})(e,t)),n={nonStopFlights:[],multiStopFlights:[]};return i.forEach((e,t)=>{if(2===e.length)n.nonStopFlights.push({...e[1].config,price:e[1].config.price*(parseInt(a)||1)});else{let t=0,i=[],r=e.length-1;for(let a=1;a<e.length;a++)i.push({...e[a].config}),t+=e[a].config.price;n.multiStopFlights.push({cumulativeFlight:{origin:e[0],destination:e[r].destination,date:e[1].config.date,departureTime:e[1].config.departureTime,arrivalTime:e[r].config.arrivalTime,arrivalTimeStamp:e[r].config.arrivalTimeStamp,departureTimeStamp:e[1].config.departureTimeStamp,dayChange:e[1].config.date!==e[r].config.date,totalFare:t*(parseInt(a)||1)},flights:i})}return n}),n}(k({graph:t,from:a.origin,to:a.destination}),a.date,a.numOfPassengers)}function*V(){try{const t=yield fetch("https://my-json-server.typicode.com/siddhishah222/flightdata").then(e=>e.json());yield Object(J.b)({type:"GET_FLIGHTS_SUCCESS",json:y(t)})}catch(e){console.log("error",e),yield Object(J.b)({type:"GET_FLIGHTS_FAIL",error:e})}}function*W(e){try{yield Object(J.b)({type:"GET_FILTERS_SUCCESS",json:e.payload.criteria});const{flights:a,criteria:{returnDate:i,origin:n,destination:r,departureDate:l,numOfPassengers:o}}=e.payload,m={};i&&(m.return=H({flights:a,criteria:{origin:r,destination:n,date:i,numOfPassengers:o}})),m.onwards=H({flights:a,criteria:{origin:n,destination:r,date:l,numOfPassengers:o}}),yield Object(J.b)({type:"GET_ROUTES_SUCCESS",json:m})}catch(t){console.log("error",t),yield Object(J.b)({type:"GET_ROUTES_FAIL",error:t})}}function*q(){yield Object(J.c)("GET_FLIGHTS",V)}function*z(){yield Object(J.c)("GET_ROUTES",W)}const K=Object(Q.a)(),X=Object(C.b)(_,Object(C.a)(K));K.run(function*(){yield Object(J.a)([q(),z()])}),l.a.render(n.a.createElement(o.a,{store:X},n.a.createElement(j,null)),document.getElementById("root"))},43:function(e){e.exports=[{cumulativeFlight:{origin:"Mumbai (BOM)",destination:"Delhi (DEL)",date:"2024/04/02",departureTime:"7:20",arrivalTime:"22:10",arrivalTimeStamp:16043352e5,departureTimeStamp:16042818e5,dayChange:!1,totalFare:10868},flights:[{arrivalTime:"9:50",date:"2024/04/02",departureTime:"7:20",destination:"Pune (PNQ)",flightNo:"AI-120",name:"Air India",origin:"Mumbai (BOM)",price:5635,arrivalTimeStamp:16042908e5,departureTimeStamp:16042818e5},{arrivalTime:"22:10",date:"2024/04/02",departureTime:"20:00",destination:"Delhi (DEL)",flightNo:"AI-135",name:"Air India",origin:"Pune (PNQ)",price:5233,arrivalTimeStamp:16043352e5,departureTimeStamp:16043274e5}]},{arrivalTime:"08:00",date:"2024/05/01",departureTime:"07:00",destination:"Pune (PNQ)",flightNo:"6E-104",name:"IndiGo",origin:"Bengaluru (BLR)",price:3405},{arrivalTime:"06:00",date:"2024/05/01",departureTime:"04:00",destination:"Bengaluru (BLR)",flightNo:"6E-101",name:"IndiGo",origin:"Delhi (DEL)",price:3405},{arrivalTime:"10:20",date:"2024/05/01",departureTime:"08:10",destination:"Delhi (DEL)",flightNo:"6E-102",name:"IndiGo",origin:"Bengaluru (BLR)",price:1150},{arrivalTime:"04:00",date:"2024/03/21",departureTime:"02:50",destination:"Delhi (DEL)",flightNo:"6E-103",name:"IndiGo",origin:"Bengaluru (BLR)",price:2737},{arrivalTime:"05:40",date:"2024/03/21",departureTime:"04:30",destination:"Pune (PNQ)",flightNo:"AI-104",name:"Air India",origin:"Delhi (DEL)",price:3481},{arrivalTime:"07:35",date:"2024/03/01",departureTime:"06:15",destination:"Pune (PNQ)",flightNo:"SJ-105",name:"SpiceJet",origin:"Delhi (DEL)",price:2449},{arrivalTime:"10:00",date:"2024/03/01",departureTime:"8:50",destination:"Bengaluru (BLR)",flightNo:"SJ-106",name:"Singapore Airlines",origin:"Pune (PNQ)",price:6345},{arrivalTime:"12:00",date:"2024/03/01",departureTime:"10:50",destination:"Delhi (DEL)",flightNo:"SJ-106",name:"Singapore Airlines",origin:"Bengaluru (BLR)",price:6345},{arrivalTime:"10:00",date:"2024/03/01",departureTime:"08:00",destination:"Bengaluru (BLR)",flightNo:"SJ-107",name:"SpiceJet",origin:"Pune (PNQ)",price:5e3},{arrivalTime:"12:30",date:"2024/04/01",departureTime:"11:00",destination:"Delhi (DEL)",flightNo:"QR-108",name:"Qatar Airways",origin:"Bengaluru (BLR)",price:4004},{arrivalTime:"13:30",date:"2024/05/01",departureTime:"12:00",destination:"Delhi (DEL)",flightNo:"TW-109",name:"Air Taiwan",origin:"Mumbai (BOM)",price:3495},{arrivalTime:"16:30",date:"2024/06/01",departureTime:"14:00",destination:"Mumbai (BOM)",flightNo:"6E-110",name:"IndiGo",origin:"Delhi (DEL)",price:4137},{arrivalTime:"16:30",date:"2024/04/01",departureTime:"14:00",destination:"Mumbai (BOM)",flightNo:"AI-121",name:"Air India",origin:"Bengaluru (BLR)",price:3217},{arrivalTime:"16:30",date:"2024/04/01",departureTime:"14:00",destination:"Bengaluru (BLR)",flightNo:"AI-111",name:"Air India",origin:"Delhi (DEL)",price:3217},{arrivalTime:"16:30",date:"2024/04/02",departureTime:"14:30",destination:"Delhi (DEL)",flightNo:"AI-112",name:"Air India",origin:"Bengaluru (BLR)",price:4170},{arrivalTime:"15:30",date:"2024/03/21",departureTime:"14:00",destination:"Pune (PNQ)",flightNo:"6E-113",name:"IndiGo",origin:"Bengaluru (BLR)",price:2132},{arrivalTime:"23:45",date:"2024/05/01",departureTime:"22:30",destination:"Mumbai (BOM)",flightNo:"AI-114",name:"Air India",origin:"Bengaluru (BLR)",price:2001},{arrivalTime:"22:10",date:"2024/05/01",departureTime:"20:00",destination:"Bengaluru (BLR)",flightNo:"6E-115",name:"IndiGo",origin:"Delhi (DEL)",price:5233},{arrivalTime:"19:30",date:"2024/05/01",departureTime:"17:20",destination:"Bengaluru (BLR)",flightNo:"AI-116",name:"Air India",origin:"Pune (PNQ)",price:6348},{arrivalTime:"14:15",date:"2024/03/11",departureTime:"13:15",destination:"Pune (PNQ)",flightNo:"AI-117",name:"Air India",origin:"Mumbai (BOM)",price:5117},{arrivalTime:"06:00",date:"2024/04/22",departureTime:"05:00",destination:"Mumbai (BOM)",flightNo:"6E-119",name:"IndiGo",origin:"Delhi (DEL)",price:3525},{arrivalTime:"08:50",date:"2024/03/21",departureTime:"07:20",destination:"Mumbai (BOM)",flightNo:"AI-120",name:"Air India",origin:"Pune (PNQ)",price:5635},{arrivalTime:"06:58",date:"2024/03/21",departureTime:"06:10",destination:"Pune (PNQ)",flightNo:"AI-121",name:"Air India",origin:"Delhi (DEL)",price:2537},{arrivalTime:"10:20",date:"2024/07/04",departureTime:"08:10",destination:"Mumbai (BOM)",flightNo:"AI-131",name:"Air India",origin:"Delhi (DEL)",price:4681},{arrivalTime:"12:15",date:"2024/05/22",departureTime:"11:15",destination:"Bengaluru (BLR)",flightNo:"SJ-115",name:"SpiceJet",origin:"Mumbai (BOM)",price:3549},{arrivalTime:"13:00",date:"2024/04/08",departureTime:"11:00",destination:"Pune (PNQ)",flightNo:"SJ-116",name:"SpiceJet",origin:"Bengaluru (BLR)",price:5445},{arrivalTime:"10:00",date:"2024/04/08",departureTime:"08:00",destination:"Bengaluru (BLR)",flightNo:"SJ-117",name:"Singapore Airlines",origin:"Delhi (DEL)",price:6500},{arrivalTime:"10:30",date:"2024/05/13",departureTime:"08:00",destination:"Pune (PNQ)",flightNo:"QR-118",name:"Qatar Airways",origin:"Delhi (DEL)",price:5504},{arrivalTime:"15:30",date:"2024/03/10",departureTime:"12:00",destination:"Mumbai (BOM)",flightNo:"TW-119",name:"Air Taiwan",origin:"Pune (PNQ)",price:5495},{arrivalTime:"11:30",date:"2024/03/10",departureTime:"09:00",destination:"Pune (PNQ)",flightNo:"6E-130",name:"IndiGo",origin:"Delhi (DEL)",price:4137},{arrivalTime:"16:30",date:"2024/04/26",departureTime:"14:00",destination:"Delhi (DEL)",flightNo:"AI-131",name:"Air India",origin:"Bengaluru (BLR)",price:5432},{arrivalTime:"16:30",date:"2024/04/26",departureTime:"14:30",destination:"Delhi (DEL)",flightNo:"6E-132",name:"IndiGo",origin:"Mumbai (BOM)",price:4567},{arrivalTime:"16:10",date:"2024/03/21",departureTime:"14:30",destination:"Delhi (DEL)",flightNo:"AI-134",name:"Air India",origin:"Bengaluru (BLR)",price:5132},{arrivalTime:"13:10",date:"2024/03/21",departureTime:"12:30",destination:"Bengaluru (BLR)",flightNo:"AI-133",name:"Air India",origin:"Mumbai (BOM)",price:5132},{arrivalTime:"23:45",date:"2024/03/21",departureTime:"22:30",destination:"Pune (PNQ)",flightNo:"AI-134",name:"Air India",origin:"Bengaluru (BLR)",price:2001},{arrivalTime:"22:10",date:"2024/03/21",departureTime:"20:00",destination:"Pune (PNQ)",flightNo:"6E-135",name:"IndiGo",origin:"Bengaluru (BLR)",price:6233},{arrivalTime:"18:30",date:"2024/03/17",departureTime:"17:20",destination:"Pune (PNQ)",flightNo:"AI-136",name:"Air India",origin:"Bengaluru (BLR)",price:2268},{arrivalTime:"22:15",date:"2024/03/17",departureTime:"20:15",destination:"Mumbai (BOM)",flightNo:"6E-137",name:"IndiGo",origin:"Pune (PNQ)",price:3187},{cumulativeFlight:{origin:"Mumbai (BOM)",destination:"Delhi (DEL)",date:"2024/04/02",departureTime:"7:20",arrivalTime:"22:10",arrivalTimeStamp:16043352e5,departureTimeStamp:16042818e5,dayChange:!1,totalFare:10868},flights:[{arrivalTime:"9:50",date:"2024/04/02",departureTime:"7:20",destination:"Pune (PNQ)",flightNo:"AI-120",name:"Air India",origin:"Mumbai (BOM)",price:5635,arrivalTimeStamp:16042908e5,departureTimeStamp:16042818e5},{arrivalTime:"22:10",date:"2024/04/02",departureTime:"20:00",destination:"Delhi (DEL)",flightNo:"AI-135",name:"Air India",origin:"Pune (PNQ)",price:5233,arrivalTimeStamp:16043352e5,departureTimeStamp:16043274e5}]}]}},[[133,1,2]]]);
//# sourceMappingURL=main.246ece87.chunk.js.map

// const googleMapEl = document.getElementById("map")


// // `https://maps.googleapis.com/maps/api/geocode/json?address=${req.session.zipcode}&key=${process.env.gMapsAPI}`


// export default function initMap(){
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=2500+Jump+Off+Joe+Creek+Road,+Grants+Pass,+OR&key=AIzaSyDiGnQ61aAehxeFqd9DfJ6JZ8OOBVuruQU`).then(function (results) {
//         return results.json()
//     }).then(function (data) {
        
//         let lat = data.results[0].geometry.location.lat;
//         let lng = data.results[0].geometry.location.lng;
//         Map(lat, lng)
//     })

// }

// init()

// function Map(lat, lng) {
    
//     const usermap = {lat,lng};
    
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 12,
//       center: usermap,
//     });
   
//     const marker = new google.maps.Marker({
//       position: usermap,
//       map: map,
//     });
//   }
  

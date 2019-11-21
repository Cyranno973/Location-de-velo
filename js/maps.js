class Map {
  constructor(idMap, center, zoom, nomMap) {



    this.idMap = idMap;

    this.OpenStreetMap_France = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
    });

  

    this.idMap = document.getElementById("this.idMap");

    this.nomMap = L.map(idMap, {
      center: center,
      zoom: zoom,
      layers: [this.OpenStreetMap_France],
   
    });


  }

  recuperMarker(liens) {

    var greenIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var redIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    let ajaxGetElt = new AjaxGet(liens, function(reponse) {


      var listeStation = JSON.parse(reponse);
      // boucle forEach qui parcours mon objets
      var markers = new L.MarkerClusterGroup();
      listeStation.forEach(function(station) {
        // je creer un aker pour chaque element station
        if (station.status === "OPEN") {
          var marker = new L.marker([station.position.lat, station.position.lng], {
            icon: greenIcon
          });
        } else {
          console.log("stationfermer");
          var marker = new L.marker([station.position.lat, station.position.lng], {
            icon: redIcon
          });
        }

        marker.stationNumber = station.number;


        markers.addLayer(marker);

        marker.addEventListener("click", function() {
          console.log(this.stationNumber);
          var containerMapElt = document.querySelector(".container-map");
          var containerStationFormElt = document.querySelector(".stationform");
          console.log(containerMapElt);
          console.log(containerStationFormElt);
         

          containerStationFormElt.style.display="block";
          
          // crerr l'url pour recuperer les info de la station
          var urlStation = " https://api.jcdecaux.com/vls/v3/stations/" + this.stationNumber + "?contract=marseille&apiKey=0e4c54d917fae8413e3fb4345d92d596c0894cfc";
          //      console.log(urlStation);
          //ajax get pour recuperer les infos de la station utiliser lurl juste au dessus

          let ajaxGetElt2 = new AjaxGet(urlStation, function(reponse) {
            var station = JSON.parse(reponse);
            var liNom = document.getElementById('viewnom');
            liNom.textContent = station.name;
            sessionStorage.setItem("stationClick", station.name);

            var liStatus = document.getElementById('viewstatus');
            liStatus.textContent = station.status;

            var liAdress = document.getElementById('viewadress');
            liAdress.textContent = station.address;

            var liCapacite = document.getElementById('viewcapacite');
            liCapacite.textContent = station.mainStands.capacity;

            var liVeloDisponible = document.getElementById('viewvelodisponible');
            liVeloDisponible.textContent = station.mainStands.availabilities.bikes;

            var liEmplacementDisponible = document.getElementById('viewemplacementlibre');
            liEmplacementDisponible.textContent = station.mainStands.availabilities.stands;


          });

        });


      });
      // apres afficher le groupement de marker apes le for each
      this.nomMap.addLayer(markers);


      // le .bind dit au javascript que this utiliser dans la fonction est le this de la class MAP;
    }.bind(this));

  };

}




// metttre un point d'interrogation pour le premier parametre et un & commercial pour les autres
// https://api.jcdecaux.com/vls/v3/contracts?apiKey=0e4c54d917fae8413e3fb4345d92d596c0894cfc

// recuperer toutes les stations d 'un contrat
//https://api.jcdecaux.com/vls/v3/stations?contract=toyama&apiKey=0e4c54d917fae8413e3fb4345d92d596c0894cfc
document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map').setView([40.4136, -3.6835], 13); // Madrid
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  var marker = L.marker([40.4167, -3.7025]).addTo(map); // Marcador en París

  // Función para trazar la ruta entre dos puntos
  function trazarRuta(puntoA, puntoB) {
    L.Routing.control({
      waypoints: [
        L.latLng(puntoA[0], puntoA[1]),
        L.latLng(puntoB[0], puntoB[1])
      ],
      routeWhileDragging: true,
      show: false // Oculta la información de la ruta
    }).addTo(map);
  }

  var sitios = [
    [40.4169, -3.7038], // Torre Eiffel (Distrito 7 - Palais-Bourbon)
    [40.4155, -3.7074], // Louvre (Distrito 1 - Louvre)
    [40.4170, -3.7142], // Catedral de Notre-Dame (Distrito 4 - Hôtel-de-Ville)
    [40.4139, -3.6921], // Basílica del Sagrado Corazón (Distrito 18 - Butte-Montmartre)
    [40.4150, -3.6842], // Arco de Triunfo (Distrito 8 - Élysée)
    [40.4531, -3.6883], // Jardines de Luxemburgo (Distrito 6 - Luxembourg)
    [40.4200, -3.7060]  // Moulin Rouge (Distrito 18 - Pigalle)
  ];

  // Trazar rutas desde París a los sitios turísticos
  for (var i = 0; i < sitios.length; i++) {
    trazarRuta([40.4167, -3.7025], sitios[i]);
  }
});
/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiamF2YWtpZHgiLCJhIjoiY2s2ejVxa3B0MTBwbjNsbzhjanF4ZThwMiJ9.S6qzs1B7V2uiJQOUDHZhyQ';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/javakidx/ck6z64k3h3zqq1ipihig1xkel',
    scrollZoom: false
    //   center: [25.0148777, 120.3967146],
    //   zoom: 10,
    //   interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Add marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    // Add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extend amp bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};

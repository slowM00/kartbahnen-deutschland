
(function(){
  if (typeof L === 'undefined') return;

  const tracks = [
    {name: 'MS Kart', href: 'mskart.html', lat: 50.8820, lng: 6.7243},
    {name: 'MSC Wittgenborn', href: 'wittgenborn.html', lat: 50.4020, lng: 9.0700},
    {name: 'ProKart Raceland', href: 'prokart_raceland.html', lat: 49.2460, lng: 12.1960},
    {name: 'Kartshop Ampfing', href: 'ampfing.html', lat: 48.3000, lng: 12.6660},
    {name: 'Kartbahn Teningen', href: 'teningen.html', lat: 48.4520, lng: 7.7430},
    {name: 'Kartbahn Straubing', href: 'straubing.html', lat: 48.8810, lng: 12.5730},
    {name: 'Ralf Schumacher Kartbahn', href: 'ralf_schumacher.html', lat: 52.4130, lng: 9.7060}
  ];

  const map = L.map('map', { scrollWheelZoom: false }).setView([51.0, 10.0], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  tracks.forEach(t => {
    const m = L.circleMarker([t.lat, t.lng], {radius:10, color:'#e53935', fillColor:'#e53935', fillOpacity:0.95, weight:1}).addTo(map);
    const popup = `<strong><a href="${t.href}">${t.name}</a></strong><br><small>Koordinaten ungefähr</small>`;
    m.bindPopup(popup);
    m.on('mouseover', () => m.openPopup());
    m.on('mouseout', () => m.closePopup());
    m.on('click', () => { window.location.href = t.href; });
  });

  const group = L.featureGroup(tracks.map(t => L.circleMarker([t.lat, t.lng])));
  if (tracks.length) map.fitBounds(group.getBounds().pad(0.25));
})();


(function(){
  if (typeof L === 'undefined') return;

  const tracks = [
    {name: 'MS Kart', href: 'mskart.html', lat: 50.8820, lng: 6.7243, img: '../img/kerpen.png'},
    {name: 'MSC Wittgenborn', href: 'wittgenborn.html', lat: 50.4020, lng: 9.0700, img: '../img/wittgenborn.jpg'},
    {name: 'ProKart Raceland', href: 'prokart_raceland.html', lat: 49.2460, lng: 12.1960, img: '../img/Prokart_Raceland.svg'},
    {name: 'Kartshop Ampfing', href: 'ampfing.html', lat: 48.3000, lng: 12.6660, img: '../img/Ampfing.svg'},
    {name: 'Kartbahn Teningen', href: 'teningen.html', lat: 48.4520, lng: 7.7430, img: '../img/Teningrot_red_range.png'},
    {name: 'Kartbahn Straubing', href: 'straubing.html', lat: 48.8810, lng: 12.5730, img: '../img/Straubing_layout.svg'},
    {name: 'Ralf Schumacher Kartbahn', href: 'ralf_schumacher.html', lat: 52.4130, lng: 9.7060, img: '../img/ralf-schumacher-layout.svg'}
  ];

  const map = L.map('map', { scrollWheelZoom: true, attributionControl: false }).setView([51.0, 10.0], 6);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: ''
  }).addTo(map);

  tracks.forEach(t => {
    const icon = L.icon({
      iconUrl: t.img,
      iconSize: [52, 52],
      className: 'track-marker-icon'
    });
    const marker = L.marker([t.lat, t.lng], { icon }).addTo(map);
    const popup = `<strong><a href="${t.href}">${t.name}</a></strong><br><small>Koordinaten ungefähr</small>`;
    marker.bindPopup(popup);
    marker.on('click', () => { window.location.href = t.href; });
  });

  const group = L.featureGroup(tracks.map(t => L.marker([t.lat, t.lng])));
  if (tracks.length) map.fitBounds(group.getBounds().pad(0.25));
})();

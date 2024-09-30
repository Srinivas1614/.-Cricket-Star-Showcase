// Fan Zone Form Submission
document.getElementById('fan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for submitting your story!');
    document.getElementById('fan-form').reset();
});

// Initialize Interactive Map using Leaflet.js
function initMap() {
    var map = L.map('map').setView([20.5937, 78.9629], 3); // Set initial view over the world

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example: Add player markers
    var players = [
        { name: "Player 1", lat: 22.5726, lng: 88.3639 },
        { name: "Player 2", lat: 33.6844, lng: 73.0479 },
        { name: "Player 3", lat: 51.5074, lng: -0.1278 }
    ];

    players.forEach(function(player) {
        L.marker([player.lat, player.lng]).addTo(map)
            .bindPopup(player.name)
            .openPopup();
    });
}

// Load the map on window load
window.onload = initMap;

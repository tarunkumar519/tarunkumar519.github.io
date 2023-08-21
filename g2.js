document.addEventListener("DOMContentLoaded", function () {
    const pingValueElement = document.getElementById("pingValue");

    // Function to fetch and update ping value
    function fetchAndDisplayPing() {
        fetch('http://139.59.89.163:3001/api/status-page/heartbeat/dns')
            .then(response => response.json())
            .then(data => {
                const pingData = data.heartbeatList['3'];
                const latestPing = pingData[pingData.length - 1].ping;
                pingValueElement.textContent = `Ping Value: ${latestPing}`;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                pingValueElement.textContent = 'Error fetching data';
            });
    }

    // Fetch and display ping value initially
    fetchAndDisplayPing();

    // Update ping value every 5 seconds (you can adjust the interval)
    setInterval(fetchAndDisplayPing, 5000); // 5000 milliseconds (5 seconds)
});

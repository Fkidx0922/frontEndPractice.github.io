// Write JavaScript code here

const container = document.getElementById('container');
container.innerHTML = `<div class="cloud">
                            <div class="cloudBubble1"></div>
                            <div class="cloudBubble2"></div>
                        </div>`.repeat(5);

const clouds = document.querySelectorAll('.cloud');

for (let i = 0; i < clouds.length; i++) {
    const cloud = clouds[i];
    cloud.style.top = (Math.random() * 100) + '%';  // Reduced to 80% to keep clouds more visible
    cloud.style.left = (Math.random() * 100) + '%';  // Start clouds at random positions within the visible area
    cloud.style.transform = 'scale(0.5)';

    let movingRight = Math.random() < 0.5;  // Randomly decide initial direction
    
    const moveCloud = () => {
        const currentLeft = parseFloat(cloud.style.left);
        if (movingRight) {
            if (currentLeft < 120) {  // Move slightly beyond the right edge
                cloud.style.left = '120%';
            } else {
                cloud.style.left = '-20%';  // Start from slightly beyond the left edge
                movingRight = false;
            }
        } else {
            if (currentLeft > -20) {  // Move slightly beyond the left edge
                cloud.style.left = '-20%';
            } else {
                cloud.style.left = '120%';  // Start from slightly beyond the right edge
                movingRight = true;
            }
        }
    };

    const intervalTimeInSeconds = (Math.random() * 6) + 6;
    cloud.style.transition = `left linear ${intervalTimeInSeconds}s`;

    // Initial movement
    setTimeout(moveCloud, 100);

    // Continuous movement
    setInterval(moveCloud, intervalTimeInSeconds * 1000);
}
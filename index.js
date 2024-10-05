// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(location) {
    const hqLocation = 42; // HQ is at block 42
    return Math.abs(location - hqLocation); // Return distance in blocks
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264; // Convert blocks to feet
}

// Function to calculate distance traveled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Convert blocks to feet
}

// Function to calculate fare price based on distance
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // Free for the first 400 feet
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fee for distances over 2000 feet
    } else {
        return "cannot travel that far"; // No rides over 2500 feet
    }
}

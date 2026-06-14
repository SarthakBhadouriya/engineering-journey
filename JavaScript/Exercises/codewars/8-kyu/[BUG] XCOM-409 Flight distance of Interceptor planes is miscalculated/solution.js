function travelDistance(avgSpeed, travelTime) {
  const knotInKm = 1.852*avgSpeed
  const travelHours = travelTime / 60;
  const travelKms   = knotInKm*travelHours
  
  return travelKms;
}
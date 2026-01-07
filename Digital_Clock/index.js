 function updateclock(){
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    const meridian = hours >= 12 ? 'PM' : 'AM';
    hours = String((now.getHours() % 12) || 12).padStart(2, '0');

    
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById('clock').textContent = timeString;
 }

 updateclock();
 setInterval(updateclock, 1000);
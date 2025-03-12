/*
    File information 
    Student Name: Acima Cherian
    Date: March 11 2025
    File Name: DM130_EC_js script

*/
document.addEventListener("DOMContentLoaded", function() {
    let logo = document.getElementById("logo");
    logo.style.transition = "transform 1s ease-in-out";
    logo.style.transform = "rotateY(360deg)";
});

function playVideo() {
    let video = document.getElementById("rescue-video");
    video.play();
    
    // Apply an animation effect
    video.style.transform = "scale(1.1)";
    video.style.transition = "transform 0.5s ease-in-out";
    
    setTimeout(() => {
        video.style.transform = "scale(1)";
    }, 500);
}


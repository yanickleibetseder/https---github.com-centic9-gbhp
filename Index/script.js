const track = document.getElementById("image-track");

track.dataset.percentage = "-25"; 
track.dataset.prevPercentage = "-25";
track.style.transform = `translate(${track.dataset.percentage}%, -50%)`;

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
};


window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage || "0";
};


window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const speed = 0.5; 

    let percentage = (mouseDelta / maxDelta) * -100 * speed;
    let nextPercentage = parseFloat(track.dataset.prevPercentage || 0) + percentage;


    nextPercentage = Math.max(Math.min(nextPercentage, -25), -75);
    track.dataset.percentage = nextPercentage;

    track.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
        image.animate(
            { objectPosition: `${100 + parseFloat(track.dataset.percentage)}% center` },
            { duration: 1200, fill: "forwards" }
        );
    }
};
const speed = 0.5; 
let nextPercentage = parseFloat(track.dataset.prevPercentage || 0) + percentage * speed;



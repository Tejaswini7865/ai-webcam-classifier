const video = document.getElementById('video');
const snapBtn = document.getElementById('snap');
const canvas = document.getElementById('canvas');
const result = document.getElementById('result');

// Function to start webcam
async function startWebcam() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.play();
  } catch (err) {
    console.error("Error accessing webcam:", err);
    result.textContent = "Cannot access webcam. Please allow camera permissions.";
  }
}

// Capture snapshot
snapBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const imgData = canvas.toDataURL('image/png');
  result.innerHTML = `<img src="${imgData}" alt="Snapshot"/>`;
});

// Start the webcam automatically
startWebcam();

function drawGrid(centerX, centerY, ctx, maxRadius, levels) {
  ctx.strokeStyle = "#ccc";
  ctx.lineWidth = 1;

  for (let level = 1; level <= levels; level++) {
    ctx.beginPath();
    for (let i = 0; i < labels.length; i++) {
      const angle = (Math.PI * 2 / labels.length) * i - Math.PI / 2;
      const radius = (maxRadius / levels) * level;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.stroke();
  }
}

function drawAxes(centerX, centerY, ctx, maxRadius) {
  ctx.strokeStyle = "#aaa";
  ctx.lineWidth = 1;
  ctx.font = "14px sans-serif";
  ctx.fillStyle = "#000";

  for (let i = 0; i < labels.length; i++) {
    const angle = (Math.PI * 2 / labels.length) * i - Math.PI / 2;
    const x = centerX + maxRadius * Math.cos(angle);
    const y = centerY + maxRadius * Math.sin(angle);

    // Axis line
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();

    // Label
    const labelX = centerX + (maxRadius + 20) * Math.cos(angle);
    const labelY = centerY + (maxRadius + 20) * Math.sin(angle);
    ctx.fillText(labels[i], labelX - 15, labelY);
  }
}

function drawDataPolygon(centerX, centerY, ctx, maxRadius, inputScore) {
  ctx.beginPath();
  for (let i = 0; i < inputScore.length; i++) {
    const angle = (Math.PI * 2 / labels.length) * i - Math.PI / 2;
    const value = inputScore[i] / 5; // Normalize to 0–1
    const r = maxRadius * value;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.fillStyle = "rgba(0, 123, 255, 0.3)";
  ctx.strokeStyle = "#007bff";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fill();
}

function drawPoints(centerX, centerY, ctx, maxRadius, inputScore) {
  for (let i = 0; i < inputScore.length; i++) {
    const angle = (Math.PI * 2 / labels.length) * i - Math.PI / 2;
    const value = inputScore[i] / 5;
    const r = maxRadius * value;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#007bff";
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
}


const averageScore = 3; // Adjust this to scale the scores
const labels = ["Score 1", "Score 2", "Score 3", "Score 4", "Score 5"];


export function drawRadarChart(chartid, inputScore) {
  const canvas = document.getElementById(chartid);
  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const maxRadius = 150;
  const levels = 5;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(centerX, centerY, ctx, maxRadius, levels);
  drawAxes(centerX, centerY, ctx, maxRadius);
  drawDataPolygon(centerX, centerY, ctx, maxRadius, inputScore);
  drawPoints(centerX, centerY, ctx, maxRadius, inputScore);
}

// drawRadarChart();

const text = document.getElementById('outside-p').textContent;
const colors = ['#FF55BB', '#55BBFF', '#FFD700', '#FF6347', '#98FB98', '#FF8C00', '#8A2BE2', '#00CED1', '#FF4500', '#ADFF2F'];

const coloredText = text.split('').map((char, index) => {
  const color = colors[index % colors.length];
  return `<span style="color: ${color};">${char}</span>`;
}).join('');

document.getElementById('outside-p').innerHTML = coloredText;

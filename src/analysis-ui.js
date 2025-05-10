// src/analysis-ui.js
import { analyzeQuestion } from './analyse-questions.js';

async function handleCsvUpload(evt) {
  const file = evt.target.files[0];
  if (!file) return;

  const text = await file.text();
  const lines = text.trim().split('\n').slice(1);
  const answers = lines.map(line => {
    const cols = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    return {
      rating: parseInt(cols[1].replace(/"/g, ''), 10),
      tag:    cols[2].replace(/"/g, '')
    };
  });

  const analysis = await analyzeQuestion(answers);
  const container = document.getElementById('analysis-container');
  container.textContent = analysis || 'No analysis returned.';
  console.log(analysis)
}

document
  .getElementById('csvInput')
  .addEventListener('change', handleCsvUpload);

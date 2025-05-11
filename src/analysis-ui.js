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
  console.log(analysis)
  
  try {
    const analysisJson = JSON.parse(analysis);
    const thoughtOuput = analysisJson['Thought'];
    const positiveOuput = analysisJson['Positive'];
    const negativeOuput = analysisJson['Negative'];
    const resultOuput = analysisJson['Result'];
    // const container = document.getElementById('analysis-container');
    const containerThought = document.getElementById('thought-output');
    const containerPositive = document.getElementById('positive-output');
    const containerNegative = document.getElementById('negative-output');
    const containerResult = document.getElementById('result-output');
    //container.textContent = analysis || 'No analysis returned.';
    containerThought.textContent = thoughtOuput || 'No analysis returned.';
    containerPositive.textContent = positiveOuput || 'No analysis returned.';
    containerNegative.textContent = negativeOuput || 'No analysis returned.';
    containerResult.textContent = resultOuput || 'No analysis returned.';
  }
  catch {
    const thoughtOuput = 'Failed to analyze. Please upload the file again.'
    const positiveOuput = 'Failed to analyze. Please upload the file again.'
    const negativeOuput = 'Failed to analyze. Please upload the file again.'
    const resultOuput = 'Failed to analyze. Please upload the file again.'
    // const container = document.getElementById('analysis-container');
    const containerThought = document.getElementById('thought-output');
    const containerPositive = document.getElementById('positive-output');
    const containerNegative = document.getElementById('negative-output');
    const containerResult = document.getElementById('result-output');
    //container.textContent = analysis || 'No analysis returned.';
    containerThought.textContent = thoughtOuput
    containerPositive.textContent = positiveOuput
    containerNegative.textContent = negativeOuput
    containerResult.textContent = resultOuput
  }
  

  


}

document
  .getElementById('csvInput')
  .addEventListener('change', handleCsvUpload);

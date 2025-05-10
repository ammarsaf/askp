// src/analyse-questions.js
import config from './config.js';

export async function analyzeQuestion(answers) {
  try {
    console.log('Sending request with answers:', answers);
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      credentials: 'omit',
      body: JSON.stringify({ answers })
    };
    
    console.log('Request options:', requestOptions);
    
    
    const response = await fetch(config.API_URL, requestOptions);
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }
    
    const data = await response.json();
    console.log('Received data:', data);
    return data.analysis;
  } catch (error) {
    console.error('Error analyzing answers:', error);
    return `Error analyzing answers: ${error.message}. Please try again later.`;
  }
} 
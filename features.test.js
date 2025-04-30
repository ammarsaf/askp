import { questions, generateForm, initialize } from './features.js';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('Questionnaire', () => {
    beforeEach(() => {
        document.body.innerHTML = html;
        initialize(); // Call initialize after loading the HTML
    });

    test('check amount of questions', () => {
        // generateForm(questions); // generateForm is now called within initialize
        const questionElements = document.querySelectorAll('.question');
        expect(questionElements.length).toBe(100);
    });
});

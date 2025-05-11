// features.js
import { drawRadarChart } from './radarchart.js';
import { systemPrompt } from './prompt.js';
// import 'dotenv/config';
// console.log(process.env.API_BASE_URL);



export const questions = [
    "What is your concept of marriage?",
    "Have you ever been married before?",
    "Are you married now?",
    "What are your expectations of marriage?",
    "What are your goals in life? Long term and short term plans.",
    "Identify three things that you want to accomplish in the near future.",
    "Identify three things that you want to accomplish, long-term.",
    "Why have you chosen me as your potential spouse?",
    "What is the role of religion in your life – now?",
    "Are you a spiritual person?",
    "What is your understanding of an Islamic marriage?",
    "What are you expecting of your spouse, religiously?",
    "What is your relationship between yourself and the Muslim community in your area?",
    "Are you volunteering in any Islamic activities?",
    "What can you offer your mate, spiritually?",
    "What is the role of a husband?",
    "What is the role of a wife?",
    "Do you want to practice polygamy?",
    "What is your relationship with your family?",
    "What do you expect your relationship to be like with the family of your spouse?",
    "What do you expect the relationship between your spouse and your family to be like?",
    "Is there anyone in your family that lives with you now?",
    "Are you planning to have anyone in your family live with you in the future?",
    "If for any reason my relationship with your family turns sour, what should be done?",
    "Who are your friends? Identify at least three.",
    "How did you get to know them?",
    "Why are they your friends?",
    "What do you like most about them?",
    "What will your relationship with them be like after marriage?",
    "Do you have friends from the opposite sex?",
    "What is the level of your relationship with them – now?",
    "What will be the level of your relationship with them after marriage?",
    "What type of relationship do you want your spouse to have with your friends?",
    "What are the things that you do in your free time?",
    "Do you like to have guests in your home for entertainment?",
    "What are you expecting from your spouse when your friends come to the house?",
    "What is your opinion of speaking other languages in the home that I do not understand? With friends? With family?",
    "Do you travel?",
    "How do you spend your vacations?",
    "How do you think your spouse should spend vacations?",
    "Do you read?",
    "What do you read?",
    "After marriage, do you think that you are one to express romantic feelings verbally?",
    "After marriage, do you think that you want to express affection in public?",
    "How do you express your admiration for someone that you know – now?",
    "How do you express your feelings to someone who has done a favor for you?",
    "Do you like to write your feelings?",
    "If you wrong someone, how do you apologize?",
    "If someone has wronged you, how do you want them to apologize to you?",
    "How much time passes before you choose to forgive someone?",
    "How do you make important and less important decisions in your life?",
    "Do you use foul language at home? In public? With your family?",
    "Do your friends use foul language?",
    "Does your family use foul language?",
    "How do you express anger?",
    "How do you expect your spouse to express anger?",
    "What do you do when you are angry?",
    "When do you think it is appropriate to initiate mediation in a marriage?",
    "When there is a dispute in your marriage, religious or not, how should the conflict be resolved?",
    "Define mental, verbal, emotional, and physical abuse.",
    "What would you do if you felt that you had been abused?",
    "Who would you call for assistance if you were being abused?",
    "Do you suffer from any chronic disease or condition?",
    "Are you willing to take a physical exam by a physician, before marriage?",
    "What is your understanding of proper health and nutrition?",
    "How do you support your own health and nutrition?",
    "What is your definition of wealth?",
    "How do you spend your money?",
    "How do you save your money?",
    "How do you think that your use of money will change after marriage?",
    "Do you have any debts now? If so, how are you making progress to eliminate the debt?",
    "Do you use credit cards?",
    "Do you support the idea of taking loans to buy a home?",
    "What are you expecting from your spouse financially?",
    "What is your financial responsibility in a marriage?",
    "Do you support the idea of a working wife?",
    "If so, how do you think a dual-income family should manage funds?",
    "Do you currently use a budget to manage your finances?",
    "Who are the people to whom you are financially responsible?",
    "Do you support the idea of utilizing baby-sitters and maids?",
    "Do you want to have children? If not, why?",
    "To the best of your understanding, are you able to have children?",
    "Do you want to have children in the first two years of marriage? If not, then when?",
    "Do you believe in abortion in you family?",
    "Do you have children now?",
    "What is your relationship with your children, now?",
    "What is your relationship with their parent, now?",
    "What relationship do you expect your spouse to have with your children and their parent?",
    "What is the best method of raising children?",
    "What is the best method of disciplining children?",
    "How were you raised?",
    "How were you disciplined?",
    "Do you believe in spanking children? Under what circumstances?",
    "Do you believe in public schools for your children?",
    "Do you believe in Islamic schools for your children?",
    "Do you believe in home-schooling your children? If so, by whom?",
    "What type of relationship should your children have with non-Muslim classmates and friends?",
    "Would you send your children to visit their extended family if they lived in another state or country?",
    "What type of relationship do you want your children to have with all of their grandparents?",
    "If there are members of my family that are not Muslim, that are of a different culture or race, what type of relationship do you want to have with them?"
];

export const questionT = [
    "What is your concept of marriage?",
    "Have you ever been married before?",
    "Are you married now?",
    "What are your expectations of marriage?",
    "What are your goals in life? Long term and short term plans.",
    "Identify three things that you want to accomplish in the near future.",
    "Identify three things that you want to accomplish, long-term.",
    "Why have you chosen me as your potential spouse?",
    "What is the role of religion in your life – now?",
    "Are you a spiritual person?",
    "To the best of your understanding, are you able to have children?",
    "Do you want to have children in the first two years of marriage? If not, then when?",
    "Do you believe in abortion in you family?",
    "Do you have children now?",
    "What is your relationship with your children, now?",
    "What is your relationship with their parent, now?",
    "What relationship do you expect your spouse to have with your children and their parent?",
    "What is the best method of raising children?",
    "What is the best method of disciplining children?",
    "How were you raised?",
]

export const questionsMalay =    [
    "Apakah konsep anda tentang perkahwinan?",
    "Pernahkah anda berkahwin sebelum ini?",
    "Adakah anda sudah berkahwin sekarang?",
    "Apakah harapan anda terhadap perkahwinan?",
    "Apakah matlamat hidup anda? Rancangan jangka panjang dan jangka pendek.",
    "Kenal pasti tiga perkara yang anda ingin capai dalam masa terdekat.",
    "Kenal pasti tiga perkara yang anda ingin capai dalam jangka panjang.",
    "Mengapa anda memilih saya sebagai pasangan anda?",
    "Apakah peranan agama dalam hidup anda sekarang?",
    "Adakah anda seorang yang spiritual?",
    "Apakah pemahaman anda tentang perkahwinan Islam?",
    "Apakah yang anda harapkan daripada pasangan anda dari segi keagamaan?",
    "Apakah hubungan anda dengan komuniti Muslim di kawasan anda?",
    "Adakah anda terlibat dalam sebarang aktiviti Islamik secara sukarela?",
    "Apakah yang boleh anda tawarkan kepada pasangan anda dari segi spiritual?",
    "Apakah peranan seorang suami?",
    "Apakah peranan seorang isteri?",
    "Adakah anda ingin mengamalkan poligami?",
    "Apakah hubungan anda dengan keluarga anda?",
    "Apakah yang anda harapkan dalam hubungan anda dengan keluarga pasangan anda?",
    "Apakah yang anda harapkan dalam hubungan pasangan anda dengan keluarga anda?",
    "Adakah sesiapa dalam keluarga anda yang tinggal bersama anda sekarang?",
    "Adakah anda merancang untuk membenarkan sesiapa dalam keluarga anda tinggal bersama anda pada masa hadapan?",
    "Jika hubungan saya dengan keluarga anda menjadi keruh, apa yang patut dilakukan?",
    "Siapakah rakan-rakan anda? Nyatakan sekurang-kurangnya tiga.",
    "Bagaimana anda mengenali mereka?",
    "Mengapa mereka menjadi rakan anda?",
    "Apa yang anda paling suka tentang mereka?",
    "Apakah hubungan anda dengan mereka selepas berkahwin?",
    "Adakah anda mempunyai rakan berlainan jantina?",
    "Apakah tahap hubungan anda dengan mereka sekarang?",
    "Apakah tahap hubungan anda dengan mereka selepas berkahwin?",
    "Apakah jenis hubungan yang anda mahu pasangan anda ada dengan rakan-rakan anda?",
    "Apakah perkara yang anda lakukan pada masa lapang?",
    "Adakah anda suka menerima tetamu di rumah untuk hiburan?",
    "Apakah yang anda harapkan daripada pasangan anda apabila rakan anda datang ke rumah?",
    "Apakah pendapat anda tentang bercakap dalam bahasa lain di rumah yang saya tidak fahami? Dengan rakan? Dengan keluarga?",
    "Adakah anda suka melancong?",
    "Bagaimana anda menghabiskan percutian anda?",
    "Bagaimana anda fikir pasangan anda patut menghabiskan percutian?",
    "Adakah anda suka membaca?",
    "Apa yang anda baca?",
    "Selepas berkahwin, adakah anda akan meluahkan perasaan romantik secara lisan?",
    "Selepas berkahwin, adakah anda ingin menunjukkan kasih sayang secara terbuka?",
    "Bagaimana anda menunjukkan kekaguman terhadap seseorang yang anda kenali sekarang?",
    "Bagaimana anda meluahkan perasaan kepada seseorang yang telah menolong anda?",
    "Adakah anda suka menulis perasaan anda?",
    "Jika anda menyakiti seseorang, bagaimana anda memohon maaf?",
    "Jika seseorang menyakiti anda, bagaimana anda mahu mereka memohon maaf kepada anda?",
    "Berapa lama masa yang anda ambil sebelum memaafkan seseorang?",
    "Bagaimana anda membuat keputusan penting dan kurang penting dalam hidup?",
    "Adakah anda menggunakan bahasa kasar di rumah? Di tempat awam? Dengan keluarga?",
    "Adakah rakan anda menggunakan bahasa kasar?",
    "Adakah keluarga anda menggunakan bahasa kasar?",
    "Bagaimana anda meluahkan kemarahan?",
    "Bagaimana anda mengharapkan pasangan anda meluahkan kemarahan?",
    "Apa yang anda lakukan apabila anda marah?",
    "Bilakah masa yang sesuai untuk memulakan mediasi dalam perkahwinan?",
    "Apabila berlaku pertikaian dalam perkahwinan anda, sama ada agama atau tidak, bagaimana ia harus diselesaikan?",
    "Takrifkan penderaan mental, lisan, emosi dan fizikal.",
    "Apa yang akan anda lakukan jika anda merasakan bahawa anda telah didera?",
    "Siapa yang akan anda hubungi untuk mendapatkan bantuan jika anda didera?",
    "Adakah anda menghidap sebarang penyakit kronik atau keadaan kesihatan?",
    "Adakah anda sanggup menjalani pemeriksaan kesihatan sebelum berkahwin?",
    "Apakah pemahaman anda tentang kesihatan dan pemakanan yang baik?",
    "Bagaimana anda menjaga kesihatan dan pemakanan anda sendiri?",
    "Apakah definisi kekayaan bagi anda?",
    "Bagaimana anda membelanjakan wang anda?",
    "Bagaimana anda menyimpan wang anda?",
    "Bagaimana anda fikir penggunaan wang anda akan berubah selepas berkahwin?",
    "Adakah anda mempunyai hutang sekarang? Jika ya, bagaimana anda berusaha mengurangkannya?",
    "Adakah anda menggunakan kad kredit?",
    "Adakah anda menyokong idea mengambil pinjaman untuk membeli rumah?",
    "Apakah yang anda harapkan daripada pasangan anda dari segi kewangan?",
    "Apakah tanggungjawab kewangan anda dalam perkahwinan?",
    "Adakah anda menyokong isteri yang bekerja?",
    "Jika ya, bagaimana keluarga dua pendapatan patut mengurus kewangan?",
    "Adakah anda menggunakan bajet untuk mengurus kewangan sekarang?",
    "Siapakah orang yang anda bertanggungjawab dari segi kewangan?",
    "Adakah anda menyokong penggunaan pengasuh dan pembantu rumah?",
    "Adakah anda mahu mempunyai anak? Jika tidak, mengapa?",
    "Sejauh mana anda faham, adakah anda mampu mempunyai anak?",
    "Adakah anda mahu mempunyai anak dalam dua tahun pertama perkahwinan? Jika tidak, bila?",
    "Adakah anda percaya kepada pengguguran dalam keluarga anda?",
    "Adakah anda mempunyai anak sekarang?",
    "Apakah hubungan anda dengan anak-anak anda sekarang?",
    "Apakah hubungan anda dengan ibu atau bapa kepada anak-anak anda sekarang?",
    "Apakah hubungan yang anda harapkan antara pasangan anda dengan anak-anak dan ibu atau bapa mereka?",
    "Apakah kaedah terbaik untuk membesarkan anak-anak?",
    "Apakah kaedah terbaik untuk mendisiplinkan anak-anak?",
    "Bagaimana anda dibesarkan?",
    "Bagaimana anda didisiplinkan?",
    "Adakah anda percaya kepada rotan atau pukulan untuk anak-anak? Dalam keadaan bagaimana?",
    "Adakah anda percaya kepada sekolah awam untuk anak-anak anda?",
    "Adakah anda percaya kepada sekolah Islam untuk anak-anak anda?",
    "Adakah anda percaya kepada pembelajaran di rumah untuk anak-anak anda? Jika ya, oleh siapa?",
    "Apakah jenis hubungan yang patut anak-anak anda ada dengan rakan bukan Muslim?",
    "Adakah anda akan menghantar anak-anak anda melawat keluarga mereka jika mereka tinggal di negeri atau negara lain?",
    "Apakah jenis hubungan yang anda mahu anak-anak anda ada dengan semua datuk nenek mereka?",
    "Jika ada ahli keluarga saya yang bukan Muslim, berlainan budaya atau bangsa, apakah jenis hubungan yang anda ingin ada dengan mereka?"
]

const questionTags = {
    "Marriage": [1, 2, 3, 4, 8, 11, 16, 17, 18, 59],
    "Expectations": [4, 12, 20, 21, 36, 74, 75],
    "Goals": [5, 6, 7],
    "Religion": [9, 10, 11, 12, 13, 14, 15, 59],
    "Spirituality": [10, 15],
    "Family": [19, 20, 21, 22, 23, 24, 89, 90, 91, 92, 93, 99],
    "Relationships": [8, 19, 20, 21, 25, 26, 27, 28, 29, 30, 31, 32, 33, 87, 88],
    "Friendship": [25, 26, 27, 28, 29, 30, 31, 32, 33],
    "Communication": [43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57],
    "Conflict": [24, 48, 49, 50, 58, 59, 60, 61, 62],
    "Lifestyle": [34, 35, 36, 37, 38, 39, 40, 41, 42],
    "Health": [63, 64, 65, 66],
    "Finance": [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    "Children": [80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
    "Education": [94, 95, 96, 97],
    "Abuse": [60, 61, 62],
    "Work": [76, 77],
    "Travel": [38, 39, 40],
    "Culture": [37, 100]
}
const arrTags = Object.entries(questionTags);

// Flattening for easy process on CSV
const arrTagsFlattened = {};
for (const [category, numbers] of Object.entries(questionTags)) {
    for (const number of numbers) {
        arrTagsFlattened[number] = category;
    }
}


export function generateForm(questionChose) {
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = ""; // Clear existing questions

    questionChose.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        let qtagHtml = '';
        arrTags.forEach(function(questionNum) {
            if (questionNum[1].includes(index + 1)) {
                qtagHtml = `
        <div class="qtag" style = "display:flex; justify-content:flex-end" name="qtag-${questionNum[0]}">
            ${questionNum[0]}
        </div>`;
            }
        });

        questionDiv.innerHTML = `
    <label for="question-${index}">
        ${index + 1}. ${question}
    </label>
    ${qtagHtml}
    <div>
        <label><input type="radio" name="rating-${index}" value="1">1</label>
        <label><input type="radio" name="rating-${index}" value="2">2</label>
        <label><input type="radio" name="rating-${index}" value="3">3</label>
        <label><input type="radio" name="rating-${index}" value="4">4</label>
        <label><input type="radio" name="rating-${index}" value="5">5</label>
    </div>
    <select name="tag-${index}">
        <option value="Tolerable">Tolerable</option>
        <option value="Non-tolerable">Non-tolerable</option>
        <option value="None">None</option>
    </select>
`;
        questionsContainer.appendChild(questionDiv);
    });
}

export function submitForm() {
    const validationMessage = document.getElementById("validation-message");
    validationMessage.textContent = "";
    const form = document.getElementById("questionnaire-form");
    let allQuestionsAnswered = true;

    
    for (let i = 0; i < questions.length; i++) {
        const rating = form.querySelector(`input[name="rating-${i}"]:checked`);
        const tag = form.querySelector(`select[name="tag-${i}"]`).value;
        if (!rating || tag === "") {
            validationMessage.textContent = `Please answer question ${i + 1}.`;
            allQuestionsAnswered = false;
            break;
        }
        

    }
    if (allQuestionsAnswered) {
        displayStatistics();
    }
}
export function displayStatistics() {
    const form = document.getElementById("questionnaire-form");
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        const rating = parseInt(form.querySelector(`input[name="rating-${i}"]:checked`).value);
        const tag = form.querySelector(`select[name="tag-${i}"]`).value;
        answers.push({ rating, tag });
    }

    const tagCounts = {
        "Tolerable": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        "Non-tolerable": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        "None": { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
    };

    answers.forEach(answer => {
        tagCounts[answer.tag][answer.rating]++;
    });

    const statisticsContainer = document.getElementById("statistics-container");
    statisticsContainer.innerHTML = ""

    for (const tag in tagCounts) {
        const tagContainer = document.createElement(`${tag}-container`);

        const total = Object.values(tagCounts[tag]).reduce((a, b) => a + b, 0);

        if (total > 0) {
            tagContainer.innerHTML += `<h3>${tag}</h3>`;
            for (let i = 1; i <= 5; i++) {
                const percentage = (tagCounts[tag][i] / total) * 100;
                tagContainer.innerHTML += `<p>Score ${i}: <strong>${percentage.toFixed(2)}%<strong></p>`;
            }
        } else {
            tagContainer.innerHTML += `<h3>${tag}</h3><p>No data for this tag.</p>`;
        }
        statisticsContainer.append(tagContainer)
    }

    let normalizeScore = {}
    for (const tag in tagCounts) { 
        normalizeScore[tag] = []
        for (const score in tagCounts[tag]) {
            let questionAmount = Object.values(tagCounts[tag]).reduce(sum_val, 0);
            console.log(questionAmount)
            let normalizeOut = normalizeTheScore(tagCounts[tag][score], questionAmount);
            normalizeScore[tag].push(normalizeOut)
        }
    }
    console.log(tagCounts)
    console.log(normalizeScore)
    drawRadarChart("radar-canvas-tolerable", normalizeScore['Tolerable']);
    drawRadarChart("radar-canvas-nontolerable", normalizeScore['Non-tolerable']);


}

export function normalizeTheScore(input, totalquestion) {
    return (input / totalquestion) * 5
}

function sum_val (a, b) {
    return a + b;
}


export function downloadCsv() {
    const form = document.getElementById("questionnaire-form");
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Question,Rating,Impact,Tag\r\n";
    for (let i = 0; i < questions.length; i++) {
        const rating = form.querySelector(`input[name="rating-${i}"]:checked`)?.value || "";
        const tag = document.querySelector(`select[name="tag-${i}"]`).value || "";

        // let qtagfind = ""
        // arrTags.forEach(function(questionNum) {
        //         if (questionsNum[1].includes(i+1)) {
        //             qtagfind = document.querySelector(`select[qtag-${questionNum[0]}`)
        //         }
        // })
        // const qtag = qtagfind;
        csvContent += `"${questions[i]}","${rating}","${tag}","${arrTagsFlattened[i+1]}"\r\n`;
    }
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "questionnaire_results.csv");
    document.body.appendChild(link);
    link.click();
}


export function initialize() {
    const toggle = document.getElementById("languageToggle");
    const questionChose = questions;

    if (toggle) { // Check if toggle element exists
        toggle.addEventListener('change', () => {
            const questionsContainer = document.getElementById("questions-container");
            questionsContainer.innerHTML = ""; // Clear existing questions

            if (toggle.checked) {
                generateForm(questionsMalay);
            } else {
                generateForm(questions);
            }
        });
    }

    generateForm(questionChose);
}

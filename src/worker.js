// src/worker.js

export default {
  // the fetch entrypoint
  async fetch(request, env) {
    const CORS = {
      "Access-Control-Allow-Origin":     "*",              // dev; lock down in prod
      "Access-Control-Allow-Methods":    "GET,HEAD,POST,OPTIONS",
      "Access-Control-Allow-Headers":    "Content-Type",
      "Access-Control-Max-Age":          "86400",
      "Access-Control-Allow-Credentials":"true"
    };

    // 1) Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    // 2) Only POST
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: CORS
      });
    }

    // 3) Parse JSON
    let answers;
    try {
      const { answers: a } = await request.json();
      if (!Array.isArray(a)) throw new Error("`answers` must be an array");
      answers = a;
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 400,
        headers: { ...CORS, "Content-Type": "application/json" }
      });
    }

    // 4) Analyze
    let analysis;
    try {
      analysis = await runAnalysis(answers);
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...CORS, "Content-Type": "application/json" }
      });
    }

    // 5) Respond
    return new Response(JSON.stringify({ analysis }), {
      status: 200,
      headers: { ...CORS, "Content-Type": "application/json" }
    });
  }
};


async function runAnalysis(answers) {
  // Group ratings by tag
  const grouped = answers.reduce((acc, { tag, rating }) => {
    acc[tag] = acc[tag] || [];
    acc[tag].push(rating);
    return acc;
  }, {});

  // Compute averages
  const averages = {};
  for (const [tag, ratings] of Object.entries(grouped)) {
    averages[tag] = ratings.reduce((s, r) => s + r, 0) / ratings.length;
  }

  // Build summary
  let text = "Based on your questionnaire answers:\n\n";
  if (averages["Tolerable"] != null) {
    const avg = averages["Tolerable"].toFixed(1);
    text += `Tolerable avg: ${avg}/5 — `
      + (avg >= 4 ? "strong agreement.\n"
        : avg <= 2 ? "significant disagreement.\n"
        : "moderate agreement.\n");
  }
  if (averages["Non-tolerable"] != null) {
    const avg = averages["Non-tolerable"].toFixed(1);
    text += `Non-tolerable avg: ${avg}/5 — `
      + (avg >= 4 ? "strong alignment.\n"
        : avg <= 2 ? "areas of concern.\n"
        : "moderate alignment.\n");
  }
  text += "\nRecommendations:\n"
    + "1. Discuss <3 items with partner.\n"
    + "2. Explore Non-tolerable reasons.\n"
    + "3. Reflect on Tolerable impacts.\n"
    + "4. Use as a conversation starter.\n";

  return text;
}

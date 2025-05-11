// src/worker.js

import { systemPrompt } from "./prompts";

export default {
  async fetch(request, env) {
    const CORS = {
      "Access-Control-Allow-Origin":     "*",              // dev; replace "*" with your origin in prod
      "Access-Control-Allow-Methods":    "GET,HEAD,POST,OPTIONS",
      "Access-Control-Allow-Headers":    "Content-Type",
      "Access-Control-Max-Age":          "86400",
      "Access-Control-Allow-Credentials":"true"
    };

    // 1) Preflight OPTIONS
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    // 2) Only POST allowed
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: CORS
      });
    }

    // 3) Parse JSON body
    let answers;
    try {
      const { answers: a } = await request.json();
      if (!Array.isArray(a)) throw new Error("`answers` must be an array");
      answers = a;
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 400,
        headers: { ...CORS, "Content-Type": "application/json" }
      });
    }

    // 4) Build a prompt from the answers
    const prompt = systemPrompt + `\n
    Here is the input:
    ${answers.map((ans, i) => `• Q${i+1}: rating ${ans.rating}, tag ${ans.tag}`).join("\n")}

    Return answer in JSON format. Do not initialize the output with your thought or end it with overall
    conclusion. Start with '{' and end with '}'
`;

    // 5) Call the AI model
    let aiResponse;
    try {
      aiResponse = await env.AI.run(
        "@cf/meta/llama-3-8b-instruct",
        { prompt }
      );
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...CORS, "Content-Type": "application/json" }
      });
    }

    // 6) Return the model’s response
    const analysis = aiResponse.response ?? aiResponse;
    return new Response(JSON.stringify({ analysis }), {
      status: 200,
      headers: { ...CORS, "Content-Type": "application/json" }
    });
  }
};

/**
 * Public chatbot config
 *
 * This file is loaded by index.html and read by app.js via the global CONFIG object.
 * Keep real secrets on a backend service in production.
 */
const CONFIG = {
  // TODO: For local testing only, you may paste a temporary key here.
  // In production, leave this empty and proxy requests through a secure backend.
  GROQ_API_KEY: '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',
  GROQ_API_URL: 'https://api.groq.com/openai/v1/chat/completions',
  GROQ_MODEL: 'openai/gpt-oss-120b'
};


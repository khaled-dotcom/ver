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


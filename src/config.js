let localConfig;
try {
    localConfig = await import('./config.local.js');
} catch (e) {
    console.log('No local configuration found, using default config');
}

const config = {
    // check config.local.js for local config
    API_URL: localConfig?.default?.API_URL || 'https://mawaddah-ai-worker-production.ammarakef98.workers.dev',
    // Add other configuration values here as needed
};

export default config; 
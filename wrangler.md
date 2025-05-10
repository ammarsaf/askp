# Wrangler CLI Guide

This guide explains how to use Wrangler CLI to develop, test, and deploy Cloudflare Workers.

## Prerequisites

1. Install Wrangler CLI globally:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```
This will open your browser to authenticate with Cloudflare. Make sure you have a Cloudflare account.

## Development

### Local Development

1. Run in local mode (simulates Cloudflare's edge environment locally):
```bash
wrangler dev --local
```
This is useful for testing your worker without deploying to Cloudflare.

2. Run in remote mode (uses Cloudflare's edge environment):
```bash
wrangler dev
```
This connects to Cloudflare's development environment.

## Deployment

### Deploy to Cloudflare Workers

1. Deploy your worker:
```bash
wrangler deploy
```
This will deploy your worker to Cloudflare's edge network.

2. Deploy with a specific environment:
```bash
wrangler deploy --env production
```

### Publishing

1. Publish your worker:
```bash
wrangler publish
```
This is an alias for `wrangler deploy`.

## Additional Commands

### Configuration

1. Generate a new worker project:
```bash
wrangler init my-worker
```

2. Generate TypeScript types:
```bash
wrangler types
```

### Management

1. List your workers:
```bash
wrangler whoami
```

2. Delete a worker:
```bash
wrangler delete
```

## Environment Variables

1. Set secrets (environment variables):
```bash
wrangler secret put MY_SECRET
```

2. List secrets:
```bash
wrangler secret list
```

## Troubleshooting

If you encounter issues:

1. Check your Cloudflare authentication:
```bash
wrangler whoami
```

2. Verify your worker configuration in `wrangler.toml`

3. Check Cloudflare's status page for any service disruptions

## Best Practices

1. Always test locally before deploying
2. Use environment variables for sensitive data
3. Keep your `wrangler.toml` configuration in version control
4. Use different environments (development, staging, production) for testing

## Resources

- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare Dashboard](https://dash.cloudflare.com) 
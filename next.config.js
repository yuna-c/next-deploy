/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
	sassOptions: {
		includePath: [path.join(__dirname, 'styles')],
		prependData: `@import '@/styles/variables.scss';`
	},
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }]
	}
};

module.exports = nextConfig;

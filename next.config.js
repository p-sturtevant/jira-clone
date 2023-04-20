/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		serverComponentsExternalPackages: ['bcrypt'],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		//doesn't work?
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;


/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images:{
    domains:['res.cloudinary.com']
  },
  reactStrictMode: true,

  env:{
    Mapbox_key: 'pk.eyJ1IjoiY2h1Y2ttYXN0ZXIiLCJhIjoiY2w4c2F5Ym5mMHVvODNwbnpleDIzcmZlYiJ9.BmtbmcDPNAy5QSdnb7uJOw',
   }
  };

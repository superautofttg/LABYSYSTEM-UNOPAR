import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Configuração necessária para rodar no GitHub Pages com subdiretório
  basePath: '/LABYSYSTEM-UNOPAR',
  assetPrefix: '/LABYSYSTEM-UNOPAR/',
  images: {
    unoptimized: true, // Imagens não otimizadas pois o Export estático não suporta Next.js Image Optimization nativamente
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

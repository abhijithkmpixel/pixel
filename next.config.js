/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        hostname: "res.cloudinary.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/web-development-services-company-dubai",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/web-development-company-dubai",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/web-development-dubai",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/website-maintenance-agency",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/event",
        destination: "/",
        permanent: true,
      },
      {
        source: "/e-commerce-site-developer-dubai",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ui-design-services-dubai",
        destination: "/services/ux-ui-strategy-and-design",
        permanent: true,
      },
      {
        source: "/web-development-services-dubai",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/mobile-application-development-services",
        destination: "/services/mobile-application-development",
        permanent: true,
      },
      {
        source: "/ecommerce-development-services-dubai",
        destination: "/services/mobile-application-development",
        permanent: true,
      },
      // Portfolios
      {
        source: "/cases/burj-khalifa",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/arabian-ranches-golf-club",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/al-seef-mall",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/al-ain-fertility-center",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/mohammed-bin-rashid-initiative-for-global-prosperity",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/the-global-manufacturing-industrialisation-summit",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/dubai-opera",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/mkar-football",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/odepc",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/canadian-specialist-hospital",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/la-cucina",
        destination: "/our-portfolio/la-cucina",
        permanent: true,
      },
      {
        source: "/cases/aspire",
        destination: "/our-portfolio/aspire",
        permanent: true,
      },
      {
        source: "/cases/mayee",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/sib",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/safqat",
        destination: "/our-portfolio/safqat",
        permanent: true,
      },
      {
        source: "/cases/al-gurg-living",
        destination: "/our-portfolio/al-gurg-living",
        permanent: true,
      },
      {
        source: "/cases/musikidalarna",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/dalarna",
        destination: "/our-portfolio/hemslojdenidalarna",
        permanent: true,
      },
      {
        source: "/cases/hemslojdsguiden",
        destination: "/our-portfolio/hemslojdsguiden",
        permanent: true,
      },
      {
        source: "/cases/channel-4",
        destination: "/our-portfolio",
        permanent: true,
      },
      {
        source: "/cases/algurg",
        destination: "/our-portfolio/esa-saleh-al-gurg-group",
        permanent: true,
      },
      {
        source: "/cases/al-gurg-building-services",
        destination: "/our-portfolio/al-gurg-building-services",
        permanent: true,
      },
      {
        source: "/cases/dubai-holding",
        destination: "/our-portfolio",
        permanent: true,
      },
      // services
      {
        source: "/service/ux-design",
        destination: "/services/ux-ui-strategy-and-design",
        permanent: true,
      },
      {
        source: "/service/wordpress-development-company-uae",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/mobile-app-development-company-uae",
        destination: "/services/mobile-application-development",
        permanent: true,
      },
      {
        source: "/service/branding",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/digital-marketing",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/kentico-cms-implementation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/sitecore-cms-implementation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/umbraco-cms-dubai",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/laravel-development-company-uae",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/front-end-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/service/website-maintenance",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/mongodb",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/reactnative-software-development-uae",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/expressjs",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/react",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/newsletter-management-software-dubai",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/nextjs-development-uae",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/dnndotnetnuke-cms-implementation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/drupal-web-development-dubai",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/service/sitefinity-website-development-dubai",
        destination: "/services",
        permanent: true,
      },
      // blogs
      {
        source: "/blog/10-tips-for-picking-the-right-web-design-agency-in-uae",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/blog/why-you-need-a-new-website-to-target-dubai-expo-2020-visitors",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/blog/effective-digital-marketing-strategy-to-increase-your-brand-awareness-with-dubai-expo-2020",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/blog/how-to-choose-a-top-mobile-app-development-company-in-uae",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/blog/things-to-know-before-choosing-an-e-commerce-website-development-company-in-uae",
        destination: "/",
        permanent: true,
      },
      // events
      {
        source: "/event/get-together",
        destination: "/",
        permanent: true,
      },
      {
        source: "/event/annual-meet",
        destination: "/",
        permanent: true,
      },
      {
        source: "/event/alleppey-boating",
        destination: "/",
        permanent: true,
      },
      // Other
      {
        source: "/Technogies/react",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Technogies/woocommerce",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Technogies/opencart",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

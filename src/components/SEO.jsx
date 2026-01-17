import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for dynamic meta tag management
 * Usage: <SEO title="Page Title" description="Page Description" />
 */
export const SEO = ({ 
  title = "Hibbanur Rahman - Full Stack Developer",
  description = "Full Stack Developer specializing in MERN stack with expertise in React.js, Next.js, React Native, and Node.js. Building scalable web and mobile applications.",
  keywords = "Hibbanur Rahman, Full Stack Developer, React Developer, Next.js, Node.js, MERN Stack, Web Development",
  author = "Hibbanur Rahman",
  image = "/og-image.png",
  url = "https://hibban.in",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;

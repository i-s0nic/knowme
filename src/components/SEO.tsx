import { Helmet } from "react-helmet-async";
import { profile } from "@/data/portfolio";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
}

const Seo = ({
  title = `${profile.name} | Software Engineer at Microsoft`,
  description = "I'm Saurabh Upadhayay, a software engineer at Microsoft. I work on Windows onboarding, backend services, and distributed systems.",
  path = "",
  noindex = false,
}: SEOProps) => {
  const url = new URL(path.replace(/^\/+/, ""), profile.siteUrl).href;
  const image = new URL("social-card.png", profile.siteUrl).href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={profile.name} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={`${profile.name} | Portfolio`} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Saurabh Upadhayay, Software Engineer at Microsoft. Windows onboarding, backend platforms and distributed systems." />
      {!noindex && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {!noindex && <link rel="canonical" href={url} />}
      {!path && !noindex && <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: profile.name,
        url: profile.siteUrl,
        jobTitle: profile.role,
        worksFor: { "@type": "Organization", name: profile.company },
        sameAs: [profile.linkedin, ...(profile.github ? [profile.github] : [])],
      })}</script>}
    </Helmet>
  );
};

export default Seo;

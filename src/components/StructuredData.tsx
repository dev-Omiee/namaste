export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Namaste Globals',
    url: 'https://www.namasteglobals.com',
    logo: 'https://www.namasteglobals.com/favicon.ico',
    description: 'Premium natural jaggery exporter from Maharashtra, India. Fresh & natural, FSSAI certified.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R-094-09, Tanaji Lakhmoji Patil Galli, At Post Kameri, Taluka Walawa',
      addressLocality: 'Sangli',
      addressRegion: 'Maharashtra',
      postalCode: '415403',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-74994-18833',
      contactType: 'sales',
      email: 'namasteglobals@gmail.com',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    sameAs: [
      'https://wa.me/917499418833',
    ],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Namaste Globals',
    url: 'https://www.namasteglobals.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.namasteglobals.com/?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

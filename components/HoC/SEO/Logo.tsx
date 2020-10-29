import { LogoJsonLd } from 'next-seo'

const LogoSEO: React.FC<{ canonicalRoute: string }> = ({ canonicalRoute }) => (
  <LogoJsonLd logo="/images/TRUE-logo/logo-512.png" url={canonicalRoute} />
)

export default LogoSEO

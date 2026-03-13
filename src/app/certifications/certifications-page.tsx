import type { Metadata } from 'next';
import CertificationsClient from './CertificationsClient';

export const metadata: Metadata = { title: 'Certifications — Namaste Globals' };

export default function CertificationsPage() {
  return <CertificationsClient />;
}

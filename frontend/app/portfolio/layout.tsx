"use client";

import Layout from '../components/Layout';

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}

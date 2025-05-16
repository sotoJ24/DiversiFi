"use client";

import Layout from '../components/Layout';

export default function OptimizeLayout({
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

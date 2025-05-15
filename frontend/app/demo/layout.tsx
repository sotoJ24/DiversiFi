"use client";

import Layout from '../components/Layout';

export default function DemoLayout({
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

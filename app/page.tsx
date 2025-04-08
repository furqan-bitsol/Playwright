'use client';
import ECommerceHomePage from '@/components/home/ECommerceHomePage';
import { builder } from '@builder.io/react';
import dynamic from 'next/dynamic';

// Initialize Builder.io with your API key
builder.init('50863f29051940439648c044a13e82c2');

// Dynamically import the BuilderComponent with SSR disabled
const DynamicBuilderComponent = dynamic(
  () => import('@builder.io/react').then((mod) => mod.BuilderComponent),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      {/* Builder.io integration */}

      <DynamicBuilderComponent model='page' />
      <ECommerceHomePage />
    </main>
  );
}

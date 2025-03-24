/**
 * Home page
 *
 * @description The home page of the application.
 * @returns {JSX.Element} The home page.
 */

import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="container max-w-7xl mx-auto px-4">
        This is the home page!
      </main>
    </div>
  );
}

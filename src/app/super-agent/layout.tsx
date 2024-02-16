import { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Agent",
  description: "Super Agent",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

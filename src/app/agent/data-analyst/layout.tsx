import { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analyst Agent",
  description: "Data Analyst Agent",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

import { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detail Super Agent",
  description: "Detail Super Agent",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

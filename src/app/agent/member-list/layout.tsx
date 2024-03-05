import { ReactNode } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member List Agent",
  description: "Member List Agent",
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}

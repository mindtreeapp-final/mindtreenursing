"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Any URL that doesn't exist on the site is sent to the home page.
// (Visitors following old links from the previous website that no longer
// exist here will land on this boundary and get redirected home.)
export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}

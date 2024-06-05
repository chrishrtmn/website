"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

interface PHProviderProps {
  children: React.ReactNode;
}

if (typeof window !== "undefined") {
  const postHogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const postHogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (postHogKey && postHogHost) {
    posthog.init(postHogKey, {
      api_host: postHogHost,
    });
  } else {
    console.error("PostHog environment variables are not set.");
  }
}

export function PHProvider({ children }: PHProviderProps) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

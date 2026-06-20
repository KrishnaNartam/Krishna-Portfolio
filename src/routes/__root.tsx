import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "google-site-verification", content: "1X4xEmUdOG40-JHDfQ99Sa-FP9DtuVmiMsq3FEu-H2Y" },
      { title: "Krishna Prashant Nartam | AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Krishna Prashant Nartam — AI Engineer, Full-Stack Developer, and Industrial IoT Innovator building intelligent systems, AI products, and automation solutions.",
      },
      { name: "author", content: "Krishna Prashant Nartam" },
      {
        name: "keywords",
        content:
          "AI Engineer, Full-Stack Developer, Prompt Engineer, AI Automation, Industrial IoT, React Developer, Next.js, LLM Integration, Generative AI, AI Agents",
      },
      { property: "og:title", content: "Krishna Prashant Nartam | AI Engineer & Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Building intelligent systems, AI products, and Industrial IoT solutions that transform data into actionable outcomes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Krishna Prashant Nartam | AI Engineer & Full-Stack Developer" },
      {
        name: "twitter:description",
        content: "AI Engineer · Full-Stack Developer · AI Automation · Industrial IoT",
      },
      { name: "description", content: "AI Engineer and Full-Stack Developer building AI automation, web applications, and intelligent solutions using modern technologies." },
      { property: "og:description", content: "AI Engineer and Full-Stack Developer building AI automation, web applications, and intelligent solutions using modern technologies." },
      { name: "twitter:description", content: "AI Engineer and Full-Stack Developer building AI automation, web applications, and intelligent solutions using modern technologies." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4612f96e-caff-4b60-818c-5da948c80fc3/id-preview-e359a325--fa7c7f44-5d5b-4094-af00-7406250592e2.lovable.app-1781935966903.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4612f96e-caff-4b60-818c-5da948c80fc3/id-preview-e359a325--fa7c7f44-5d5b-4094-af00-7406250592e2.lovable.app-1781935966903.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

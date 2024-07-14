export default {
  logo: <span style={{ fontWeight: 600 }}>Vite Hash CSP</span>,
  project: {
    link: "https://github.com/RockiRider/vite-plugin-posthog",
  },
  docsRepositoryBase:
    "https://github.com/RockiRider/vite-plugin-posthog/tree/main/apps/docs",
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Vite Hash CSP",
      description: "Vite Hash CSP",
      openGraph: {
        description: "A vite plugin to handle your CSP",
        siteName: "Vite Hash CSP",
      },
      twitter: {},
    };
  },
  head: <></>,
  feedback: {
    content: null,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://vite-csp.tsotne.co.uk" target="_blank">
          Vite Hash CSP
        </a>
        .
      </span>
    ),
  },
};

import { ConsentManagerProvider, ConsentBanner as CookieBanner } from "@c15t/nextjs"

export { ConsentManagerProvider } from "@c15t/nextjs"

export function ConsentManager({ children }: { children: React.ReactNode }) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement"],
      }}
    >
      {children}
    </ConsentManagerProvider>
  )
}

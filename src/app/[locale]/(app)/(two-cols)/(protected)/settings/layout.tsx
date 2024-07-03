import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setting-الاعدادات",
};

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-auto flex w-[85%] flex-col gap-4 py-4">{children}</div>
  );
}

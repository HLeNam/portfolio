import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

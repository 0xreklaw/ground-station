import NavBar from "./NavBar";

// @note    wrap layout component around all pages
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <NavBar />
    </div>
  );
}

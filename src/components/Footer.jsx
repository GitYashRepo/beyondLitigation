export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] py-8">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col md:flex-row items-center justify-between px-6 xl:px-0">
        <p className="text-white/50 text-xs tracking-wider uppercase mb-4 md:mb-0">
          Copyright &copy; 2024 Law Firm
        </p>
        <p className="text-white/50 text-xs tracking-wider uppercase">
          Powered by Law Firm
        </p>
      </div>
    </footer>
  );
}

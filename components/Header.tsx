const CHANNEL_URL = "https://www.youtube.com/@komusiccafe";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
        <span className="text-sm font-light tracking-widest2 text-white">
          KO MUSIC CAFE
        </span>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-5 py-2 text-xs tracking-widest text-mist transition-colors duration-300 hover:border-accent/60 hover:text-accent"
        >
          YouTube
        </a>
      </div>
    </header>
  );
}

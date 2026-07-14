const CHANNEL_URL = "https://www.youtube.com/@komusiccafe";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-16 text-center sm:px-10">
        <span className="text-xs tracking-widest2 text-mist">
          KO MUSIC CAFE
        </span>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-mist transition-colors duration-300 hover:text-accent"
        >
          youtube.com/@komusiccafe
        </a>
        <p className="pt-6 text-[11px] text-mist/60">
          © {new Date().getFullYear()} Ko Music Cafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

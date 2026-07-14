import WorkCard from "@/components/WorkCard";

const CHANNEL_URL = "https://www.youtube.com/@komusiccafe";

// 実際の紹介動画が決まったら、この11文字のIDだけを差し替えてください。
// 例: https://www.youtube.com/watch?v=ABCDEFGHIJK の "ABCDEFGHIJK" の部分。
const FEATURED_VIDEO_ID = "ABCDEFGHIJK";

const AUDIENCE = [
  "集中して作業・勉強したい方",
  "リラックスしたい時",
  "おしゃれなBGMを探している方",
  "AI音楽に興味がある方",
  "新しい音楽体験を求める方",
  "ジャズやフュージョンが好きな方",
  "J-POPやフォークを楽しみたい方",
];

const GENRES = [
  { tag: "JAZZ", title: "ジャズ", description: "落ち着いた夜に寄り添う、即興的な響き。" },
  { tag: "FUSION", title: "フュージョン", description: "軽やかなグルーヴが心地よい一曲。" },
  { tag: "J-POP", title: "J-POP", description: "口ずさみたくなる、親しみやすいメロディ。" },
  { tag: "FOLK", title: "フォーク", description: "温もりのあるアコースティックサウンド。" },
  { tag: "AMBIENT", title: "アンビエント", description: "静かに広がる、余白のための音楽。" },
  { tag: "LO-FI", title: "ローファイ", description: "作業や勉強に寄り添う、心地よいノイズ感。" },
];

const PRODUCTION = [
  { label: "音楽", value: "Suno（音楽生成AI）で作曲" },
  { label: "サムネール", value: "Adobe Illustrator / Photoshop + Adobe Fireflyなどで制作" },
  { label: "投稿頻度", value: "週2〜3回を予定" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-10">
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col items-start justify-center gap-8 py-32">
        <p className="animate-fade-in text-xs tracking-widest2 text-accent/80">
          AI GENERATED MUSIC
        </p>
        <h1 className="animate-fade-in text-4xl font-extralight leading-tight text-white sm:text-6xl">
          Ko Music
          <br />
          Cafe
        </h1>
        <p className="max-w-md text-sm leading-loose text-mist">
          生成AI「Suno」を活用して制作したオリジナル音楽をお届けする、
          静かな音楽体験のためのチャンネルです。
        </p>
        <a
          href={CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 rounded-full border border-white/20 px-8 py-3 text-xs tracking-widest text-white transition-colors duration-300 hover:border-accent/60 hover:text-accent"
        >
          YouTubeで聴く
        </a>
      </section>

      {/* About */}
      <section className="border-t border-white/10 py-28">
        <p className="text-xs tracking-widest2 text-accent/80">ABOUT</p>
        <h2 className="mt-4 text-2xl font-light text-white">
          Ko Music Cafeチャンネルについて
        </h2>
        <p className="mt-8 max-w-2xl text-sm leading-loose text-mist">
          ご視聴ありがとうございます。Ko Music Cafeでは、生成AI「Suno」を活用して制作した
          オリジナル音楽をお届けしています。ジャズ、フュージョン、J-POP、フォーク、
          アンビエント、ローファイなど、様々なジャンルの音楽をアップしていきます。
        </p>
      </section>

      {/* YouTube Embed */}
      <section className="border-t border-white/10 py-28">
        <p className="text-xs tracking-widest2 text-accent/80">LISTEN</p>
        <h2 className="mt-4 text-2xl font-light text-white">Featured</h2>
        <div className="mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
            title="Ko Music Cafe"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Audience */}
      <section className="border-t border-white/10 py-28">
        <p className="text-xs tracking-widest2 text-accent/80">FOR YOU</p>
        <h2 className="mt-4 text-2xl font-light text-white">
          こんな方におすすめ
        </h2>
        <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
          {AUDIENCE.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-mist"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Genres as WorkCards */}
      <section className="border-t border-white/10 py-28">
        <p className="text-xs tracking-widest2 text-accent/80">GENRES</p>
        <h2 className="mt-4 text-2xl font-light text-white">扱うジャンル</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GENRES.map((genre) => (
            <WorkCard
              key={genre.tag}
              tag={genre.tag}
              title={genre.title}
              description={genre.description}
            />
          ))}
        </div>
      </section>

      {/* Production */}
      <section className="border-t border-white/10 py-28">
        <p className="text-xs tracking-widest2 text-accent/80">PRODUCTION</p>
        <h2 className="mt-4 text-2xl font-light text-white">制作について</h2>
        <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {PRODUCTION.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-4 sm:gap-6"
            >
              <dt className="text-xs tracking-widest text-mist">
                {item.label}
              </dt>
              <dd className="text-sm leading-relaxed text-white sm:col-span-3">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Operator */}
      <section className="border-t border-white/10 py-28">
        <p className="text-xs tracking-widest2 text-accent/80">OPERATOR</p>
        <h2 className="mt-4 text-2xl font-light text-white">運営者について</h2>
        <p className="mt-8 max-w-2xl text-sm leading-loose text-mist">
          グラフィックデザイナーとして活動中。Illustrator・Photoshopのデザイン指導も
          行っています。音楽とデザインの両面から、新しい表現を追求しています。
        </p>
      </section>
    </div>
  );
}

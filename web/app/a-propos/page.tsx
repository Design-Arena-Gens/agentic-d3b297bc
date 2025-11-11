export const metadata = {
  title: "? propos",
  description: "Notre mission, vision et R&D",
};

export default function AProposPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">? propos</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-prose">
        Phycomania d?veloppe des solutions ? base de microalgues pour concilier sant?, performance et durabilit?. Notre ?quipe r?unit des expertises en biotechnologie, nutrition et formulation.
      </p>

      <div id="recherche" className="mt-10 rounded-2xl border border-black/5 dark:border-white/10 p-6">
        <h2 className="text-xl font-semibold">Recherche & D?veloppement</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          De l?isolement des souches ? la caract?risation des bioactifs, nous menons des programmes R&D avec des partenaires acad?miques et industriels.
        </p>
      </div>
    </div>
  );
}

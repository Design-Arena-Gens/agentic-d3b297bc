export const metadata = {
  title: "Produits",
  description: "Compl?ments et ingr?dients issus de microalgues",
};

export default function ProduitsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Nos produits</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-prose">
        Des solutions ? base de microalgues pour la nutrition et l?innovation alimentaire.
      </p>

      <div id="complements" className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Compl?ments</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Micronutriments, om?ga-3, pigments antioxydants, fibres et min?raux.
          </p>
        </div>
        <div className="rounded-2xl border border-black/5 dark:border-white/10 p-6">
          <h2 className="text-xl font-semibold">Ingr?dients</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Extraits fonctionnels et prot?ines pour formulations propres et efficaces.
          </p>
        </div>
      </div>
    </div>
  );
}

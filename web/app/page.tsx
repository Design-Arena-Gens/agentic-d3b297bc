import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-200/40 via-white to-transparent dark:from-emerald-900/40 dark:via-black" />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                Microalgues pour une vie plus saine et durable
              </h1>
              <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-400 max-w-prose">
                Phycomania con?oit des produits ? base d?algues pour la nutrition, la sant? et l?environnement. Une approche scientifique, des r?sultats concrets.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/produits" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700">
                  D?couvrir nos produits
                </Link>
                <Link href="/a-propos" className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-medium hover:bg-black/5 dark:hover:bg-white/10">
                  Notre mission
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 text-sm text-zinc-600 dark:text-zinc-400">
                <div>
                  <div className="text-2xl font-semibold text-foreground">100% naturel</div>
                  <div>Formulations propres et tra?ables</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-foreground">R&D</div>
                  <div>D?velopp? avec des experts
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-foreground">Durable</div>
                  <div>Empreinte environnementale r?duite</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl border border-black/5 dark:border-white/10 bg-gradient-to-br from-emerald-300/40 via-white to-emerald-100/60 dark:from-emerald-800/40 dark:via-black dark:to-emerald-900/20 p-6 overflow-hidden">
                <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-emerald-400/40 blur-3xl" />
                <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-teal-400/30 blur-3xl" />
                <div className="relative z-10 h-full w-full grid place-items-center">
                  <Image src="/hero-algae.svg" alt="Algues" width={640} height={480} className="rounded-2xl shadow-2xl ring-1 ring-black/10 dark:ring-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Compl?ments", desc: "Micronutriments issus d?algues pour le bien-?tre quotidien.", href: "/produits#complements"
            },
            {
              title: "Ingr?dients", desc: "Extraits fonctionnels et prot?ines pour formulations alimentaires.", href: "/produits#ingredients"
            },
            {
              title: "Recherche", desc: "Partenariats R&D et services analytiques.", href: "/a-propos#recherche"
            }
          ].map((c) => (
            <Link key={c.title} href={c.href} className="group rounded-2xl border border-black/5 dark:border-white/10 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="text-lg font-semibold">
                {c.title}
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.desc}</p>
              <div className="mt-4 text-emerald-700 dark:text-emerald-400 font-medium">En savoir plus ?</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Engag?s pour l?impact</h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">De l?algue ? l?assiette : circularit?, efficacit?, transparence.</p>
      </section>
    </>
  );
}

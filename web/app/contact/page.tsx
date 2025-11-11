export const metadata = {
  title: "Contact",
  description: "Contactez Phycomania",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-prose">
        Une question, un partenariat ou un projet R&D ? ?crivez-nous.
      </p>

      <form className="mt-10 grid gap-4 max-w-xl">
        <input required aria-label="Nom" placeholder="Nom" className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3" />
        <input type="email" required aria-label="Email" placeholder="Email" className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3" />
        <textarea required aria-label="Message" placeholder="Message" rows={6} className="rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-4 py-3" />
        <button type="submit" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-medium shadow hover:bg-emerald-700">Envoyer</button>
        <p className="text-xs text-zinc-500">Ou contactez-nous par email : contact@phycomania.com</p>
      </form>
    </div>
  );
}

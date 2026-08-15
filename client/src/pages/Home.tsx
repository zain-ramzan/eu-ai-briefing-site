/**
 * Civic Ledger design: a quiet, asymmetric European editorial sheet.
 * Public-facing content must never expose private monitoring or imply that a briefing is published before human approval.
 */
import { ArrowDownRight, BookOpenText, CheckCircle2, FileSearch, ShieldCheck } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Official source",
    text: "We begin with official EU documents and pages, not rumour or recycled headlines.",
    icon: BookOpenText,
  },
  {
    number: "02",
    title: "Human review",
    text: "A person checks the source and decides whether the change is important enough to explain.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Public briefing",
    text: "Only an approved, source-linked briefing can appear on this public page.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#17212e]">
      <header className="border-b border-[#17212e]/15 bg-[#f5f1e8]/95">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="EU AI Briefing home">
            <span className="brand-seal" aria-hidden="true"><i /><i /><i /><b /></span>
            <span className="leading-none">
              <span className="block font-[Manrope] text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#123a70]">EU AI</span>
              <span className="block font-[DM_Serif_Display] text-[20px] tracking-[-0.035em]">Briefing</span>
            </span>
          </a>
          <span className="hidden font-[Manrope] text-[10px] font-bold uppercase tracking-[0.16em] text-[#123a70] sm:block">Public reader page</span>
          <a href="#how-it-works" className="flex items-center gap-2 font-[Manrope] text-xs font-bold text-[#17212e] transition-colors hover:text-[#123a70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#123a70]">
            How it works <ArrowDownRight size={16} strokeWidth={2.2} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid min-h-[570px] border-x border-[#17212e]/15 lg:grid-cols-[minmax(180px,0.55fr)_minmax(0,2.1fr)_minmax(215px,0.7fr)]">
            <aside className="hidden border-r border-[#17212e]/15 px-7 py-10 lg:flex lg:flex-col lg:justify-between">
              <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.16em] text-[#123a70]">Issue zero</p>
              <div className="editorial-rule">
                <p className="font-[Manrope] text-xs font-semibold leading-5 text-[#5e665f]">Public notes for European SMEs navigating EU AI policy and practical adoption.</p>
              </div>
              <p className="font-[Manrope] text-[10px] font-bold uppercase tracking-[0.14em] text-[#5e665f]">Read slowly. Check sources.</p>
            </aside>

            <div className="relative flex flex-col justify-between overflow-hidden px-1 py-10 sm:px-10 lg:px-14 lg:py-16">
              <div className="dot-field" aria-hidden="true" />
              <div className="relative z-10 max-w-3xl">
                <p className="mb-6 inline-flex items-center gap-2 border border-[#bd8822] bg-[#f8efcf] px-3 py-1.5 font-[Manrope] text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#73510b]">
                  <ShieldCheck size={14} strokeWidth={2.2} /> Human approval required
                </p>
                <h1 className="max-w-3xl font-[DM_Serif_Display] text-[clamp(3.4rem,7.3vw,7.1rem)] leading-[0.88] tracking-[-0.065em] text-[#123a70]">
                  Official EU AI signals, <em className="font-normal text-[#17212e]">read with care.</em>
                </h1>
                <p className="mt-8 max-w-xl font-[Manrope] text-base leading-7 text-[#47534d] sm:text-lg">
                  EU AI Briefing will turn selected official EU updates into calm, practical reading for European small and medium-sized businesses.
                </p>
              </div>

              <div className="relative z-10 mt-14 border-t border-[#17212e]/20 pt-5 sm:flex sm:items-end sm:justify-between">
                <div>
                  <p className="font-[Manrope] text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#123a70]">The public ledger</p>
                  <p className="mt-2 font-[DM_Serif_Display] text-2xl tracking-[-0.025em]">The first briefing is not ready yet.</p>
                </div>
                <p className="mt-4 max-w-[245px] font-[Manrope] text-xs leading-5 text-[#5e665f] sm:mt-0">Nothing appears here until a person has checked the official source.</p>
              </div>
            </div>

            <aside className="border-t border-[#17212e]/15 bg-[#123a70] px-7 py-9 text-[#f5f1e8] lg:border-t-0 lg:border-l lg:border-[#17212e]/15">
              <p className="font-[Manrope] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#f3ca62]">Our public rule</p>
              <blockquote className="mt-8 font-[DM_Serif_Display] text-3xl leading-[1.02] tracking-[-0.04em]">
                “No automatic posts. No hidden claims. No legal conclusions.”
              </blockquote>
              <div className="mt-12 border-t border-[#f5f1e8]/25 pt-5">
                <p className="font-[Manrope] text-xs leading-5 text-[#dbe3df]">Future briefings will point readers back to the official material and offer operational considerations, not legal advice.</p>
              </div>
            </aside>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-[#17212e]/15 bg-[#e7e1d5]">
          <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.72fr)_minmax(0,2.2fr)] lg:gap-16">
              <div>
                <p className="font-[Manrope] text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#123a70]">The safety path</p>
                <h2 className="mt-4 font-[DM_Serif_Display] text-4xl leading-[0.95] tracking-[-0.045em] text-[#17212e]">From source to reader, with a human in the middle.</h2>
              </div>
              <div className="grid gap-px bg-[#17212e]/15 sm:grid-cols-3">
                {processSteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <article key={step.number} className="group bg-[#e7e1d5] p-6 sm:p-7">
                      <div className="flex items-start justify-between">
                        <span className="font-[Manrope] text-[11px] font-extrabold tracking-[0.15em] text-[#bd8822]">{step.number}</span>
                        <Icon size={23} className="text-[#123a70] transition-transform duration-200 group-hover:-translate-y-1" strokeWidth={1.7} />
                      </div>
                      <h3 className="mt-10 font-[DM_Serif_Display] text-2xl tracking-[-0.035em]">{step.title}</h3>
                      <p className="mt-3 font-[Manrope] text-sm leading-6 text-[#5e665f]">{step.text}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 border-y border-[#17212e]/15 py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(290px,0.8fr)] lg:items-end lg:py-14">
            <div>
              <p className="font-[Manrope] text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#123a70]">Opening soon</p>
              <h2 className="mt-4 max-w-3xl font-[DM_Serif_Display] text-4xl leading-[0.95] tracking-[-0.045em] sm:text-5xl">A deliberately empty page is better than an unreviewed briefing.</h2>
            </div>
            <p className="font-[Manrope] text-sm leading-6 text-[#5e665f]">This public page is ready for its first approved briefing. Until then, it remains a clear record of the editorial rule: source first, person second, publication last.</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#17212e] text-[#f5f1e8]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="flex items-center gap-3">
            <span className="brand-seal brand-seal--inverse" aria-hidden="true"><i /><i /><i /><b /></span>
            <p className="font-[DM_Serif_Display] text-2xl tracking-[-0.03em]">EU AI Briefing</p>
          </div>
          <p className="max-w-lg font-[Manrope] text-xs leading-5 text-[#c6d0cf]">Public reader page. Private monitoring and human review stay separate. This site provides practical context, not legal advice.</p>
        </div>
      </footer>
    </div>
  );
}

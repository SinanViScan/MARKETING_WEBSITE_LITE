"use client";

import { ChevronDown } from "lucide-react";

export type PackageDetailProps = object;
export default function AboutPackage({}: PackageDetailProps) {
  return (
    <div className="py-2">
      <div className="flex justify-start  max-w-full">
        <div className="bg-transparent  max-md:border-r-0 border border-gray-200 rounded-3xl max-md:rounded-r-none p-0.5 flex overflow-x-auto scrollbar-hide max-w-full">
          {[
            "About the test",
            "List of parameters",
            "Test Preparation",
            "Why this test",
            "Dental Labs",
            "FAQs",
          ].map((tab, index) => (
            <button
              key={tab}
              className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                index === 0
                  ? "bg-[#440C46] text-white"
                  : "text-[#101828] hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* About section */}
      <section className="mt-10 space-y-3">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight">
          What Is Safe Extraction Panel?
        </h2>
        <p className="text-xs md:text-sm leading-5 text-slate-700">
          The Safe Extraction Panel is a curated set of diagnostic tests conducted through a
          minimally invasive blood draw process to prioritize patient comfort and safety. It
          includes essential screenings to monitor overall health, detect early signs of disease,
          and guide preventive care. Ideal for routine checkups, this panel focuses on hygienic and
          standardized extraction procedures to ensure accurate results.
        </p>
      </section>

      {/* Recommended tests */}
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-900">Recommended Blood Tests</h3>
          <button className="text-xs text-slate-600 inline-flex items-center gap-1">
            Know More <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="mt-3 rounded-2xl border-0 border-gray-200 bg-white">
          {recommendedTests.map((t, i) => (
            <TestRow key={t.title} title={t.title} meta={t.meta} isLast={i === recommendedTests.length - 1} />
          ))}
        </div>
      </section>

      {/* Preparation section */}
      <section className="mt-10 space-y-4">
        <h3 className="text-lg sm:text-2xl lg:text-3xl font-medium text-slate-900">
          Safe Extraction Panel Essential Preparation
        </h3>
        <p className="text-xs sm:text-sm text-slate-700">
          A few points to be considered before doing this checkup are as follows:
        </p>

        <InfoBlock title="Prerequisites">
          There is no need to fast in order to prepare for this health checkup.
        </InfoBlock>

        <InfoBlock title="Best Time To Get Tested">
          This health checkup can be conducted at any time during the day.
        </InfoBlock>

        <InfoBlock title="Who Should Avail This Checkup">
            <p>This checkup Would Be Beneficial For:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              People with risk factors such as unhealthy lifestyle choices, a medical history, or
              family history of certain conditions that increase their risk of developing health
              issues.
            </li>
            <li>
              People who want to take charge of their health by spotting any problems before
              symptoms appear.
            </li>
            <li>
              People over 30 who should get these examinations once or twice a year.
            </li>
          </ul>
        </InfoBlock>

        <InfoBlock title="Cautions Before Taking This Checkup">
          This checkup includes several types of tests. Some medications or supplements may affect
          the results. Inform your doctor about any drugs or supplements you are taking.
        </InfoBlock>
      </section>
    </div>
  );
}

type TestRowProps = { title: string; meta?: string; isLast?: boolean };
function TestRow({ title, meta, isLast }: TestRowProps) {
  return (
    <div
      className={`flex  gap-1 justify-between  py-3 ${
        isLast ? "" : "border-b border-gray-200"
      }`}
    >
      <div className="text-xs sm:text-sm font-medium text-slate-900">{title}</div>
      {meta ? (
        <div className="text-xs text-slate-600 inline-flex items-center gap-1">
          {meta} <ChevronDown className="w-3.5 h-3.5" />
        </div>
      ) : null}
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h4 className="text-xs sm:text-sm font-semibold text-slate-700">{title}</h4>
      <div className="text-xs sm:text-sm text-slate-600 leading-6">{children}</div>
    </div>
  );
}

const recommendedTests: { title: string; meta?: string }[] = [
  { title: "CBC With ESR" },
  { title: "PT/INR (Coagulation Profile)", meta: "9 Parameters" },
  { title: "Liver Function Test (LFT)", meta: "12 Parameters" },
  { title: "Blood Sugar", meta: "Know More" },
  { title: "Thyroid Function Test (TFT)", meta: "3 Parameters" },
  { title: "Urine Complete Analysis", meta: "27 Parameters" },
];


import { Button } from "@/components/ui/button";

export default function ICVPPreview() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-800">Inclusive Civic Voice Platform (ICVP)</h1>
        <p className="mt-2 text-lg text-gray-600">
          Empowering marginalized youth through accessible civic participation.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">🔍 Project Overview</h2>
        <p>
          The Inclusive Civic Voice Platform is a digital ecosystem enabling marginalized youth—such as those with disabilities,
          refugee backgrounds, or from rural areas—to access, participate in, and influence civic and policy processes. It offers
          inclusive tools, accessible legal content, local youth councils, and community-driven storytelling.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">🎯 Key Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Multi-format legal library (Braille-ready, audio, sign language, easy-read)</li>
          <li>Story Hub for experience-sharing and mutual support</li>
          <li>Spokesperson program for community representation</li>
          <li>Local digital Youth Councils for grassroots feedback</li>
          <li>Participatory tools: polls, feedback forms, community voting</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">🚀 Impact Goals</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>10,000+ active users in Year 1</li>
          <li>200+ trained spokespersons across all regions</li>
          <li>300+ policy feedback reports delivered</li>
          <li>Full accessibility compliance (WCAG)</li>
        </ul>
      </section>

      <section className="text-center">
        <p className="text-lg text-gray-700 mb-4">Preview our full presentation:</p>
        <a href="/mnt/data/Inclusive_Civic_Voice_Platform_Presentation.pptx" className="inline-block" download>
          <Button>📥 Download Slide Deck</Button>
        </a>
      </section>
    </div>
  );
}

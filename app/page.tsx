export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Visual Query Execution Plans{" "}
          <span className="text-[#58a6ff]">for Postgres</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-8">
          Paste any SQL query and instantly see an interactive visual execution tree. Spot bottlenecks, understand costs, and get optimization suggestions — no guesswork.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Visualizing — $15/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for trial</span>
        </div>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#8b949e] max-w-2xl mx-auto">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840] inline-block"></span>
          </div>
          <p className="text-[#58a6ff]">EXPLAIN ANALYZE</p>
          <p className="text-[#c9d1d9]">SELECT u.name, COUNT(o.id)</p>
          <p className="text-[#c9d1d9]">FROM users u JOIN orders o ON u.id = o.user_id</p>
          <p className="text-[#c9d1d9]">GROUP BY u.name ORDER BY 2 DESC;</p>
          <div className="mt-4 border-t border-[#30363d] pt-4">
            <p className="text-[#f85149]">⚠ Seq Scan on orders — cost=0.00..4821.00 rows=150000</p>
            <p className="text-[#3fb950]">✓ Index Scan on users — cost=0.29..8.31 rows=1</p>
            <p className="text-[#58a6ff]">→ Suggestion: Add index on orders(user_id)</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited EXPLAIN ANALYZE queries",
              "Interactive visual execution trees",
              "Bottleneck highlighting & cost breakdown",
              "AI-powered optimization suggestions",
              "Save & share query plans",
              "Connect multiple Postgres databases"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my database?</h3>
            <p className="text-[#8b949e] text-sm">You provide a connection string or paste the raw EXPLAIN output. We never store your credentials — connections are ephemeral and encrypted in transit.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Which Postgres versions are supported?</h3>
            <p className="text-[#8b949e] text-sm">Postgres 10 and above. We parse both JSON and text EXPLAIN output formats, including EXPLAIN ANALYZE and EXPLAIN BUFFERS.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Postgres Query Visualizer. All rights reserved.
      </footer>
    </main>
  )
}

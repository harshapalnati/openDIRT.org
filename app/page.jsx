import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-50 text-gray-900 font-serif leading-relaxed">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">OpenDIRT.org</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#definition" className="hover:underline">Definition</a>
            <a href="#impact" className="hover:underline">Impact</a>
            <a href="#research" className="hover:underline">Research</a>
            
            <a href="#join" className="hover:underline">Join</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-16">
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">About OpenDIRT</h2>
          <p className="mb-4">
            OpenDIRT is an open initiative for defining, measuring, and improving the productivity of AI agent infrastructure. 
            The acronym <strong>DIRT</strong> stands for <em>Data In Remote Transit</em> —  the non-productive movement of data that occurs as agents reason, call tools, and exchange context across systems.
          </p>
          <p>
            The project’s goal is to provide a rigorous, open framework for quantifying system inefficiency. 
            DIRT does not measure model intelligence — it measures orchestration quality: how well an agent /architecture minimizes redundant work, unnecessary transfers, and orchestration overhead.
          </p>
        </section>

        <section id="definition">
  <h2 className="text-3xl font-semibold mb-4">Definition</h2>
  <p>
    <strong>DIRT</strong> stands for <strong>Data in Remote Transit</strong>. 
    It measures how much data moves across system boundaries while an agent completes a task.
    Every time a model sends a prompt to a tool, an orchestrator makes an API call, or a result 
    travels between environments, those bytes count toward DIRT.
  </p>
  <p className="mt-4">
    For a task <strong>T</strong> with <strong>N</strong> cross-boundary interactions:
  </p>
  <pre className="bg-gray-100 border border-gray-200 rounded-md p-4 mt-2 text-sm overflow-x-auto">{`DIRT(T) = Σ(Input_bytes_i + Output_bytes_i)   for i = 1 to N`}</pre>
  <p className="mt-4">
    A low DIRT value means a system is efficient and most of its data movement directly contributes to useful output. 
    A high DIRT value indicates wasted motion—too many calls, too much context passed around, or poor system design. 
    DIRT does not measure intelligence. It measures productivity — how well the architecture and engineering of an agent system convert data movement into real output.
  </p>
</section>


<section id="impact">
  <h2 className="text-3xl font-semibold mb-4">Why DIRT Matters</h2>
  <p>
    Most people measure what an agent does. DIRT measures how it gets there.  
    It exposes the real cost of performance — the hidden data movement between models, tools, and systems. Latency, token waste, and redundant calls are all symptoms of the same problem: too much data in motion.
  </p>

  <p className="mt-4">
    DIRT gives teams a clear, data-driven way to see that overhead and make better design decisions. By tracking the bytes and boundaries between model, memory, and execution, engineers can:
  </p>

  <ul className="list-disc pl-6 mt-4 space-y-1">
    <li>Find where orchestration layers waste time and bandwidth.</li>
    <li>Compare frameworks and architectures using a standardized metric.</li>
    <li>Connect overhead to real-world costs, latency, and reliability.</li>
    <li>Design runtimes that keep compute and data closer together.</li>
  </ul>

  <p className="mt-4">
    DIRT turns hidden friction into visible signal. It is not about smarter models; it is about better systems.  
    Once you measure DIRT, efficiency becomes measurable and engineering becomes accountable.
  </p>
</section>


        <section id="research">
          <h2 className="text-3xl font-semibold mb-4">Research and Methodology</h2>
          <p>
            The OpenDIRT working group develops a formal measurement protocol for capturing DIRT in production and research settings. The methodology includes:
          </p>
          {/* <ol className="list-decimal pl-6 mt-4 space-y-1">
            <li>Identifying payload versus overhead within a given agent workflow.</li>
            <li>Instrumenting model, tool, and network layers to collect byte-level traces.</li>
            <li>Normalizing results across sessions, clouds, and frameworks.</li>
            <li>Publishing open datasets and benchmarks for comparison.</li>
          </ol> */}
         
        </section>

        <section id="join">
          <h2 className="text-3xl font-semibold mb-4">Join the OpenDIRT Initiative</h2>
          <p>
            OpenDIRT is a community-driven, non-commercial effort supported by researchers and engineers who believe in open benchmarking and reproducibility. You can participate by:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-1">
            <li>Contributing to the open DIRT specification.</li>
            <li>Submitting datasets or runtime benchmarks.</li>
            <li>Joining the working group discussions.</li>
          </ul>
          <div className="mt-6">
            <a href="#" className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">Join the Working Group</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 mt-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <div>© {new Date().getFullYear()} OpenDIRT.org — An Open Research Initiative</div>
          <div className="space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Specification</a>
            <a href="#" className="hover:underline">Publications</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}





const workflow = [
  'Case Input',
  'Scene Recognition',
  'Service Invocation',
  'Fusion Evaluation',
  'Report Generation'
]

const scenarios = [
  'Overseas IP layout',
  'Overseas M&A',
  'IP infringement litigation',
  'Overseas supply chain IP risk'
]

const outputs = [
  'Risk type',
  'Risk level',
  'Risk reason',
  'Compliance suggestion',
  'Response strategy'
]

function App() {
  return (
    <main className="container">
      <header>
        <h1>Multi-Agent Enterprise Overseas IP Compliance Assessment</h1>
        <p>
          Mock homepage scaffold for a multi-agent system that supports enterprise overseas
          intellectual property compliance assessment.
        </p>
      </header>

      <section>
        <h2>System Idea</h2>
        <p>Multi-agent system for enterprise overseas IP compliance assessment.</p>
      </section>

      <section>
        <h2>Workflow</h2>
        <p className="workflow">{workflow.join(' → ')}</p>
      </section>

      <section>
        <h2>Four Scenarios</h2>
        <ul>
          {scenarios.map((scenario) => (
            <li key={scenario}>{scenario}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Final Output</h2>
        <ul>
          {outputs.map((output) => (
            <li key={output}>{output}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App

const sidebarMenus = [
  '系统总览',
  '案例输入',
  '场景识别',
  '风险评估',
  '融合评估',
  '评估报告',
  '系统设置'
]

const workflowSteps = ['案例输入', '场景识别', '风险服务调用', '评估结果融合', '评估报告生成']

const scenarios = ['知识产权布局', '海外资产并购', '侵权诉讼', '供应链知识产权风险']

const agentModules = [
  '案例解析智能体',
  '场景识别智能体',
  '服务调度智能体',
  '风险评估智能体',
  '融合评估智能体',
  '报告生成智能体'
]

const systemOutputs = ['风险类型', '风险等级', '风险原因', '合规建议', '应对策略']

const cardStyle = 'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-slate-900 p-5 text-slate-100 lg:flex">
          <div className="mb-8 rounded-xl bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">知识产权智能风控</p>
            <h1 className="mt-2 text-lg font-semibold">智能评估平台</h1>
          </div>

          <nav className="space-y-2">
            {sidebarMenus.map((menu, index) => (
              <button
                key={menu}
                className={`flex w-full items-center rounded-xl px-4 py-2.5 text-left text-sm font-medium transition ${
                  index === 0
                    ? 'bg-blue-500/20 text-blue-200 ring-1 ring-blue-300/30'
                    : 'text-slate-200 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {menu}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">企业出海知识产权安全合规智能评估系统</h2>
              <p className="text-sm text-slate-500">系统总览</p>
            </div>
            <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">多智能体协同运行中</div>
          </header>

          <section className="p-6">
            <div className="grid gap-6 xl:grid-cols-2">
              <article className={cardStyle}>
                <h3 className="text-lg font-semibold text-slate-900">模块1：系统介绍</h3>
                <p className="mt-3 text-slate-700">企业出海知识产权安全合规智能评估系统</p>
                <p className="mt-2 text-sm text-slate-500">基于多智能体协同的知识产权风险评估平台。</p>
              </article>

              <article className={cardStyle}>
                <h3 className="text-lg font-semibold text-slate-900">模块2：系统流程</h3>
                <p className="mt-3 text-sm font-medium text-blue-700">{workflowSteps.join(' → ')}</p>
              </article>

              <article className={cardStyle}>
                <h3 className="text-lg font-semibold text-slate-900">模块3：四类典型场景</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {scenarios.map((scenario) => (
                    <li key={scenario} className="rounded-lg bg-slate-50 px-3 py-2">
                      {scenario}
                    </li>
                  ))}
                </ul>
              </article>

              <article className={cardStyle}>
                <h3 className="text-lg font-semibold text-slate-900">模块4：多智能体模块</h3>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {agentModules.map((agent) => (
                    <span key={agent} className="rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-700">
                      {agent}
                    </span>
                  ))}
                </div>
              </article>

              <article className={`${cardStyle} xl:col-span-2`}>
                <h3 className="text-lg font-semibold text-slate-900">模块5：系统输出</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {systemOutputs.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App

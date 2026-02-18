export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-md md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-bold">
            X
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Propuesta Analitica <span className="text-zinc-500">|</span>{" "}
            <span className="text-zinc-400">Xynapse</span>
          </span>
        </div>
        <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
          <a href="#contexto" className="transition-colors hover:text-white">Contexto</a>
          <a href="#dashboard" className="transition-colors hover:text-white">Dashboard</a>
          <a href="#devportal" className="transition-colors hover:text-white">Dev Portal</a>
          <a href="#reportes" className="transition-colors hover:text-white">Reportes</a>
          <a href="#beneficios" className="transition-colors hover:text-white">Beneficios</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center gap-6 px-6 py-24 text-center md:py-32">
        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400">
          Desarrollador de Software
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Dashboard Analitico para el Equipo de{" "}
          <span className="text-emerald-400">Desarrollo</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
          Una propuesta para implementar un panel de control que brinde
          visibilidad sobre el estado de los proyectos, el rendimiento del
          equipo y el impacto real de las funcionalidades desarrolladas en{" "}
          <span className="font-medium text-zinc-200">Xynapse</span>.
        </p>
        <div className="flex gap-4 pt-4">
          <a
            href="#dashboard"
            className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-emerald-400"
          >
            Ver Dashboard
          </a>
          <a
            href="#contexto"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition-colors hover:border-zinc-500"
          >
            Leer Propuesta
          </a>
        </div>
      </section>

      {/* Contexto */}
      <section id="contexto" className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle label="Contexto" title="Sobre Xynapse" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-3 text-lg font-semibold">La Plataforma</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Xynapse es una plataforma enterprise impulsada por IA que unifica
              colaboracion, gestion de proyectos y automatizacion inteligente.
              Integra chat con IA (OpenAI/Claude), gestion de sprints, CRM,
              documentos colaborativos y mas de 10 integraciones con terceros.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="mb-3 text-lg font-semibold">La Necesidad</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              Como desarrollador, necesito una vista organizada y practica que me
              permita entender rapidamente como avanza el trabajo, donde enfocar
              esfuerzos y cual es el impacto real de las funcionalidades que
              desarrollo. No un panel de metricas complejas, sino informacion
              accionable.
            </p>
          </div>
        </div>
      </section>

      {/* Que informacion necesito */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          label="Informacion"
          title="Que datos me ayudarian a trabajar mejor?"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "📋", title: "Estado de tareas", desc: "Progreso de funcionalidades y tareas en desarrollo en tiempo real." },
            { icon: "🏃", title: "Progreso de sprints", desc: "Avance de los sprints o entregas planificadas del equipo." },
            { icon: "🐛", title: "Bugs e incidencias", desc: "Incidencias detectadas, su nivel de prioridad y estado actual." },
            { icon: "⏱️", title: "Tiempo estimado vs real", desc: "Comparativa entre tiempo planificado e invertido en cada tarea." },
            { icon: "📊", title: "Uso de funcionalidades", desc: "Rendimiento y adopcion de las funcionalidades implementadas." },
            { icon: "💬", title: "Feedback del usuario", desc: "Retroalimentacion del cliente sobre las soluciones desarrolladas." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
            >
              <span className="text-2xl">{item.icon}</span>
              <h4 className="mt-3 text-sm font-semibold">{item.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== DASHBOARD MOCK ===== */}
      <section id="dashboard" className="border-y border-zinc-800 bg-zinc-900 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
              Preview
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Dashboard Propuesto
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Asi se veria el panel de control diario del desarrollador
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KpiCard label="Velocidad del Equipo" value="34" unit="tareas/sprint" change="+12%" positive />
            <KpiCard label="Bugs Abiertos" value="8" unit="incidencias" change="-3" positive />
            <KpiCard label="Tiempo Prom. Resolucion" value="4.2" unit="horas" change="+0.5h" positive={false} />
            <KpiCard label="Uptime del Sistema" value="99.8" unit="%" change="+0.1%" positive />
          </div>

          {/* Sprint Progress + Bug Chart */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Sprint Progress */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="mb-4 text-sm font-semibold text-zinc-300">Progreso del Sprint Actual</h3>
              <div className="space-y-3">
                {[
                  { name: "Modulo de Chat IA", pct: 85, color: "bg-emerald-500" },
                  { name: "Integracion Jira OAuth", pct: 60, color: "bg-blue-500" },
                  { name: "Dashboard de Analytics", pct: 35, color: "bg-amber-500" },
                  { name: "Fix: Notificaciones", pct: 100, color: "bg-emerald-500" },
                  { name: "Refactor Billing Module", pct: 20, color: "bg-red-400" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-zinc-400">{item.name}</span>
                      <span className="font-mono text-zinc-500">{item.pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className={`animate-bar h-full rounded-full ${item.color}`}
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bug Distribution */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <h3 className="mb-4 text-sm font-semibold text-zinc-300">Bugs por Categoria</h3>
              <div className="space-y-3">
                {[
                  { category: "UI/Frontend", count: 12, total: 30, color: "bg-blue-500" },
                  { category: "API/Backend", count: 8, total: 30, color: "bg-amber-500" },
                  { category: "Base de Datos", count: 3, total: 30, color: "bg-emerald-500" },
                  { category: "Integraciones", count: 5, total: 30, color: "bg-purple-500" },
                  { category: "Rendimiento", count: 2, total: 30, color: "bg-red-400" },
                ].map((item) => (
                  <div key={item.category} className="flex items-center gap-3">
                    <span className="w-28 text-xs text-zinc-400">{item.category}</span>
                    <div className="flex-1">
                      <div className="h-5 overflow-hidden rounded bg-zinc-800">
                        <div
                          className={`animate-bar flex h-full items-center rounded px-2 text-[10px] font-medium text-white ${item.color}`}
                          style={{ width: `${(item.count / item.total) * 100}%` }}
                        >
                          {item.count}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 border-t border-zinc-800 pt-4 text-xs text-zinc-500">
                <span>Total: <span className="font-medium text-zinc-300">30 bugs</span></span>
                <span>Resueltos esta semana: <span className="font-medium text-emerald-400">7</span></span>
              </div>
            </div>
          </div>

          {/* Recent Tasks Table */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
            <div className="px-6 py-4">
              <h3 className="text-sm font-semibold text-zinc-300">Tareas Recientes</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-t border-zinc-800 text-zinc-500">
                    <th className="px-6 py-3 font-medium">Tarea</th>
                    <th className="px-6 py-3 font-medium">Proyecto</th>
                    <th className="px-6 py-3 font-medium">Estado</th>
                    <th className="px-6 py-3 font-medium">Prioridad</th>
                    <th className="px-6 py-3 font-medium">Tiempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {[
                    { task: "Implementar streaming de chat", project: "Chat IA", status: "En progreso", priority: "Alta", time: "6h / 8h", statusColor: "bg-blue-500/10 text-blue-400", priorityColor: "bg-red-500/10 text-red-400" },
                    { task: "Corregir error en OAuth Jira", project: "Integraciones", status: "En revision", priority: "Critica", time: "3h / 2h", statusColor: "bg-amber-500/10 text-amber-400", priorityColor: "bg-red-500/10 text-red-400" },
                    { task: "Agregar filtros al dashboard", project: "Analytics", status: "Pendiente", priority: "Media", time: "0h / 4h", statusColor: "bg-zinc-500/10 text-zinc-400", priorityColor: "bg-amber-500/10 text-amber-400" },
                    { task: "Tests unitarios modulo billing", project: "Billing", status: "Completado", priority: "Media", time: "5h / 5h", statusColor: "bg-emerald-500/10 text-emerald-400", priorityColor: "bg-amber-500/10 text-amber-400" },
                    { task: "Optimizar queries de reportes", project: "Analytics", status: "En progreso", priority: "Alta", time: "2h / 6h", statusColor: "bg-blue-500/10 text-blue-400", priorityColor: "bg-red-500/10 text-red-400" },
                  ].map((row) => (
                    <tr key={row.task} className="transition-colors hover:bg-zinc-900/50">
                      <td className="px-6 py-3 font-medium text-zinc-200">{row.task}</td>
                      <td className="px-6 py-3 text-zinc-500">{row.project}</td>
                      <td className="px-6 py-3">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${row.priorityColor}`}>
                          {row.priority}
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-zinc-500">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEV PORTAL ===== */}
      <section id="devportal" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
              Dev Portal
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Herramientas para Desarrolladores
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Gestion de equipo, metricas de codigo y visibilidad del pipeline de desarrollo
            </p>
          </div>

          {/* Developer Team Overview */}
          <div className="mb-6">
            <h3 className="mb-4 text-sm font-semibold text-zinc-300">Equipo de Desarrollo</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Maria Garcia", role: "Frontend Lead", avatar: "MG", commits: 47, prs: 12, reviews: 18, status: "online", statusColor: "bg-emerald-400" },
                { name: "Carlos Lopez", role: "Backend Dev", avatar: "CL", commits: 35, prs: 8, reviews: 22, status: "online", statusColor: "bg-emerald-400" },
                { name: "Ana Torres", role: "Full Stack", avatar: "AT", commits: 29, prs: 10, reviews: 15, status: "in meeting", statusColor: "bg-amber-400" },
                { name: "Diego Ruiz", role: "DevOps", avatar: "DR", commits: 18, prs: 6, reviews: 9, status: "offline", statusColor: "bg-zinc-500" },
              ].map((dev) => (
                <div key={dev.name} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
                        {dev.avatar}
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-zinc-900 ${dev.statusColor}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{dev.name}</p>
                      <p className="text-xs text-zinc-500">{dev.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold text-zinc-200">{dev.commits}</p>
                      <p className="text-[10px] text-zinc-500">Commits</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-zinc-200">{dev.prs}</p>
                      <p className="text-[10px] text-zinc-500">PRs</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-zinc-200">{dev.reviews}</p>
                      <p className="text-[10px] text-zinc-500">Reviews</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Git Activity Heatmap + Code Quality */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Git Heatmap */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-300">Actividad Git — Ultima Semana</h3>
                <span className="text-xs text-zinc-500">129 commits totales</span>
              </div>
              <div className="space-y-2">
                {[
                  { day: "Lun", values: [3, 5, 2, 8, 4, 1, 6, 3, 7, 2, 4, 5] },
                  { day: "Mar", values: [1, 4, 6, 3, 7, 5, 2, 8, 1, 6, 3, 4] },
                  { day: "Mie", values: [5, 2, 7, 1, 3, 8, 4, 2, 6, 1, 5, 3] },
                  { day: "Jue", values: [2, 6, 1, 5, 8, 3, 7, 4, 2, 3, 1, 6] },
                  { day: "Vie", values: [4, 3, 5, 2, 1, 6, 3, 5, 4, 7, 2, 1] },
                ].map((row) => (
                  <div key={row.day} className="flex items-center gap-2">
                    <span className="w-8 text-xs text-zinc-500">{row.day}</span>
                    <div className="flex gap-1">
                      {row.values.map((v, i) => (
                        <div
                          key={i}
                          className="h-6 w-6 rounded-sm"
                          title={`${v} commits`}
                          style={{
                            backgroundColor:
                              v === 0
                                ? "rgb(39, 39, 42)"
                                : v <= 2
                                ? "rgba(16, 185, 129, 0.2)"
                                : v <= 4
                                ? "rgba(16, 185, 129, 0.4)"
                                : v <= 6
                                ? "rgba(16, 185, 129, 0.6)"
                                : "rgba(16, 185, 129, 0.85)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-zinc-500">
                <span>Menos</span>
                {[0.1, 0.2, 0.4, 0.6, 0.85].map((op) => (
                  <div
                    key={op}
                    className="h-3 w-3 rounded-sm"
                    style={{ backgroundColor: `rgba(16, 185, 129, ${op})` }}
                  />
                ))}
                <span>Mas</span>
              </div>
            </div>

            {/* Code Quality Metrics */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-sm font-semibold text-zinc-300">Calidad del Codigo</h3>
              <div className="space-y-4">
                {[
                  { metric: "Cobertura de Tests", value: 73, target: 80, color: "bg-amber-500", unit: "%" },
                  { metric: "Deuda Tecnica", value: 12, target: 0, color: "bg-red-400", unit: " issues" },
                  { metric: "Code Review Turnaround", value: 85, target: 100, color: "bg-emerald-500", unit: "% < 24h" },
                  { metric: "Build Success Rate", value: 94, target: 99, color: "bg-blue-500", unit: "%" },
                ].map((item) => (
                  <div key={item.metric}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-zinc-400">{item.metric}</span>
                      <span className="font-mono text-zinc-300">{item.value}{item.unit}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className={`animate-bar h-full rounded-full ${item.color}`}
                        style={{ width: `${Math.min(item.value, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                <p className="text-xs text-amber-400">
                  ⚠ Cobertura de tests por debajo del objetivo (80%). Se recomienda priorizar tests en el modulo de Billing.
                </p>
              </div>
            </div>
          </div>

          {/* Deployment Pipeline + PR Tracker */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Deployment Pipeline */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-sm font-semibold text-zinc-300">Pipeline de Despliegue</h3>
              <div className="space-y-3">
                {[
                  { env: "Production", version: "v2.4.1", status: "Estable", time: "hace 2 dias", statusColor: "bg-emerald-500/10 text-emerald-400", dot: "bg-emerald-400" },
                  { env: "Staging", version: "v2.5.0-rc.3", status: "Desplegando", time: "hace 5 min", statusColor: "bg-blue-500/10 text-blue-400", dot: "bg-blue-400 animate-pulse" },
                  { env: "Development", version: "v2.5.0-dev.47", status: "Build fallido", time: "hace 23 min", statusColor: "bg-red-500/10 text-red-400", dot: "bg-red-400" },
                  { env: "QA", version: "v2.4.2-qa.1", status: "En pruebas", time: "hace 1 hora", statusColor: "bg-amber-500/10 text-amber-400", dot: "bg-amber-400" },
                ].map((deploy) => (
                  <div key={deploy.env} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${deploy.dot}`} />
                      <div>
                        <p className="text-sm font-medium">{deploy.env}</p>
                        <p className="font-mono text-[10px] text-zinc-500">{deploy.version}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${deploy.statusColor}`}>
                        {deploy.status}
                      </span>
                      <p className="mt-1 text-[10px] text-zinc-600">{deploy.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-xs">
                <div className="flex-1 rounded-lg bg-zinc-950 p-3 text-center">
                  <p className="text-lg font-bold text-zinc-200">23</p>
                  <p className="text-zinc-500">Deploys / semana</p>
                </div>
                <div className="flex-1 rounded-lg bg-zinc-950 p-3 text-center">
                  <p className="text-lg font-bold text-zinc-200">4.2<span className="text-xs text-zinc-500">min</span></p>
                  <p className="text-zinc-500">Build promedio</p>
                </div>
                <div className="flex-1 rounded-lg bg-zinc-950 p-3 text-center">
                  <p className="text-lg font-bold text-emerald-400">94%</p>
                  <p className="text-zinc-500">Exito CI/CD</p>
                </div>
              </div>
            </div>

            {/* PR & Code Review Tracker */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="mb-4 text-sm font-semibold text-zinc-300">Pull Requests Activos</h3>
              <div className="space-y-3">
                {[
                  { title: "feat: streaming de respuestas IA", author: "MG", branch: "feat/ai-streaming", reviewers: 2, comments: 5, status: "approved", statusColor: "text-emerald-400", checks: "passed" },
                  { title: "fix: memory leak en WebSocket", author: "CL", branch: "fix/ws-memory", reviewers: 1, comments: 3, status: "changes requested", statusColor: "text-amber-400", checks: "passed" },
                  { title: "refactor: billing module v2", author: "AT", branch: "refactor/billing-v2", reviewers: 0, comments: 0, status: "awaiting review", statusColor: "text-zinc-400", checks: "running" },
                  { title: "chore: upgrade dependencies", author: "DR", branch: "chore/deps-update", reviewers: 1, comments: 1, status: "approved", statusColor: "text-emerald-400", checks: "failed" },
                  { title: "feat: dashboard de analytics", author: "MG", branch: "feat/analytics-dash", reviewers: 2, comments: 8, status: "in review", statusColor: "text-blue-400", checks: "passed" },
                ].map((pr) => (
                  <div key={pr.branch} className="rounded-lg border border-zinc-800 bg-zinc-950 p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-medium text-zinc-200">{pr.title}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-zinc-600">{pr.branch}</p>
                      </div>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-[10px] font-bold text-purple-400">
                        {pr.author}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-3 text-[10px] text-zinc-500">
                      <span className={`font-medium ${pr.statusColor}`}>{pr.status}</span>
                      <span>👥 {pr.reviewers}</span>
                      <span>💬 {pr.comments}</span>
                      <span className={pr.checks === "passed" ? "text-emerald-400" : pr.checks === "failed" ? "text-red-400" : "text-amber-400"}>
                        {pr.checks === "passed" ? "✓ checks" : pr.checks === "failed" ? "✗ checks" : "⟳ checks"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Workload Distribution */}
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-zinc-300">Distribucion de Carga del Equipo</h3>
              <span className="rounded-full border border-zinc-700 px-3 py-1 text-[10px] text-zinc-400">Ciclo 14 — Semana 2</span>
            </div>
            <div className="space-y-4">
              {[
                { name: "Maria Garcia", tasks: 7, capacity: 8, inProgress: 3, review: 2, done: 2, blocked: 0 },
                { name: "Carlos Lopez", tasks: 6, capacity: 8, inProgress: 2, review: 1, done: 3, blocked: 0 },
                { name: "Ana Torres", tasks: 8, capacity: 8, inProgress: 4, review: 1, done: 2, blocked: 1 },
                { name: "Diego Ruiz", tasks: 5, capacity: 6, inProgress: 2, review: 0, done: 3, blocked: 0 },
              ].map((dev) => (
                <div key={dev.name} className="flex items-center gap-4">
                  <span className="w-28 text-xs font-medium text-zinc-300">{dev.name}</span>
                  <div className="flex-1">
                    <div className="flex h-6 overflow-hidden rounded bg-zinc-800">
                      <div className="flex items-center justify-center bg-blue-500/80 text-[9px] font-medium text-white" style={{ width: `${(dev.inProgress / dev.capacity) * 100}%` }}>
                        {dev.inProgress > 0 && dev.inProgress}
                      </div>
                      <div className="flex items-center justify-center bg-amber-500/80 text-[9px] font-medium text-white" style={{ width: `${(dev.review / dev.capacity) * 100}%` }}>
                        {dev.review > 0 && dev.review}
                      </div>
                      <div className="flex items-center justify-center bg-emerald-500/80 text-[9px] font-medium text-white" style={{ width: `${(dev.done / dev.capacity) * 100}%` }}>
                        {dev.done > 0 && dev.done}
                      </div>
                      {dev.blocked > 0 && (
                        <div className="flex items-center justify-center bg-red-500/80 text-[9px] font-medium text-white" style={{ width: `${(dev.blocked / dev.capacity) * 100}%` }}>
                          {dev.blocked}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="w-14 text-right font-mono text-xs text-zinc-500">
                    {dev.tasks}/{dev.capacity}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 border-t border-zinc-800 pt-4 text-[10px] text-zinc-500">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-blue-500/80" /> En progreso</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-amber-500/80" /> En revision</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-emerald-500/80" /> Completado</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-sm bg-red-500/80" /> Bloqueado</span>
              {(() => {
                const totalTasks = 26;
                const totalCapacity = 30;
                const pct = Math.round((totalTasks / totalCapacity) * 100);
                return (
                  <span className="ml-auto font-medium text-zinc-400">
                    Capacidad del equipo: <span className={pct > 90 ? "text-red-400" : pct > 75 ? "text-amber-400" : "text-emerald-400"}>{pct}%</span>
                  </span>
                );
              })()}
            </div>
          </div>

          {/* Quick Actions / Dev Tools */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "⚡", title: "Generar Reporte", desc: "Exportar metricas del sprint actual en PDF o CSV", color: "border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/5" },
              { icon: "🔔", title: "Alertas Personalizadas", desc: "Configurar notificaciones de builds, PRs y deploys", color: "border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5" },
              { icon: "📈", title: "Tendencias", desc: "Comparar rendimiento entre sprints anteriores", color: "border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5" },
              { icon: "🔗", title: "Integraciones", desc: "Conectar con GitHub, Jira, Slack y mas herramientas", color: "border-amber-500/20 hover:border-amber-500/40 hover:bg-amber-500/5" },
            ].map((action) => (
              <div key={action.title} className={`cursor-pointer rounded-xl border p-5 transition-all ${action.color}`}>
                <span className="text-2xl">{action.icon}</span>
                <h4 className="mt-3 text-sm font-semibold">{action.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{action.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indicadores Clave */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          label="Indicadores"
          title="Metricas que revisaria con frecuencia"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Velocidad del equipo", desc: "Cantidad de tareas completadas por sprint para medir la productividad real." },
            { title: "Bugs abiertos y cerrados", desc: "Tendencia de incidencias para detectar patrones de calidad del codigo." },
            { title: "Tiempo de resolucion", desc: "Promedio de horas para resolver incidencias, evaluando eficiencia del equipo." },
            { title: "Cumplimiento de entregas", desc: "Porcentaje de tareas entregadas dentro del plazo estimado." },
            { title: "Adopcion de features", desc: "Uso real de funcionalidades por parte de los usuarios finales." },
            { title: "Estabilidad del sistema", desc: "Errores en produccion, caidas y metricas de rendimiento general." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-zinc-800 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/30"
            >
              <h4 className="text-sm font-semibold">{item.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-zinc-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reportes y Audiencias */}
      <section id="reportes" className="border-y border-zinc-800 bg-zinc-900/50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle label="Reportes" title="Tipos de reportes y audiencias" />

          <div className="grid gap-6 md:grid-cols-3">
            <ReportCard
              title="Avance de Desarrollo"
              color="emerald"
              items={[
                "Progreso de funcionalidades",
                "Estado de tareas asignadas",
                "Cumplimiento de objetivos del sprint",
              ]}
            />
            <ReportCard
              title="Calidad del Software"
              color="amber"
              items={[
                "Cantidad de errores detectados",
                "Tipos de fallas mas frecuentes",
                "Tiempos de resolucion de incidencias",
              ]}
            />
            <ReportCard
              title="Rendimiento del Producto"
              color="blue"
              items={[
                "Uso de funcionalidades",
                "Experiencia del usuario",
                "Problemas tecnicos reportados",
              ]}
            />
          </div>

          <div className="mt-10">
            <h3 className="mb-4 text-sm font-semibold text-zinc-300">Audiencias objetivo</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Lideres tecnicos",
                "Jefes de desarrollo",
                "Project Managers",
                "Equipo de QA",
                "Areas estrategicas / Gerencia",
              ].map((audience) => (
                <span
                  key={audience}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-xs font-medium text-zinc-300"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="mx-auto max-w-5xl px-6 py-20">
        <SectionTitle
          label="Impacto"
          title="Que decisiones permitiria tomar?"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Priorizar mejoras criticas", desc: "Identificar funcionalidades que generan mas problemas y enfocar recursos en ellas." },
            { title: "Detectar deuda tecnica", desc: "Encontrar areas del sistema que requieren refactorizacion basandose en datos reales." },
            { title: "Ajustar planificacion", desc: "Mejorar estimaciones de tiempo y planificacion de sprints con datos historicos." },
            { title: "Mejorar la experiencia", desc: "Usar feedback del usuario y metricas de adopcion para guiar el desarrollo." },
            { title: "Optimizar recursos", desc: "Distribuir mejor la carga de trabajo del equipo segun capacidad y rendimiento." },
            { title: "Decisiones estrategicas", desc: "Proveer a los lideres informacion objetiva para evaluar proyectos y asignar presupuesto." },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-zinc-800 p-5 transition-colors hover:border-emerald-500/20 hover:bg-emerald-500/5"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs text-emerald-400">
                ✓
              </div>
              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8 text-center">
        <p className="text-sm text-zinc-500">
          Propuesta de Dashboard Analitico para{" "}
          <span className="font-medium text-zinc-300">Xynapse</span>
        </p>
        <p className="mt-1 text-xs text-zinc-600">
          Reflexion y Definicion sobre Analitica en el Equipo de Desarrollo de Software
        </p>
      </footer>
    </div>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <span className="text-xs font-medium uppercase tracking-widest text-emerald-400">
        {label}
      </span>
      <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}

function KpiCard({
  label,
  value,
  unit,
  change,
  positive,
}: {
  label: string;
  value: string;
  unit: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-xs text-zinc-500">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-xs text-zinc-500">{unit}</span>
      </div>
      <span
        className={`mt-2 inline-block text-xs font-medium ${
          positive ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {change}
      </span>
    </div>
  );
}

function ReportCard({
  title,
  color,
  items,
}: {
  title: string;
  color: "emerald" | "amber" | "blue";
  items: string[];
}) {
  const colors = {
    emerald: "border-emerald-500/20 bg-emerald-500/5",
    amber: "border-amber-500/20 bg-amber-500/5",
    blue: "border-blue-500/20 bg-blue-500/5",
  };
  const dotColors = {
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    blue: "bg-blue-400",
  };

  return (
    <div className={`rounded-2xl border p-6 ${colors[color]}`}>
      <h3 className="mb-4 text-base font-semibold">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-zinc-400">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColors[color]}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

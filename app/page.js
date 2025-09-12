function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm
                    dark:border-neutral-800 dark:bg-neutral-900">
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">SpendWise</h1>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Track your expenses. Stay in control.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="This Month" value="$0" />
        <StatCard label="Total Expenses" value="0" />
        <StatCard label="Top Category" value="—" />
      </section>

      <section className="mt-8 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm
                          dark:border-neutral-800 dark:bg-neutral-900 relative overflow-hidden">
        {/* dotted background */}
        <div className="absolute inset-0 bg-dots text-neutral-300 dark:text-neutral-700"></div>

        {/* content goes on top of dots */}
        <div className="relative">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button className="rounded-xl border px-3 py-1.5 text-sm hover:bg-neutral-50
                               dark:border-neutral-700 dark:hover:bg-neutral-800">
              Add Expense
            </button>
          </div>

          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            No expenses yet. Add your first one to see it here.
          </p>
        </div>
      </section>
    </main>
  );
}

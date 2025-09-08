import React from 'react'

const StatsSection = () => {
  const stats = [
    { number: "15+", label: "Project Done" },
    { number: "10+", label: "Open Source Pojects" },
    { number: "100K", label: "Lines of Code" },


  ];
  return (
    <section className="bg-fuchsia-100 py-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center flex flex-col sm:flex-row sm:items-center">
              <span className="text-5xl font-bold text-amber-700 mr-2">{stat.number}</span>
              <span className="text-lg font-semibold text-black">{stat.label}</span>

            </div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default StatsSection

type Stat = {
  value: string;
  suffix?: string;
  label: string;
  detail: string;
};

const stats: Stat[] = [
  { value: '2', label: 'Projetos', detail: 'No GitHub' },
  { value: '4', label: 'Certificações', detail: 'Alura' },
  { value: '40', suffix: 'h+', label: 'De Estudo', detail: 'Em Spring Boot' },
  { value: '7', label: 'Tecnologias', detail: 'Stack' },
];

const StatsSection = () => {
  return (
    <section className="w-full h-2/11 absolute bottom-8 p-2">
      <div className="w-full h-full grid grid-cols-2 gap-4 md:flex md:justify-center md:items-center">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="w-2/12 h-full flex flex-col items-center justify-center gap-1 rounded-xl border backdrop-blur-sm border-primary/50 bg-primary/10 text-center transition-all duration-300 hover:border-primary hover:bg-primary/50"
          >
            <span className="text-3xl font-semibold text-primary md:text-3xl">
              {stat.value}
              {stat.suffix && <span className="text-xl md:text-xl">{stat.suffix}</span>}
            </span>
            <h3 className="text-base font-normal text-white md:text-xl">{stat.label}</h3>
            <p className="font-mono text-sm text-white/50">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
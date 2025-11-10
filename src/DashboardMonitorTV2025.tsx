// src/DashboardMonitorTV2025.tsx
import Tabs from "./components/Tabs";
import InformacionGeneral from "./components/InformacionGeneral";
import Noticieros from "./components/Noticieros";
import Matinales from "./components/Matinales";
import { Pill } from "./components/shared/UIComponents";
import { DATA } from "./data/monitorData";

const DashboardMonitorTV2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      <div className="w-full mx-auto px-4 py-6 md:py-10 flex flex-col gap-6 md:gap-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Monitor Noticieros y Matinales 2025
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Temas, voces y audiencias en la TV chilena (CNTV)
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <Pill label={DATA.resumen.periodo} />
              <Pill label={DATA.resumen.fuente} />
              <Pill label={DATA.resumen.jornada} />
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-xs text-slate-400">
            <span>Construido a partir del estudio oficial del CNTV.</span>
            <span>Los porcentajes son de tiempo en pantalla, no de notas.</span>
          </div>
        </header>

        <Tabs
          tabs={[
            { id: "general", label: "Información General" },
            { id: "noticieros", label: "Noticieros" },
            { id: "matinales", label: "Matinales" },
          ]}
        >
          {(activeTab) => (
            <>
              {activeTab === "general" && <InformacionGeneral data={DATA} />}
              {activeTab === "noticieros" && <Noticieros data={DATA.noticieros} />}
              {activeTab === "matinales" && <Matinales data={DATA.matinales} />}
            </>
          )}
        </Tabs>

        <footer className="border-t border-slate-900 pt-4 mt-4 mb-2 text-[11px] text-slate-500 flex flex-col gap-1">
          <p>
            Este dashboard es una síntesis visual del estudio "Monitor de la
            TV: Temas y voces en noticiarios y matinales" (CNTV, 2025). Algunos
            valores numéricos se han aproximado para hacerlos comparables entre
            programas en formato de panel.
          </p>
          <p>
            Los datos están organizados por pestañas: Información General muestra
            los indicadores consolidados, Noticieros detalla los noticiarios
            centrales, y Matinales los programas matutinos.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardMonitorTV2025;

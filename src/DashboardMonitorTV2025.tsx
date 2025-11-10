// src/DashboardMonitorTV2025.tsx
import React from "react";
import Tabs from "./components/Tabs";
import InformacionGeneral from "./components/InformacionGeneral";
import Noticieros from "./components/Noticieros";
import Matinales from "./components/Matinales";
import { Pill } from "./components/shared/UIComponents";

const DATA = {
  resumen: {
    periodo: "Mayo – Agosto 2025",
    fuente: "CNTV – Departamento de Estudios",
    jornada: "Noticiarios centrales y matinales TV abierta + CNN Chile",
  },
  noticieros: {
    tiempoTotalTemas: 46576,
    tiempoTotalVoces: 68021,
    temas: [
      { label: "Policial/Judicial", value: 27 },
      { label: "Política", value: 16 },
      { label: "Internacional", value: 12 },
      { label: "Deportes", value: 10 },
      { label: "Accidentes/Catástrofes", value: 8 },
      { label: "Otros", value: 27 },
    ],
    voces: {
      oficiales: 86,
      externas: 14,
      mujeres: 23,
      hombres: 77,
    },
    canales: [
      {
        nombre: "24 Horas Central",
        minutos: 9819,
        policial: 24,
        politica: 14,
        internacional: 13,
        deportes: 9,
        accidentes: 9,
      },
      {
        nombre: "CHV Noticias Central",
        minutos: 11397,
        policial: 36,
        politica: 26,
        internacional: 11,
        deportes: 11,
        accidentes: 8,
      },
      {
        nombre: "CNN Prime",
        minutos: 7390,
        policial: 14,
        politica: 38,
        internacional: 13,
        deportes: 5,
        accidentes: 4,
      },
      {
        nombre: "Meganoticias Prime",
        minutos: 10426,
        policial: 26,
        politica: 16,
        internacional: 10,
        deportes: 14,
        accidentes: 11,
      },
      {
        nombre: "Teletrece Central",
        minutos: 7545,
        policial: 33,
        politica: 11,
        internacional: 9,
        deportes: 7,
        accidentes: 9,
      },
    ],
    rating: [
      { programa: "Meganoticias Prime", rating: 4.0 },
      { programa: "CHV Noticias Central", rating: 3.0 },
      { programa: "24 Horas Central", rating: 2.5 },
      { programa: "CNN Prime", rating: 2.0 },
      { programa: "Teletrece Central", rating: 1.7 },
    ],
    alcance: [
      { programa: "Meganoticias Prime", alcance: 1.6 },
      { programa: "CHV Noticias Central", alcance: 1.6 },
      { programa: "24 Horas Central", alcance: 1.2 },
      { programa: "CNN Prime", alcance: 1.0 },
      { programa: "Teletrece Central", alcance: 0.75 },
    ],
  },
  matinales: {
    tiempoTotalTemas: 72908,
    temas: [
      { label: "Policial/Judicial", value: 39 },
      { label: "Medioambiente/Meteo", value: 13 },
      { label: "Internacional", value: 10 },
      { label: "Accidentes/Catástrofes", value: 9 },
      { label: "Social/Sectorial", value: 6 },
      { label: "Otros", value: 23 },
    ],
    voces: {
      fuentesExternas: 9,
      hombresFuentes: 88,
      mujeresFuentes: 12,
    },
    programasFuentes: [
      { programa: "Buenos Días a Todos", fuentes: 9 },
      { programa: "Contigo en la Mañana", fuentes: 4 },
      { programa: "Mucho Gusto", fuentes: 13 },
      { programa: "Tu Día", fuentes: 9 },
    ],
    rating: [
      { programa: "Contigo en la Mañana", rating: 2.0 },
      { programa: "Mucho Gusto", rating: 2.0 },
      { programa: "Tu Día", rating: 2.0 },
      { programa: "Buenos Días a Todos", rating: 1.0 },
    ],
    alcance: [
      { programa: "Mucho Gusto", alcance: 1.8 },
      { programa: "Contigo en la Mañana", alcance: 1.5 },
      { programa: "Tu Día", alcance: 1.5 },
      { programa: "Buenos Días a Todos", alcance: 0.9 },
    ],
  },
};

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

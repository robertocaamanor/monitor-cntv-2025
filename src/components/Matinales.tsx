import React from "react";
import { Card, Pill, BarRow, HorizontalNumberRow, SimpleTable } from "./shared/UIComponents";

interface MatinalesProps {
  data: {
    temas: { label: string; value: number }[];
    voces: {
      fuentesExternas: number;
      hombresFuentes: number;
      mujeresFuentes: number;
    };
    programasFuentes: { programa: string; fuentes: number }[];
    rating: { programa: string; rating: number }[];
    alcance: { programa: string; alcance: number }[];
  };
}

const Matinales: React.FC<MatinalesProps> = ({ data }) => {
  const maxTema = Math.max(...data.temas.map((t) => t.value));

  return (
    <section className="flex flex-col gap-4 md:gap-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Matinales
        </h2>
        <Pill label="Buenos Días a Todos, Tu Día, Contigo en la Mañana, Mucho Gusto" />
      </div>

      <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-4 md:gap-5">
        <Card
          title="Distribución de temas"
          subtitle="Porcentaje del tiempo total en pantalla"
        >
          <div className="flex flex-col gap-3">
            {data.temas.map((t) => (
              <BarRow key={t.label} label={t.label} value={t.value} max={maxTema} />
            ))}
          </div>
        </Card>

        <Card
          title="Fuentes externas y género"
          subtitle="Matinales mayo–agosto 2025"
        >
          <div className="flex flex-col gap-3 text-xs">
            <HorizontalNumberRow
              label="Tiempo total destinado a fuentes externas"
              value={data.voces.fuentesExternas}
              unit="% del programa"
            />
            <div className="grid grid-cols-2 gap-3 mt-2">
              <div>
                <p className="text-slate-400 text-xs mb-1">
                  Sexo fuentes externas
                </p>
                <BarRow
                  label="Hombres"
                  value={data.voces.hombresFuentes}
                  max={100}
                />
                <BarRow
                  label="Mujeres"
                  value={data.voces.mujeresFuentes}
                  max={100}
                />
              </div>
              <div>
                <p className="text-slate-400 text-xs mb-1">
                  % tiempo de fuentes por programa
                </p>
                <div className="flex flex-col gap-1.5">
                  {data.programasFuentes.map((p) => (
                    <div
                      key={p.programa}
                      className="flex justify-between text-xs text-slate-300"
                    >
                      <span className="truncate mr-2">{p.programa}</span>
                      <span>{p.fuentes}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Mucho Gusto es el matinal que más tiempo otorga a fuentes (13%),
              mientras que Contigo en la Mañana llega solo a 4%.
            </p>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-5">
        <Card
          title="Rating por matinal"
          subtitle="Promedio mayo–agosto 2025 (individuos)"
        >
          <SimpleTable
            columns={[
              { key: "programa", label: "Programa" },
              { key: "rating", label: "Rating", align: "right" },
            ]}
            rows={data.rating.map((r) => ({
              programa: r.programa,
              rating: r.rating.toFixed(1),
            }))}
          />
        </Card>
        <Card
          title="Alcance diario"
          subtitle="Personas distintas por día (en millones)"
        >
          <SimpleTable
            columns={[
              { key: "programa", label: "Programa" },
              { key: "alcance", label: "Alcance", align: "right" },
            ]}
            rows={data.alcance.map((r) => ({
              programa: r.programa,
              alcance: r.alcance.toFixed(2),
            }))}
          />
        </Card>
      </div>
    </section>
  );
};

export default Matinales;

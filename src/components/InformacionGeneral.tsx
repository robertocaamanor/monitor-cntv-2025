import React from "react";
import { Card, HorizontalNumberRow } from "./shared/UIComponents";

interface InformacionGeneralProps {
  data: {
    noticieros: {
      voces: {
        externas: number;
        mujeres: number;
      };
      rating: { programa: string; rating: number }[];
      alcance: { programa: string; alcance: number }[];
    };
    matinales: {
      voces: {
        fuentesExternas: number;
        mujeresFuentes: number;
      };
      rating: { programa: string; rating: number }[];
      alcance: { programa: string; alcance: number }[];
    };
  };
}

const InformacionGeneral: React.FC<InformacionGeneralProps> = ({ data }) => {
  const avgRatingNoticieros =
    data.noticieros.rating.reduce((sum, r) => sum + r.rating, 0) /
    data.noticieros.rating.length;
  const avgRatingMatinales =
    data.matinales.rating.reduce((sum, r) => sum + r.rating, 0) /
    data.matinales.rating.length;
  const avgAlcanceNoticieros =
    data.noticieros.alcance.reduce((sum, r) => sum + r.alcance, 0) /
    data.noticieros.alcance.length;
  const avgAlcanceMatinales =
    data.matinales.alcance.reduce((sum, r) => sum + r.alcance, 0) /
    data.matinales.alcance.length;

  return (
    <section className="grid md:grid-cols-3 gap-4 md:gap-5">
      <Card
        title="Peso de temas policiales"
        subtitle="Sobre el total del tiempo en pantalla"
      >
        <div className="flex flex-col gap-3">
          <HorizontalNumberRow
            label="Noticiarios centrales"
            value={27}
            unit="%"
          />
          <HorizontalNumberRow label="Matinales" value={39} unit="%" />
          <p className="text-xs text-slate-400 mt-1">
            En ambos bloques informativos, la crónica policial lidera la pauta y
            alcanza su punto máximo en julio por el caso del "Rey de Meiggs".
          </p>
        </div>
      </Card>

      <Card
        title="Voces externas y género"
        subtitle="Noticiarios centrales y matinales"
      >
        <div className="flex flex-col gap-3">
          <HorizontalNumberRow
            label="Fuentes externas (noticieros)"
            value={data.noticieros.voces.externas}
            unit="% del tiempo de voces"
          />
          <HorizontalNumberRow
            label="Fuentes externas (matinales)"
            value={data.matinales.voces.fuentesExternas}
            unit="% del tiempo de programa"
          />
          <HorizontalNumberRow
            label="Mujeres en voces de noticieros"
            value={data.noticieros.voces.mujeres}
            unit="% del tiempo"
          />
          <HorizontalNumberRow
            label="Mujeres en fuentes de matinales"
            value={data.matinales.voces.mujeresFuentes}
            unit="% del tiempo"
          />
          <p className="text-xs text-slate-400 mt-1">
            Predominan las voces oficiales y masculinas; las mujeres retroceden
            en casi todos los roles analizados.
          </p>
        </div>
      </Card>

      <Card title="Audiencias" subtitle="Rating y alcance promedio">
        <div className="flex flex-col gap-3">
          <HorizontalNumberRow
            label="Rating promedio noticieros"
            value={avgRatingNoticieros.toFixed(1)}
            unit="pts"
          />
          <HorizontalNumberRow
            label="Rating promedio matinales"
            value={avgRatingMatinales.toFixed(1)}
            unit="pts"
          />
          <HorizontalNumberRow
            label="Alcance noticieros"
            value={avgAlcanceNoticieros.toFixed(2)}
            unit="M de personas/día"
          />
          <HorizontalNumberRow
            label="Alcance matinales"
            value={avgAlcanceMatinales.toFixed(2)}
            unit="M de personas/día"
          />
          <p className="text-xs text-slate-400 mt-1">
            Mega y CHV lideran en sintonía, con audiencias mayoritariamente
            femeninas y de segmentos medio y bajo.
          </p>
        </div>
      </Card>
    </section>
  );
};

export default InformacionGeneral;

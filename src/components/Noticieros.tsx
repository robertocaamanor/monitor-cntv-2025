import { Card, Pill, BarRow, SimpleTable } from "./shared/UIComponents";

interface NoticierosProps {
  data: {
    temas: { label: string; value: number }[];
    voces: {
      oficiales: number;
      externas: number;
      mujeres: number;
      hombres: number;
    };
    canales: {
      nombre: string;
      minutos: number;
      policial: number;
      politica: number;
      internacional: number;
      deportes: number;
      accidentes: number;
    }[];
    rating: { programa: string; rating: number }[];
    alcance: { programa: string; alcance: number }[];
  };
}

const Noticieros: React.FC<NoticierosProps> = ({ data }) => {
  const maxTema = Math.max(...data.temas.map((t) => t.value));

  return (
    <section className="flex flex-col gap-4 md:gap-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
          Noticiarios centrales
        </h2>
        <Pill label="24 Horas, Teletrece, CHV Noticias, Meganoticias, CNN Prime" />
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
          title="Voces en noticiarios"
          subtitle="Voces oficiales vs. fuentes externas y distribución por sexo"
        >
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex flex-col gap-2">
              <p className="text-slate-400 text-xs mb-1">Tipo de voz</p>
              <BarRow
                label="Voces del programa"
                value={data.voces.oficiales}
                max={100}
              />
              <BarRow
                label="Fuentes externas"
                value={data.voces.externas}
                max={100}
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-slate-400 text-xs mb-1">Sexo de las voces</p>
              <BarRow label="Hombres" value={data.voces.hombres} max={100} />
              <BarRow label="Mujeres" value={data.voces.mujeres} max={100} />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            CNN Prime es el noticiario que más espacio da a fuentes externas
            (28%), mientras que CHV Noticias Central llega solo a 8%.
          </p>
        </Card>
      </div>

      <Card
        title="Temas principales por noticiario"
        subtitle="Porcentaje de tiempo de cada tema en cada programa"
      >
        <SimpleTable
          columns={[
            { key: "programa", label: "Programa" },
            { key: "policial", label: "Policial/Jud.", align: "right" },
            { key: "politica", label: "Política", align: "right" },
            { key: "internacional", label: "Internacional", align: "right" },
            { key: "deportes", label: "Deportes", align: "right" },
            { key: "accidentes", label: "Accid./Catást.", align: "right" },
          ]}
          rows={data.canales.map((c) => ({
            programa: c.nombre,
            policial: `${c.policial}%`,
            politica: `${c.politica}%`,
            internacional: `${c.internacional}%`,
            deportes: `${c.deportes}%`,
            accidentes: `${c.accidentes}%`,
          }))}
        />
      </Card>

      <div className="grid md:grid-cols-2 gap-4 md:gap-5">
        <Card
          title="Rating por noticiario"
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

export default Noticieros;

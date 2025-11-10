// src/data/monitorData.ts

export interface Tema {
  label: string;
  value: number;
}

export interface VocesNoticieros {
  oficiales: number;
  externas: number;
  mujeres: number;
  hombres: number;
}

export interface Canal {
  nombre: string;
  minutos: number;
  policial: number;
  politica: number;
  internacional: number;
  deportes: number;
  accidentes: number;
}

export interface Rating {
  programa: string;
  rating: number;
}

export interface Alcance {
  programa: string;
  alcance: number;
}

export interface VocesMatinales {
  fuentesExternas: number;
  hombresFuentes: number;
  mujeresFuentes: number;
}

export interface ProgramaFuentes {
  programa: string;
  fuentes: number;
}

export interface NoticierosData {
  tiempoTotalTemas: number;
  tiempoTotalVoces: number;
  temas: Tema[];
  voces: VocesNoticieros;
  canales: Canal[];
  rating: Rating[];
  alcance: Alcance[];
}

export interface MatinalesData {
  tiempoTotalTemas: number;
  temas: Tema[];
  voces: VocesMatinales;
  programasFuentes: ProgramaFuentes[];
  rating: Rating[];
  alcance: Alcance[];
}

export interface MonitorData {
  resumen: {
    periodo: string;
    fuente: string;
    jornada: string;
  };
  noticieros: NoticierosData;
  matinales: MatinalesData;
}

export const DATA: MonitorData = {
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

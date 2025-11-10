import React from "react";

export function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 md:p-5 shadow-md flex flex-col gap-3">
      <div>
        <h2 className="text-slate-50 font-semibold text-lg md:text-xl tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-slate-400 text-xs md:text-sm mt-1">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
}

export function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300 bg-slate-900/60">
      {label}
    </span>
  );
}

export function BarRow({
  label,
  value,
  max,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const width = (value / max) * 100;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between text-xs text-slate-300">
        <span className="truncate mr-2">{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-sky-500"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function HorizontalNumberRow({
  label,
  value,
  unit,
}: {
  label: string;
  value: number | string;
  unit?: string;
}) {
  return (
    <div className="flex items-baseline justify-between text-sm text-slate-200">
      <span className="text-slate-400 text-xs md:text-sm">{label}</span>
      <span className="font-semibold text-base md:text-lg">
        {value}
        {unit && <span className="text-slate-400 text-xs ml-1">{unit}</span>}
      </span>
    </div>
  );
}

export function SimpleTable({
  columns,
  rows,
}: {
  columns: { key: string; label: string; align?: "left" | "right" }[];
  rows: Record<string, React.ReactNode>[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-xs md:text-sm text-slate-100">
        <thead>
          <tr className="border-b border-slate-800">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`py-2 pr-3 font-normal text-slate-400 ${
                  col.align === "right" ? "text-right" : "text-left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-900/60">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-2 pr-3 ${
                    col.align === "right" ? "text-right" : "text-left"
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

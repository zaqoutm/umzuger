"use client";
import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const von = searchParams.get("von");
  const nach = searchParams.get("nach");

  // steps data
  // forms

  return (
    <div className={styles.page}>
      {/* 
        forms:
        - Auszugsort [Auszugsort, Auszug aus, Aufzug & Laufweg, Zusatzleistungen für Ihren Auszug ]
        - Einzugsort [Einzugsort, Einzug in, Aufzug & Laufweg, Zusatzleistungen für Ihren Einzug]
        Einreichen step
      */}
      {von && nach ? <div className='alert-info'>Ales gut!</div> : ""}

      <div className={styles.header}>
        <p>{von}</p>
        <p>-</p>
        <p>{nach}</p>
      </div>

      <div className={styles.steps}>
        steps here
        {/* 1st Step, Auszugsort */}
      </div>
    </div>
  );
}

import { COMPANY_HISTORY_STATEMENT } from "@/lib/project-content";

export function ProjectTeam({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "project-team" : "chart-card project-team"}>
      <h3>Zar Commerce FZE</h3>
      <p>Zar Commerce FZE is identified by the project owner as a member/supporting entity of the Zar Air project team. {COMPANY_HISTORY_STATEMENT}</p>
      <dl className="token-details">
        <div><dt>Formation Authority</dt><dd>Ras Al Khaimah Free Trade Zone Authority</dd></div>
        <div><dt>Registration</dt><dd>RAKFTZA-FZE-0245</dd></div>
        <div><dt>Formation Date</dt><dd>16 June 2004</dd></div>
      </dl>
      <p className="token-information-note">These owner-provided formation details describe company incorporation. They do not establish permission to provide crypto, financial or airline services.</p>
    </div>
  );
}

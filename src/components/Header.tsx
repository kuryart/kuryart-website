import { ReactNode } from "react";

// export function Header({
//   title,
//   children,
// }: {
//   title: string;
//   children: ReactNode;
// }) {
export function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-3xl icon--custom-icons icon--custom-icons--kuryart" />
        <a className="btn btn-ghost normal-case text-xl">KuryArt</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="active:bg-base-100">
            <a>Dev</a>
          </li>
          <li>
            <a>Música</a>
          </li>
          <li>
            <details>
              <summary>Literatura</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Contos</a>
                </li>
                <li>
                  <a>Crônicas</a>
                </li>
                <li>
                  <a>Poesias</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Game</a>
          </li>
          <li>
            <a>Arte Visual</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

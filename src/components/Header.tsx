import { getCurrentLanguage, t } from "../locale/localization";

export function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center">
        <a
          href={"/" + getCurrentLanguage()}
          className="text-3xl icon--custom-icons icon--custom-icons--kuryart"
        />
        <a
          href={"/" + getCurrentLanguage()}
          className="btn btn-ghost normal-case text-xl"
        >
          KuryArt
        </a>
      </div>

      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://kuryart-portfolio.fly.dev/" target="_blank">
              Dev
            </a>
          </li>
          <li>
            <a href={"/" + getCurrentLanguage() + "/music"}>Música</a>
          </li>
          <li>
            <details>
              <summary className="hover:cursor-pointer">Literatura</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                {/* <li>
                  <a>Contos</a>
                </li> */}
                <li>
                  <a href="https://ofuscapreto.wordpress.com/" target="_blank">
                    Crônicas
                  </a>
                </li>
                <li>
                  <a href="https://poesiasdocu.wordpress.com/" target="_blank">
                    Poesias
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href={"/" + getCurrentLanguage() + "/game"}>Game</a>
          </li>
          <li>
            <a href={"/" + getCurrentLanguage() + "/visual-art"}>Arte Visual</a>
          </li>
        </ul>
      </div>

      <div className="flex-col md:hidden relative">
        <button
          _="install Menu"
          className="btn btn-square btn-ghost document"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <ul
          className="hidden menu bg-base-200 rounded-box overflow-hidden absolute top-full right-0 z-10"
        >
          <li>
            <a href="https://kuryart-portfolio.fly.dev/" target="_blank">
              Dev
            </a>
          </li>
          <li>
            <a href="/music">Música</a>
          </li>
          <li>
            <details>
              <summary className="hover:cursor-pointer">Literatura</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                {/* <li>
                  <a>Contos</a>
                </li> */}
                <li>
                  <a href="https://ofuscapreto.wordpress.com/" target="_blank">
                    Crônicas
                  </a>
                </li>
                <li>
                  <a href="https://poesiasdocu.wordpress.com/" target="_blank">
                    Poesias
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/game">Game</a>
          </li>
          <li>
            <a href="/visual-art">Arte Visual</a>
          </li>
        </ul>
      </div>

      <div className="flex-col relative">
        <button
          _="install Menu"
          className="btn btn-square btn-ghost document"
        >
          🌐
        </button>
        <ul
          id="lang-menu-items"
          className="hidden menu bg-base-200 rounded-box overflow-hidden absolute top-full right-0 z-10"
        >
          <li
            hx-post="/change-lang"
            hx-swap="none"
            hx-include="find input[name='lang']"
            hx-trigger="click"
          >
            <a>
              🇺🇸 <span className="ml-2">EN</span>
            </a>
            <input type="hidden" name="lang" value="en" />
          </li>
          <li
            hx-post="/change-lang"
            hx-swap="none"
            hx-include="find input[name='lang']"
            hx-trigger="click"
          >
            <a>
              🇪🇸 <span className="ml-2">ES</span>
            </a>
            <input type="hidden" name="lang" value="es" />
          </li>
          <li
            hx-post="/change-lang"
            hx-swap="none"
            hx-include="find input[name='lang']"
            hx-trigger="click"
          >
            <a>
              🇧🇷 <span className="ml-2">PT-BR</span>
            </a>
            <input type="hidden" name="lang" value="pt_br" />
          </li>
        </ul>
      </div>
    </div>
  );
}

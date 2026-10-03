import logo from "../../assets/img/kuryart-icon-light.png";

export default function Header() {
  return (
    <div class="navbar bg-base-100 flex-row justify-between">
      <a href="/" class="flex flex-row items-center">
        <img src={logo.src} alt="KuryArt's logo" class="max-w-10 ml-4" />
        <h1 class="text-lg ml-4">KuryArt</h1>
      </a>
      <ul class="menu menu-horizontal px-1">
        <li>
          <a href="/softwares">Softwares</a>
        </li>
        <li>
          <a href="/games">Games</a>
        </li>
        <li>
          <a href="https://linktr.ee/kuryart">Social</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <details closed>
            <summary>🇺🇸</summary>
            <ul>
              <li>
                <a>🇺🇸</a>
              </li>
              <li>
                <a>🇧🇷</a>
              </li>
              <li>
                <a>🇪🇸</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

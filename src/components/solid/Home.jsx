import logo from "../../assets/img/kuryart-icon-light.png";

export default function Home() {
  return (
    <>
      <div class="hero bg-base-100 min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <img
              src={logo.src}
              alt="KuryArt's logo"
              class="mx-auto max-w-50 mb-8"
            />
            <h1 class="text-mauve-100 text-5xl font-bold">KuryArt</h1>
            <p class="py-6">
              KuryArt make softwares in general like games, sites and apps.
            </p>
            <button class="bg-blue-100 text-base-100 btn btn-primary">
              Meet KuryArt
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

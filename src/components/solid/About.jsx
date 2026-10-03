import logo from "../../assets/img/kuryart-icon-light.png";

export default function About() {
  return (
    <>
      <div class="flex flex-col items-center mt-50">
        <a href="#" class="hover-3d my-12 mx-2 cursor-pointer">
          <div class="card w-96 bg-black text-white bg-[radial-gradient(circle_at_bottom_left,#ffffff04_35%,transparent_36%),radial-gradient(circle_at_top_right,#ffffff04_35%,transparent_36%)] bg-size-[4.95em_4.95em]">
            <div class="card-body">
              <div class="flex justify-between mb-10">
                <div class="font-bold">KuryArt</div>
                {/* <div class="text-5xl opacity-10">❁</div> */}
                <div>
                  <img src={logo.src} alt="KuryArt's logo" class="max-w-10" />
                </div>
              </div>
              <div class="text-lg mb-4 opacity-40">
                KuryArt make softwares in general like games, sites and apps.
              </div>
              <div class="flex justify-between">
                <div>
                  <div>Brazil</div>
                </div>
                <div>
                  <div class="text-xs opacity-20">Since</div>
                  <div>2022</div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </a>

        <h1 class="mx-150 mt-4 mb-4">
          KuryArt is a brazilian company with the mission of making softwares
          like games, sites and apps. Founded in 2022, it worked in B2B and B2C,
          having worked for small companies and big companies like XP Inc.
        </h1>
      </div>
    </>
  );
}

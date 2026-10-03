import ob_ss_01 from "../../assets/img/ob_ss_01.png";
import ob_ss_02 from "../../assets/img/ob_ss_02.png";
import ob_ss_03 from "../../assets/img/ob_ss_03.png";
import ob_ss_04 from "../../assets/img/ob_ss_04.png";
import ob_ss_05 from "../../assets/img/ob_ss_05.png";
import ob_logo from "../../assets/img/ob_logo.png";
import social from "../../assets/img/user-group-solid-full.svg";

function ob_button_click() {}

export default function Games() {
  return (
    <>
      <div class="bg-base-100 flex flex-col items-center">
        <div>
          <img src={ob_logo.src} alt="Outsider Bob logo" class="w-50 mt-10" />
        </div>
        <p class="text-text-100 mx-150 mt-4 mb-4">
          Meet Outsider Bob, a programmer who used to dream about being a game
          developer, but ended up as a regular worker at a mediocre corporation.
          Out of nothing he is swallowed by a portal to a world called Haledor,
          where logic is not a mundane thing, a lair of strange creatures
          commanded by a being called God King. Explore the world and solve
          puzzles to help Bob get back to home - his wife is waiting as he needs
          to make the dinner. A comic and lighthearted game about chasing your
          dreams that parodies the video game universe.
        </p>
        <div class="carousel w-200">
          <div id="slide1" class="carousel-item relative w-full">
            <img
              alt="Outsider Bob screenshot"
              src={ob_ss_01.src}
              class="w-full rounded-2xl"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" class="carousel-item relative w-full">
            <img
              alt="Outsider Bob screenshot"
              src={ob_ss_02.src}
              class="w-full"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" class="carousel-item relative w-full">
            <img
              alt="Outsider Bob screenshot"
              src={ob_ss_03.src}
              class="w-full rounded-2xl"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" class="carousel-item relative w-full">
            <img
              alt="Outsider Bob screenshot"
              src={ob_ss_04.src}
              class="w-full"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" class="carousel-item relative w-full">
            <img
              alt="Outsider Bob screenshot"
              src={ob_ss_05.src}
              class="w-full"
            />
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <button class="bg-blue-100 text-base-100 btn btn-primary mt-4">
          <img
            src={social.src}
            alt="Social networks icon"
            class="w-5 fill-base-100"
          />
          Social Networks
        </button>
      </div>
    </>
  );
}

import LandingNavBar from "../components/landingNavBar";
import LandingPageContainer from "../components/landingPageContainer";

export default function Home() {
  return (
    <LandingPageContainer>
      <LandingNavBar />
      <main>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Learn Devanāgarī and join {">"}900M readers!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We know how hard learning a new script can be - let us help.{" "}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="learn-more"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </LandingPageContainer>
  );
}

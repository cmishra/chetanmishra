import LandingNavBar from "../components/landingNavBar";
import LandingPageContainer from "../components/landingPageContainer";

const people = [
  {
    name: "Chetan Mishra",
    role: "Developer",
    imageUrl: "chetan-prof-picture.png",
    bio: "Serial startup addict. Currently exploring opportunities in Healthcare.",
    linkedinUrl: "https://www.linkedin.com/in/chemishra",
  },
  // More people...
];

export default function Example() {
  return (
    <LandingPageContainer>
      <LandingNavBar />
      <main>
        <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-56">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <p className="text-xl text-gray-500">
                Made this hobbiest project mainly for myself and a friend. Grew
                up speaking Hindi but forgot how to read it sometime in
                elementary school. Hope it's helpful!
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0"
              >
                {people.map((person) => (
                  <li key={person.name} className="sm:py-8">
                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                      <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                        <img
                          className="rounded-lg object-cover shadow-lg"
                          src={person.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <div className="space-y-4">
                          <div className="space-y-1 text-lg font-medium leading-6">
                            <h3>{person.name}</h3>
                            <p className="text-indigo-600">{person.role}</p>
                          </div>
                          <div className="text-lg">
                            <p className="text-gray-500">{person.bio}</p>
                          </div>
                          <ul role="list" className="flex space-x-5">
                            <li>
                              <a
                                href={person.linkedinUrl}
                                className="text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </LandingPageContainer>
  );
}

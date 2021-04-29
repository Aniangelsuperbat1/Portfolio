import React, { useState, useEffect } from "react";
import sanityClient from "../../connect.js";

const Projects = () => {
  const [project, setproject] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "projects"] {
            title,
            date,
            image,
            place,
            description,
            projectType,
            link,
            tags,
        }`
      )
      .then((data) => setproject(data))
      .catch(console.err);
  }, []);

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {project &&
            project.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-grey-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-grey-500 text-xs space-x-4">
                  <p className="my-6 text-lg text-grey-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener norefferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View this Project{" "}
                    <span role="img" aria-label="right pointer">
                      👍
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Projects;

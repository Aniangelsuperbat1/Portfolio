import React, { useState, useEffect } from "react";
import sanityClient from "../../connect.js";
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"

const About = () => {
  const [about, setabout] = useState(null);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"] {
            name, bio, "authorImage": image.asset->url
        }`
      )
      .then((data) => setabout(data[0]))
      .catch(console.err);
  }, []);

  if(!about){
      return <div>Loading...</div>
  }

  return (
    <main className="relative">
      <img src="" alt="" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(about.authorImage).url()}
            alt=""
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={about.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="sursive text-6xl text-green-300 mb-4">
              Hello. I am{" "}
              <span className="text-green-100">{about.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-green">
              <BlockContent
                blocks={about.bio}
                projectId="9l1mb7ik"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

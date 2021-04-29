import React, { useState, useEffect } from "react";
import sanityClient from "../../connect.js";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SingleBlogPost = () => {
  const [single, setsingle] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        _id,
        slug,
        mainImage{
            asset->{
                _id,
                url
            }
        },
        body,
        "name": author->name,
        "authorImage": author->image
    }`
      )
      .then((data) => setsingle(data[0]))
      .catch(console.err);
  }, [slug]);

    if (!single) {
      return <div>loading...</div>;
    }

  return (
    <main className="bg-grey-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h1 className="cuirsive text-3xl lg:text-6xl mb4">
                {single.title}
              </h1>
              <div className="flex justify-center text-grey-800">
                <img
                  src={urlFor(single.authorImage).url()}
                  alt={single.name}
                  className="w-10 h-10 rounded-full"
                />
                <p classNazme="cursive flex items-center pl-2 text-2xl">
                  {single.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={single.mainImage.asset.url}
            alt={single.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose-xl max-w-full">
          <BlockContent
            blocks={single.body}
            projectId="9l1mb7ik"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SingleBlogPost;

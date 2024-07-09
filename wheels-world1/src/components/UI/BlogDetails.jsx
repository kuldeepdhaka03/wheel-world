import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogData from "../../assets/Data/BlogData.js";
import commentImg from "../../assets/1.jpg";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  if (!blog) {
    return <div className="text-center text-gray-500">Blog not found</div>;
  }

  return (
    <div title={blog.title}>
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={blog.imgUrl} alt="" className="w-full rounded-lg" />
                <h2 className="text-3xl font-bold mt-4">{blog.title}</h2>

                <div className="flex items-center gap-4 my-4 text-gray-500">
                  <span className="flex items-center gap-2">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>

                  <span className="flex items-center gap-2">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="text-gray-700 mb-4">{blog.description}</p>
                <blockquote className="border-l-4 border-blue-500 pl-4 text-lg italic text-gray-700 mb-4">
                  {blog.quote}
                </blockquote>
                <p className="text-gray-700">{blog.description}</p>
              </div>

              <div className="mt-8">
                <h4 className="text-2xl font-bold mb-5">3 Comments</h4>

                <div className="flex gap-4 mb-6">
                  <img src={commentImg} alt="" className="w-12 h-12 rounded-full" />
                  <div>
                    <h6 className="font-bold">David Visa</h6>
                    <p className="text-gray-500 text-sm mb-2">14 July, 2022</p>
                    <p className="text-gray-700 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nobis totam eius laborum molestias itaque minima distinctio, quae velit tempore!
                    </p>
                    <button className="text-blue-500 hover:underline flex items-center gap-1">
                      <i className="ri-reply-line"></i> Replay
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-2xl font-bold">Leave a Comment</h4>
                  <p className="text-gray-500 mb-4">You must sign-in to make or comment a post</p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <textarea
                      rows="5"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Comment..."
                    ></textarea>

                    <button
                      type="submit"
                      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                      Post a Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h5 className="text-xl font-bold mb-4">Recent Posts</h5>
                {blogData.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 mb-4">
                    <img src={item.imgUrl} alt="" className="w-16 h-16 rounded-lg" />
                    <h6>
                      <Link to={`/blogs/${item.title}`} className="text-blue-500 hover:underline">
                        {item.title}
                      </Link>
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;

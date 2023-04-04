import BlogItem from "./BlogItem";

export default function BlogCatalog({
    blogs,
}) {


    return (

        <>
            {/* <!-- Breadcrumb Section Begin --> */}
            <section className="breadcrumb-blog set-bg" data-setbg="img/breadcrumb-bg.jpg"  >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Our Blog</h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            {/* <!-- Blog Section Begin --> */}
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        {blogs && blogs.map(blog =>   
                            <BlogItem key={blog._id} {...blog} />
                        )}
                    </div>
                    {blogs?.length === 0 && <h1>No blog posts yet</h1>}
                </div>
            </section>
            {/* <!-- Blog Section End --> */}
        </>
    );
}
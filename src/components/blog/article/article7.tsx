export const Article7 = () => {
	return (
		<article itemID="#" itemScope itemType="http://schema.org/BlogPosting">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div className="order-2 h-64 md:order-1 md:h-full">
            <img src="https://kutty.netlify.app/brand/og.png" className="object-cover w-full h-full bg-center" alt="Kutty" />
          </div>
          <div className="order-1 w-full px-4 py-12 mx-auto text-left md:w-3/4 md:py-48 md:order-2 md:px-0">
            <p className="mb-3 text-gray-500">
              <time itemProp="datePublished dateModified" dateTime="2010-08-07 11:11:03-0400">Jan 02 2021</time>
            </p>
            <h1 className="mb-5 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
              Rise of Tailwind - A Utility First CSS Framework
            </h1>
            <a className="flex items-center text-gray-700" href="#">
              <div className="avatar"><img src="https://kutty.netlify.app/placeholder.jpg" alt="Photo of Praveen Juge" /></div>
              <div className="ml-2">
                <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
                <p className="text-sm text-gray-500">Swell Guy</p>
              </div>
            </a>
          </div>
        </div>
        <div className="px-4 py-20 mx-auto prose">
          <p>
            What if there is an easy way to achieve responsive UI without using any UI kit? Can we create new and fresh designs for every project with a CSS framework? Enter Tailwind CSS, will this be the
            perfect CSS framework, well let’s find out.
          </p>
          <p>Tailwind is a utility-first CSS framework, the keyword being ‘utility’. It is basically a set of classes that you can use in your HTML.</p>
          <pre>.bg-purple-700 {"{"}{"\n"}{"  "}background-color: #6b46c1;{"\n"}{"}"}{"\n"}{"\n"}.px-4 {"{"}{"\n"}{"  "}padding-top: 1rem;{"\n"}{"  "}padding-bottom: 1rem;{"\n"}{"}"}</pre>
          <p>
            Therefore, we don’t have to write any custom CSS to get this button. This can be heavily extended to build whole web applications without the need for any other styles apart from a tailwind.
          </p>
          <p>...</p>
        </div>
      </article>
	)
}
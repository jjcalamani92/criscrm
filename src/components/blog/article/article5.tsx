export const Article5 = () => {
	return (
		<article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
        <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
          <img src="https://kutty.netlify.app//brand/og.png" className="object-cover w-full h-64 bg-center rounded-lg" alt="Kutty" />
          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">Development</p>
          <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
            Rise of Tailwind - A Utility First CSS Framework
          </h1>
          <div className="flex mb-6 space-x-2">
            <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">CSS</a>
            <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">Tailwind</a>
            <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">AlpineJS</a>
          </div>
          <a className="flex items-center text-gray-700" href="#">
            <div className="avatar"><img src="https://kutty.netlify.app//placeholder.jpg" alt="Photo of Praveen Juge" /></div>
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
              <p className="text-sm text-gray-500">Jan 02 2021</p>
            </div>
          </a>
        </div>
        <div className="w-full mx-auto prose md:w-3/4 lg:w-1/2">
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
export const Article4 = () => {
	return (
		<article className="px-4 py-24 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
			<div className="w-full mx-auto mb-12 text-center md:w-2/3">
				<p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Development</p>
				<h1 className="mb-3 text-4xl font-bold text-gray-900 md:leading-tight md:text-5xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
					Rise of Tailwind - A Utility First CSS Framework
				</h1>
				<p className="text-gray-700">
					Written by
					<span className="byline author vcard" itemProp="author" itemType="http://schema.org/Person">
						<a href="#" target="_blank" itemProp="url" rel="author noopener noreferrer" className="text-primary hover:text-primary-dark"><span itemProp="name">Praveen Juge</span></a>
					</span>
					on <time itemProp="datePublished dateModified" dateTime="2010-08-07 11:11:03-0400" >Jan 02 2021</time>
				</p>
			</div>
			<div className="mx-auto prose">
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
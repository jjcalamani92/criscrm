export const Article2 = () => {
  return (
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 bg-gray-100 text-gray-900">
	<div className="w-full mx-auto space-y-4">
		<h1 className="text-5xl font-bold leading-none">Interdum et malesuada fames ac ante ipsum primis in faucibus?</h1>
		<div className="flex flex-wrap space-x-2 text-sm text-gray-600">
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Angular</a>
		</div>
		<p className="text-sm text-gray-600">by
			<a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline text-violet-600">
				<span>Leroy Jenkins</span>
			</a>on
			<time >Feb 12th 2021</time>
		</p>
	</div>
	<div className="text-gray-800">
		<p>Insert the actual text content here...</p>
	</div>
</article>
  )
}
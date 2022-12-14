import Markdown from 'markdown-to-jsx';

export const markdownComponent = (markdown: () => JSX.Element) => {
    
  return (
    <div className="my-2 bg-white">

      <Markdown 
          options={{
            overrides: {
              Component: {
                component: markdown,
              },
            },
          }}
          >
          {`<Component/>`}
      </Markdown>
        </div>
  );
};
/* eslint-disable react/no-children-prop */
import {createElement, FC, Fragment, useEffect, useState} from 'react'
// import ReactMarkdown from 'react-markdown';
// import SyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Markdown, { compiler } from 'markdown-to-jsx';
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { FormValues } from '../../grid/articleEdit';
import { PathString } from 'react-hook-form';
import Image from 'next/image';
// const ReactMarkdown  = dynamic(() => import('react-markdown') as any, { ssr: false }) //<- set SSr to false
const ReactMarkdown = dynamic<any>(() => import("react-markdown") as any, { ssr: false });
const SyntaxHighlighter = dynamic<any>(() => import("react-syntax-highlighter") as any, { ssr: false });
// const rehypeRaw = dynamic(() => import("rehype-raw") as any, { ssr: false });
// const remarkGfm = dynamic(() => import("remark-gfm") as any, { ssr: false });


export interface Article {
  code: PathString
  values: FormValues
}



const ArticleEdit5: FC<Article> = ({ code, values }) => {
  const {data:session } = useSession()
  
  
  return (
    <article className="px-4 mx-auto max-w-7xl" itemID="#" itemScope itemType="http://schema.org/BlogPosting">
      <div className="w-full mx-auto mb-12 text-left">
        <Image src={values.src} className="bg-center rounded-lg"
        width={600} height={200} objectFit="cover" alt="Kutty" />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">{values.meta}</p>
        <h1 className="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl" itemProp="headline" title="Rise of Tailwind - A Utility First CSS Framework">
          {values.title}
        </h1>
        <div className="flex mb-6 space-x-2">
          {
            values.tags.split(",").map((data, i) => (
              <a key={i} className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#">{data}</a>
            ))
          }
          <a className="text-gray-900 bg-gray-100 badge hover:bg-gray-200" />
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar"><Image src={"https://res.cloudinary.com/dqsbh2kn0/image/upload/v1662945416/q8abbnk6ldbdbclpbslk.jpg"} objectFit='cover' width={45} height={45} alt="Photo of Praveen Juge" /></div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">{session?.user.name}</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>
      <div className="w-full mx-auto prose   prose-gray">
        {/* <div> */}
          {/* <Markdown options={{ disableParsingRawHTML: true }}>
            {code}
          </Markdown> */}
          {/* {
            useProcessor(
              code
            )
          } */}



            <ReactMarkdown
              remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
              children={`${code}`}
              rehypePlugins={[rehypeRaw]}
              // rehypePlugins={[rehypeHighlight]}
              components={{
                // u({node, ...props}) { return <u style={{textDecoration: 'underline'}} {...props} />} ,
                code({ node, inline, className, children, ...props }:any) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <>

                      <SyntaxHighlighter
                        // unwrapDisallowed={true}

                        children={String(children).replace(/\n$/, '')}
                        style={atomOneDark as any}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    </>
                  ) : (


                    <code className={className} {...props}>
                      <>
                        {children}
                      </>
                    </code>
                  )
                }
              }}
            />
          
        
      </div>
    </article>
  )
}

export default ArticleEdit5
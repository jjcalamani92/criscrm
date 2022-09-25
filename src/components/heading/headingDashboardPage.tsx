/* eslint-disable react/no-children-prop */
/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useState } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { classNames, getQuery } from '../../../utils/function'
import { FileAddOutlined, AppstoreAddOutlined, BlockOutlined, PlusOutlined, CheckCircleOutlined, GlobalOutlined } from '@ant-design/icons'
import { Modal } from '../modal'
import { SiteForm } from '../form/siteForm'
import { ProductForm } from '../form/productForm'
import { PageForm } from '../form/pageForm'
import { Page } from '../../../interfaces'
import { useRouter } from 'next/router'
import { typeProduct } from '../../../utils/const'
import { ArticleForm } from '../form/articleForm'
import { Button } from '../../polymorphic/button'
import useSite from '../../hooks/sites/useSite'

interface HeadingDashboardPage {
  title: string
  page?: Page
}
export const HeadingDashboardPage: FC<HeadingDashboardPage> = ({ title, page }) => {
  const { asPath } = useRouter()

  const query = getQuery(asPath)
  const { data: site } = useSite(query[2])
  
  const [openMCD, setOpenMCD] = useState(false)
  const [children, setChildren] = useState<any>()




  const editHandle = (type: string) => {
    setOpenMCD(true)
    if (page && query.length > 3) {
      // setOpenMCD(true)
      setChildren(<PageForm setOpenMCD={setOpenMCD} uid={page!._id} page={page} type={page?.data.type} />)

    }
  }

  const addHandle = (type: string) => {
    setOpenMCD(true)
    if (typeProduct.map(data => data.value).includes(page?.data.type!)) {
      setChildren(<ProductForm setOpenMCD={setOpenMCD} uid={page!._id} type={page?.data.type!} />)
    } else if (type === 'blog') {
      setChildren(<ArticleForm setOpenMCD={setOpenMCD} uid={page!._id} />)

    } else {
      setChildren(<PageForm setOpenMCD={setOpenMCD} uid={page!._id} type={page?.data.type!} />)
    }


  }
  return (
    <div className="lg:flex lg:items-center lg:justify-between py-6 sm:py-10">
      <div className="min-w-0 flex-1">
        <div className='flex'>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}

          </h2>
          {
            query.length > 2 &&
            <span className="hidden sm:block ml-3">

              <Button className="btn-default" onClick={() => editHandle('blog')}>
                <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                Edit
              </Button>
            </span>
          }
        </div>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <GlobalOutlined className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400" style={{ fontSize: '20px' }}/>
            {site?.url}
          </div>
          
          
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
          {
            page?.data.type === "page" &&
            <span className="sm:ml-3">
              <Button className="btn-primary" onClick={() => addHandle('page')}>
                <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }} />
                Add Page
              </Button>
              
            </span>
          }
          {
            page?.data.type === "page-blank" &&
            <span className="sm:ml-3">
              <Button className="btn-primary" onClick={() => addHandle('component')}>
                <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }} />
                Add Component
              </Button>
              
            </span>
          }
          {
            page?.data.type === "category" &&
            <span className="sm:ml-3">
              <Button className="btn-primary" onClick={() => addHandle('category')}>
                <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }} />
                Add Category
              </Button>
              
            </span>
          }

          {
            typeProduct.map(data => data.value).includes(page?.data.type!)
            &&
            <span className="sm:ml-3 hidden sm:block">
              <Button className="btn-primary" onClick={() => addHandle('product')}>
                <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }} />
                Add Product
              </Button>
              
            </span>
          }



  
        {
          page?.data.type === "article" &&
          <span className="sm:ml-3">
            <Button className="btn-primary" onClick={() => addHandle('blog')}>
            <PlusOutlined className='mr-2' style={{ fontSize: '20px' }} />
            Add Article
          </Button>
          </span>
        }
        {
          query[3] === "$articles" &&
          <span className="sm:ml-3">
            <Button className="btn-primary" onClick={() => addHandle('article')}>
            <CheckCircleOutlined className='mr-2' style={{ fontSize: '20px' }} />
            
            Publish
          </Button>
          </span>
        }

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            More
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <Modal openMCD={openMCD} setOpenMCD={setOpenMCD} children={children} />
    </div>
  )
}

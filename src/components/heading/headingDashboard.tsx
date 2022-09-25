/* eslint-disable react/no-children-prop */
/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useState } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { classNames, getQuery } from '../../../utils/function'
import { FileAddOutlined, AppstoreAddOutlined, BlockOutlined, PlusOutlined } from '@ant-design/icons'
import { Modal } from '../modal'
import { User } from '../form/user'
import { User1 } from '../form/user1'
import { User2 } from '../form/user2'
import { SiteForm } from '../form/siteForm'
import { ProductForm } from '../form/productForm'
import { PageForm } from '../form/pageForm'
import { Page, Site } from '../../../interfaces'
import { useRouter } from 'next/router'
import { Text } from '../../polymorphic/text'
import { Button } from '../../polymorphic/button'

interface HeadingDashboard {
  title: string
  uid?: string
  page?: Page
  site?: Site
}
export const HeadingDashboard: FC<HeadingDashboard> = ({ title, uid, page, site }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const [openMCD, setOpenMCD] = useState(false)
  const [children, setChildren] = useState<any>()
  // console.log(page);




  const editHandle = (type: string) => {
    if (query.length === 3) {
      setOpenMCD(true)
      setChildren(<SiteForm setOpenMCD={setOpenMCD} site={page as any} />)
    } else if (page && query.length > 3) {
      setOpenMCD(true)
      setChildren(<PageForm setOpenMCD={setOpenMCD} uid={uid!} page={page} type={page?.data.type} />)

    }
  }
  const addHandle = (type: string) => {
    if (type === 'site') {
      setOpenMCD(true)
      setChildren(<SiteForm setOpenMCD={setOpenMCD} />)
    }
    else if (type === 'page') {
      setOpenMCD(true)
      setChildren(<PageForm setOpenMCD={setOpenMCD} uid={uid!} type={page?.data.type} />)
    }
    else if (type === 'product') {
      setOpenMCD(true)
      // setChildren(<ProductForm />)
    }
    else if (type === 'article') {
      console.log('article add');

      // setOpenMCD(true)
      // setChildren(<ProductForm />)
    }
  }
  return (
    <div className="lg:flex lg:items-center lg:justify-between py-6 sm:py-10">
      <div className="min-w-0 flex-1">
        <div className='flex'>
          <Text as="h2" className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{title}</Text>
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
            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Full-time
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Remote
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            $120k &ndash; $140k
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Closing on January 9, 2020
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">



        {
          query.length > 2 &&
          <>
            {
              query.length > 3 &&
              <>

                {
                  page?.data.type === 'blog' &&
                  <span className="sm:ml-3 hidden sm:block">
                    <Button className="btn-primary" onClick={() => addHandle('blog')}>
                      <BlockOutlined className='mr-2' style={{ fontSize: '20px' }} />
                      Add Blog
                    </Button>

                  </span>}
                <span className="sm:ml-3 hidden sm:block">
                  <Button className="btn-primary" onClick={() => addHandle('product')}>
                    <AppstoreAddOutlined className='mr-2' style={{ fontSize: '20px' }} />Add Product
                  </Button>

                </span>
              </>
            }
            <span className="sm:ml-3">
              <Button className="btn-primary" onClick={() => addHandle('page')}>
                <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }} />
                Add Page
              </Button>

            </span>
          </>
        }
        {
          query.length < 3 &&
          <span className="sm:ml-3 hidden sm:block">
            <Button className="btn-primary" onClick={() => addHandle('site')}>
              <PlusOutlined className='mr-2' style={{ fontSize: '20px' }} />
              Add Site
            </Button>
          </span>
        }

        <span className="sm:ml-3">
          <Button className="btn-primary" onClick={() => addHandle('article')}>
            <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Publish
          </Button>
        </span>

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

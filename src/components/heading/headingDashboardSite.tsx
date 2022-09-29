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
import { useRouter } from 'next/router'
import { Page } from '../../../interfaces/page/page.interface'
import { Site } from '../../../interfaces/site/site.interface'

interface HeadingDashboardSite {
  title: string
  uid?: string
  page?: Page
  site?: Site
}
export const HeadingDashboardSite: FC<HeadingDashboardSite> = ({ title, uid, page, site }) => {
  const { asPath } = useRouter()
  const query = getQuery(asPath)
  const [openMCD, setOpenMCD] = useState(false)
  const [children, setChildren] = useState<any>()
  // console.log(site);

  const addEdit = (type: string) => {
    if (query.length === 3) {
      setOpenMCD(true)
      setChildren(<SiteForm setOpenMCD={setOpenMCD} site={site as Site} />)
    }
  }
  const addHandle = (type: string) => {
    if (query.length === 2) {
      setOpenMCD(true)
      setChildren(<SiteForm setOpenMCD={setOpenMCD} />)
    } else {
      setOpenMCD(true)
      setChildren(<PageForm setOpenMCD={setOpenMCD} uid={uid!} type={site?.data.type} />)
    }

  }
  return (
    <div className="flex lg:items-center lg:justify-between py-6 sm:py-10">
      <div className="min-w-0 flex-1">
        <div className='flex'>
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {title}
          </h2>
          {
            query.length > 2 &&
            <span className="block ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => addEdit('blog')}
              >
                <PencilIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                <p className='ml-2 hidden lg:block'>
                  Edit
                </p>
              </button>
            </span>
          }
        </div>
       
      </div>
      <div className=" lg:mt-0 lg:ml-4">
        {
          query.length > 2 &&
          <>

            <span className="hidden lg:block sm:ml-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => addHandle('page')}
              >
                <FileAddOutlined className='mr-2' style={{ fontSize: '20px' }} />
                Add Page
              </button>
            </span>
          </>
        }
        {
          query.length < 3 &&
          <span className="hidden sm:block sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => addHandle('site')}
            >
              <PlusOutlined className='mr-2' style={{ fontSize: '20px' }} />
              Add Site
            </button>
          </span>
        }
        

        {/* Dropdown */}
        <Menu as="div" className="relative  ml-3 sm:hidden">
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
            <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-40  origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {
                query.length < 3 &&
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => addHandle('site')}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Add Site
                    </div>
                  )}
                </Menu.Item>
              }
              {
                query.length > 2 &&
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => addHandle('page')}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      Add Page
                    </div>
                  )}
                </Menu.Item>
              }
              
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <Modal openMCD={openMCD} setOpenMCD={setOpenMCD} children={children} />
    </div>
  )
}

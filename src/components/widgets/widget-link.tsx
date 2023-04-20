import type { FC } from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Logo from '@components/ui/logo'

interface Props {
  className?: string
  data: {
    widgetTitle?: string
    lists: {
      id: string
      path?: string
      title: string
      icon?: any
    }[]
    logo?: any
    description?: string
    isCompanyIntroduction?: boolean
  }
  variant?: 'contemporary'
}

const WidgetLink: FC<Props> = ({ className, data }) => {
  const { widgetTitle, lists } = data
  const { logo, description } = data
  const { t } = useTranslation('footer')

  return (
    <div
      className={`${className} ${data?.isCompanyIntroduction && 'col-span-2'}`}
    >
      {!data?.isCompanyIntroduction ? (
        <>
         
          <div className='text-xs lg:text-sm text-body space-y-3 lg:space-y-3.5 flex flex-row '>
            {lists.map((list) => (
              <div 
                key={`widget-list--key${list.id}`}
                className='w-10 h-10'
              >
                
                <Link href={list.path ? list.path : '#!'}>
                {list.icon && (
                  <span className='me-3 relative top-0.5 lg:top-1 text-sm lg:text-base w-10 h-10'>
                    {list.icon}
                  </span>
                )}
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className='me-4 flex flex-col space-y-7 lg:space-y-7.5'>
          <Logo className='' />
          <p className='text-sm font-normal text-[#1D1E1F] leading-6 max-w-[334px] '>
            {description}
          </p>
          <ul className='text-xs lg:text-sm text-body flex items-center space-x-3 lg:space-x-3.5'>
            {lists.map((list) => (
              <li
                key={`widget-list--key${list.id}`}
                className='flex items-baseline'
              >
                {list.icon && (
                  <span className='me-3 relative top-0.5 lg:top-1 text-sm lg:text-base'>
                    {list.icon}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default WidgetLink

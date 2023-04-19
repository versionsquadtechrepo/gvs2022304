import Link from '@components/ui/link';
import Image from 'next/image';
import { useWindowSize } from '@utils/use-window-size';
import cn from 'classnames';
import { LinkProps } from 'next/link';
import { useSsrCompatible } from '@utils/use-ssr-compatible';
import Text from '@components/ui/text';

interface BannerProps {
  banner: any;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps['href'];
  disableBorderRadius?: boolean;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function ServiceCard({
  banner,
  className,
  variant = 'rounded',
  effectActive = false,
  classNameInner,
  href,
  disableBorderRadius = false,
}: BannerProps) {
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  const { title, image,desc } = banner;
  const selectedImage = getImage(width, image);
  return (
    <div className={cn('flex flex-row justify-end mx-auto h-36 bg-white shadow-3xl ', className)}>
      <div className="basis-1/5 w-18 content-end  m-auto flex justify-end">
      <Image
          src={selectedImage.url}
          width={41}
          height={35}
          alt={title}
          quality={100}
          className={cn('bg-white object-cover', {
            'rounded-md': variant === 'rounded' && !disableBorderRadius,
          })}
        />
      </div>
      <div className=" basis-1/1 w-60 bg-white align-middle relative content-center m-auto">
   
      <Text
            variant="mediumHeading"
            className={cn('2xl:text-2xl mt-1 xl:mt-7', {
              'text-lg 2xl:text-lg font-medium mt-0 xl:mt-0 pl-2 w-25 font-oswald uppercase': 'modern',
            })}
          >
           {title}
          </Text>
          <div className='pl-2  flex pt-2 pb-2 content-start align-top'>
          <Image
          src={'/assets/images/gi/icons/service-line.svg'}
          width={70}
          height={1}
          alt={title}
          quality={100}
          className={cn('bg-white object-cover pl-4 ', {
            'rounded-md': variant === 'rounded' && !disableBorderRadius,
          })}
        />

          </div>
          <Text
        className={cn('text-xs text-heading sm:leading-7 lg:text-base lg:leading-[1.625rem]  xl:mt-7', {
          'font-normal !leading-7 !lg:leading-7 tracking-[-0.1px]  pl-2 w-25 font-body text-heading': 'modern',
        })}
      >
       
        {desc}
        
      </Text>
       

      </div>
     
      <Link
        href={href}
        className={cn(
          'h-full group flex justify-center relative overflow-hidden',
          classNameInner
        )}
      >
        
        {effectActive && (
          <div className="absolute top-0 ltr:-left-[100%] h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
}

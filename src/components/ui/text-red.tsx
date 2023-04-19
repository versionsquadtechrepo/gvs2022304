import React, { JSXElementConstructor, CSSProperties } from 'react';
import cn from 'classnames';

interface Props {
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
  html?: string;
}

type Variant = 'mediumHeading' | 'heading' | 'body' | 'pageHeading' | 'subHeading';

const TextRed: React.FC<Props> = ({ style, className, variant = 'body', children, html }) => {
  const componentsMap: {
    [P in Variant]: React.ComponentType<any> | string;
  } = {
    body: 'p',
    mediumHeading: 'h3',
    heading: 'h4',
    pageHeading: 'h1',
    subHeading: 'h2',
  };

  const Component: JSXElementConstructor<any> | React.ReactElement<any> | React.ComponentType<any> | string = componentsMap![variant!];

  const htmlContentProps = html
    ? {
      dangerouslySetInnerHTML: { __html: html },
    }
    : {};

  return (
    <Component
      className={cn(
        {
          'text linenSecondary text-sm sm:leading-6 leading-7': variant === 'body',
          'text-heading': variant === 'body',
          'text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-medium': variant === 'mediumHeading',
          'text-giRed': variant === 'mediumHeading' || variant === 'heading' || variant === 'pageHeading' || variant === 'subHeading',
          'text-sm md:text-base xl:text-lg font-semibold': variant === 'heading',
          'text-2xl font-bold': variant === 'pageHeading',
          'text-linenSecondary text-lg md:text-2xl xl:text-3xl 2xl:text-4xl  font-bold': variant === 'subHeading',
        },
        className
      )}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

export default TextRed;

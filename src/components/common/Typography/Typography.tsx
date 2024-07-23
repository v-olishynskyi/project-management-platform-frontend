import React from 'react';
import './styles.scss';

type Components = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';
type Weight = 'semibold' | 'medium' | 'regular';
type Variants =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'headline'
  | 'bodyL'
  | 'body'
  | 'footnote'
  | 'caption'
  | 'small';

type Props = {
  component?: Components;
  weight?: Weight;
  variant: Variants;
  classes?: string;
};

const Typography: React.FC<React.PropsWithChildren<Props>> = ({
  component = 'p',
  weight = 'regular',
  variant,
  children,
  classes,
}) => {
  const weightToNum: Record<Weight, number> = {
    medium: 500,
    regular: 400,
    semibold: 600,
  };

  const className = `${variant} ${classes || ''}`;

  if (variant.includes('heading')) {
    switch (variant) {
      case 'heading1':
        return <h1 className={className}>{children}</h1>;
      case 'heading2':
        return <h2 className={className}>{children}</h2>;
      case 'heading3':
        return <h3 className={className}>{children}</h3>;
      case 'heading4':
        return <h4 className={className}>{children}</h4>;
      case 'heading5':
        return <h5 className={className}>{children}</h5>;

      default:
        return <h1>{children}</h1>;
    }
  }

  switch (component) {
    case 'span':
      return (
        <span className={className} style={{ fontWeight: weightToNum[weight] }}>
          {children}
        </span>
      );

    default:
      return (
        <p className={className} style={{ fontWeight: weightToNum[weight] }}>
          {children}
        </p>
      );
  }
};

export default Typography;

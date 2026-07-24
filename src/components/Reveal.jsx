import { motion } from 'framer-motion';

/**
 * Wraps children in a scroll-triggered reveal animation.
 * `as` lets you pick the rendered element (div, li, etc.)
 * `index` staggers children when used in a mapped list.
 */
export default function Reveal({
  children,
  as = 'div',
  index = 0,
  y = 24,
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.2,
  ...rest
}) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay: index * 0.09, ease: [0.2, 0.8, 0.2, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}

import cn from 'classnames'
import { inherits } from 'util'
import s from './ProductTag.module.css'

interface ProductTagProps {
  className?: string
  name: string
  price: string
  fontSize?: number
}

const ProductTag: React.FC<ProductTagProps> = ({
  name,
  price,
  className = '',
  fontSize = 20,
}) => {
  return (
    <div className={cn(s.root, className)}>
      <div className="mb-1">{price}</div>
      <h3 className="flex items-start justify-start whitespace-nowrap">
        <span
          style={{
            fontSize: `${fontSize}px`,
            lineHeight: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </h3>
    </div>
  )
}

export default ProductTag

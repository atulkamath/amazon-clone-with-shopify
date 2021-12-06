import { FC, memo } from 'react'
import rangeMap from '@lib/range-map'
import { Star } from '@components/icons'
import cn from 'classnames'

export interface RatingProps {
  value: number
}

const Quantity: FC<RatingProps> = ({ value = 5 }) => (
  <div className="flex flex-row text-amazon-orange">
    {rangeMap(5, (i) => (
      <span
        key={`star_${i}`}
        className={cn('inline-block ml-1 mb-2 ', {
          ' fill-current text-amazon-orange "stroke-current  ':
            i >= Math.floor(value),
        })}
      >
        <Star />
      </span>
    ))}
  </div>
)

export default memo(Quantity)

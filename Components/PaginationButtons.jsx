import React, { use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeftIcon,ChveronRightIcon } from '@heroicons/react/solid'
function PaginationButtons() {
  const router=useRouter();
  const startIndex=Number(router.query.start) || 0
  return (
    <div>
      {startIndex >=10 &&(
        <Link>
        <div>
        <ChevronLeftIcon />
        <p>Previous</p>
        </div>

      </Link>)}
      <Link>
        <div>
          <ChveronRightIcon />
          <p>Next</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginationButtons

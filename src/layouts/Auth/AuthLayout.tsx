import type { ReactNode } from 'react'

import { authApi } from '../../services/auth.api'
import * as S from './styles'

interface MainLayoutProps {
  children: ReactNode
}

export const AuthLayout = ({ children }: MainLayoutProps) => {
  const f = authApi.useHealthCheckQuery()
  return (
    <S.Main>
      <S.ContentWrapper>{children}</S.ContentWrapper>
      <S.Pattern>
        <S.PatternLeft
          width='867'
          height='1024'
          viewBox='0 0 867 1024'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M133 634C133 617.431 146.431 604 163 604C179.569 604 193 617.431 193 634V636C193 652.569 179.569 666 163 666C146.431 666 133 652.569 133 636V634Z'
            fill='#FFD66B'
          />
          <path
            d='M133 388C133 371.431 146.431 358 163 358C179.569 358 193 371.431 193 388V426C193 442.569 179.569 456 163 456C146.431 456 133 442.569 133 426V388Z'
            fill='#FFD66B'
          />
          <path
            d='M0 68C0 51.4315 13.4315 38 30 38C46.5685 38 60 51.4315 60 68V70C60 86.5685 46.5685 100 30 100C13.4315 100 0 86.5685 0 70V68Z'
            fill='#FFD66B'
          />
          <path
            d='M133 -148C133 -164.569 146.431 -178 163 -178C179.569 -178 193 -164.569 193 -148V200C193 216.569 179.569 230 163 230C146.431 230 133 216.569 133 200V-148Z'
            fill='#FFD66B'
          />
          <path
            d='M250 475C250 458.431 263.431 445 280 445C296.569 445 310 458.431 310 475V562C310 578.569 296.569 592 280 592C263.431 592 250 578.569 250 562V475Z'
            fill='#FFD66B'
          />
          <path
            d='M4 217C4 200.431 17.4315 187 34 187C50.5685 187 64 200.431 64 217V447C64 463.569 50.5685 477 34 477C17.4315 477 4 463.569 4 447V217Z'
            fill='#FFD66B'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4 594C4 577.43 17.4316 564 34 564C50.5684 564 64 577.43 64 594V942C64 958.57 77.4316 972 94 972C110.568 972 124 958.57 124 942V782C124 765.43 137.432 752 154 752C170.568 752 184 765.43 184 782V842C184 858.57 197.432 872 214 872C230.568 872 244 858.57 244 842V725C244 708.43 257.432 695 274 695C290.568 695 304 708.43 304 725V1098C304 1114.57 317.432 1128 334 1128C350.568 1128 364 1114.57 364 1098V786C364 769.43 377.432 756 394 756C410.568 756 424 769.43 424 786L424.017 800L424.004 800.484L424.001 800.688L424 801V888C424 904.57 437.432 918 454 918C470.568 918 484 904.57 484 888V862.711C483.589 861.164 483.3 859.57 483.141 857.93C483.048 856.961 483 855.984 483 855V806C483 789.43 496.432 776 513 776C526.903 776 538.597 785.461 542 798.289V953C542 969.57 555.432 983 572 983C588.568 983 602 969.57 602 953V896C602 879.43 615.432 866 632 866C648.568 866 662 879.43 662 896V950C662 966.57 675.432 980 692 980H836C836.332 980 836.666 980 837 980C853.568 980 867 993.43 867 1010V1113C867 1129.57 853.568 1143 837 1143C836.666 1143 836.332 1143 836 1143H4V594ZM183 956C183 939.43 196.432 926 213 926C229.568 926 243 939.43 243 956V970C243 986.57 229.568 1000 213 1000C196.432 1000 183 986.57 183 970V956Z'
            fill='#FFD66B'
          />
        </S.PatternLeft>
        <S.PatternRight
          width='435'
          height='986'
          viewBox='0 0 435 986'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M257 195C257 178.431 270.431 165 287 165C303.569 165 317 178.431 317 195V543C317 559.569 303.569 573 287 573C270.431 573 257 559.569 257 543V195Z'
            fill='#FFD66B'
          />
          <path
            d='M257 30C257 13.4315 270.431 0 287 0C303.569 0 317 13.4315 317 30V32C317 48.5685 303.569 62 287 62C270.431 62 257 48.5685 257 32V30Z'
            fill='#FFD66B'
          />
          <path
            d='M375 638C375 621.431 388.431 608 405 608C421.569 608 435 621.431 435 638V640C435 656.569 421.569 670 405 670C388.431 670 375 656.569 375 640V638Z'
            fill='#FFD66B'
          />
          <path
            d='M375 768C375 751.431 388.431 738 405 738C421.569 738 435 751.431 435 768V800C435 816.569 421.569 830 405 830C388.431 830 375 816.569 375 800V768Z'
            fill='#FFD66B'
          />
          <path
            d='M30 1105C13.4315 1105 0 1091.57 0 1075V972C0 955.431 13.4315 942 30 942H226.104C243.177 941.944 257 928.086 257 911C257 910.667 256.995 910.335 256.984 910.004L257 910.004V765C257 748.431 270.432 735 287 735C303.568 735 317 748.431 317 765V941C317 941.335 316.995 941.668 316.984 942H317.016C317.544 958.106 330.766 971 347 971C363.234 971 376.456 958.106 376.984 942H377V898C377 881.431 390.432 868 407 868C423.568 868 437 881.431 437 898V942H441V1105H30Z'
            fill='#FFD66B'
          />
        </S.PatternRight>
      </S.Pattern>
    </S.Main>
  )
}

import {useState, FC} from 'react'
import copy from 'copy-to-clipboard'
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip'
import {styled} from '@mui/material/styles'

import {Wrapper, CopyIcon} from './CopyButton.styles'

interface CopyButtonProps {
  toCopy?: string
  tooltipText?: string
  tooltipTextSuccess?: string
  onCopy?: () => void
}

const HtmlTooltip = styled(({className, ...props}: TooltipProps) => (
  <Tooltip {...props} classes={{popper: className}} />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    padding: 10,
  },
}))

const CopyButton: FC<CopyButtonProps> = ({
  toCopy,
  onCopy,
  tooltipText: tooltipTextProp = 'Copy to clipboard',
  tooltipTextSuccess = 'Copied!',
  ...rest
}) => {
  const [tooltipText, setTooltipText] = useState(tooltipTextProp)

  return (
    <HtmlTooltip
      title={tooltipText}
      placement='top'
      onClose={() => setTooltipText(tooltipTextProp)}
    >
      <Wrapper
        onClick={() => {
          if (toCopy != null && copy(toCopy)) {
            setTooltipText(tooltipTextSuccess)
            onCopy && onCopy()
          }
        }}
        {...rest}
      >
        <CopyIcon />
      </Wrapper>
    </HtmlTooltip>
  )
}

export default CopyButton

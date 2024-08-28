import Modal from '@core/Modal'

type videoModalProps = {
  url?: string
  isOpen: boolean
  setIsOpen: (data: boolean) => void
}

const VideoModal = ({url, isOpen, setIsOpen}: videoModalProps) => {
  console.log(url)
  return (
    <Modal
      maxWidth='550px'
      title='Booking Travel'
      isOpened={isOpen}
      onClose={() => {
        setIsOpen(false)
      }}
    >
      <div style={{width: '100%'}}>
        <iframe
          width='100%'
          height={'400'}
          allowFullScreen
          style={{borderRadius: 8, border: 'none'}}
          src={url}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </div>
    </Modal>
  )
}

export default VideoModal

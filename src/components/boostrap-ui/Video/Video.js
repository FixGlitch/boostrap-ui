'use client'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import styles from './Video.module.css'
import play from '../../../assets/icon-play.svg'
import Image from 'next/image'
import useDeviceType from '../../../../public/hooks/userDevice'

export default function Video({ img, link, size }) {
  const [modal, setModal] = useState(false)
  const isMobile = useDeviceType(991)

  const handleOpenModal = () => {
    setModal(true)
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <>
      <div
        className={`${styles.container} ${styles[size]}`}
        onClick={handleOpenModal}
      >
        {img && (
          <Image
            src={`${img}`}
            width={424}
            height={336}
            className={`${styles.video} ${
              size == 'fullWidthLg' && 'rounded-0'
            }`}
            alt="video"
          />
        )}
        {!isMobile ? (
          <Image
            src={play.src}
            width={60}
            height={60}
            className={styles.play}
            alt="play video"
          />
        ) : (
          <Image
            src={play.src}
            width={24}
            height={24}
            className={styles.play}
            alt="play video"
          />
        )}
        <div
          className={`${styles.overlay} ${
            size == 'fullWidthLg' && 'rounded-0'
          }`}
        ></div>
      </div>

      <Modal show={modal} onHide={handleCloseModal}>
        <div className={styles.containerModal} onClick={handleCloseModal}>
          <div className={styles.modal}>
            <iframe
              width="560"
              height="315"
              src={link}
              title="Papel de caña"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>
    </>
  )
}

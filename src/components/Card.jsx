import React, { useState } from 'react'
import './Card.scss'

export const Card = ({ name, type, amount, description, benefits, isAvailable }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="card"
      data-selected={isSelected || undefined}
      data-disabled={!isAvailable || undefined}
      data-hovered={isHovered || undefined}
      onMouseEnter={() => isAvailable && setIsHovered(true)}
      onMouseLeave={() => {
        if (!isAvailable) return
        setIsHovered(false);
      }}
    >
      <div className="card__wrapper">
        <div className="card__content"
          onClick={() => {
            if (!isAvailable) return
            if (!isSelected) setIsHovered(false)
            setIsSelected(!isSelected)
          }}
        >
          <div className="card__image" />
          <div className="card__info info">
            <div className="info__supertext">
              {isSelected && isHovered
                ? 'Котэ не одобряет?'
                : 'Сказочное заморское яство'}
            </div>
            <div className="info__name">
              {name}
            </div>
            <span className="info__type">
              {type}
            </span>
            <div className="info__benefits">
              {benefits.map(val => <span key={val.text} className='info__benefit'>
                <span className="info__benefit-amount">{val?.amount} </span>
                <span className="info__benefit-text">{val.text}</span>
              </span>)}
            </div>
          </div>
          <div className="info__oval">
            <div className="info__oval-text">
              <span className="info__amount">{amount}</span>
              <br />
              <span className="info__units">
                кг
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card__subtext">
        {
          isAvailable
            ? isSelected
              ? description
              : <>
                Чего сидишь? Порадуй котэ, <span className='card__buy' onClick={() => setIsSelected(true)}>
                  <span className="underlined">купи</span>.
                </span>
              </>
            : <>Печалька, {type} закончился.</>
        }
      </div>
    </div>
  )
}

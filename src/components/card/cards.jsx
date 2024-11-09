import './cards.scss'

const CardsBlock = ({selectedData}) => {
  return (
    <div className="wrapperCards">
      <div className='wrapperContentCards'>
        <div className='cardsTextTop'>
          Wintriplains453
        </div>
        <div>
          <p className={selectedData.className}>{selectedData?.title}</p>
          <div 
            style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${selectedData.image})`}}
            className="cardImage"
          ></div>
        </div>
        <div className='cardsTextBottom'>
          {selectedData?.title}
        </div>
      </div>
    </div>
  )
}

export default CardsBlock;
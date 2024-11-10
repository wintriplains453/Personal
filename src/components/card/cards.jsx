import { FaGithub } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { IoCodeSlashOutline } from "react-icons/io5";

import './cards.scss'

const CardsBlock = ({selectedData}) => {
  return (
    <div className="wrapperCards">
      <div className='wrapperContentCards'>
        <div className='cardsTextTop'>
          Wintriplains453
        </div>
        {selectedData.siteLink !== "#" ?
          <a 
            href={selectedData.siteLink} 
            className='LinkSites'
            target='true'
          >Ссылка на результат</a> : null        
        }


        <div className='contentCards'>
          <div className='wrapperImageCards'>
            <div 
              style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/${selectedData.image})`}}
              className="cardImage"
            ></div>
            <p>Мобильна версия: {selectedData.mobile}</p>            
          </div>

          <div className='contentCardDescription'>
            <p className={selectedData.className} id="title">{selectedData?.title}</p>
            <p><MdOutlineDescription /><b>Описание:</b>{selectedData.description}</p>
            <p><FaGithub /><b>Код на Github: </b><a href={selectedData.gitLink} target='true'> Github {selectedData.title}</a></p>
            <p><IoCodeSlashOutline /><b>Стек технологий сайта и библиотек: </b>{selectedData.stack}</p>
          </div>
        </div>
        <div className='cardsTextBottom'>
          {selectedData.title}
        </div>
      </div>
    </div>
  )
}

export default CardsBlock;
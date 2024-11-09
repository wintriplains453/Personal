import { useState } from 'react';
import CardsBlock from './components/card/cards';

import works from './works';

import './App.scss';
function App() {
  const [workItems] = useState(works)
  const [selectedData, setSelectedData] = useState(workItems[0])

  return (
    <div className='wrapper'>
      <div>
        <CardsBlock selectedData={selectedData}/>  
      </div>
      <div className='mainBlockInfo'>
        <div className='aboutMeWrapper'>
          <div className='aboutMeProfile block'>
            <div className='aboutMeProfileHeader'>
              <div className='circleProfile'></div>
              <div>
                <p>Тушков Алексей</p>
                <p>Fullstack</p>
              </div>
            </div>
            <div className='aboutMeProfileFooter'>
              <p>Меня зовут Алексей, и я являюсь Fullstack разработчиком с опытом создания интерфейсов любой сложности. Мои навыки охватывают не только фронтенд-разработку, но и серверную часть, что позволяет мне иметь целостное представление о процессе разработки. Кроме того, я обладаю знаниями в области дизайна, CEO и тестирования, что помогает мне создавать качественные и эффективные решения. В своей работе я стремлюсь к совершенству</p>
            </div>
          </div>
          <div className='aboutMeSocial'>
            <button className='btn'>Telegram</button>
            <button className='btn'>Email</button>
          </div>
        </div>
        <div className='worksHeader block'>
          <p>Мои работы</p>
          <p>Посмотреть на GitHub</p>
        </div>  
        <div className='worksWrapper'>
          {workItems.map(item => (
            <div 
              className='wrapperWorkItem' 
              key={item.id} 
              onClick={() => setSelectedData(item)}
            >
              <div className='wrapperContentCards'>
                <div className='cardsTextTop'>
                  <p>{item.title}</p>
                </div>
                <div className='wrapperTitleBlock'>
                  <p className={item.className}>{item.title}</p>
                </div>
              </div>            
            </div>
          ))}
        </div>      
      </div>
    </div>
  );
}

export default App;

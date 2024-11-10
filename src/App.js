import { useState, useEffect } from 'react';
import CardsBlock from './components/card/cards';

import works from './works';
import { IoIosSend } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

import './App.scss';
function App() {
  const [workItems] = useState(works)
  const [selectedData, setSelectedData] = useState(workItems[0])
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      console.log(windowSize)
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='wrapper'>
      {windowSize > 1024 ?
      <>
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
              <a 
                href='https://t.me/wintriplains453' 
                className='btn'
                target='true'
              >
                <IoIosSend style={{color: '#138AC5'}}/>
                <p>@wintriplains453</p>
              </a>
              <button className='btn'><TfiEmail /><p>aoams@inbox.ru</p></button>
              <a 
                href='https://github.com/wintriplains453' 
                className='btn'
                target='true'
              >
                <FaGithub />
                <p>Мой профиль Github</p>
              </a>
              <a 
                href='https://www.codewars.com/users/Wintriplains453' 
                className='btn'
                target='true'
              >
                <SiCodewars style={{color: '#F05656'}}/>
                <p>Мой профиль Codewars</p>
              </a>
            </div>
          </div>
          <div className='worksHeader block'>
            <p>Мои работы ↓</p>
            <a href='https://github.com/wintriplains453'>Профиль на GitHub</a>
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
          <div className='wrapperFooter'>
            <div className='footerContentWrapper'>
              <div className='aboutMeProfileHeader'>
                <div className='circleProfile'></div>
                <div>
                  <p>Тушков Алексей</p>
                  <p>Fullstack</p>
                </div>
              </div>  
              <div className='createBy'>
                <p>© By wintriplains453 Templates</p>
                <a href='https://github.com/wintriplains453/Personal' target='true'>Ссылка на шаблон GitHub</a>
              </div>
            </div>
          </div>    
        </div>      
      </> : <p>Сайт отключен для мобильных устройств и планшетов</p>    
      }
    </div>
  );
}

export default App;

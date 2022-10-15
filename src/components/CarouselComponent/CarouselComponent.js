import React, { useEffect, useState } from 'react'
import CarouselNav from '../CarouselNav/CarouselNav'
import './CarouselComponent.scss'

const CarouselComponent = (props) => {
  const {children, show, infiniteLoop, setIndex, toIndex, index, data, isFocus} = props

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
  const [length, setLength] = useState(children.length)
  
  const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show)
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const [touchPosition, setTouchPosition] = useState(null)

  const [disabled, setDisabled] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Set the length to match current children from props
  useEffect(() => {
      setLength(children.length)
      setIsRepeating(infiniteLoop && children.length > show)
  }, [children, infiniteLoop, show])

  useEffect(() => {
      if (isRepeating) {
          if (currentIndex === show || currentIndex === length) {
              setTransitionEnabled(true)
          }
      }
  }, [currentIndex, isRepeating, show, length])

  const next = () => {
      if (isRepeating || currentIndex < (length - show)) {
          
          setDisabled(true);
          setTimeout(() => {
            setDisabled(false)
          }, 800)
          setCurrentIndex(prevState => prevState + 1);
      }
  }

  const prev = () => {
      if (isRepeating || currentIndex > 0) {
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false)
        }, 800)
        setCurrentIndex(prevState => prevState - 1);
      }
  }

  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
      const touchDown = touchPosition

      if(touchDown === null) {
          return
      }

      const currentTouch = e.touches[0].clientX
      const diff = touchDown - currentTouch

      if (diff > 5) {
          next()
      }

      if (diff < -5) {
          prev()
      }

      setTouchPosition(null)
  }

  const handleTransitionEnd = () => {
      if (isRepeating) {
          if (currentIndex === 0) {
              setTransitionEnabled(false)
              setCurrentIndex(length)
          } else if (currentIndex === length + show) {
              setTransitionEnabled(false)
              setCurrentIndex(show)
          }
      }
  }

  const renderExtraPrev = () => {
      let output = []
      for (let index = 0; index < show; index++) {
          output.push(children[length - 1 - index])
      }
      output.reverse()
      return output
  }

  const renderExtraNext = () => {
      let output = []
      for (let index = 0; index < show; index++) {
          output.push(children[index])
      }
      return output
  }

  //colorful hoop is 3, 8, 
  //6

  const setNavIndex = (event, i) => {
    console.log("event", event);
    console.log("i", i);
    console.log("index", currentIndex);
      setCurrentIndex(i);
      setIndex(i);
  }

  useEffect(() => {
    console.log("focus:", isFocus)
    if(!isHover & isFocus === true) {
      const interval = setInterval(() => next(), 5000);
      return () => {
        clearInterval(interval)
        
      };
    }
    
    console.log("current", currentIndex);
    setIndex(1);
    if(currentIndex >= 5) {
      setIndex(currentIndex - 5)
    } else {
      setIndex(currentIndex)
    }
    
    
    
  }, [currentIndex, setIndex, isHover, isFocus])
  

  return (
      <div className="carousel-container">
          <div className="carousel-wrapper">
              {/* You can alwas change the content of the button to other things */}
              {
                  (isRepeating || currentIndex > 0) &&
                  <button onClick={prev} disabled={disabled} className="left-arrow" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                      &lt;
                  </button>
              }
              <div
                  className="carousel-content-wrapper"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
              >
                  <div
                      className={`carousel-content show-${show}`}
                      style={{
                          transform: `translateX(-${currentIndex * (100 / show)}%)`,
                          transition: !transitionEnabled ? 'none' : undefined,
                      }}
                      onTransitionEnd={() => handleTransitionEnd()}
                  >
                      {
                          (length > show && isRepeating) &&
                          renderExtraPrev()
                      }
                      {children}
                      {
                          (length > show && isRepeating) &&
                          renderExtraNext()
                      }
                  </div>
              </div>
              {/* You can alwas change the content of the button to other things */}
              {
                  (isRepeating || currentIndex < (length - show)) &&
                  <button onClick={next} disabled={disabled} className="right-arrow" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                      &gt;
                  </button>
              }
              
          </div>
          <CarouselNav data={data} index={index} toIndex={toIndex} onClick={setNavIndex}/>
      </div>
  )
}

export default CarouselComponent

import {useState, memo} from 'react';
import {Arrow, Content, Wrapper} from "./Styles";
import {sliderItems} from '../../Assets/Data';
import ArrowLeftOutlinedIcon from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';

const Slider = () => {
    console.log('hello i am Slider components');
    const [slideShow, setSlideShow] = useState(0)
    const handleSlider = (direction) => {
        if (direction === "left") {
            setSlideShow(slideShow > 0 ? slideShow - 1 : 2);
          } else {
            setSlideShow(slideShow < 2 ? slideShow + 1 : 0);
          }
    }
    return (
        <div className='slider'>
            <Arrow direction='left' className='arrow' onClick={() => handleSlider('left')}>
                <ArrowLeftOutlinedIcon className='arrowIcon'/>
            </Arrow>
            <Wrapper className="wrapper" slideShow={slideShow}>
                {
                    sliderItems.map(index => {
                        return(
                            <Content className="content" key={index.id} bg={index.bg}>
                                <div className="img">
                                    <img src={index.img} alt={index.title}/>
                                </div>
                                <div className="info">
                                    <h1>{index.title}</h1>
                                    <p>{index.desc}</p>
                                    <button>
                                        SHOP NOW
                                    </button>
                                </div>
                            </Content>  
                        )
                    })
                }
            </Wrapper>
            <Arrow direction='right' className='arrow' onClick={() => handleSlider('right')}>
                <ArrowRightOutlinedIcon className='arrowIcon'/>
            </Arrow>
        </div>
    )
}

export default memo(Slider)
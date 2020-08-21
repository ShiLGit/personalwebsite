import React, {Component} from 'react';
import styles from './ProjViewer.module.css';
import Carousel from '../../../components/Carousel/Carousel';

class ProjViewer extends Component{
    render(){
        return(
        <div className={styles.Wrapper}>
            <div className = {styles.LeftWrapper}>
                <div className={styles.TitleWrapper}>
                    <h2>PROJECT NAME</h2>
                </div>
                
                <img src="https://picsum.photos/200/300?grayscale" className={styles.DemoImage}/>
                <div className={styles.CarouselWrapper}>
                    <Carousel/>
                </div>
            </div>
            <div className = {styles.RightWrapper}>

            </div>
        </div>);
    }

}

export default ProjViewer;
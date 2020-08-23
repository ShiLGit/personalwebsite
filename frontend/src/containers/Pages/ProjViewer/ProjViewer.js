import React, {Component} from 'react';
import styles from './ProjViewer.module.css';
import Carousel from '../../../components/Carousel/Carousel';
class ProjViewer extends Component{
    render(){
        return(
        <div className={styles.Wrapper}>
                <div className={styles.TitleWrapper}>
                    <h1>PROJECT NAME</h1>
                </div>
                
                <img src="https://picsum.photos/200/300?grayscale" className={styles.DemoImage}/>
                <div className={styles.CarouselWrapper}>
                    <Carousel category="all"/>
                </div>
            <div className = {styles.TextWrapper}>
                <h1>HI111</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>);
    }

}

export default ProjViewer;
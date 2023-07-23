import classes from './Header.module.css'
import IMG from './../../Assests/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <>
            <header className={classes.header} >
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={IMG} alt='Meals Image'/>
            </div>
        </>
    )
}
export default Header
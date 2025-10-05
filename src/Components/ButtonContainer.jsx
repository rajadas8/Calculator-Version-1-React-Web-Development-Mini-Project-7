// Raja Ram Hemsworth => ButtonContainer React(XML) Code
import styles from "./ButtonContainer.module.css";
function ButtonContainer(){
    const buttonNames = ['AC','()','%','+','1','2','3','-','4','5','6','*','7','8','9','/','0','00','.','='];
    return (
        <div className={styles.buttonContainer}>
            {buttonNames.map(button => {
                return <button className={styles.button}>{button}</button>
            })}
        </div>
    );
}
export default ButtonContainer;
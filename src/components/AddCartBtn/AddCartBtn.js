import React from 'react';
import {ReactComponent as Cart} from "../../assets/svg/Buy.svg";
import styles from "./AddCartBtn.module.scss"

function AddCartBtn () {
    return (
        <div className={styles.backgroundBtn}>
                <p>В корзину</p>
                <Cart/>
        </div>
    );
};

export default AddCartBtn;
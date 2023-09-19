import React from "react";
import styles from "./ProductPreview.module.css";
import DesktopImage from "../images/image-product-desktop.jpg";
import MobileImage from "../images/image-product-mobile.jpg";
import CartIcon from "../images/icon-cart.svg";

function ProductReview(props) {
	return (
		<div className={styles.container}>
			<div className={styles.imageColumn}>
				<img
					className={styles.mobileImage}
					src={MobileImage}
					alt="mobile-image"
				/>
				<img
					className={styles.desktopImage}
					src={DesktopImage}
					alt="product-image"
				/>
			</div>
			<div className={styles.detailsColumn}>
				<p>P E R F U M E</p>
				<h1>Gabrielle Essence Eau De Parfum</h1>
				<p>
					A floral, solar and voluptuous interpretation composed by Oliver
					Polge, Perfumer-Creator for the house of CHANEL.
				</p>
				<div className={styles.priceContainer}>
					<h1>$149.99</h1>
					<p>$169.99</p>
				</div>
				<button className={styles.cartButton}>
					<img src={CartIcon} alt="cart-icon" />
					Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ProductReview;

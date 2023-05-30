import "./ProductListingSection.css";
import Tilt from "react-parallax-tilt";
import React from "react";

import { useData } from "../../../../contexts/DataProvider";
import { Link } from "react-router-dom";
import { getCategoryWiseProducts } from "../../../../helpers/filter-functions/category";
import { getRatedProducts } from "../../../../helpers/filter-functions/ratings";
import { getPricedProducts } from "../../../../helpers/filter-functions/price";
import { getSortedProducts } from "../../../../helpers/filter-functions/sort";
import { getSearchedProducts } from "../../../../helpers/searchedProducts";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import { useUserData } from "../../../../contexts/UserDataProvider";

import { BsFillStarFill } from "react-icons/bs";

export const ProductListingSection = () => {
  const { state } = useData();
  const {
    isProductInCart,
    isProductInWishlist,
    wishlistHandler,
    addToCartHandler,
  } = useUserData();

  const {
    allProductsFromApi,
    inputSearch,
    filters: { rating, categories, price, sort },
  } = state;

  const searchedProducts = getSearchedProducts(allProductsFromApi, inputSearch);

  const ratedProducts = getRatedProducts(searchedProducts, rating);

  const categoryProducts = getCategoryWiseProducts(ratedProducts, categories);

  const pricedProducts = getPricedProducts(categoryProducts, price);

  const sortedProducts = getSortedProducts(pricedProducts, sort);

  return (
    <div className="product-card-container">
      {sortedProducts.map((product) => {
        const {
          _id,
          id,
          name,
          original_price,
          discounted_price,
          category_name,
          is_stock,
          rating,
          reviews,
          description,
          trending,
          size,
          img,
        } = product;

        return (
          <Tilt
            key={product._id}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareEnable={false}
            transitionSpeed={2000}
            scale={1.02}
          >
            <div className="product-card" key={_id}>
              <Link to={`/product-details/${id}`}>
                <div className="product-card-image">
                  <Tilt
                    transitionSpeed={2000}
                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    scale={1.18}
                  >
                    <img src={img} />
                  </Tilt>
                </div>
              </Link>

              <div className="product-card-details">
                <h3>{name}</h3>
                <p className="ratings">
                  {rating}
                  <BsFillStarFill color="orange" /> ({reviews} reviews){" "}
                </p>
                <div className="price-container">
                  <p className="original-price">${original_price}</p>
                  <p className="discount-price">${discounted_price}</p>
                </div>
                <p></p>

                <p>Gender: {category_name}</p>
                <div className="info">
                  {!is_stock && <p className="out-of-stock">Out of stock</p>}
                  {trending && <p className="trending">Trending</p>}
                </div>
              </div>

              <div className="product-card-buttons">
                <button
                  onClick={() => addToCartHandler(product)}
                  className="cart-btn"
                >
                  {!isProductInCart(product) ? "Add To Cart" : "Go to Cart"}
                </button>
                <button
                  onClick={() => wishlistHandler(product)}
                  className="wishlist-btn"
                >
                  {!isProductInWishlist(product) ? (
                    <AiOutlineHeart color={"black"} size={30} />
                  ) : (
                    <AiTwotoneHeart color={"black"} size={30} />
                  )}
                </button>
              </div>
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./css/shop.css";

const ShopPage = () => {
  const { addToCart, getCartCount, getSubtotal } = useCart();

  // ===== 40+ PRODUCTS (Working Images) =====
  const products = [
    // ===== LIPS =====
    {
      id: 1,
      name: "Velvet Matte Lipstick",
      category: "Lips",
      price: 1299,
      oldPrice: 1599,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop&q=85",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Lip Gloss Set",
      category: "Lips",
      price: 899,
      oldPrice: 1199,
      rating: 4.7,
      reviews: 167,
      image:
        "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 3,
      name: "Liquid Lip Color",
      category: "Lips",
      price: 1099,
      oldPrice: 1399,
      rating: 4.6,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop&q=85",
      badge: "New",
    },
    {
      id: 4,
      name: "Lip Liner Pencil",
      category: "Lips",
      price: 599,
      oldPrice: 799,
      rating: 4.5,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 5,
      name: "Lip Balm Tinted",
      category: "Lips",
      price: 399,
      oldPrice: 599,
      rating: 4.8,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?w=600&h=600&fit=crop&q=85",
      badge: "",
    },

    // ===== EYES =====
    {
      id: 6,
      name: "Luxury Eyeshadow Palette",
      category: "Eyes",
      price: 1899,
      oldPrice: 2299,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop&q=85",
      badge: "Trending",
    },
    {
      id: 7,
      name: "Volumizing Mascara",
      category: "Eyes",
      price: 999,
      oldPrice: 1299,
      rating: 4.9,
      reviews: 421,
      image:
        "https://images.unsplash.com/photo-1631214540242-3cd8c4b3e4f5?w=600&h=600&fit=crop&q=85",
      badge: "Best Seller",
    },
    {
      id: 8,
      name: "Liquid Eyeliner",
      category: "Eyes",
      price: 699,
      oldPrice: 899,
      rating: 4.6,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1631214540242-3cd8c4b3e4f5?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 9,
      name: "Kohl Pencil",
      category: "Eyes",
      price: 499,
      oldPrice: 699,
      rating: 4.7,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 10,
      name: "Brow Definer",
      category: "Eyes",
      price: 799,
      oldPrice: 999,
      rating: 4.5,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1631214540242-3cd8c4b3e4f5?w=600&h=600&fit=crop&q=85",
      badge: "New",
    },
    {
      id: 11,
      name: "Glitter Eyeshadow",
      category: "Eyes",
      price: 1299,
      oldPrice: 1599,
      rating: 4.8,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 12,
      name: "Eye Primer",
      category: "Eyes",
      price: 899,
      oldPrice: 1199,
      rating: 4.6,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1631214540242-3cd8c4b3e4f5?w=600&h=600&fit=crop&q=85",
      badge: "",
    },

    // ===== FACE =====
    {
      id: 13,
      name: "Silk Foundation",
      category: "Face",
      price: 2199,
      oldPrice: 2599,
      rating: 4.6,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=85",
      badge: "Best Seller",
    },
    {
      id: 14,
      name: "Glow Highlighter",
      category: "Face",
      price: 1499,
      oldPrice: 1799,
      rating: 4.7,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 15,
      name: "Blush Palette",
      category: "Face",
      price: 1299,
      oldPrice: 1599,
      rating: 4.8,
      reviews: 203,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 16,
      name: "Setting Powder",
      category: "Face",
      price: 1199,
      oldPrice: 1499,
      rating: 4.7,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop&q=85",
      badge: "New",
    },
    {
      id: 17,
      name: "BB Cream",
      category: "Face",
      price: 999,
      oldPrice: 1299,
      rating: 4.5,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 18,
      name: "Concealer Stick",
      category: "Face",
      price: 799,
      oldPrice: 999,
      rating: 4.6,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 19,
      name: "Bronzer Powder",
      category: "Face",
      price: 1399,
      oldPrice: 1699,
      rating: 4.7,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop&q=85",
      badge: "Trending",
    },
    {
      id: 20,
      name: "Face Mist",
      category: "Face",
      price: 699,
      oldPrice: 899,
      rating: 4.8,
      reviews: 267,
      image:
        "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&h=600&fit=crop&q=85",
      badge: "",
    },

    // ===== SKINCARE =====
    {
      id: 21,
      name: "Rose Glow Serum",
      category: "Skincare",
      price: 2499,
      oldPrice: 2999,
      rating: 4.9,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=85",
      badge: "Best Seller",
    },
    {
      id: 22,
      name: "Hydrating Face Cream",
      category: "Skincare",
      price: 1699,
      oldPrice: 1999,
      rating: 4.8,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 23,
      name: "Night Repair Cream",
      category: "Skincare",
      price: 2899,
      oldPrice: 3499,
      rating: 4.9,
      reviews: 412,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=85",
      badge: "Best Seller",
    },
    {
      id: 24,
      name: "Vitamin C Serum",
      category: "Skincare",
      price: 1999,
      oldPrice: 2499,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=85",
      badge: "New",
    },
    {
      id: 25,
      name: "Hyaluronic Moisturizer",
      category: "Skincare",
      price: 1499,
      oldPrice: 1799,
      rating: 4.7,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 26,
      name: "Face Wash Gel",
      category: "Skincare",
      price: 599,
      oldPrice: 799,
      rating: 4.6,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 27,
      name: "Sunscreen SPF 50",
      category: "Skincare",
      price: 899,
      oldPrice: 1199,
      rating: 4.8,
      reviews: 421,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=85",
      badge: "Trending",
    },
    {
      id: 28,
      name: "Exfoliating Scrub",
      category: "Skincare",
      price: 799,
      oldPrice: 999,
      rating: 4.7,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=85",
      badge: "",
    },

    // ===== HAIR =====
    {
      id: 29,
      name: "Nourishing Hair Oil",
      category: "Hair",
      price: 899,
      oldPrice: 1199,
      rating: 4.8,
      reviews: 267,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=85",
      badge: "Trending",
    },
    {
      id: 30,
      name: "Shampoo Sulphate Free",
      category: "Hair",
      price: 699,
      oldPrice: 899,
      rating: 4.7,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 31,
      name: "Hair Mask Deep Repair",
      category: "Hair",
      price: 1199,
      oldPrice: 1499,
      rating: 4.8,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=85",
      badge: "Best Seller",
    },
    {
      id: 32,
      name: "Hair Serum Frizz Control",
      category: "Hair",
      price: 999,
      oldPrice: 1299,
      rating: 4.6,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 33,
      name: "Scalp Treatment",
      category: "Hair",
      price: 1499,
      oldPrice: 1799,
      rating: 4.7,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=85",
      badge: "New",
    },
    {
      id: 34,
      name: "Leave-in Conditioner",
      category: "Hair",
      price: 799,
      oldPrice: 999,
      rating: 4.5,
      reviews: 167,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop&q=85",
      badge: "",
    },

    // ===== BODY =====
    {
      id: 35,
      name: "Body Lotion Shea",
      category: "Body",
      price: 699,
      oldPrice: 899,
      rating: 4.8,
      reviews: 312,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 36,
      name: "Body Scrub Coffee",
      category: "Body",
      price: 899,
      oldPrice: 1199,
      rating: 4.7,
      reviews: 189,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=85",
      badge: "Trending",
    },
    {
      id: 37,
      name: "Hand Cream",
      category: "Body",
      price: 399,
      oldPrice: 599,
      rating: 4.6,
      reviews: 234,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 38,
      name: "Foot Cream",
      category: "Body",
      price: 499,
      oldPrice: 699,
      rating: 4.5,
      reviews: 145,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop&q=85",
      badge: "",
    },

    // ===== NAILS =====
    {
      id: 39,
      name: "Nail Polish Set",
      category: "Nails",
      price: 799,
      oldPrice: 999,
      rating: 4.7,
      reviews: 178,
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop&q=85",
      badge: "New",
    },
    {
      id: 40,
      name: "Nail Art Kit",
      category: "Nails",
      price: 1299,
      oldPrice: 1599,
      rating: 4.8,
      reviews: 156,
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 41,
      name: "Top Coat Shine",
      category: "Nails",
      price: 499,
      oldPrice: 699,
      rating: 4.6,
      reviews: 123,
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
    {
      id: 42,
      name: "Nail Remover",
      category: "Nails",
      price: 299,
      oldPrice: 399,
      rating: 4.5,
      reviews: 98,
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop&q=85",
      badge: "",
    },
  ];

  const categories = [
    "All",
    "Lips",
    "Eyes",
    "Face",
    "Skincare",
    "Hair",
    "Body",
    "Nails",
  ];

  // ===== FILTER STATES =====
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  // ===== FILTERED + SORTED =====
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    if (minRating > 0) {
      result = result.filter((p) => p.rating >= minRating);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query),
      );
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy, searchQuery, minRating]);

  const clearFilters = () => {
    setSelectedCategory("All");
    setPriceRange([0, 5000]);
    setSortBy("featured");
    setSearchQuery("");
    setMinRating(0);
  };

  return (
    <div className="shop-page">
      <div className="container py-5">
        {/* ===== HEADER ===== */}
        <div className="shop-header text-center mb-5">
          <span className="section-label">Shop Collection</span>
          <h1 className="shop-title">
            Discover Your <span className="italic">Beauty</span>
          </h1>
          <p className="shop-desc mx-auto" style={{ maxWidth: "600px" }}>
            Explore our premium range of cosmetics crafted for the modern woman.
          </p>
        </div>

        {/* ===== SEARCH + SORT ===== */}
        <div className="row g-3 mb-4 align-items-center">
          <div className="col-lg-6">
            <div className="search-box">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button
                  className="search-clear"
                  onClick={() => setSearchQuery("")}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              )}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          <div className="col-lg-3 col-md-6">
            <button
              className="filter-toggle-btn w-100"
              onClick={() => setShowFilters(!showFilters)}
            >
              <i className="bi bi-funnel"></i>
              Filters
              {(selectedCategory !== "All" || minRating > 0) && (
                <span className="filter-badge">•</span>
              )}
            </button>
          </div>
        </div>

        {/* ===== MAIN LAYOUT ===== */}
        <div className="row g-4">
          {/* SIDEBAR */}
          <div
            className={`col-lg-3 ${showFilters ? "d-block" : "d-none d-lg-block"}`}
          >
            <div className="filters-panel">
              <div className="filter-group">
                <h4 className="filter-heading">Category</h4>
                <div className="filter-categories">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`filter-cat-btn ${selectedCategory === cat ? "active" : ""}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                      <span className="filter-cat-count">
                        {cat === "All"
                          ? products.length
                          : products.filter((p) => p.category === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h4 className="filter-heading">Price Range</h4>
                <div className="price-display">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="price-slider"
                />
              </div>

              <div className="filter-group">
                <h4 className="filter-heading">Minimum Rating</h4>
                <div className="filter-ratings">
                  {[0, 4, 4.5, 4.8].map((rating) => (
                    <button
                      key={rating}
                      className={`filter-rating-btn ${minRating === rating ? "active" : ""}`}
                      onClick={() => setMinRating(rating)}
                    >
                      {rating === 0 ? (
                        "All Ratings"
                      ) : (
                        <>
                          <i className="bi bi-star-fill"></i>
                          {rating}+
                        </>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <button className="clear-filters-btn" onClick={clearFilters}>
                <i className="bi bi-arrow-counterclockwise"></i>
                Clear All Filters
              </button>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="col-lg-9">
            <div className="results-header">
              <p className="results-count">
                Showing <strong>{filteredProducts.length}</strong> of{" "}
                <strong>{products.length}</strong> products
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="empty-results">
                <i className="bi bi-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search query</p>
                <button className="clear-filters-btn" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="row g-4">
                {filteredProducts.map((product) => (
                  <div className="col-6 col-md-4" key={product.id}>
                    <ShopProductCard
                      product={product}
                      onAddToCart={addToCart}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ===== FLOATING CART ===== */}
        {getCartCount() > 0 && (
          <div className="cart-float">
            <div className="cart-float-inner">
              <div className="cart-float-info">
                <i className="bi bi-bag-check-fill"></i>
                <div>
                  <span className="cart-float-count">
                    {getCartCount()} items
                  </span>
                  <span className="cart-float-total">
                    ₹{getSubtotal().toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
              <Link to="/cart" className="cart-float-btn">
                View Cart <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ===== PRODUCT CARD =====
const ShopProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="shop-product-card d-block">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating d-flex align-items-center gap-2">
          <i className="bi bi-star-fill"></i>
          <span>{product.rating}</span>
          <span className="product-reviews">({product.reviews})</span>
        </div>
        <div className="product-price-row d-flex align-items-center gap-2 mb-3">
          <span className="product-price">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          <span className="product-old-price">
            ₹{product.oldPrice.toLocaleString("en-IN")}
          </span>
        </div>
        <button
          className={`add-to-cart-btn ${added ? "added" : ""}`}
          onClick={handleAdd}
        >
          {added ? (
            <>
              <i className="bi bi-check2"></i> Added
            </>
          ) : (
            <>
              <i className="bi bi-bag-plus"></i> Add to Cart
            </>
          )}
        </button>
      </div>
    </Link>
  );
};

export default ShopPage;
